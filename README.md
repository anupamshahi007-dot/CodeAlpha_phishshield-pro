# PhishShield Pro

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" />
</p>

<p align="center">
  An interactive, browser-based phishing awareness training module designed to educate users on identifying and defending against phishing attacks, social engineering, and digital deception — through hands-on simulations and real-world case studies.
</p>

---

## Overview

PhishShield Pro is a self-contained security awareness training application built for individuals and organizations who want to upskill their teams against one of the most prevalent attack vectors in cybersecurity. Rather than passive reading, every module is interactive — users identify threats, flip through tactics, check off defenses, and test their knowledge with a scored quiz.

---

## Features

| Module | Description |
|---|---|
| **Email Inspector** | Simulate a real phishing email and click on suspicious elements to uncover spoofed senders, fake domains, and urgency manipulation |
| **Domain Recon** | Analyze lookalike URLs and recognize typosquatting, homograph attacks, and subdomain abuse techniques |
| **Social Stratagems** | Flip-card library covering 8 social engineering tactics — pretexting, baiting, vishing, and more |
| **Mitigation Protocols** | Interactive checklist of 10 defensive best practices with live progress tracking |
| **Incident Intel** | Two in-depth real-world phishing case studies with impact statistics and lessons learned |
| **Assessment Quiz** | 10-question scored quiz with instant per-question feedback, explanations, and a final clearance rating |

---

## Tech Stack

- **Framework** — React 19 with TypeScript
- **Build tool** — Vite 7
- **Styling** — Tailwind CSS v4 with a custom design token system
- **Animations** — Framer Motion
- **Package manager** — pnpm (workspace monorepo)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20 or later
- [pnpm](https://pnpm.io/) v9 or later

### Installation

```bash
# Clone the repository
git clone https://github.com/anupamshahi007-dot/CodeAlpha_phishshield-pro.git
cd CodeAlpha_phishshield-pro

# Install all workspace dependencies
pnpm install
```

### Running in Development

```bash
# Set required environment variables
export PORT=5173
export BASE_PATH=/

# Start the dev server
pnpm --filter @workspace/phish-shield run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
pnpm --filter @workspace/phish-shield run build
```

Output is written to `artifacts/phish-shield/dist/public/` and can be served from any static file host (Netlify, Vercel, GitHub Pages, etc.).

---

## Project Structure

```
CodeAlpha_phishshield-pro/
├── artifacts/
│   └── phish-shield/          # Main training application
│       ├── src/
│       │   ├── components/
│       │   │   ├── sections/  # One component per training module
│       │   │   └── ui/        # Shared UI primitives
│       │   ├── index.css      # Design tokens & global styles
│       │   └── App.tsx        # Root component & section layout
│       └── vite.config.ts
├── lib/                       # Shared workspace libraries
├── scripts/                   # Workspace utility scripts
├── pnpm-workspace.yaml        # Monorepo configuration
└── README.md
```

---

## Design System

The app uses a dark navy + ice blue professional palette defined as CSS custom properties:

| Token | Value | Usage |
|---|---|---|
| `--color-bg-pure` | `#05090f` | Page background |
| `--color-bg-card` | `#0f1a2e` | Card surfaces |
| `--color-neon-cyan` | `#38bdf8` | Primary accent, active states |
| `--color-neon-green` | `#4ade80` | Correct answers, success states |
| `--color-neon-red` | `#f87171` | Wrong answers, danger states |
| `--color-text-main` | `#e2e8f0` | Primary text |

---

## License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">Built as part of the CodeAlpha Cybersecurity Internship Program</p>
