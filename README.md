# 🌌 Premium Full-Stack Developer Portfolio

A modern, highly interactive, and visually stunning personal portfolio built with **React 19**, **Vite 8**, **Material UI (v9)**, **Framer Motion**, and **React Router DOM (v7)**. Designed with a dark mode glassmorphism SaaS aesthetic and deployed to **Azure Static Web Apps** via GitHub Actions.

🔗 **Live:** [www.sahitya.codes](https://www.sahitya.codes)

---

## ✨ Features

- **Dynamic Cursor Glow:** Custom interactive background glow that tracks mouse movement (`CursorGlow.jsx`).
- **Premium Glassmorphism Aesthetics:** Clean cards, subtle border gradients, and sleek backdrops configured via a custom Material UI theme.
- **Micro-Animations & Scroll Effects:** Smooth scrolling and reveal animations powered by `framer-motion` for a responsive and alive user experience.
- **GitHub Integration:** Dynamic embedding of real-time GitHub activity stats, top languages, and contribution charts.
- **Dedicated Pages:** Fully built-out **Home**, **About**, **Projects**, and **Contact** pages — each with unique layouts and animations.
- **Contact Form (EmailJS):** Functional contact form with client-side validation and EmailJS integration for receiving messages directly to your inbox.
- **Filterable Project Gallery:** Browse projects by category (Full-Stack, AI/ML, Frontend, Backend) with animated transitions.
- **Skills & Experience Timeline:** Interactive skill bars and a two-column alternating timeline for education, work, and achievements.
- **Downloadable Resume:** One-click access to a PDF resume hosted in the `public/` directory. Resume PDF is automatically generated from LaTeX and deployed via GitHub Actions.
- **Modular Component Architecture:** Well-organized components categorized under Layout and UI elements.
- **Responsive Layout:** A fluid layout tailored for all screens, complete with a slide-out mobile navigation drawer.
- **Modern Typography:** Pre-configured typography using `Inter` and `JetBrains Mono` from Google Fonts.

---

## 🛠️ Tech Stack

- **Framework & Tooling:** [React 19](https://react.dev/), [Vite 8](https://vite.dev/)
- **UI & Styling:** [Material UI v9](https://mui.com/), [Emotion](https://emotion.sh/)
- **Animations:** [Framer Motion v12](https://www.framer.com/motion/)
- **Routing:** [React Router DOM v7](https://reactrouter.com/)
- **Contact Form:** [EmailJS](https://www.emailjs.com/) (`@emailjs/browser`)
- **Fonts:** `Inter`, `JetBrains Mono` (Google Fonts + `@fontsource`)
- **Deployment:** [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static) via GitHub Actions

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── layout/                 # Main layout components
│   │   ├── Footer.jsx          # Styled site footer with social links & site map
│   │   ├── Navbar.jsx          # Navigation bar with responsive mobile drawer
│   │   └── PageWrapper.jsx     # Global wrapper for page-level formatting
│   └── ui/                     # Reusable premium UI elements
│       ├── CursorGlow.jsx      # Interactive mouse glow tracker
│       ├── GlowCard.jsx        # Card with hover-based radial glow
│       ├── SectionHeader.jsx   # Unified section title & subtitle header
│       └── TechBadge.jsx       # Pill-shaped chip for tech items
├── pages/                      # Page-level components
│   ├── Home.jsx                # Landing page — hero, featured projects, GitHub activity
│   ├── About.jsx               # Bio, skills, what I do, experience timeline
│   ├── Projects.jsx            # Full project gallery with category filters
│   └── Contact.jsx             # Contact form (EmailJS) + social links
├── theme/                      # Theme styling tokens
│   ├── GlobalStyles.jsx        # Reset style rules and custom webkit scrollbar overrides
│   └── theme.js                # Custom Material UI theme definition (violet/cyan palette)
├── App.jsx                     # Route manager and entry layout mapping
└── main.jsx                    # DOM mounting & rendering
public/
├── logo.png                    # Site favicon / logo
├── profile.jpg                 # About page profile photo
└── resume.pdf                  # Downloadable resume (auto-generated from LaTeX via GitHub Actions)
.github/
└── workflows/
    └── azure-static-web-apps-gentle-desert-01876f000.yml   # CI/CD pipeline for Azure deployment
```

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install all dependencies:
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the project root with the following keys for the contact form:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
> These are optional — the portfolio works without them, but the contact form will not send emails.

### 3. Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

### 4. Production Build
Generate a production bundle:
```bash
npm run build
```
Preview the built app locally:
```bash
npm run preview
```

### 5. Linting
Verify code consistency and lint rules:
```bash
npm run lint
```

---

## 🎨 Customization Guide

This portfolio is currently configured for developer **Sahitya Kushwaha** (`sahitya.codes`). To personalize it for yourself:

1. **Branding & Metadata:**
   Open [index.html](index.html) and update the `<title>`, `<meta>` tags (description, keywords, author, open-graph details).

2. **Home Page — Hero & Featured Projects:**
   Open [src/pages/Home.jsx](src/pages/Home.jsx) and edit:
   - `PROJECTS`: Featured project cards with descriptions, tags, GitHub links, and live URLs.
   - `STATS`: Counters displayed below the hero (years coding, contributions, etc.).
   - `GITHUB_USERNAME`: Change to your own username to render your live GitHub contribution graph and language statistics.

3. **About Page — Bio, Skills & Experience:**
   Open [src/pages/About.jsx](src/pages/About.jsx) and edit:
   - `WHAT_I_DO`: Areas of expertise cards (Frontend, Backend, AI/ML).
   - `EXPERIENCES`: Education, work, and achievement timeline entries.
   - `SKILLS`: Skill categories with proficiency levels (Frontend, Backend, AI/ML, Dev Tools).
   - Bio text and profile photo path.

4. **Projects Page — Full Gallery:**
   Open [src/pages/Projects.jsx](src/pages/Projects.jsx) and edit:
   - `ALL_PROJECTS`: Complete list of projects with categories, tags, and links.
   - `FILTERS`: Category filter chips.

5. **Contact Page:**
   Open [src/pages/Contact.jsx](src/pages/Contact.jsx) and edit:
   - `SOCIAL_ITEMS`: GitHub, LinkedIn, and email links.
   - EmailJS environment variables in `.env`.

6. **Navigation & Links:**
   - In [src/components/layout/Navbar.jsx](src/components/layout/Navbar.jsx) and [src/components/layout/Footer.jsx](src/components/layout/Footer.jsx), update the logo text, links, and contact email.

---

## 🌐 Deployment

This project is deployed to **Azure Static Web Apps** via a GitHub Actions CI/CD pipeline.

- **Workflow File:** [.github/workflows/azure-static-web-apps-gentle-desert-01876f000.yml](.github/workflows/azure-static-web-apps-gentle-desert-01876f000.yml)
- **Triggers:** Automatically builds and deploys on every push to `main` and on pull request events.
- **Secrets Required:** `AZURE_STATIC_WEB_APPS_API_TOKEN_*`, plus the EmailJS env vars (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`).

Alternatively, the project is static-site friendly and can be deployed to:
- **Vercel:** Set build command to `npm run build` and output directory to `dist`.
- **Netlify:** Set build command to `npm run build` and publish directory to `dist`.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
