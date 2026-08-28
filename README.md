# 🏢 BRM - Blessing Real Estate & Marketing

A modern, high-performance, and feature-rich Real Estate & Property Marketing platform built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

![Blessing Real Estate](public/icon.png)

---

## 🌟 Key Features

- 🏡 **Comprehensive Property Listings**: Search and filter residential and commercial properties by buy/rent, city, location, price, bedrooms, and property type.
- 📍 **Area & Location Guides**: In-depth analysis and location insights for premium real estate developments and housing societies.
- 💼 **Professional Services**:
  - Buying & Selling Consultancy
  - Rental & Property Management
  - Investment Advisory & Portfolio Optimization
  - Legal & Documentation Assistance
- 🎥 **Virtual Tours & Video Showcase**: Embedded video walkthroughs and property tours.
- 🏢 **Office Directory**: Interactive location guides for regional offices.
- 📱 **Fully Responsive & Animated**: Modern UI designed with smooth Framer Motion micro-interactions, dark-mode accents, glassmorphism, and seamless mobile responsiveness.
- ⚡ **Optimized Performance**: Next.js 14 App Router with Server-Side Rendering (SSR) and optimized image delivery.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
BRM/
├── app/                      # Next.js 14 App Router Pages & Layouts
│   ├── about/                # About Us page
│   ├── areas/                # Area guides & housing society insights
│   ├── blog/                 # Real estate market news & articles
│   ├── contact/              # Contact form & location info
│   ├── faq/                  # Frequently asked questions
│   ├── guides/               # Buyer & Seller guides
│   ├── investment/           # Investment consultancy & calculator
│   ├── offices/              # Office locations directory
│   ├── portfolio/            # Completed projects & success stories
│   ├── projects/             # Current & upcoming mega projects
│   ├── properties/           # Dynamic property listings & details ([slug])
│   ├── rent-your-property/   # Listing form for rentals
│   ├── sell-your-property/   # Listing form for property sales
│   ├── services/             # Real estate services overview
│   ├── videos/               # Video tours & media gallery
│   ├── globals.css           # Global Tailwind CSS styles
│   ├── layout.tsx            # Root layout wrapper
│   └── page.tsx              # Homepage
├── components/               # Reusable UI components
│   ├── Navbar.tsx            # Navigation bar with dropdowns
│   ├── Footer.tsx            # Footer section
│   ├── PropertyCard.tsx      # Property display cards
│   ├── HeroSearch.tsx        # Homepage hero search bar
│   └── ...                   # Custom UI components
├── data/                     # Mock data & property definitions
├── lib/                      # Helper functions & utility methods
├── public/                   # Static assets, logos, and images
├── types/                    # TypeScript type definitions
├── tailwind.config.ts        # Tailwind configuration
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

To test the production build locally before deploying:

```bash
npm run build
npm run start
```

---

## 🌐 Deployment on Vercel

Follow these steps to deploy this project live on **Vercel**:

1. **Push your code to GitHub**:
   Make sure all your changes are pushed to your GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit with documentation"
   git branch -M main
   git remote add origin https://github.com/rabiasiddique-dev/BRM.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [Vercel](https://vercel.com/) and sign in with your GitHub account.
   - Click **Add New** -> **Project**.
   - Select the `BRM` repository from your GitHub repositories list.

3. **Configure & Deploy**:
   - **Framework Preset**: Next.js (automatically detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - Click **Deploy**.

4. **Live URL**:
   Vercel will build and deploy your project in under a minute, providing a custom `.vercel.app` live domain!

---

## 👨‍💻 Developer & Maintenance

Developed for **Blessing Real Estate & Marketing (BRM)**.
For questions or inquiries, please contact the development team.
