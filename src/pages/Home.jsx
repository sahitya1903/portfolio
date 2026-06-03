import { Box, Container, Typography, Button, Grid, Chip, LinearProgress, Avatar } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { alpha } from '@mui/material/styles';

import GlowCard from '../components/ui/GlowCard';
import TechBadge from '../components/ui/TechBadge';
import SectionHeader from '../components/ui/SectionHeader';
import { VIOLET, VIOLET_LIGHT, VIOLET_DARK, BORDER, BG_ELEVATED } from '../theme/theme';

/* ─────────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────────── */

const TECH_STACK = [
  { name: 'React', color: '#61DAFB', desc: 'UI Library' },
  { name: 'Vite', color: '#646CFF', desc: 'Build Tool' },
  { name: 'Material UI', color: '#0081CB', desc: 'Component Library' },
  { name: 'JavaScript', color: '#F7DF1E', desc: 'Language' },
  { name: 'Node.js', color: '#68A063', desc: 'Runtime' },
  { name: 'Express.js', color: '#999', desc: 'Web Framework' },
  { name: 'MongoDB', color: '#47A248', desc: 'NoSQL Database' },
  { name: 'MySQL', color: '#4479A1', desc: 'SQL Database' },
  { name: 'Git & GitHub', color: '#F1502F', desc: 'Version Control' },
];

const PROJECTS = [
  {
    id: 'roomify',
    title: 'Roomify',
    desc: 'A full-stack hotel booking and rental platform. Enables landlords to list properties and tenants to discover, filter, and book rooms — with real-time availability, JWT auth, and an admin dashboard.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MUI'],
    accent: VIOLET,
    accentLight: VIOLET_LIGHT,
    flag: 'Flagship',
    github: 'https://github.com/sahityakushwaha/roomify',
    live: 'https://roomify.onrender.com',
    stats: [{ label: 'Status', value: 'Active' }, { label: 'Type', value: 'Full-Stack' }, { label: 'DB', value: 'MongoDB' }],
  },
  {
    id: 'drowsiness-detection',
    title: 'Driver Drowsiness Detection',
    desc: 'Real-time drowsiness detection system using computer vision and deep learning. Monitors eye aspect ratio and facial landmarks to trigger audio alerts and prevent accidents.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Streamlit'],
    accent: '#F59E0B',
    accentLight: '#FCD34D',
    flag: 'AI / ML',
    github: 'https://github.com/sahityakushwaha/driver-drowsiness-detection',
    live: 'https://driver-drowsiness-detection.streamlit.app',
    stats: [{ label: 'Status', value: 'Deployed' }, { label: 'Type', value: 'AI / ML' }, { label: 'Model', value: 'CNN' }],
  },
  {
    id: 'animal-detection',
    title: 'Animal Detection & Alert',
    desc: 'Real-time animal detection using YOLOv5 and OpenCV. Detects animals in video streams and fires automated alerts — designed for wildlife monitoring and farm perimeter security.',
    tags: ['Python', 'YOLO', 'OpenCV'],
    accent: '#10B981',
    accentLight: '#34D399',
    flag: null,
    github: 'https://github.com/sahityakushwaha/animal-detection-alert',
    live: null,
    stats: [{ label: 'Status', value: 'Complete' }, { label: 'Type', value: 'Computer Vision' }, { label: 'Model', value: 'YOLOv5' }],
  },
];

const SKILLS = [
  {
    category: 'Frontend', icon: <BrushIcon />, color: '#06B6D4', items: [
      { name: 'React', level: 90 },
      { name: 'Material UI', level: 88 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'HTML & CSS', level: 92 },
      { name: 'Framer Motion', level: 75 },
    ]
  },
  {
    category: 'Backend', icon: <StorageIcon />, color: '#10B981', items: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'MongoDB', level: 78 },
      { name: 'MySQL', level: 72 },
    ]
  },
  {
    category: 'Dev Tools', icon: <CodeIcon />, color: VIOLET_LIGHT, items: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Vite', level: 82 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 80 },
      { name: 'Vercel / Netlify', level: 78 },
    ]
  },
];

