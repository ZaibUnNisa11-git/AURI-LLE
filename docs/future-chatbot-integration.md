# Future n8n chatbot integration

This project intentionally does not include a live AI chatbot yet. The frontend includes a placeholder integration layer for a future webhook-driven chatbot connection.

## Configuration

Set the following values in the frontend environment:

```bash
VITE_CHATBOT_ENABLED=false
VITE_CHATBOT_WEBHOOK_URL=
```

When enabled, the app will send customer messages to the configured external webhook endpoint and keep the actual chatbot UI separate from the storefront layout.

## Guardrails

- No hardcoded n8n webhook URLs.
- No secrets stored in frontend code.
- No fake AI experience shipped in this stage.
- The chatbot integration is designed to be added without changing the primary storefront, cart, or product catalogue architecture.
