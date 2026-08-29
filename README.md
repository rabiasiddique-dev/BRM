# 🏢 BRM - Blessing Marketing & Real Estate (Pvt. Ltd)

A modern, high-performance, executive corporate platform built for **Blessing Marketing & Real Estate (Pvt. Ltd)** using **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-brm--mu.vercel.app-gold?style=for-the-badge&logo=vercel)](https://brm-mu.vercel.app)

---

## 🌟 Key Features

- 💎 **Luxury Executive Navigation**: 6 streamlined top-level items with glassmorphic, interactive drop-down menus featuring sub-item icons and descriptive subtitles (`Company`, `Services`, `Projects & Work`, `Media & Insights`).
- 🏢 **Developer & Corporate Portfolio**: Dedicated representation for mega real estate project developments across Karachi's premier corridors (DHA, Clifton, Gulshan-e-Iqbal, Bahria Town).
- 💼 **Full Capabilities & Advisory**:
  - Developer Project Marketing & Sales Representation
  - Strategic Real Estate Consultancy & Valuation
  - High-Yield Investment Advisory
  - Commercial & Corporate Real Estate
- 🎥 **Media & Social Hub**: HD video walkthroughs, CEO insights, and integrated social media feeds.
- 📱 **Mobile First & Responsive**: Interactive mobile drawer with accordion-style nested sub-menus.
- ⚡ **Optimized Performance**: Next.js 14 App Router with Server-Side Rendering (SSR) and optimized image delivery (`sizes` prop optimization).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) (Live at [brm-mu.vercel.app](https://brm-mu.vercel.app))

---

## 📁 Project Structure

```text
BRM/
├── app/                      # Next.js 14 App Router Pages & Layouts
│   ├── about/                # Corporate background, vision & values
│   ├── areas/                # Karachi corridor location guides
│   ├── blog/                 # Real estate market news & guides
│   ├── contact/              # Executive contact form & offices
│   ├── faq/                  # Frequently asked questions
│   ├── insights/             # Market insights & CEO commentary
│   ├── media/                # Video showcase & social hub
│   ├── portfolio/            # Delivered track record & case studies
│   ├── projects/             # Current featured project developments ([slug])
│   ├── properties/           # Dynamic property listings & details ([slug])
│   ├── services/             # Services overview & dynamic service pages ([slug])
│   ├── team/                 # Executive team & senior consultants
│   ├── videos/               # Video tour gallery
│   ├── globals.css           # Global Tailwind CSS styles
│   ├── layout.tsx            # Root layout wrapper
│   └── page.tsx              # Corporate Homepage
├── components/               # Modular UI Components
│   ├── layout/               # Navbar (with Dropdowns), Footer, Mobile Sticky CTA
│   ├── home/                 # Hero, Capabilities, Featured Projects, Leadership, Stats
│   ├── projects/             # Project cards & gallery components
│   ├── properties/           # Property cards & filter controls
│   ├── common/               # Section headings, WhatsApp CTA buttons, forms
│   └── blog/                 # Insights & news cards
├── data/                     # Structured TypeScript datasets (company, projects, services)
├── lib/                      # Helper functions & utility methods
├── public/                   # Static assets & corporate logos
├── types/                    # TypeScript type definitions
├── tailwind.config.ts        # Tailwind CSS design system configuration
└── tsconfig.json             # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.17.0 or higher
- **npm** / **yarn** / **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rabiasiddique-dev/BRM.git
   cd BRM
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📦 Build & Production Test

To test the production build locally:

```bash
npm run build
npm run start
```

---

## 🌐 Live Vercel Deployment

This repository is connected to **Vercel** with automatic continuous integration and deployment. Every push to the `main` branch automatically deploys live to Vercel:

- **Live URL**: [https://brm-mu.vercel.app](https://brm-mu.vercel.app)

---

## 👨‍💻 Developer & Maintenance

Maintained for **Blessing Marketing & Real Estate (Pvt. Ltd)**.
For inquiries, please visit [brm-mu.vercel.app/contact](https://brm-mu.vercel.app/contact).
