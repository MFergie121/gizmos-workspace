# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

## Secrets

- Store sensitive credentials in `~/.openclaw/secrets/` as separate files rather than mixing them into chat or general notes.
- Gmail OAuth client JSON lives at `~/.openclaw/secrets/gmail-oauth-client.json`.
- Gmail OAuth token lives at `~/.openclaw/secrets/gmail-token.json`.
- Prefer one secret per file when practical (for example OAuth client JSON, tokens, API keys), with restrictive permissions.

## Email / Gmail

- Gmail API sending is set up and working.
- Tool directory: `/Users/maxfergie/.openclaw/workspace/tools/gmail/`
- Main script: `/Users/maxfergie/.openclaw/workspace/tools/gmail/gmail.js`
- Auth command: `cd /Users/maxfergie/.openclaw/workspace/tools/gmail && node gmail.js auth`
- Send command: `cd /Users/maxfergie/.openclaw/workspace/tools/gmail && node gmail.js send --to "someone@example.com" --subject "Subject" --body "Message"`
- Use Gmail API / OAuth flow rather than raw password login.

Add whatever helps you do your job. This is your cheat sheet.
