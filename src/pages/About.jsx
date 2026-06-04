import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import { alpha } from '@mui/material/styles';

import GlowCard from '../components/ui/GlowCard';
import SectionHeader from '../components/ui/SectionHeader';
import { VIOLET, VIOLET_LIGHT, BORDER } from '../theme/theme';

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const WHAT_I_DO = [
  {
    icon: <BrushIcon />,
    title: 'Frontend Development',
    color: '#06B6D4',
    desc: 'Building fast, responsive UIs with React, MUI, and Framer Motion. I care deeply about design systems, accessibility, and micro-interactions that make products feel alive.',
  },
  {
    icon: <StorageIcon />,
    title: 'Backend Development',
    color: '#10B981',
    desc: 'Designing scalable REST APIs with Node.js, Express, and MongoDB. I\'m comfortable with JWT auth, role-based access, and structuring production-ready server architecture.',
  },
  {
    icon: <CodeIcon />,
    title: 'AI / ML Systems',
    color: VIOLET_LIGHT,
    desc: 'Building computer vision pipelines using Python, TensorFlow, OpenCV, and YOLO. From drowsiness detection to animal monitoring — I bridge ML models with real-world deployments.',
  },
];

const TIMELINE = [
  {
    icon: <SchoolIcon />,
    title: 'B.Tech in Electronics and Communication Engineering',
    org: 'NIT Andhra Pradesh',
    period: '2023 – Present',
    desc: 'Final Year Student in ECE pursuing a minor in Software Engineering & active member of open-source community.',
    color: '#06B6D4',
  },
  {
    icon: <WorkIcon />,
    title: 'Full-Stack Developer',
    org: 'Open Source / Freelance',
    period: '2024 – Present',
    desc: 'Building and shipping production web apps — MERN stack, REST APIs, and cloud deployments.',
    color: VIOLET_LIGHT,
  },
  {
    icon: <EmojiEventsIcon />,
    title: 'Hacktoberfest Contributor',
    org: 'Hacktoberfest',
    period: '2025',
    desc: 'Secured Top 10,000 rank globally, earned the Supercontributor badge and received official Hacktoberfest T-shirt',
    color: '#F59E0B',
  },
  {
    icon: <StarIcon />,
    title: '600+ GitHub Contributions',
    org: 'github.com/sahitya1903',
    period: '2024 – Present',
    desc: 'Consistent open-source activity across web, AI/ML, and tooling projects. Green squares are my love language.',
    color: '#10B981',
  },
];



