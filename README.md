# 🌌 Developer Portfolio

A modern, highly interactive personal portfolio built with **React 19**, **Vite 8**, **Material UI (v9)**, **Framer Motion (v12)**, and **React Router DOM (v7)**. Dark-mode glassmorphism aesthetic, structured as a single continuous landing page (`/`) with every section also reachable as its own lazy route (`/projects`, `/experience`, `/github`, `/contact`), and deployed to **Azure Static Web Apps**.

🔗 **Live:** [www.sahitya.codes](https://www.sahitya.codes)

---

## ✨ Features

- **Hybrid routing:** One continuous scroll page (`/`) — Hero → Projects → Experience → GitHub → Contact — with an `IntersectionObserver` scroll-spy navbar and hash routing to each section. Every section is **also** a standalone lazy route (`/experience`, `/github`, `/contact`), plus the interactive, filterable Projects archive at `/projects`. The same section component renders in both places.
- **Hero:** Serif headline, a floating "code editor" card, an animated stat row, and an auto-scrolling **skill-logo marquee** (brand icons that desaturate at rest and light up on hover).
- **Experience timeline:** Alternating two-column timeline with an animated spine and pulsing milestone nodes, in reverse-chronological order.
- **GitHub activity:** Count-up stat cards (contributions, repos, stars, followers) plus lazily-loaded contribution graph and language widgets — the graph scrolls horizontally on mobile so it stays legible.
- **Contact:** Two-column form (details + message) wired to **EmailJS** with client-side validation and a success state.
- **Résumé:** Linked straight to Google Drive so it's always current.
- **Responsive:** Fluid layouts down to mobile, with a slide-out navigation drawer.

---

## ⚡ Performance & robustness

- **Local font bundling:** All three families (`Playfair Display`, `Inter`, `JetBrains Mono`) are bundled via `@fontsource` and imported in `main.jsx` — there are **no** render-blocking Google Fonts requests.
- **Route code-splitting:** Every non-home route (`/projects`, `/experience`, `/github`, `/contact`) is loaded with `React.lazy` + a shared `<Suspense>`, keeping the landing bundle light.
- **Feature-folder modularity:** Each site section is a self-contained module under `src/sections/<name>/` (component + sub-components + its own `*.data.js`); shared primitives live in `src/components/`, and cross-cutting constants (identity, links, nav) sit in `src/config/site.js`.
- **GPU-friendly cursor glow:** The cursor spotlight moves with `translate3d` + `will-change: transform`, so mouse movement never triggers layout.
- **Off-main-thread scroll-spy:** Section highlighting uses a native `IntersectionObserver` instead of a per-frame scroll loop.
- **Scroll-safe reveals:** Section/element reveals are driven by the shared `useRevealOnce` hook (`useInView` with `once: true` latches), and cards use an opaque fill (no `backdrop-filter` drop-out), so nothing can get stuck invisible on a fast scroll.
- **CLS prevention:** Remote GitHub widgets use `loading="lazy"` and reserve their space up front (`aspect-ratio` / fixed heights) so nothing shifts when the SVGs land.
- **Mobile readability:** Card descriptions clamp to 3 lines on phones (2 on desktop); experience entries show in full.

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
├── config/
│   └── site.js                 # SITE identity, SOCIAL_LINKS, NAV_LINKS, SECTION_IDS
├── pages/                      # one component per route — thin composition only
│   ├── Home.jsx                # composes every section in scroll order
│   ├── Projects.jsx            # <SectionPage> → ProjectsArchive
│   ├── Experience.jsx          # <SectionPage> → ExperienceSection
│   ├── GitHub.jsx              # <SectionPage> → GitHubSection
│   ├── Contact.jsx             # <SectionPage> → ContactSection
│   └── NotFound.jsx            # styled 404 for the `*` catch-all route
├── sections/                   # one self-contained folder per site section
│   ├── hero/                   # Hero, HeroIntro, CodeCard, StatsBar, SkillsStrip,
│   │                           #   MarqueeRow, SkillIcon, hero.data.js
│   ├── projects/               # ProjectsPreview (home teaser) + ProjectsArchive (/projects)
│   ├── experience/             # ExperienceSection, TimelineItem, TimelineLine, experience.data.js
│   ├── github/                 # GitHubSection, GitHubStatCards, ContributionGraph,
│   │                           #   GitHubWidgets, github.data.js
│   └── contact/                # ContactSection, ContactForm, ContactSuccess,
│                               #   useContactForm.js, emailjs.config.js
├── components/
│   ├── layout/
│   │   ├── PageWrapper.jsx     # Navbar + <main> + Footer shell
│   │   ├── SectionPage.jsx     # padding + ambient orbs for standalone section routes
│   │   ├── PageLoader.jsx      # <Suspense> fallback spinner
│   │   ├── navbar/             # Navbar shell, Logo, DesktopNav, MobileDrawer, navActive.js
│   │   └── footer/             # Footer + SocialLinks
│   └── ui/                     # shared primitives: GlowCard, FadeIn, SectionHeader,
│                               #   TechBadge, ProjectCard, FilterChip, CursorGlow,
│                               #   AnimatedCounter, Section, ScrollProgressBar,
│                               #   ScrollToHash, LeetCodeIcon
├── data/
│   └── projects.js             # ALL_PROJECTS + FEATURED_IDS + filter/featured helpers
├── hooks/
│   ├── useRevealOnce.js        # useRef + useInView reveal primitive + REVEAL_EASE
│   └── useScrollSpy.js         # IntersectionObserver section-tracking hook
├── theme/
│   ├── GlobalStyles.jsx        # Body layers, scrollbar, keyframes
│   └── theme.js                # MUI theme (violet/cyan dark palette)
├── App.jsx                     # ThemeProvider + Router + <Routes>
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
| Identity, résumé URL, GitHub username, socials, nav links | [src/config/site.js](src/config/site.js) |
| Hero copy | `HeroIntro` in [src/sections/hero/HeroIntro.jsx](src/sections/hero/HeroIntro.jsx) |
| Skills marquee / hero stats | `SKILLS` / `HERO_STATS` in [src/sections/hero/hero.data.js](src/sections/hero/hero.data.js) |
| Featured projects (home teaser) | `FEATURED_IDS` in [src/data/projects.js](src/data/projects.js) |
| Full projects archive | `ALL_PROJECTS` in [src/data/projects.js](src/data/projects.js) |
| Experience timeline | `EXPERIENCES` in [src/sections/experience/experience.data.js](src/sections/experience/experience.data.js) |
| GitHub stat figures | `GITHUB_STATS` in [src/sections/github/github.data.js](src/sections/github/github.data.js) |
| EmailJS env keys | [src/sections/contact/emailjs.config.js](src/sections/contact/emailjs.config.js) |
| Palette & typography | [src/theme/theme.js](src/theme/theme.js); font weights in [src/main.jsx](src/main.jsx) |

---

## 🌐 Deployment

Deployed to **Azure Static Web Apps** via GitHub Actions.

- **Workflow:** [.github/workflows/azure-static-web-apps-gentle-desert-01876f000.yml](.github/workflows/azure-static-web-apps-gentle-desert-01876f000.yml)
- **Secrets:** `AZURE_STATIC_WEB_APPS_API_TOKEN_*`, plus the optional `VITE_EMAILJS_*` values.
- **SPA fallback:** [public/staticwebapp.config.json](public/staticwebapp.config.json) rewrites unknown paths to `/index.html` so deep links like `/experience` resolve on refresh (React Router then shows the section, or the `NotFound` page).

---

## 📄 License

MIT — see [LICENSE](LICENSE).
