# 🌌 Premium Full-Stack Developer Portfolio

A modern, highly interactive, and visually stunning personal portfolio built with **React**, **Vite**, **Material UI (v9)**, **Framer Motion**, and **React Router DOM (v7)**. Designed with a dark mode glassmorphism SaaS aesthetic.

---

## ✨ Features

- **Dynamic Cursor Glow:** Custom interactive background glow that tracks mouse movement (`CursorGlow.jsx`).
- **Premium Glassmorphism Aesthetics:** Clean cards, subtle border gradients, and sleek backdrops configured via a custom Material UI theme.
- **Micro-Animations & Scroll Effects:** Smooth scrolling and reveal animations powered by `framer-motion` for a responsive and alive user experience.
- **GitHub Integration:** Dynamic embedding of real-time GitHub activity stats, top languages, and contribution charts.
- **Modular Component Architecture:** Well-organized components categorized under Layout and UI elements.
- **Responsive Layout:** A fluid layout tailored for all screens, complete with a slide-out mobile navigation drawer.
- **Modern Typography:** Pre-configured typography using `Inter` and `JetBrains Mono` from Google Fonts.

---

## 🛠️ Tech Stack

- **Framework & Tooling:** [React 19](https://react.dev/), [Vite 8](https://vite.dev/)
- **UI & Styling:** [Material UI v9](https://mui.com/), [Emotion](https://emotion.sh/)
- **Animations:** [Framer Motion v12](https://www.framer.com/motion/)
- **Routing:** [React Router DOM v7](https://reactrouter.com/)
- **Fonts:** `@fontsource/inter`, `@fontsource/jetbrains-mono`

---

## 📂 Project Structure

```text
src/
├── assets/
│   ├── hero.png            # Premium hero section illustration
│   └── vite.svg            # Vite logo
├── components/
│   ├── layout/             # Main layout components
│   │   ├── Footer.jsx      # Styled site footer with social links & site map
│   │   ├── Navbar.jsx      # Navigation bar with responsive mobile drawer
│   │   └── PageWrapper.jsx # Global wrapper for page-level formatting
│   └── ui/                 # Reusable premium UI elements
│       ├── CursorGlow.jsx  # Interactive mouse glow tracker
│       ├── GlowCard.jsx    # Card with hover-based radial glow
│       ├── SectionHeader.jsx # Unified section title & subtitle header
│       └── TechBadge.jsx   # Pill-shaped chip for tech items
├── pages/                  # Page-level components
│   ├── Home.jsx            # The flagship portfolio home page assembling all sections
│   └── Placeholders.jsx    # Sub-pages templates (About, Projects, Blog, Contact)
├── theme/                  # Theme styling tokens
│   ├── GlobalStyles.jsx    # Reset style rules and custom webkit scrollbar overrides
│   └── theme.js            # Custom Material UI theme definition (violet/cyan palette)
├── App.jsx                 # Route manager and entry layout mapping
└── main.jsx                # DOM mounting & rendering
public/
├── favicon.svg             # Page icon
└── icons.svg               # SVG icons bundle
```

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install all dependencies:
```bash
npm install
```

### 2. Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

### 3. Production Build
Generate a production bundle:
```bash
npm run build
```
Preview the built app locally:
```bash
npm run preview
```

### 4. Linting
Verify code consistency and lint rules:
```bash
npm run lint
```

---

## 🎨 Customization Guide

This portfolio is currently configured for developer **Sahitya Kushwaha** (`sahitya.codes`). To personalize it for yourself:

1. **Branding & Metadata:**
   Open [index.html](file:///d:/OneDrive%20-%20NATIONAL%20INSTITUTE%20OF%20TECHNOLOGY%20ANDHRA%20PRADESH/Code%20Files/portfolio/index.html) and update the `<title>`, `<meta>` tags (description, keywords, author, open-graph details).

2. **Personal Profile, Tech & Projects Details:**
   Open [src/pages/Home.jsx](file:///d:/OneDrive%20-%20NATIONAL%20INSTITUTE%20OF%20TECHNOLOGY%20ANDHRA%20PRADESH/Code%20Files/portfolio/src/pages/Home.jsx) and edit the constants defined at the top:
   - `TECH_STACK`: Update list of technologies and their hex colors.
   - `PROJECTS`: Add your custom projects, GitHub links, and stats.
   - `SKILLS`: Tailor the frontend, backend, and tools categories and levels.
   - `EXPERIENCES`: Update B.Tech details, hackathons, and internship history.
   - `STATS`: Customize counters (years coding, contributions, etc.).
   - `GITHUB_USERNAME`: Change to your own username to render your live GitHub contribution graph and language statistics.

3. **Navigation & Links:**
   - In [src/components/layout/Navbar.jsx](file:///d:/OneDrive%20-%20NATIONAL%20INSTITUTE%20OF%20TECHNOLOGY%20ANDHRA%20PRADESH/Code%20Files/portfolio/src/components/layout/Navbar.jsx) and [src/components/layout/Footer.jsx](file:///d:/OneDrive%20-%20NATIONAL%20INSTITUTE%20OF%20TECHNOLOGY%20ANDHRA%20PRADESH/Code%20Files/portfolio/src/components/layout/Footer.jsx), update the logo text, links, and contact email.

---

## 🌐 Deployment

The project is static-site friendly and ready for deployment to platforms like:
- **Vercel:** Connect your GitHub repository to Vercel. Set the build command to `npm run build` and output directory to `dist`.
- **Netlify:** Connect your repository, set the build command to `npm run build` and publish directory to `dist`.
