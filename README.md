# Eleverve Green — Production Renewable Energy Platform

> **ANY RENEWABLE ENERGY, MADE FIRM.**  
> *UTILITY PPAs · ENERGY-AS-A-SERVICE · INDIA*

Eleverve Green is an institutional renewable energy operating platform in India. This repository contains the complete Next.js 14 production website engineered around the core thesis:

$$\text{Resource} \longrightarrow \text{Grid} \longrightarrow \text{Contract} \longrightarrow \text{Capital} \longrightarrow \text{Delivered Energy}$$

---

## ⚡ Core Positioning & Architectural Philosophy

We build renewable power solutions around the offtaker’s contracted demand, the site, the available resource, the grid interface, and the required delivered-cost outcome.

Eleverve Green is not a build-and-flip developer or a passive allocator of capital. As an **owner-operator**, the platform remains accountable for performance, day-ahead scheduling, deviation management, and dependable power delivery across a 25-year lifecycle horizon.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components by default)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict type checking)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with pure CSS variables
- **Motion**: [Framer Motion](https://www.framer.com/motion/) with `prefers-reduced-motion` compliance
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Exclusively **Poppins** across the entire website (Headings, Body, Technical badges, Metadata, and Controls) via `next/font/google`
- **Deployment**: [Vercel](https://vercel.com/) / Production Node.js

---

## 🎨 Four Theme Modes

The platform implements 4 designed theme states dynamically managed through CSS variables with zero layout shift:

1. **Light / Ivory** (`data-theme="ivory"`): Ivory surfaces (`#f7f1e6`), rich forest green (`#247a3b`), and dark ink text. Clean institutional editorial aesthetic.
2. **Pure Black** (`data-theme="black"`): Deep black backgrounds (`#030604`), high-contrast neon green (`#00f576`), and crisp white typography. High-technology feel.
3. **Navy Blue** (`data-theme="navy"`): Deep marine navy (`#07141f`), infrastructure teal/cyan (`#4fd1c5`), and financial elegance.
4. **Auto / System**: Automatically detects operating system preference via `prefers-color-scheme`.

Theme selection persists in `localStorage` with an inline pre-render script to eliminate theme flash.

---

## 📁 Repository Structure

```text
eleverve-green/
├── .github/
│   └── workflows/
│       └── ci.yml               # Automated GitHub Actions CI (lint, typecheck, build)
├── app/
│   ├── layout.tsx               # Root layout, Google fonts, ThemeProvider, Navbar, Footer
│   ├── page.tsx                 # Full cinematic homepage narrative
│   ├── globals.css              # Theme CSS variables, typography, keyframes, transitions
│   ├── not-found.tsx            # Custom 404 routing error screen
│   ├── robots.ts                # Search engine crawler policies
│   ├── sitemap.ts               # XML sitemap generator
│   ├── model/page.tsx           # /model (We Own & Operate, Two Ways to Contract)
│   ├── why-now/page.tsx         # /why-now (Transition to hour-deficit market)
│   ├── platform/page.tsx        # /platform (Resource to delivered energy)
│   ├── solutions/page.tsx       # /solutions (EaaS, Utility PPA, FDRE/RTC, Hybrid)
│   ├── technology/page.tsx      # /technology (Diurnal dispatch simulator & building blocks)
│   ├── execution/page.tsx       # /execution (Greenfield, Brownfield & 4-phase process)
│   ├── portfolio/page.tsx       # /portfolio (Interactive India map & state assets)
│   ├── esg/page.tsx             # /esg (Environment, Social, Governance, HSE)
│   ├── team/page.tsx            # /team (Founders, executives & $3Bn+ track record)
│   └── contact/page.tsx         # /contact (Offices, registered HQ & inquiry console)
├── components/
│   ├── navigation/
│   │   ├── Navbar.tsx           # Transparent/solid scroll navbar with mobile drawer
│   │   └── Footer.tsx           # Institutional footer, legal disclaimer, links
│   ├── hero/
│   │   └── HeroVideo.tsx        # Cinematic hero with video background & fallbacks
│   ├── platform/
│   │   ├── PlatformFlow.tsx     # Interactive 5-stage pipeline with deliverables
│   │   └── CapabilitiesGrid.tsx # 5 core platform architecture cards
│   ├── solutions/
│   │   └── SolutionCards.tsx    # Interactive comparison matrix for offtakers
│   ├── technology/
│   │   └── ResourceSimulator.tsx# 24-hour diurnal dispatch curve simulator
│   ├── portfolio/
│   │   └── PortfolioMap.tsx     # Stylized India map with state nodes
│   ├── execution/
│   │   └── ExecutionProcess.tsx # Greenfield, brownfield & 4-phase timeline
│   ├── esg/
│   │   └── ESGSection.tsx       # 4 institutional ESG & HSE pillars
│   ├── team/
│   │   ├── TeamGrid.tsx         # Verified bios with typographic monograms
│   │   └── EcosystemSection.tsx # Eleverve Green, Elements, Transvolt relationship
│   ├── contact/
│   │   └── ContactSection.tsx   # Direct email, regional hubs & offtake form
│   ├── ui/
│   │   ├── Logo.tsx             # Official brand SVG logo adapting to theme colors
│   │   ├── ThemeSwitcher.tsx    # 4-mode accessible switcher
│   │   ├── Button.tsx           # Primary, ghost, outline & pill buttons
│   │   ├── Badge.tsx            # Monospace technical badge tags
│   │   ├── SectionHeader.tsx    # Eyebrow, bold/thin contrast headlines
│   │   ├── MediaSplitSection.tsx# 50/50 visual editorial split layouts
│   │   └── MetricCard.tsx       # Institutional numerical emphasis cards
│   └── theme/
│       └── ThemeProvider.tsx    # React theme context & flash prevention script
├── data/
│   ├── company.ts               # Single source of truth for factual company data
│   ├── navigation.ts            # Route configuration and navigation items
│   ├── platform.ts              # 5-stage pipeline & capability specs
│   ├── solutions.ts             # 4 offtake solution structures & comparison matrix
│   ├── technology.ts            # Resource building blocks & dispatch profiles
│   ├── execution.ts             # Greenfield/Brownfield routes & 4 phases
│   ├── portfolio.ts             # Rajasthan (52.5 MWp), AP (26.5 MWp), Gujarat (20 MWp)
│   ├── esg.ts                   # IFC/ISO benchmarked ESG criteria
│   └── team.ts                  # Founders, executives, initials & credentials
├── lib/
│   ├── utils.ts                 # Classname merging and number formatting
│   └── theme.ts                 # Theme constants and mode types
├── public/
│   ├── images/                  # High-resolution infrastructure photography
│   ├── logos/                   # Official vector SVGs and brand assets
│   └── videos/                  # Official hero energy background video
├── .env.example                 # Example environment variables
├── .eslintrc.json               # Next.js Core Web Vitals ESLint rules
├── .gitignore                   # Standard production gitignore
├── next.config.mjs              # Optimized Next.js configuration
├── package.json                 # Project dependencies and scripts
├── postcss.config.mjs           # PostCSS Tailwind config
├── tailwind.config.ts           # Extended design tokens and theme bindings
└── tsconfig.json                # TypeScript App Router path mappings
```

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js `18.18+` or `20.x` LTS
- npm `9.x+` or `10.x+`

### Installation
```bash
# Clone the repository
git clone https://github.com/eleverve-green/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Production Build & Validation

The project is built to compile with zero TypeScript warnings or linting errors:

```bash
# Run ESLint validation
npm run lint

# Run TypeScript typecheck
npx tsc --noEmit

# Compile production bundle
npm run build

# Preview production build locally
npm run start
```

---

## 🌐 Vercel Deployment

This project requires zero custom servers or runtime hacks and is natively ready for one-click deployment on **Vercel**:

1. Push your repository to **GitHub**.
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**.

---

## 🔒 Source of Truth & Factual Integrity

All factual company information in this repository is strictly anchored in official Eleverve Green disclosures:
- **Operating Portfolio**: ~99 MWp indicative portfolio across Rajasthan (52.5 MWp), Andhra Pradesh (26.5 MWp), and Gujarat (20 MWp).
- **Leadership Precedent**: 7GW developed, $3Bn capital raised, 70yr aggregate team experience.
- **Ecosystem**: Eleverve Green (Asset Owner/Operator), Elements Financial Solutions (Debt Structuring), Transvolt Mobility (DFI Precedent).
- **Offices**: Mumbai · Pune · Gurgaon. Registered Office: 501, A Wing, Trade Link, Delisle Road, Mumbai 400013.
- **Inquiries**: `info@eleverve.green`.

---

© 2026 Eleverve Green Private Limited. All rights reserved.