const EXPERIENCES = [
  {
    type: 'education',
    icon: <SchoolIcon />,
    title: 'B.Tech in Electronics and Communication Engineering',
    org: 'NIT Andhra Pradesh',
    period: '2023 – 2027',
    desc: 'Pursuing a Minor in Software Engineering, along with major degree in ECE. Active member of the open-source community.',
    color: '#06B6D4',
  },
  {
    type: 'achievement',
    icon: <EmojiEventsIcon />,
    title: 'Hacktoberfest Contributor',
    org: 'Hacktoberfest',
    period: '2025',
    desc: 'Secured Top 10,000 rank globally, earned the Supercontributor badge and received official Hacktoberfest T-shirt',
    color: '#F59E0B',
  },
  {
    type: 'work',
    icon: <WorkIcon />,
    title: 'Full-Stack Developer',
    org: 'Open Source / Freelance',
    period: '2024 – Present',
    desc: 'Building and shipping production web apps — MERN stack, REST APIs, and cloud deployments.',
    color: VIOLET_LIGHT,
  },
  {
    type: 'achievement',
    icon: <StarIcon />,
    title: '600+ GitHub Contributions',
    org: 'github.com/sahitya1903',
    period: '2024 – Present',
    desc: 'Consistent open-source contributor with an active streak spanning multiple projects — web, AI/ML, and tooling.',
    color: '#10B981',
  },
];

const STATS = [
  { value: '2+', label: 'Years Coding' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '600+', label: 'GitHub Contributions' },
  { value: '6+', label: 'Tech Stack Tools' },
];

