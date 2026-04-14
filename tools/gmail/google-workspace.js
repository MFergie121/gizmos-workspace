#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const http = require('http');
const { google } = require('googleapis');
const open = require('open').default;

const HOME = process.env.HOME;
const SECRETS_DIR = path.join(HOME, '.openclaw', 'secrets');
const CLIENT_PATH = path.join(SECRETS_DIR, 'gmail-oauth-client.json');
const TOKEN_PATH = path.join(SECRETS_DIR, 'google-workspace-token.json');
const REDIRECT_URI = 'http://127.0.0.1:3007/oauth2callback';
const SCOPES = [
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/calendar.readonly',
];

function loadClient() {
  const raw = JSON.parse(fs.readFileSync(CLIENT_PATH, 'utf8'));
  const cfg = raw.installed || raw.web;
  if (!cfg) throw new Error('Expected installed or web OAuth config in gmail-oauth-client.json');
  return cfg;
}

function saveToken(tokens) {
  fs.mkdirSync(SECRETS_DIR, { recursive: true });
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2), { mode: 0o600 });
}

function loadToken() {
  if (!fs.existsSync(TOKEN_PATH)) return null;
  return JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'));
}

async function authorize({ force = false } = {}) {
  const client = loadClient();
  const oAuth2Client = new google.auth.OAuth2(client.client_id, client.client_secret, REDIRECT_URI);
  const existing = force ? null : loadToken();
  if (existing) {
    oAuth2Client.setCredentials(existing);
    return oAuth2Client;
  }

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: SCOPES,
  });

  console.log('Opening browser for Google Workspace authorization...');
  console.log('If the browser does not open, visit this URL manually:\n' + authUrl + '\n');

  const code = await new Promise((resolve, reject) => {
    const server = http.createServer(async (req, res) => {
      try {
        const url = new URL(req.url, 'http://127.0.0.1:3007');
        if (url.pathname !== '/oauth2callback') {
          res.writeHead(404);
          res.end('Not found');
          return;
        }
        const code = url.searchParams.get('code');
        if (!code) {
          res.writeHead(400);
          res.end('Missing code');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Google Workspace authorization received. You can close this tab.');
        server.close();
        resolve(code);
      } catch (err) {
        reject(err);
      }
    });
    server.listen(3007, '127.0.0.1', () => {
      open(authUrl).catch(() => {});
    });
  });

  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);
  saveToken(tokens);
  return oAuth2Client;
}

function encodeHeader(value) {
  return `=?UTF-8?B?${Buffer.from(value, 'utf8').toString('base64')}?=`;
}

