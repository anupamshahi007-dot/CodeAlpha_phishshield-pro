# PhishShield Pro

Interactive phishing awareness training module — learn to identify phishing emails, fake websites, and social engineering tactics through hands-on simulations and real-world case studies.

## Features

- **Email Inspector** — spot spoofed senders, fake domains, and urgent-language tricks in a live email simulation
- **Domain Recon** — analyse lookalike URLs and typosquatting techniques
- **Social Stratagems** — flip-card library of common social engineering tactics
- **Mitigation Protocols** — interactive checklist of defensive best practices
- **Incident Intel** — two real-world phishing case studies with impact stats
- **Assessment Quiz** — 10-question test with instant feedback and a clearance rating

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- Framer Motion
- pnpm workspaces

## Getting Started

```bash
# Install dependencies
pnpm install

# Set required environment variables
export PORT=5173
export BASE_PATH=/

# Start dev server
pnpm --filter @workspace/phish-shield run dev
```

Then open `http://localhost:5173`.

## Build for Production

```bash
pnpm --filter @workspace/phish-shield run build
# Output → artifacts/phish-shield/dist/public
```

## Project Structure

```
artifacts/
  phish-shield/        # Main training app
    src/
      components/
        sections/      # One file per training module
        ui/            # Shared UI primitives
      index.css        # Design tokens + global styles
lib/                   # Shared workspace libraries
```

## License

MIT