/* ─────────────────────────────────────────────────────────────
   FADE-IN WRAPPER
───────────────────────────────────────────────────────────── */
const FadeIn = ({ children, delay = 0, y = 24, sx = {} }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    style={{ ...sx }}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────
   SECTION WRAPPER
───────────────────────────────────────────────────────────── */
const Section = ({ children, id, sx = {} }) => (
  <Box
    component="section"
    id={id}
    sx={{ py: { xs: 8, md: 12 }, ...sx }}
  >
    <Container maxWidth="lg">
      {children}
    </Container>
  </Box>
);

/* ─────────────────────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────────────────────── */
const Hero = () => (
  <Box
    component="section"
    id="hero"
    sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Ambient orbs */}
    <Box sx={{
      position: 'absolute', top: '20%', left: '60%',
      width: 600, height: 600,
      borderRadius: '50%',
      background: `radial-gradient(circle, ${alpha(VIOLET, 0.15)} 0%, transparent 65%)`,
      filter: 'blur(40px)',
      animation: 'float 8s ease-in-out infinite',
      pointerEvents: 'none',
    }} />
    <Box sx={{
      position: 'absolute', bottom: '10%', left: '5%',
      width: 400, height: 400,
      borderRadius: '50%',
      background: `radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 65%)`,
      filter: 'blur(40px)',
      animation: 'float 10s ease-in-out infinite reverse',
      pointerEvents: 'none',
    }} />

    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: { xs: 6, md: 0 } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 7 }}>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box
              sx={{
                display: 'inline-flex', alignItems: 'center', gap: 1,
                px: 2, py: 0.75, mb: 3,
                borderRadius: '100px',
                border: `1px solid ${alpha(VIOLET, 0.35)}`,
                background: alpha(VIOLET, 0.08),
              }}
            >
              <Box sx={{
                width: 8, height: 8, borderRadius: '50%',
                background: '#10B981',
                boxShadow: '0 0 8px #10B981',
                animation: 'pulse-glow 2s ease infinite',
              }} />
              <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.72rem', color: '#94A3B8', letterSpacing: '0.06em' }}>
                Open to opportunities · sahitya.codes
              </Typography>
            </Box>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: '2.4rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
                color: '#F8FAFC',
                mb: 0.5,
              }}
            >
              Building{' '}
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(135deg, ${VIOLET_LIGHT}, ${VIOLET}, #06B6D4)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                digital
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '2.4rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
                color: '#F8FAFC',
                display: 'block',
              }}
            >
              experiences
            </Typography>
          </motion.div>

          {/* Sub headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography
              variant="body1"
              sx={{ mt: 3, mb: 4, maxWidth: 480, fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.75, color: '#64748B' }}
            >
              Hey, I'm{' '}
              <Box component="span" sx={{ color: '#94A3B8', fontWeight: 500 }}>Sahitya Kushwaha</Box>
              {' '}— a full-stack developer passionate about building fast, beautiful, and accessible web applications with modern tooling.
            </Typography>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                id="hero-view-projects"
                variant="contained"
                size="large"
                component={RouterLink}
                to="/projects"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 3, py: 1.4, fontSize: '0.95rem' }}
              >
                View Projects
              </Button>
            </Box>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <Box sx={{ display: 'flex', gap: 2, mt: 4, alignItems: 'center' }}>
              {[
                { icon: <GitHubIcon sx={{ fontSize: 20 }} />, href: 'https://github.com/sahitya1903', label: 'GitHub' },
                { icon: <LinkedInIcon sx={{ fontSize: 20 }} />, href: 'https://linkedin.com/in/sahityakushwaha', label: 'LinkedIn' },
              ].map(({ icon, href, label }) => (
                <Box
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  sx={{
                    display: 'flex', alignItems: 'center', gap: 0.75,
                    color: '#475569', textDecoration: 'none', fontSize: '0.82rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: VIOLET_LIGHT },
                  }}
                >
                  {icon}
                  <Typography sx={{ fontSize: '0.82rem', fontWeight: 500, color: 'inherit' }}>{label}</Typography>
                </Box>
              ))}
              {/* divider */}
              <Box sx={{ width: '1px', height: 14, background: '#1E293B' }} />
              {/* LeetCode */}
              <Box
                component="a"
                href="https://leetcode.com/u/sahitya1903/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                sx={{
                  display: 'flex', alignItems: 'center', gap: 0.75,
                  color: '#475569', textDecoration: 'none', fontSize: '0.82rem',
                  transition: 'color 0.2s',
                  '&:hover': { color: '#FFA116' },
                }}
              >
                <Box sx={{ width: 16, height: 16, borderRadius: '3px', background: '#FFA116', opacity: 0.85, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Box component="span" sx={{ fontSize: '8px', fontWeight: 900, color: '#fff', lineHeight: 1 }}>LC</Box>
                </Box>
                <Typography sx={{ fontSize: '0.82rem', fontWeight: 500, color: 'inherit' }}>LeetCode</Typography>
              </Box>
            </Box>
          </motion.div>
        </Grid>

        {/* Right column — floating code card */}
        <Grid size={{ xs: 12, md: 5 }}>
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ animation: 'float 7s ease-in-out infinite' }}
          >
            <GlowCard sx={{ p: 3 }}>
              {/* Terminal header */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
                {['#EF4444', '#F59E0B', '#10B981'].map((c) => (
                  <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.85 }} />
                ))}
                <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#475569', ml: 1 }}>
                  sahitya.dev ~ main
                </Typography>
              </Box>

              {/* Code snippet */}
              <Box sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.78rem', lineHeight: 1.85 }}>
                {[
                  { indent: 0, color: '#9D6FFF', text: 'const developer = {' },
                  { indent: 1, color: '#94A3B8', text: <><Box component="span" sx={{ color: '#38BDF8' }}>name</Box>: <Box component="span" sx={{ color: '#86EFAC' }}>"Sahitya Kushwaha"</Box>,</> },
                  { indent: 1, color: '#94A3B8', text: <><Box component="span" sx={{ color: '#38BDF8' }}>domain</Box>: <Box component="span" sx={{ color: '#86EFAC' }}>"sahitya.codes"</Box>,</> },
                  { indent: 1, color: '#94A3B8', text: <><Box component="span" sx={{ color: '#38BDF8' }}>role</Box>: <Box component="span" sx={{ color: '#86EFAC' }}>"Full-Stack Dev"</Box>,</> },
                  { indent: 1, color: '#94A3B8', text: <><Box component="span" sx={{ color: '#38BDF8' }}>stack</Box>: [<Box component="span" sx={{ color: '#86EFAC' }}>"React"</Box>, <Box component="span" sx={{ color: '#86EFAC' }}>"Node"</Box>],</> },
                  { indent: 1, color: '#94A3B8', text: <><Box component="span" sx={{ color: '#38BDF8' }}>open</Box>: <Box component="span" sx={{ color: '#FB923C' }}>true</Box>,</> },
                  { indent: 0, color: '#9D6FFF', text: '};' },
                  { indent: 0, color: '#64748B', text: '' },
                  { indent: 0, color: '#9D6FFF', text: <><Box component="span" sx={{ color: '#38BDF8' }}>console</Box>.log(<Box component="span" sx={{ color: '#86EFAC' }}>"Ready to build!"</Box>);</> },
                ].map((line, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      pl: line.indent * 2,
                      '&::before': {
                        content: `"${String(i + 1).padStart(2, ' ')}"`,
                        color: '#334155',
                        mr: 2,
                        fontSize: '0.68rem',
                        userSelect: 'none',
                        flexShrink: 0,
                      },
                    }}
                  >
                    <Box component="span" sx={{ color: line.color }}>{line.text}</Box>
                  </Box>
                ))}
              </Box>

              {/* Cursor blink */}
              <Box sx={{
                display: 'inline-block', width: '2px', height: '16px',
                background: VIOLET_LIGHT, mt: 0.5, ml: 1,
                animation: 'pulse-glow 1s step-end infinite',
                verticalAlign: 'middle',
              }} />
            </GlowCard>
          </motion.div>
        </Grid>
      </Grid>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            pt: 4,
            borderTop: `1px solid ${BORDER}`,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
            gap: 2,
          }}
        >
          {STATS.map(({ value, label }) => (
            <Box key={label} sx={{ textAlign: 'center' }}>
              <Typography sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: { xs: '1.6rem', md: '2rem' },
                fontWeight: 700,
                background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #fff)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {value}
              </Typography>
              <Typography variant="body2" sx={{ color: '#475569', mt: 0.25, fontSize: '0.8rem' }}>
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </motion.div>
    </Container>
  </Box>
);

/* ─────────────────────────────────────────────────────────────
   TECH STACK SECTION
───────────────────────────────────────────────────────────── */
const TechStackSection = () => (
  <Section id="tech-stack" sx={{ borderTop: `1px solid ${BORDER}` }}>
    <SectionHeader
      label="Tech Stack"
      title={<>Tools I <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #06B6D4)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>build with</Box></>}
      subtitle="A curated set of modern technologies I use to ship fast, scalable, and maintainable products."
    />
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' },
        gap: 2,
      }}
    >
      {TECH_STACK.map((tech, i) => (
        <FadeIn key={tech.name} delay={i * 0.07}>
          <GlowCard sx={{ p: 3, height: '100%', cursor: 'default' }} glowIntensity={0.6}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
              {/* Color dot as logo substitute */}
              <Box
                sx={{
                  width: 40, height: 40, borderRadius: '10px',
                  background: alpha(tech.color, 0.15),
                  border: `1px solid ${alpha(tech.color, 0.3)}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Box sx={{ width: 14, height: 14, borderRadius: '50%', background: tech.color, boxShadow: `0 0 8px ${alpha(tech.color, 0.7)}` }} />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', color: 'text.primary', lineHeight: 1.2 }}>
                  {tech.name}
                </Typography>
                <Typography sx={{ fontSize: '0.72rem', color: '#475569', fontFamily: '"JetBrains Mono", monospace' }}>
                  {tech.desc}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ height: '3px', borderRadius: '2px', background: `linear-gradient(90deg, ${alpha(tech.color, 0.8)}, ${alpha(tech.color, 0.2)})`, mt: 1 }} />
          </GlowCard>
        </FadeIn>
      ))}
    </Box>
  </Section>
);

/* ─────────────────────────────────────────────────────────────
   PROJECTS SECTION
───────────────────────────────────────────────────────────── */
const ProjectsSection = () => (
  <Section id="featured-projects" sx={{ borderTop: `1px solid ${BORDER}` }}>
    <SectionHeader
      label="Featured Work"
      title={<>Projects that <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #06B6D4)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ship value</Box></>}
      subtitle="Hand-picked highlights from my portfolio. Each built end-to-end with attention to performance, UX, and code quality."
    />
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {PROJECTS.map((project, i) => (
        <FadeIn key={project.id} delay={i * 0.1}>
          <GlowCard sx={{ p: { xs: 3, md: 4 } }} glowIntensity={0.7}>
            <Grid container spacing={3} alignItems="flex-start">
              <Grid size={{ xs: 12, md: 8 }}>
                {/* Header row */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2, flexWrap: 'wrap' }}>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.2rem', color: 'text.primary' }}>
                    {project.title}
                  </Typography>
                  {project.flag && (
                    <Chip
                      label={project.flag}
                      size="small"
                      sx={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: '0.62rem',
                        height: 20,
                        background: alpha(project.accent, 0.2),
                        color: project.accentLight,
                        border: `1px solid ${alpha(project.accent, 0.4)}`,
                        borderRadius: '4px',
                      }}
                    />
                  )}
                </Box>

                <Typography variant="body1" sx={{ color: '#64748B', mb: 2.5, lineHeight: 1.75 }}>
                  {project.desc}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {project.tags.map((tag) => (
                    <TechBadge key={tag} label={tag} color={project.accent} />
                  ))}
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    id={`project-${project.id}-github`}
                    variant="outlined"
                    size="small"
                    startIcon={<GitHubIcon sx={{ fontSize: '15px !important' }} />}
                    component="a"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ fontSize: '0.78rem' }}
                  >
                    Code
                  </Button>
                  {project.live && (
                    <Button
                      id={`project-${project.id}-live`}
                      variant="contained"
                      size="small"
                      endIcon={<OpenInNewIcon sx={{ fontSize: '13px !important' }} />}
                      component="a"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ fontSize: '0.78rem' }}
                    >
                      Live Demo
                    </Button>
                  )}
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{
                  background: `rgba(255,255,255,0.02)`,
                  border: `1px solid ${BORDER}`,
                  borderRadius: '10px',
                  p: 2.5,
                }}>
                  {project.stats.map(({ label, value }) => (
                    <Box key={label} sx={{ display: 'flex', justifyContent: 'space-between', py: 1, borderBottom: `1px solid ${BORDER}`, '&:last-child': { borderBottom: 'none', pb: 0 } }}>
                      <Typography sx={{ fontSize: '0.75rem', color: '#475569', fontFamily: '"JetBrains Mono", monospace' }}>{label}</Typography>
                      <Typography sx={{ fontSize: '0.75rem', color: project.accentLight, fontFamily: '"JetBrains Mono", monospace', fontWeight: 600 }}>{value}</Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </GlowCard>
        </FadeIn>
      ))}
    </Box>

    <Box sx={{ textAlign: 'center', mt: 6 }}>
      <Button
        id="view-all-projects"
        variant="outlined"
        size="large"
        component={RouterLink}
        to="/projects"
        endIcon={<ArrowOutwardIcon />}
        sx={{ px: 4 }}
      >
        View All Projects
      </Button>
    </Box>
  </Section>
);

/* ─────────────────────────────────────────────────────────────
   EXPERIENCE & ACHIEVEMENTS SECTION
───────────────────────────────────────────────────────────── */
const ExperienceSection = () => (
  <Section id="experience" sx={{ borderTop: `1px solid ${BORDER}` }}>
    <SectionHeader
      label="Experience"
      title={<>Journey & <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #10B981)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Milestones</Box></>}
      subtitle="Education, work experience, and key achievements that shaped who I am as a developer."
    />
    <Box sx={{ position: 'relative' }}>
      {/* Vertical timeline line */}
      <Box sx={{
        position: 'absolute',
        left: { xs: 20, md: '50%' },
        top: 0, bottom: 0,
        width: '1px',
        background: `linear-gradient(to bottom, transparent, ${alpha(VIOLET, 0.5)}, transparent)`,
        display: { xs: 'none', md: 'block' },
      }} />

      {EXPERIENCES.map((exp, i) => {
        const isLeft = i % 2 === 0;
        return (
          <FadeIn key={i} delay={i * 0.1}>
            <Grid container sx={{ mb: 4 }} justifyContent="center">
              <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 0, md: isLeft ? 0 : 2 } }}>
                <GlowCard
                  sx={{
                    p: 3,
                    mr: { md: isLeft ? 3 : 0 },
                    ml: { md: isLeft ? 0 : 3 },
                  }}
                  glowIntensity={0.5}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box
                      sx={{
                        width: 40, height: 40, borderRadius: '10px', flexShrink: 0,
                        background: alpha(exp.color, 0.15),
                        border: `1px solid ${alpha(exp.color, 0.3)}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: exp.color,
                      }}
                    >
                      {exp.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: 'text.primary', mb: 0.25 }}>
                        {exp.title}
                      </Typography>
                      <Typography sx={{ fontSize: '0.78rem', color: exp.color, fontFamily: '"JetBrains Mono", monospace', mb: 0.5 }}>
                        {exp.org} · {exp.period}
                      </Typography>
                      <Typography sx={{ fontSize: '0.83rem', color: '#64748B', lineHeight: 1.65 }}>
                        {exp.desc}
                      </Typography>
                    </Box>
                  </Box>
                </GlowCard>
              </Grid>

              {/* Center dot */}
              <Grid
                size={{ xs: 0, md: 0 }}
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center', justifyContent: 'center',
                  order: 1, zIndex: 1,
                }}
              >
                <Box sx={{
                  width: 12, height: 12, borderRadius: '50%',
                  background: exp.color,
                  boxShadow: `0 0 12px ${alpha(exp.color, 0.7)}`,
                  border: '2px solid rgba(5,5,8,1)',
                }} />
              </Grid>

              <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 0, md: isLeft ? 2 : 0 } }} />
            </Grid>
          </FadeIn>
        );
      })}
    </Box>
  </Section>
);