function makeRawMessage({ to, subject, body }) {
  const message = [
    `To: ${to}`,
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: 8bit',
    'MIME-Version: 1.0',
    `Subject: ${encodeHeader(subject)}`,
    '',
    body,
  ].join('\n');

  return Buffer.from(message, 'utf8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
}

function parseArgs(args) {
  const flags = {};
  for (let i = 0; i < args.length; i += 1) {
    const key = args[i];
    if (key.startsWith('--')) {
      const next = args[i + 1];
      if (!next || next.startsWith('--')) {
        flags[key] = true;
      } else {
        flags[key] = next;
        i += 1;
      }
    }
  }
  return flags;
}

async function cmdAuth(flags) {
  await authorize({ force: Boolean(flags['--force']) });
  console.log(JSON.stringify({ ok: true, tokenPath: TOKEN_PATH, scopes: SCOPES }, null, 2));
}

async function cmdGmailProfile() {
  const auth = await authorize();
  const gmail = google.gmail({ version: 'v1', auth });
  const result = await gmail.users.getProfile({ userId: 'me' });
  console.log(JSON.stringify({ ok: true, emailAddress: result.data.emailAddress, messagesTotal: result.data.messagesTotal, threadsTotal: result.data.threadsTotal }, null, 2));
}

async function cmdGmailList(flags) {
  const auth = await authorize();
  const gmail = google.gmail({ version: 'v1', auth });
  const maxResults = Number(flags['--max'] || 10);
  const q = flags['--query'];
  const list = await gmail.users.messages.list({ userId: 'me', maxResults, q });
  const messages = list.data.messages || [];
  const items = [];
  for (const msg of messages) {
    const detail = await gmail.users.messages.get({ userId: 'me', id: msg.id, format: 'metadata', metadataHeaders: ['From', 'Subject', 'Date'] });
    const headers = Object.fromEntries((detail.data.payload?.headers || []).map((h) => [h.name, h.value]));
    items.push({ id: msg.id, threadId: msg.threadId, from: headers.From || '', subject: headers.Subject || '', date: headers.Date || '', snippet: detail.data.snippet || '' });
  }
  console.log(JSON.stringify({ ok: true, count: items.length, items }, null, 2));
}

async function cmdGmailSend(flags) {
  const to = flags['--to'];
  const subject = flags['--subject'] || '';
  const body = flags['--body'] || '';
  if (!to) throw new Error('Missing --to');
  const auth = await authorize();
  const gmail = google.gmail({ version: 'v1', auth });
  const raw = makeRawMessage({ to, subject, body });
  const result = await gmail.users.messages.send({ userId: 'me', requestBody: { raw } });
  console.log(JSON.stringify({ ok: true, id: result.data.id }, null, 2));
}

async function cmdCalendarList(flags) {
  const auth = await authorize();
  const calendar = google.calendar({ version: 'v3', auth });
  const maxResults = Number(flags['--max'] || 10);
  const result = await calendar.calendarList.list({ maxResults });
  const items = (result.data.items || []).map((c) => ({ id: c.id, summary: c.summary, primary: Boolean(c.primary), accessRole: c.accessRole, timeZone: c.timeZone }));
  console.log(JSON.stringify({ ok: true, count: items.length, items }, null, 2));
}

async function cmdCalendarUpcoming(flags) {
  const auth = await authorize();
  const calendar = google.calendar({ version: 'v3', auth });
  const calendarId = flags['--calendar'] || 'primary';
  const maxResults = Number(flags['--max'] || 10);
  const now = new Date();
  const result = await calendar.events.list({
    calendarId,
    timeMin: now.toISOString(),
    singleEvents: true,
    orderBy: 'startTime',
    maxResults,
  });
  const items = (result.data.items || []).map((e) => ({
    id: e.id,
    status: e.status,
    summary: e.summary || '(untitled)',
    start: e.start?.dateTime || e.start?.date || null,
    end: e.end?.dateTime || e.end?.date || null,
    htmlLink: e.htmlLink || null,
    location: e.location || null,
  }));
  console.log(JSON.stringify({ ok: true, count: items.length, items }, null, 2));
}

async function main() {
  const [domain, action, ...rest] = process.argv.slice(2);
  const flags = parseArgs(rest);

  if (domain === 'auth') return cmdAuth(flags);
  if (domain === 'gmail' && action === 'profile') return cmdGmailProfile(flags);
  if (domain === 'gmail' && action === 'list') return cmdGmailList(flags);
  if (domain === 'gmail' && action === 'send') return cmdGmailSend(flags);
  if (domain === 'calendar' && action === 'list') return cmdCalendarList(flags);
  if (domain === 'calendar' && action === 'upcoming') return cmdCalendarUpcoming(flags);

  console.log(`Usage:
  node google-workspace.js auth [--force]
  node google-workspace.js gmail profile
  node google-workspace.js gmail list [--max 10] [--query "in:inbox newer_than:7d"]
  node google-workspace.js gmail send --to you@example.com --subject "Hello" --body "Hi there"
  node google-workspace.js calendar list [--max 10]
  node google-workspace.js calendar upcoming [--calendar primary] [--max 10]`);
}

main().catch((err) => {
  console.error(err.stack || String(err));
  process.exit(1);
});
