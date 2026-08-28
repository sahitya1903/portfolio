# 🌌 Developer Portfolio

A modern, highly interactive personal portfolio built with **React 19**, **Vite 8**, **Material UI (v9)**, **Framer Motion (v12)**, and **React Router DOM (v7)**. Dark-mode glassmorphism aesthetic, structured as a single continuous landing page (`/`) with a separate filterable Projects archive (`/projects`), and deployed to **Azure Static Web Apps**.

🔗 **Live:** [www.sahitya.codes](https://www.sahitya.codes)

---

## ✨ Features

- **Landing flow + archive:** One continuous scroll page (`/`) — Hero → Projects → Experience → GitHub → Contact — with an `IntersectionObserver` scroll-spy navbar, hash routing to each section, and a separate interactive, filterable Projects archive (`/projects`).
- **Hero:** Serif headline, a floating "code editor" card, an animated stat row, and an auto-scrolling **skill-logo marquee** (brand icons that desaturate at rest and light up on hover).
- **Experience timeline:** Alternating two-column timeline with an animated spine and pulsing milestone nodes, in reverse-chronological order.
- **GitHub activity:** Stat cards plus lazily-loaded contribution graph / language widgets.
- **Contact:** Two-column form (details + message) wired to **EmailJS** with client-side validation and a success state.
- **Résumé:** Linked straight to Google Drive so it's always current.
- **Responsive:** Fluid layouts down to mobile, with a slide-out navigation drawer.

---

## ⚡ Performance & robustness

- **Local font bundling:** All three families (`Playfair Display`, `Inter`, `JetBrains Mono`) are bundled via `@fontsource` and imported in `main.jsx` — there are **no** render-blocking Google Fonts requests.
- **Route code-splitting:** The `/projects` archive is loaded with `React.lazy` + `<Suspense>`, keeping the landing bundle light.
- **GPU-friendly cursor glow:** The cursor spotlight moves with `translate3d` + `will-change: transform`, so mouse movement never triggers layout.
- **Off-main-thread scroll-spy:** Section highlighting uses a native `IntersectionObserver` instead of a per-frame scroll loop.
- **Scroll-safe reveals:** Section/element reveals are driven by the `useInView` hook (`once: true` latches), and cards use an opaque fill (no `backdrop-filter` drop-out), so nothing can get stuck invisible on a fast scroll.
- **CLS prevention:** Remote GitHub widgets use `loading="lazy"` inside fixed-height containers.

---

## 📂 Curated Projects

- **[Roomify](https://github.com/sahitya1903/roomify)** — Full-stack hotel booking & sharing platform (MVC): Passport.js auth, Mapbox geocoding, Cloudinary uploads, Docker, GitHub Actions CI/CD to Docker Hub.
- **[Resume Syncer](https://github.com/sahitya1903/resume-syncer)** — Published GitHub Actions Marketplace action automating a 5-stage Overleaf → Google Drive résumé sync (Selenium, Git, Google Drive API).
- **[Alert Drive](https://github.com/sahitya1903/alert-drive)** — Real-time driver drowsiness detection: OpenCV Haar Cascades + a MobileNet eye-state classifier.
- **[Dev Portfolio V2](https://github.com/sahitya1903/portfolio)** — This site.

*The `/projects` route holds the full archive of 11 projects (MERN + SQL experiments, JavaDSA, automation, etc.), filterable by focus area.*

---

## 🛠️ Tech Stack

| Area | Tools |
| --- | --- |
| Framework & tooling | [React 19](https://react.dev/), [Vite 8](https://vite.dev/) |
| UI & styling | [Material UI v9](https://mui.com/), [Emotion](https://emotion.sh/) |
| Animation | [Framer Motion v12](https://www.framer.com/motion/) |
| Routing | [React Router DOM v7](https://reactrouter.com/) |
| Icons | [`@mui/icons-material`](https://mui.com/material-ui/material-icons/), [`react-icons`](https://react-icons.github.io/react-icons/) (skill logos) |
| Fonts | [`@fontsource`](https://fontsource.org/) — Playfair Display, Inter, JetBrains Mono |
| Contact form | [EmailJS](https://www.emailjs.com/) |
| Deployment | [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static) |

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── layout/
│   │   ├── Footer.jsx          # Footer with brand-coloured social links
│   │   ├── Navbar.jsx          # Fixed navbar, scroll-spy, mobile drawer
│   │   └── PageWrapper.jsx     # Navbar + <main> + Footer shell
│   └── ui/
│       ├── CursorGlow.jsx      # Mouse-following spotlight overlay
│       ├── FadeIn.jsx          # Scroll-into-view reveal wrapper (useInView)
│       ├── GlowCard.jsx        # Glass card with radial hover glow
│       ├── SectionHeader.jsx   # Animated section heading + subtitle
│       └── TechBadge.jsx       # Accent-tinted tech chip
├── pages/
│   ├── Home.jsx                # Hero, skills strip, featured projects, GitHub — plus section order
│   ├── About.jsx               # Experience & Milestones timeline (#experience)
│   ├── Projects.jsx            # /projects archive with live filters
│   └── Contact.jsx             # Two-column EmailJS contact form
├── theme/
│   ├── GlobalStyles.jsx        # Body layers, scrollbar, keyframes
│   └── theme.js                # MUI theme (violet/cyan dark palette)
├── App.jsx                     # Routes, scroll-progress bar, ScrollToHash
└── main.jsx                    # Font imports + DOM mount
public/
└── logo.png
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/sahitya1903/portfolio.git
cd portfolio
npm install
```

```bash
# Optional — EmailJS (contact form). The site runs fine without these;
# the form just won't send. Put them in a .env file:
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

```bash
npm run dev      # local dev server
npm run lint     # eslint
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

---

## 🎨 Customization Guide

| What | Where |
| --- | --- |
| Title / SEO meta | [index.html](index.html) |
| Hero copy | `Hero` in [src/pages/Home.jsx](src/pages/Home.jsx) |
| Skills marquee | `SKILLS` array in [src/pages/Home.jsx](src/pages/Home.jsx) |
| Hero stats / featured projects | `STATS` / `PROJECTS` in [src/pages/Home.jsx](src/pages/Home.jsx) |
| Experience timeline | `EXPERIENCES` in [src/pages/About.jsx](src/pages/About.jsx) |
| Full projects archive | `ALL_PROJECTS` in [src/pages/Projects.jsx](src/pages/Projects.jsx) |
| GitHub username / stats | `GitHubSection` in [src/pages/Home.jsx](src/pages/Home.jsx) |
| EmailJS | [src/pages/Contact.jsx](src/pages/Contact.jsx) |
| Palette & typography | [src/theme/theme.js](src/theme/theme.js); font weights in [src/main.jsx](src/main.jsx) |

---

## 🌐 Deployment

Deployed to **Azure Static Web Apps** via GitHub Actions.

- **Workflow:** [.github/workflows/azure-static-web-apps-gentle-desert-01876f000.yml](.github/workflows/azure-static-web-apps-gentle-desert-01876f000.yml)
- **Secrets:** `AZURE_STATIC_WEB_APPS_API_TOKEN_*`, plus the optional `VITE_EMAILJS_*` values.

---

## 📄 License

MIT — see [LICENSE](LICENSE).