/* ─────────────────────────────────────────────────────────────
   SKILLS SECTION
───────────────────────────────────────────────────────────── */
const SkillsSection = () => (
  <Section id="skills" sx={{ borderTop: `1px solid ${BORDER}` }}>
    <SectionHeader
      label="Skills"
      title={<>What I'm <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #F59E0B)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>good at</Box></>}
      subtitle="Proficiency levels across the full stack — from pixels to databases."
    />
    <Grid container spacing={3}>
      {SKILLS.map((skillGroup, gi) => (
        <Grid key={skillGroup.category} size={{ xs: 12, md: 4 }}>
          <FadeIn delay={gi * 0.15}>
            <GlowCard sx={{ p: 3, height: '100%' }} glowIntensity={0.6}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <Box sx={{
                  color: skillGroup.color,
                  width: 36, height: 36, borderRadius: '8px',
                  background: alpha(skillGroup.color, 0.1),
                  border: `1px solid ${alpha(skillGroup.color, 0.25)}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  '& svg': { fontSize: 18 },
                }}>
                  {skillGroup.icon}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary' }}>
                  {skillGroup.category}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {skillGroup.items.map((skill) => (
                  <Box key={skill.name}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.75 }}>
                      <Typography sx={{ fontSize: '0.82rem', color: '#94A3B8', fontWeight: 500 }}>
                        {skill.name}
                      </Typography>
                      <Typography sx={{ fontSize: '0.72rem', color: skillGroup.color, fontFamily: '"JetBrains Mono", monospace', fontWeight: 600 }}>
                        {skill.level}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 4, borderRadius: 2,
                        background: 'rgba(255,255,255,0.04)',
                        '& .MuiLinearProgress-bar': {
                          background: `linear-gradient(90deg, ${skillGroup.color}, ${alpha(skillGroup.color, 0.6)})`,
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </GlowCard>
          </FadeIn>
        </Grid>
      ))}
    </Grid>
  </Section>
);

/* ─────────────────────────────────────────────────────────────
   GITHUB ACTIVITY SECTION
───────────────────────────────────────────────────────────── */
const GitHubSection = () => {
  const GITHUB_USERNAME = 'sahitya1903';
  const GITHUB_STATS = [
    { label: 'Public Repos', value: '10+', color: VIOLET_LIGHT },
    { label: 'Stars Earned', value: '30+', color: '#F59E0B' },
    { label: 'Contributions', value: '600+', color: '#10B981' },
    { label: 'Followers', value: '20+', color: '#06B6D4' },
  ];

  return (
    <Section id="github" sx={{ borderTop: `1px solid ${BORDER}` }}>
      <SectionHeader
        label="GitHub Activity"
        title={<>Open source <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #10B981)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>footprint</Box></>}
        subtitle="Consistent contributor — shipping code, reviewing PRs, and building in public."
      />

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {GITHUB_STATS.map((stat, i) => (
          <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
            <FadeIn delay={i * 0.08}>
              <GlowCard sx={{ p: 3, textAlign: 'center' }}>
                <Typography sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '2rem', fontWeight: 700,
                  color: stat.color,
                  mb: 0.5,
                }}>
                  {stat.value}
                </Typography>
                <Typography sx={{ fontSize: '0.78rem', color: '#475569' }}>
                  {stat.label}
                </Typography>
              </GlowCard>
            </FadeIn>
          </Grid>
        ))}
      </Grid>

      <FadeIn>
        <GlowCard sx={{ p: 3, overflow: 'hidden' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5, flexWrap: 'wrap', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <GitHubIcon sx={{ color: '#94A3B8', fontSize: 20 }} />
              <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', color: '#94A3B8' }}>
                @{GITHUB_USERNAME}
              </Typography>
            </Box>
            <Button
              id="github-profile-link"
              variant="outlined"
              size="small"
              endIcon={<ArrowOutwardIcon sx={{ fontSize: '13px !important' }} />}
              component="a"
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontSize: '0.75rem' }}
            >
              Visit Profile
            </Button>
          </Box>

          {/* GitHub contribution graph image from ghchart */}
          <Box
            sx={{
              borderRadius: '8px',
              overflow: 'hidden',
              background: 'rgba(255,255,255,0.02)',
              border: `1px solid ${BORDER}`,
              p: 2,
            }}
          >
            <Box
              component="img"
              src={`https://ghchart.rshah.org/7C3AED/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME} GitHub contribution chart`}
              onError={(e) => { e.target.style.display = 'none'; }}
              sx={{ width: '100%', height: 'auto', display: 'block', filter: 'opacity(0.9)', borderRadius: '4px' }}
            />
          </Box>

          {/* GitHub stats card via stats.readme */}
          <Box sx={{ mt: 3, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
            <Box
              component="img"
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=9D6FFF&icon_color=7C3AED&text_color=94A3B8&bg_color=00000000`}
              alt="GitHub Stats"
              onError={(e) => { e.target.style.display = 'none'; }}
              sx={{ width: '100%', height: 'auto' }}
            />
            <Box
              component="img"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=9D6FFF&text_color=94A3B8&bg_color=00000000`}
              alt="Top Languages"
              onError={(e) => { e.target.style.display = 'none'; }}
              sx={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </GlowCard>
      </FadeIn>
    </Section>
  );
};

/* ─────────────────────────────────────────────────────────────
   CONTACT CTA SECTION
───────────────────────────────────────────────────────────── */
const ContactCTA = () => (
  <Section id="contact-cta" sx={{ borderTop: `1px solid ${BORDER}` }}>
    <FadeIn>
      <GlowCard
        sx={{
          p: { xs: 4, md: 8 },
          textAlign: 'center',
          background: `linear-gradient(145deg, ${alpha(VIOLET, 0.08)} 0%, rgba(13,13,20,0.95) 60%, ${alpha('#06B6D4', 0.04)} 100%)`,
          position: 'relative',
          overflow: 'hidden',
        }}
        glowIntensity={0.8}
      >
        {/* Decorative blobs */}
        <Box sx={{
          position: 'absolute', top: '-60px', right: '-60px',
          width: 250, height: 250, borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(VIOLET, 0.15)} 0%, transparent 60%)`,
          filter: 'blur(30px)', pointerEvents: 'none',
        }} />
        <Box sx={{
          position: 'absolute', bottom: '-40px', left: '-40px',
          width: 200, height: 200, borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha('#06B6D4', 0.1)} 0%, transparent 60%)`,
          filter: 'blur(25px)', pointerEvents: 'none',
        }} />

        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'inline-flex', alignItems: 'center', gap: 1,
              px: 2, py: 0.75, mb: 3, borderRadius: '100px',
              border: `1px solid ${alpha(VIOLET, 0.35)}`,
              background: alpha(VIOLET, 0.08),
            }}
          >
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', animation: 'pulse-glow 2s infinite' }} />
            <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.72rem', color: '#94A3B8' }}>
              Open to opportunities · Class of 2027
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{ mb: 2, color: 'text.primary' }}
          >
            Let's build something{' '}
            <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #06B6D4)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              great together
            </Box>
          </Typography>

          <Typography variant="body1" sx={{ maxWidth: 500, mx: 'auto', mb: 5, color: '#64748B', lineHeight: 1.8 }}>
            Whether you have a project in mind, want to collaborate, or just want to chat about tech — my inbox is always open.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              id="cta-email"
              variant="contained"
              size="large"
              component="a"
              href="mailto:sahitya7985@gmail.com"
              endIcon={<EmailOutlinedIcon />}
              sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
            >
              E-mail
            </Button>
            <Button
              id="cta-linkedin"
              variant="outlined"
              size="large"
              component="a"
              href="https://linkedin.com/in/sahityakushwaha"
              target="_blank"
              endIcon={<LinkedInIcon />}
              sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
            >
              LinkedIn
            </Button>
          </Box>

          <Typography sx={{
            mt: 4, fontFamily: '"JetBrains Mono", monospace', fontSize: '0.72rem',
            color: '#334155', letterSpacing: '0.06em',
          }}>
            Response time: usually within 24 hours · sahitya.codes
          </Typography>
        </Box>
      </GlowCard>
    </FadeIn>
  </Section>
);

/* ─────────────────────────────────────────────────────────────
   HOME PAGE (assembles all sections)
───────────────────────────────────────────────────────────── */
const Home = () => (
  <>
    <Hero />
    <TechStackSection />
    <ProjectsSection />
    <ExperienceSection />
    <SkillsSection />
    <GitHubSection />
    <ContactCTA />
  </>
);

export default Home;
