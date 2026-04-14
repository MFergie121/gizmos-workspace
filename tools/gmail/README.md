# Google Workspace tool

Files:
- OAuth client: `~/.openclaw/secrets/gmail-oauth-client.json`
- Legacy Gmail token: `~/.openclaw/secrets/gmail-token.json`
- Google Workspace token: `~/.openclaw/secrets/google-workspace-token.json`

Commands:
- `node gmail.js auth`
- `node gmail.js send --to maxpfergie@gmail.com --subject "Hello" --body "Hi Max"`
- `node google-workspace.js auth`
- `node google-workspace.js gmail profile`
- `node google-workspace.js gmail list --max 10 --query "in:inbox newer_than:7d"`
- `node google-workspace.js gmail send --to maxpfergie@gmail.com --subject "Hello" --body "Hi Max"`
- `node google-workspace.js calendar list`
- `node google-workspace.js calendar upcoming --calendar primary --max 10`

Notes:
- `gmail.js` is the older send-only helper.
- `google-workspace.js` uses one OAuth desktop flow for Gmail + Google Calendar.
- Current scopes: `gmail.readonly`, `gmail.send`, `calendar.readonly`.
