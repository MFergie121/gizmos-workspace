# Gmail tool

Files:
- OAuth client: `~/.openclaw/secrets/gmail-oauth-client.json`
- OAuth token: `~/.openclaw/secrets/gmail-token.json`

Commands:
- `node gmail.js auth`
- `node gmail.js send --to maxpfergie@gmail.com --subject "Hello" --body "Hi Max"`

Notes:
- Uses Gmail API with OAuth desktop client flow.
- Current scope: `gmail.send`