/* ─────────────────────────────────────────────────────────────
   FADE-IN WRAPPER
───────────────────────────────────────────────────────────── */
const FadeIn = ({ children, delay = 0, y = 24 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────
   ABOUT PAGE
───────────────────────────────────────────────────────────── */
const About = () => (
  <Box component="main">

    {/* ── HERO ── */}
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        borderBottom: `1px solid ${BORDER}`,
      }}
    >
      {/* Ambient orbs */}
      <Box sx={{
        position: 'absolute', top: '15%', right: '5%',
        width: 500, height: 500, borderRadius: '50%',
        background: `radial-gradient(circle, ${alpha(VIOLET, 0.12)} 0%, transparent 65%)`,
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">

          {/* Left: Bio */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Label pill */}
              <Box sx={{
                display: 'inline-flex', alignItems: 'center', gap: 1,
                px: 1.5, py: 0.5, mb: 3, borderRadius: '6px',
                border: `1px solid ${alpha(VIOLET, 0.3)}`,
                background: alpha(VIOLET, 0.08),
              }}>
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: VIOLET_LIGHT, animation: 'pulse-glow 2s infinite' }} />
                <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.68rem', color: VIOLET_LIGHT, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  About Me
                </Typography>
              </Box>

              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '2.4rem', md: '3.5rem' },
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: '-0.04em',
                  color: '#F8FAFC',
                  mb: 3,
                }}
              >
                Hey, I'm{' '}
                <Box component="span" sx={{
                  background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #06B6D4)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Sahitya
                </Box>
              </Typography>

              <Typography variant="body1" sx={{ color: '#94A3B8', lineHeight: 1.85, mb: 2.5, maxWidth: 540 }}>
                I'm a full-stack developer and ECE undergraduate student at <Box component="span" sx={{ color: '#F8FAFC', fontWeight: 500 }}>NIT Andhra Pradesh</Box>, graduating in 2027.
                I build fast, accessible, and beautifully designed web applications — from pixel-perfect UIs to production-grade APIs.
              </Typography>
              <Typography variant="body1" sx={{ color: '#94A3B8', lineHeight: 1.85, mb: 2.5, maxWidth: 540 }}>
                My interest spans both sides of the stack: I love crafting smooth user experiences with React and Framer Motion, and I enjoy the engineering challenge of designing scalable backend systems.
                More recently, I've been exploring <Box component="span" sx={{ color: '#F8FAFC', fontWeight: 500 }}>AI/ML</Box> — particularly computer vision with Python, TensorFlow, and YOLO.
              </Typography>
              <Typography variant="body1" sx={{ color: '#94A3B8', lineHeight: 1.85, mb: 4, maxWidth: 540 }}>
                When I'm not coding, I'm contributing to open source, reading about system design, or experimenting with new tools and ideas.
                I'm open to internships, collaborations, and full-time roles — let's build something great together.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  id="about-download-resume"
                  variant="contained"
                  size="large"
                  startIcon={<DownloadIcon />}
                  component="a"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ px: 3, py: 1.4, fontSize: '0.95rem' }}
                >
                  View Resume
                </Button>

              </Box>

              {/* Social + LeetCode links */}
              <Box sx={{ display: 'flex', gap: 2.5, mt: 3, alignItems: 'center', flexWrap: 'wrap' }}>
                {[
                  { icon: <GitHubIcon sx={{ fontSize: 18 }} />, href: 'https://github.com/sahitya1903', label: 'GitHub' },
                  { icon: <LinkedInIcon sx={{ fontSize: 18 }} />, href: 'https://linkedin.com/in/sahityakushwaha', label: 'LinkedIn' },
                ].map((s) => (
                  <Box
                    key={s.label}
                    component="a"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex', alignItems: 'center', gap: 0.75,
                      color: '#64748B', textDecoration: 'none',
                      fontSize: '0.8rem',
                      transition: 'color 0.2s ease',
                      '&:hover': { color: '#94A3B8' },
                    }}
                  >
                    {s.icon}
                    {s.label}
                  </Box>
                ))}
                <Box sx={{ width: '1px', height: 14, background: '#1E293B' }} />
                <Box
                  component="a"
                  href="https://leetcode.com/u/sahitya1903/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex', alignItems: 'center', gap: 0.75,
                    color: '#64748B', textDecoration: 'none',
                    fontSize: '0.8rem',
                    transition: 'color 0.2s ease',
                    '&:hover': { color: '#FFA116' },
                  }}
                >
                  <Box sx={{ width: 14, height: 14, borderRadius: '3px', background: '#FFA116', opacity: 0.8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Box component="span" sx={{ fontSize: '8px', fontWeight: 900, color: '#fff', lineHeight: 1 }}>LC</Box>
                  </Box>
                  LeetCode
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right: Avatar card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ animation: 'float 7s ease-in-out infinite' }}
            >
              <GlowCard sx={{ p: 4, textAlign: 'center' }} glowIntensity={0.7}>
                {/* Profile Photo */}
                <Box sx={{
                  width: 120, height: 120, borderRadius: '24px', mx: 'auto', mb: 3,
                  boxShadow: `0 0 40px ${alpha(VIOLET, 0.5)}, 0 0 80px ${alpha(VIOLET, 0.15)}`,
                  position: 'relative',
                  overflow: 'hidden',
                  background: `linear-gradient(135deg, ${VIOLET}, #5B21B6, #06B6D4)`, // fallback while loading
                }}>
                  <Box
                    component="img"
                    src="/profile.jpg"
                    alt="Sahitya Kushwaha"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {/* Online dot */}
                  <Box sx={{
                    position: 'absolute', bottom: 8, right: 8,
                    width: 14, height: 14, borderRadius: '50%',
                    background: '#10B981',
                    border: '2px solid rgba(5,5,8,1)',
                    boxShadow: '0 0 8px #10B981',
                    zIndex: 2,
                  }} />
                </Box>

                <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: 'text.primary', mb: 0.25 }}>
                  Sahitya Kushwaha
                </Typography>
                <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.72rem', color: VIOLET_LIGHT, mb: 2.5 }}>
                  Full-Stack Developer
                </Typography>

                {/* Mini stats */}
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                  {[
                    { value: '5+', label: 'Projects' },
                    { value: '600+', label: 'Commits' },
                    { value: '2+', label: 'Yrs Coding' },
                    { value: '2027', label: 'Graduating' },
                  ].map(({ value, label }) => (
                    <Box key={label} sx={{
                      background: 'rgba(255,255,255,0.03)',
                      border: `1px solid ${BORDER}`,
                      borderRadius: '10px',
                      p: 1.5,
                    }}>
                      <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontWeight: 700, fontSize: '1rem', color: VIOLET_LIGHT }}>
                        {value}
                      </Typography>
                      <Typography sx={{ fontSize: '0.68rem', color: '#475569' }}>{label}</Typography>
                    </Box>
                  ))}
                </Box>
              </GlowCard>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* ── WHAT I DO ── */}
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <SectionHeader
          label="What I Do"
          title={<>Areas I <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #06B6D4)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>specialise in</Box></>}
          subtitle="From UI pixels to database schemas — I'm comfortable across the full product lifecycle."
        />
        <Grid container spacing={3}>
          {WHAT_I_DO.map((item, i) => (
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
              <FadeIn delay={i * 0.12}>
                <GlowCard sx={{ p: 3.5, height: '100%' }} glowIntensity={0.6}>
                  <Box sx={{
                    width: 48, height: 48, borderRadius: '12px', mb: 2.5,
                    background: alpha(item.color, 0.12),
                    border: `1px solid ${alpha(item.color, 0.25)}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: item.color,
                    '& svg': { fontSize: 22 },
                  }}>
                    {item.icon}
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary', mb: 1.5 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.75 }}>
                    {item.desc}
                  </Typography>
                </GlowCard>
              </FadeIn>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* ── TIMELINE ── */}
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeader
          label="Journey"
          title={<>Education & <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #10B981)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Milestones</Box></>}
          subtitle="The path that shaped who I am as a developer."
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, maxWidth: 680, mx: 'auto' }}>
          {TIMELINE.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <GlowCard sx={{ p: 3 }} glowIntensity={0.5}>
                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-start' }}>
                  <Box sx={{
                    width: 44, height: 44, borderRadius: '10px', flexShrink: 0,
                    background: alpha(item.color, 0.12),
                    border: `1px solid ${alpha(item.color, 0.3)}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: item.color,
                    '& svg': { fontSize: 20 },
                  }}>
                    {item.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1, mb: 0.5 }}>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: 'text.primary' }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.68rem', color: '#475569' }}>
                        {item.period}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: '0.78rem', color: item.color, fontFamily: '"JetBrains Mono", monospace', mb: 0.75 }}>
                      {item.org}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.7 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </GlowCard>
            </FadeIn>
          ))}
        </Box>
      </Container>
    </Box>

  </Box>
);

export default About;
