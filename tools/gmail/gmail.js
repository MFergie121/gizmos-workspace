#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const http = require('http');
const { google } = require('googleapis');
const open = require('open').default;

const HOME = process.env.HOME;
const SECRETS_DIR = path.join(HOME, '.openclaw', 'secrets');
const CLIENT_PATH = path.join(SECRETS_DIR, 'gmail-oauth-client.json');
const TOKEN_PATH = path.join(SECRETS_DIR, 'gmail-token.json');
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

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

async function authorize() {
  const client = loadClient();
  const redirectUri = 'http://127.0.0.1:3007/oauth2callback';
  const oAuth2Client = new google.auth.OAuth2(client.client_id, client.client_secret, redirectUri);
  const existing = loadToken();
  if (existing) {
    oAuth2Client.setCredentials(existing);
    return oAuth2Client;
  }

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: SCOPES,
  });

  console.log('Opening browser for Gmail authorization...');
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
        res.end('Gmail authorization received. You can close this tab.');
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

async function sendMail({ to, subject, body }) {
  const auth = await authorize();
  const gmail = google.gmail({ version: 'v1', auth });
  const raw = makeRawMessage({ to, subject, body });
  const result = await gmail.users.messages.send({
    userId: 'me',
    requestBody: { raw },
  });
  console.log(JSON.stringify({ ok: true, id: result.data.id }, null, 2));
}

async function main() {
  const [cmd, ...args] = process.argv.slice(2);
  if (cmd === 'auth') {
    await authorize();
    console.log(JSON.stringify({ ok: true, tokenPath: TOKEN_PATH }, null, 2));
    return;
  }
  if (cmd === 'send') {
    const get = (flag) => {
      const i = args.indexOf(flag);
      return i >= 0 ? args[i + 1] : null;
    };
    const to = get('--to');
    const subject = get('--subject') || '';
    const body = get('--body') || '';
    if (!to) throw new Error('Missing --to');
    await sendMail({ to, subject, body });
    return;
  }
  console.log(`Usage:\n  node gmail.js auth\n  node gmail.js send --to you@example.com --subject "Hello" --body "Hi there"`);
}

main().catch((err) => {
  console.error(err.stack || String(err));
  process.exit(1);
});
