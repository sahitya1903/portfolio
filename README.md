# 🌌 Premium Full-Stack Developer Portfolio

A modern, highly interactive, and visually stunning personal portfolio built with **React 19**, **Vite 8**, **Material UI (v9)**, **Framer Motion**, and **React Router DOM (v7)**. Designed with a dark mode glassmorphism SaaS aesthetic, structured as a single-page landing flow with a separate Projects archive, and deployed to **Azure Static Web Apps** via GitHub Actions.

🔗 **Live:** [www.sahitya.codes](https://www.sahitya.codes)

---

## ✨ Features

- **Single-Page Landing Flow:** Hero, About (Bio, Skills, & Experience Timeline), Projects, and Contact sections merged into a single continuous, scrollable landing experience (`/`) for seamless visitor engagement.
- **Dedicated Projects Page:** A separate Projects archive page (`/projects`) showing a gallery of 9 projects, complete with category filtering (Full-Stack, AI/ML, Frontend, DSA) and layout transitions.
- **Dynamic Hash Scrolling:** Seamless scroll restoration and smooth section navigation using a custom `<ScrollToHash />` routing hook. Navigating to `#skills`, `#experience`, `#projects`, or `#contact` works instantly even when coming from the separate projects page.
- **Hero Bio Integration:** Combined first-impression hero copy and professional background bio into a clean, human-like introduction.
- **Functional Contact Form (EmailJS):** Sleek, centered contact form (`maxWidth: 760px`) with client-side validation and EmailJS integration for receiving messages directly to your inbox.
- **Dynamic Cursor Glow:** Custom interactive background glow that tracks mouse movement (`CursorGlow.jsx`).
- **Premium Glassmorphism Aesthetics:** Clean cards, subtle border gradients, and sleek backdrops configured via a custom Material UI theme.
- **Micro-Animations & Scroll Effects:** Smooth scrolling and reveal animations powered by `framer-motion` for a responsive and alive user experience.
- **GitHub Integration:** Dynamic embedding of real-time GitHub activity stats, top languages, and contribution charts.
- **Skills & Experience Timeline:** Alternate-column journey timeline for education, work, and milestones, alongside a balanced 5-category skills grid.
- **Downloadable Resume:** One-click primary Call-To-Action (CTA) in the hero section pointing to a PDF resume hosted in the `public/` directory.
- **Responsive Layout:** A fluid layout tailored for all screens, complete with a slide-out mobile navigation drawer.

---

## 📂 Featured Projects

This portfolio showcases a curated collection of **10 projects**, ranging from full-stack web applications and AI/ML computer vision systems to frontend applications and DSA practice repositories.

### Key Highlights
- **[Roomify](https://github.com/sahitya1903/roomify)** (`Full-Stack` | `Live`): A hotel booking & rental platform built with EJS, Node.js, Express, and MongoDB.
- **[Driver Drowsiness Detection](https://github.com/sahitya1903/drowsiness-detection)** (`AI/ML` | `Live`): A computer vision system built with TensorFlow and OpenCV to trigger alerts.
- **[Animal Detection & Alert System](https://github.com/sahitya1903/animal-detection)** (`AI/ML` | `Completed`): A real-time YOLOv12 security system for perimeter monitoring.
- **[Dev Portfolio V2](https://github.com/sahitya1903/portfolio)** (`Frontend` | `Live`): This portfolio site built with React 19, Vite 8, Material UI, and Framer Motion.

*For the complete archive of all 10 projects (including MERN experiments, JavaDSA, Python scripts, LeetCode Practice, Weather App, and Todo List), please visit the dedicated `/projects` route.*

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
│   │   ├── Navbar.jsx          # Navigation bar with responsive drawer and section routing
│   │   └── PageWrapper.jsx     # Global wrapper for page-level formatting
│   └── ui/                     # Reusable premium UI elements
│       ├── CursorGlow.jsx      # Interactive mouse glow tracker
│       ├── GlowCard.jsx        # Card with hover-based radial glow
│       ├── SectionHeader.jsx   # Unified section title & subtitle header
│       └── TechBadge.jsx       # Pill-shaped chip for tech items
├── pages/                      # Page & Section components
│   ├── Home.jsx                # Landing page — Hero, GitHub, and layout orchestration
│   ├── About.jsx               # Refactored to hold Skills and Experience sub-sections
│   ├── Projects.jsx            # Separate route page showing full projects gallery
│   └── Contact.jsx             # Refactored centered Contact form
├── theme/                      # Theme styling tokens
│   ├── GlobalStyles.jsx        # Reset style rules and custom scrollbar overrides
│   └── theme.js                # Custom Material UI theme definition (violet/cyan palette)
├── App.jsx                     # Route manager, ScrollToHash utility, and entry layout mapping
└── main.jsx                    # DOM mounting & rendering
public/
├── logo.png                    # Site favicon / logo
└── resume.pdf                  # Downloadable resume
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

2. **Hero Bio:**
   Open [src/pages/Home.jsx](src/pages/Home.jsx) and edit the text inside the `Hero` component headline and subheadline with your own bio.

3. **Skills & Experience Timeline:**
   Open [src/pages/About.jsx](src/pages/About.jsx) and edit:
   - `EXPERIENCES`: Education, work, and achievement timeline entries.
   - `SKILLS`: Skill categories (Languages, Frontend, Backend & Databases, Cloud, ML & Tools).

4. **Projects Gallery:**
   Open [src/pages/Projects.jsx](src/pages/Projects.jsx) and edit:
   - `ALL_PROJECTS`: Complete list of projects (including recent additions like Todo List, JavaDSA, and Python projects) with categories, tags, and links.
   - `FILTERS`: Category filter chips.

5. **Contact Page:**
   Open [src/pages/Contact.jsx](src/pages/Contact.jsx) and edit form attributes. Add EmailJS variables in your `.env` file.

6. **Navbar Links:**
   - In [src/components/layout/Navbar.jsx](src/components/layout/Navbar.jsx), configure `NAV_LINKS` to scroll to your desired section IDs on the landing page.

---

## 🌐 Deployment

This project is deployed to **Azure Static Web Apps** via a GitHub Actions CI/CD pipeline.

- **Workflow File:** [.github/workflows/azure-static-web-apps-gentle-desert-01876f000.yml](.github/workflows/azure-static-web-apps-gentle-desert-01876f000.yml)
- **Triggers:** Automatically builds and deploys on every push to `main` and on pull request events.
- **Secrets Required:** `AZURE_STATIC_WEB_APPS_API_TOKEN_*`, plus the EmailJS env vars (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`).

Alternatively, the project is static-site friendly and can be deployed to Vercel, Netlify, or GitHub Pages.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
