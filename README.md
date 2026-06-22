# 🌌 Premium Full-Stack Developer Portfolio

A modern, highly interactive personal portfolio built with **React 19**, **Vite 8**, **Material UI (v9)**, **Framer Motion**, and **React Router DOM (v7)**. Designed with a dark mode glassmorphism SaaS aesthetic, structured as a single-page landing flow with a separate Projects archive, and deployed to **Azure Static Web Apps**.

🔗 **Live:** [www.sahitya.codes](https://www.sahitya.codes)

---

## ✨ Features

- **Landing Flow & Subpages:** Continuous scroll landing page (`/`) with scroll-spy navbar highlighting, custom hash routing, and a separate interactive filterable Projects archive (`/projects`).
- **Personalized Sections:** Integrated bio introduction, alternate-column experience timeline, 5-category skill progress grid, and dynamic GitHub activity/stats embedding.
- **Automated Resume Sync:** Downloadable PDF resume (`public/resume.pdf`) auto-synchronized with Overleaf edits via a GitHub Actions workflow in a separate repository.
- **SaaS Glassmorphism Aesthetics:** Premium dark-mode design system with radial hover glow, border gradients, smooth micro-animations, and interactive mouse-tracking cursor glow.
- **Functional Contact Form:** Responsive contact form integrated with EmailJS for direct inbox delivery and client-side validation.
- **Fully Responsive:** Fluid layouts with slide-out mobile navigation drawer optimized for all screen sizes.

---

## 📂 Curated Projects

- **[Roomify](https://github.com/sahitya1903/roomify)** (`Full-Stack` | `Live`): Hotel booking & rental platform built with EJS, Node.js, Express, and MongoDB.
- **[Driver Drowsiness Detection](https://github.com/sahitya1903/drowsiness-detection)** (`AI/ML` | `Live`): Computer vision system built with TensorFlow & OpenCV to trigger alerts.
- **[Animal Detection System](https://github.com/sahitya1903/animal-detection)** (`AI/ML` | `Completed`): Real-time YOLOv12 security system for farm perimeter monitoring.
- **[Dev Portfolio V2](https://github.com/sahitya1903/portfolio)** (`Frontend` | `Live`): This portfolio site built with React 19, Vite 8, Material UI, and Framer Motion.

*Visit the `/projects` route for the complete archive of 10+ projects (MERN experiments, JavaDSA, automation, etc.).*

---

## 🛠️ Tech Stack

- **Framework & Tooling:** [React 19](https://react.dev/), [Vite 8](https://vite.dev/)
- **UI & Styling:** [Material UI v9](https://mui.com/), [Emotion](https://emotion.sh/)
- **Animations:** [Framer Motion v12](https://www.framer.com/motion/)
- **Routing:** [React Router DOM v7](https://reactrouter.com/)
- **Contact Form:** [EmailJS](https://www.emailjs.com/)
- **Deployment:** [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static)

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
├── logo.png            # Favicon/Logo
└── resume.pdf          # Downloadable resume
```

---

## 🚀 Getting Started

```bash
# 1. Clone & install dependencies
git clone https://github.com/sahitya1903/portfolio.git
cd portfolio
npm install

# 2. Add EmailJS variables to a .env file (Optional)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
> These are optional — the portfolio works without them, but the contact form will not send emails.

```bash
# 3. Start local development server
npm run dev

# 4. Lint and build for production
npm run lint
npm run build
```

---

## 🎨 Customization Guide

1. **Branding:** Update metadata `<title>` and `<meta>` tags in [index.html](index.html).
2. **Bio & Hero:** Modify copy inside the `Hero` component in [src/pages/Home.jsx](src/pages/Home.jsx).
3. **Skills & Experience:** Edit timeline/skills datasets in [src/pages/About.jsx](src/pages/About.jsx).
4. **Projects Gallery:** Manage the `ALL_PROJECTS` list in [src/pages/Projects.jsx](src/pages/Projects.jsx).
5. **Contact Form:** Configure EmailJS inside [src/pages/Contact.jsx](src/pages/Contact.jsx).

---

## 🌐 Deployment

This project is deployed to **Azure Static Web Apps** via a GitHub Actions pipeline.

- **Workflow:** [.github/workflows/azure-static-web-apps-gentle-desert-01876f000.yml](.github/workflows/azure-static-web-apps-gentle-desert-01876f000.yml)
- **Secrets Required:** `AZURE_STATIC_WEB_APPS_API_TOKEN_*`, plus optional EmailJS env vars.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
