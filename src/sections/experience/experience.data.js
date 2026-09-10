import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';

/* Reverse-chronological (most recent first). `Icon` is a component, not an element. */
export const EXPERIENCES = [
  {
    type: 'work',
    Icon: WorkIcon,
    title: 'Software Development Intern',
    org: 'Humora Technologies Private Limited',
    period: 'Aug 2026 – Present',
    desc: 'Building and shipping web platform features across Next.js, backend services, and CI/CD.',
    color: '#059669',
  },
  {
    type: 'achievement',
    Icon: EmojiEventsIcon,
    title: 'Open Source Contributor',
    org: 'Hacktoberfest',
    period: 'Oct 2025 - Nov 2025',
    desc: 'Ranked Top 10,000 globally in Hacktoberfest 2025 and earned the Supercontributor badge.',
    color: '#B45309',
  },
  {
    type: 'education',
    Icon: SchoolIcon,
    title: 'B.Tech in Electronics and Communication Engineering',
    org: 'National Institute of Technology Andhra Pradesh',
    period: 'Aug 2023 - Present',
    desc: 'Final-year ECE student pursuing a Minor in Software Engineering.',
    color: '#0E7490',
  },
];
