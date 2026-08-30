/* ─────────────────────────────────────────────────────────────
   SITE CONFIG — single source of truth for cross-cutting
   constants (identity, external links, nav structure). Anything
   referenced from more than one section belongs here.
───────────────────────────────────────────────────────────── */

export const SITE = {
  name: 'Sahitya Kushwaha',
  domain: 'sahitya.codes',
  role: 'Full-Stack Dev',
  email: 'sahitya7985@gmail.com',
  githubUsername: 'sahitya1903',
  resumeUrl:
    'https://drive.google.com/file/d/16G18Yy2UuTh1dVhpYcjGkzCxi9YOVJx7/view?usp=sharing',
};

export const GITHUB_URL = `https://github.com/${SITE.githubUsername}`;

/* Home-page section ids — used for hash links + scroll-spy. */
export const SECTION_IDS = {
  hero: 'hero',
  projects: 'projects',
  experience: 'experience',
  github: 'github',
  contact: 'contact',
};

/* The scroll-spy watches these, in document order. */
export const SPY_SECTION_IDS = [
  SECTION_IDS.projects,
  SECTION_IDS.experience,
  SECTION_IDS.github,
  SECTION_IDS.contact,
];

/* Nav links. `hash` scrolls within Home; `route` is the standalone page that
   renders the same section (hybrid routing) — used for active-state matching. */
export const NAV_LINKS = [
  { label: 'Projects', hash: `/#${SECTION_IDS.projects}`, route: '/projects' },
  { label: 'Experience', hash: `/#${SECTION_IDS.experience}`, route: '/experience' },
  { label: 'GitHub', hash: `/#${SECTION_IDS.github}`, route: '/github' },
  { label: 'Contact', hash: `/#${SECTION_IDS.contact}`, route: '/contact' },
];

/* Footer social links. `icon` is a key resolved to an element in SocialLinks. */
export const SOCIAL_LINKS = [
  { icon: 'github', href: GITHUB_URL, label: 'GitHub', color: '#F0F6FC' },
  { icon: 'linkedin', href: 'https://linkedin.com/in/sahityakushwaha', label: 'LinkedIn', color: '#4DABF7' },
  { icon: 'email', href: `mailto:${SITE.email}`, label: 'Email', color: '#A78BFA' },
  { icon: 'leetcode', href: 'https://leetcode.com/u/sahitya1903/', label: 'LeetCode', color: '#FFA116' },
];
