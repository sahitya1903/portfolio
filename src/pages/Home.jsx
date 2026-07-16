import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion, useMotionValue, useInView, animate } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { alpha } from '@mui/material/styles';

import GlowCard from '../components/ui/GlowCard';
import TechBadge from '../components/ui/TechBadge';
import SectionHeader from '../components/ui/SectionHeader';
import { VIOLET, VIOLET_LIGHT, BORDER } from '../theme/theme';

import About from './About';
import Contact from './Contact';

/* ─────────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────────── */

const PROJECTS = [
  {
    id: 'roomify',
    title: 'Roomify',
    subtitle: 'Hotel Booking Platform',
    desc: 'Full-stack hotel booking and sharing platform built with MVC. Features Passport.js auth, Mapbox geocoding, Cloudinary image resizing, Docker containerization, and GitHub Actions CI/CD to Docker Hub.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Bootstrap', 'Docker', 'Mapbox', 'Cloudinary'],
    accent: VIOLET,
    accentLight: VIOLET_LIGHT,
    github: 'https://github.com/sahitya1903/roomify',
    live: 'https://roomify.azurewebsites.net',
    stats: [
      { label: 'Type', value: 'Full-Stack (MVC)' },
      { label: 'Stack', value: 'Express + MongoDB' },
      { label: 'Status', value: 'Dockerized & Live' },
    ],
    category: ['Full-Stack', 'Node.js'],
  },
  {
    id: 'resume-syncer',
    title: 'Resume Syncer',
    subtitle: 'Automated Overleaf Resume Syncer',
    desc: 'Published GitHub Actions Marketplace action automating a 5-stage pipeline: Selenium Overleaf scraping, Git commits, Google Drive sync, and portfolio updates using Service Account credentials.',
    tags: ['Python', 'GitHub Actions', 'Selenium', 'Google Drive API', 'Git', 'Bash'],
    accent: '#10B981',
    accentLight: '#34D399',
    github: 'https://github.com/sahitya1903/resume-syncer',
    live: 'https://github.com/marketplace/actions/overleaf-resume-syncer',
    liveLabel: 'Marketplace',
    stats: [
      { label: 'Type', value: 'Automation / DevOps' },
      { label: 'Platform', value: 'GitHub Actions' },
      { label: 'Status', value: 'Published' },
    ],
    category: ['DevOps'],
  },
  {
    id: 'drowsiness-detection',
    title: 'Alert Drive',
    subtitle: 'Real-time Driver Drowsiness Detection & Alert System',
    desc: 'Real-time driver drowsiness detection system using computer vision. Features OpenCV Haar Cascades for face/eye localization and a MobileNet model to classify eye states and trigger visual alerts.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Streamlit'],
    accent: '#D97706',
    accentLight: '#FBBF24',
    github: 'https://github.com/sahitya1903/alert-drive',
    live: 'https://alert-drive.streamlit.app',
    stats: [
      { label: 'Type', value: 'AI / ML' },
      { label: 'Model', value: 'MobileNet' },
      { label: 'Status', value: 'Live' },
    ],
    category: ['Python', 'AI / ML'],
  },
];

const STATS = [
  { value: 2, label: 'Years Coding', suffix: '+' },
  { value: 5, label: 'Projects', suffix: '+' },
  { value: 1100, label: 'GitHub Contributions', suffix: '+' },
  { value: 15, label: 'Tech Stack Tools', suffix: '+' },
];

const ROLES = [
  'Full-Stack Developer',
  'DevOps Engineer',
  'Open Source Contributor',
  'ML Enthusiast',
];

/* ─────────────────────────────────────────────────────────────
   TYPEWRITER ROLES
───────────────────────────────────────────────────────────── */
const TypedRoles = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    if (!isDeleting && displayed.length < currentRole.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length + 1));
      }, 60);
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length - 1));
      }, 35);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
      <Typography
        component="span"
        sx={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: { xs: '0.95rem', md: '1.1rem' },
          fontWeight: 500,
          color: VIOLET_LIGHT,
          letterSpacing: '0.02em',
        }}
      >
        {displayed}
      </Typography>
      <Box
        sx={{
          display: 'inline-block',
          width: '2px',
          height: { xs: '1rem', md: '1.15rem' },
          background: VIOLET_LIGHT,
          animation: 'cursor-blink 1s step-end infinite',
          borderRadius: '1px',
          verticalAlign: 'middle',
          ml: 0.25,
        }}
      />
    </Box>
  );
};

/* ─────────────────────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────────────────────── */
const AnimatedCounter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsubscribe = motionValue.on('change', (v) => {
      setDisplay(Math.round(v));
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, motionValue, value]);

  return (
    <Box ref={ref} sx={{ fontFamily: '"JetBrains Mono", monospace' }}>
      {display}{suffix}
    </Box>
  );
};

/* ─────────────────────────────────────────────────────────────
   FADE-IN WRAPPER
───────────────────────────────────────────────────────────── */
const FadeIn = ({ children, delay = 0, y = 24, sx = {} }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '0px 0px 150px 0px' }}
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
    sx={{ py: { xs: 5, md: 7 }, ...sx }}
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
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'transparent',
    }}
  >
    {/* Ambient orb — right (large) */}
    <Box sx={{
      position: 'absolute', top: '5%', right: '-10%',
      width: 750, height: 750,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)',
      filter: 'blur(60px)',
      animation: 'float 10s ease-in-out infinite',
      pointerEvents: 'none',
    }} />
    {/* Ambient orb — left */}
    <Box sx={{
      position: 'absolute', bottom: '5%', left: '-12%',
      width: 600, height: 600,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 65%)',
      filter: 'blur(55px)',
      animation: 'floatReverse 12s ease-in-out infinite',
      pointerEvents: 'none',
    }} />
    {/* Ambient orb — center bottom */}
    <Box sx={{
      position: 'absolute', bottom: '-15%', left: '30%',
      width: 500, height: 500,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(91,33,182,0.06) 0%, transparent 65%)',
      filter: 'blur(70px)',
      animation: 'floatSlow 15s ease-in-out infinite',
      pointerEvents: 'none',
    }} />

    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: { xs: 8, md: 0 } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 7 }}>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.02, ease: [0.22, 1, 0.36, 1] }}
          >
          <Box sx={{
            display: 'inline-flex', alignItems: 'center', gap: 1,
            px: 2, py: 0.75, mb: 3,
            borderRadius: '100px',
            border: '1px solid rgba(16,185,129,0.25)',
            background: 'rgba(16,185,129,0.06)',
          }}>
            <Box sx={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#10B981',
              animation: 'pulse-dot 2.4s ease infinite',
            }} />
            <Typography sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.7rem',
              color: '#059669',
              letterSpacing: '0.06em',
              fontWeight: 600,
            }}>
              Open to opportunities
            </Typography>
          </Box>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <Typography
            component="h1"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: { xs: '2.3rem', sm: '3.3rem', md: '4rem' },
              fontWeight: 500,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              mb: 2,
            }}
          >
            Hey, I'm{' '}
            <Box component="span" sx={{
              background: 'linear-gradient(125deg, #7C3AED 0%, #8B5CF6 45%, #06B6D4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Sahitya
            </Box>
            <Box component="span" sx={{ color: VIOLET, opacity: 0.5 }}>..</Box>
          </Typography>
        </motion.div>

        {/* Typed roles sub-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box sx={{ mb: 1.5 }}>
            <TypedRoles />
          </Box>
        </motion.div>

        {/* Sub headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Typography
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontStyle: 'italic',
              mt: 1,
              mb: 4,
              maxWidth: 520,
              fontSize: { xs: '1.1rem', md: '1.35rem' },
              lineHeight: 1.45,
              color: 'text.secondary',
              letterSpacing: '0.02em',
            }}
          >
            Welcome to my corner of the web!
          </Typography>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              id="hero-view-resume"
              variant="contained"
              size="large"
              component="a"
              href="https://drive.google.com/file/d/16G18Yy2UuTh1dVhpYcjGkzCxi9YOVJx7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<DescriptionOutlinedIcon />}
              sx={{ px: 4, py: 1.4, fontSize: '0.95rem', fontFamily: '"Playfair Display", serif' }}
            >
              View Resume
            </Button>
          </Box>
        </motion.div>
      </Grid>

      {/* Right column — floating code card */}
      <Grid size={{ xs: 12, md: 5 }}>
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box sx={{ animation: 'float 7s ease-in-out infinite' }}>
            <GlowCard sx={{
              p: 3,
              background: 'linear-gradient(160deg, #0D0D18 0%, #090912 100%)',
              borderColor: BORDER,
              boxShadow: '0 24px 64px rgba(0,0,0,0.32), 0 8px 24px rgba(124,58,237,0.18)',
              '&:hover': { borderColor: 'rgba(124,58,237,0.45)' },
            }}>
              {/* Terminal header */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 2.5 }}>
                {['#EF4444', '#F59E0B', '#10B981'].map((c) => (
                  <Box key={c} sx={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.9 }} />
                ))}
                <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.63rem', color: '#334155', ml: 1.5 }}>
                  sahitya.codes ~ main
                </Typography>
              </Box>

              {/* Code snippet */}
              <Box sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', lineHeight: 1.9 }}>
                {[
                  { indent: 0, color: '#A78BFA', text: 'const developer = {' },
                  { indent: 1, color: '#94A3B8', text: <><Box component="span" sx={{ color: '#7DD3FC' }}>name</Box>: <Box component="span" sx={{ color: '#86EFAC' }}>"Sahitya Kushwaha"</Box>,</> },
                  { indent: 1, color: '#94A3B8', text: <><Box component="span" sx={{ color: '#7DD3FC' }}>domain</Box>: <Box component="span" sx={{ color: '#86EFAC' }}>"sahitya.codes"</Box>,</> },
                  { indent: 1, color: '#94A3B8', text: <><Box component="span" sx={{ color: '#7DD3FC' }}>role</Box>: <Box component="span" sx={{ color: '#86EFAC' }}>"Full-Stack Dev"</Box>,</> },
                  { indent: 1, color: '#94A3B8', text: <><Box component="span" sx={{ color: '#7DD3FC' }}>stack</Box>: [<Box component="span" sx={{ color: '#86EFAC' }}>"React"</Box>, <Box component="span" sx={{ color: '#86EFAC' }}>"Node"</Box>],</> },
                  { indent: 1, color: '#94A3B8', text: <><Box component="span" sx={{ color: '#7DD3FC' }}>open</Box>: <Box component="span" sx={{ color: '#FB923C' }}>true</Box>,</> },
                  { indent: 0, color: '#A78BFA', text: '};' },
                  { indent: 0, color: '#334155', text: '' },
                  { indent: 0, color: '#A78BFA', text: <><Box component="span" sx={{ color: '#7DD3FC' }}>console</Box>.log(<Box component="span" sx={{ color: '#86EFAC' }}>"Ready to build!"</Box>);</> },
                ].map((line, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      '&::before': {
                        content: `"${String(i + 1).padStart(2, ' ')}"`,
                        color: '#334155',
                        mr: 2.5,
                        fontSize: '0.68rem',
                        userSelect: 'none',
                        flexShrink: 0,
                        minWidth: '18px',
                      },
                    }}
                  >
                    <Box component="span" sx={{ color: line.color, pl: line.indent * 1.5 }}>{line.text}</Box>
                  </Box>
                ))}
              </Box>

              {/* Cursor blink */}
              <Box sx={{
                display: 'inline-block', width: '2px', height: '15px',
                background: VIOLET_LIGHT, mt: 0.5, ml: 0.5,
                animation: 'cursor-blink 1.2s step-end infinite',
                verticalAlign: 'middle',
                borderRadius: '1px',
              }} />
            </GlowCard>
          </Box>
        </motion.div>
      </Grid>
    </Grid>

      {/* Stats bar — card cells with count-up animation */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
            gap: 2,
          }}
        >
          {STATS.map(({ value, label, suffix }) => (
            <Box
              key={label}
              sx={{
                textAlign: 'center',
                py: 2.5,
                px: 2,
                borderRadius: '12px',
                background: '#10101A',
                border: `1px solid ${BORDER}`,
                boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                transition: 'all 0.25s ease',
                '&:hover': {
                  borderColor: 'rgba(124,58,237,0.35)',
                  boxShadow: `0 8px 28px ${alpha(VIOLET, 0.18)}`,
                  transform: 'translateY(-3px)',
                },
              }}
            >
              <Typography sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: { xs: '1.6rem', md: '2rem' },
                fontWeight: 700,
                background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #fff)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.1,
              }}>
                <AnimatedCounter value={value} suffix={suffix} />
              </Typography>
              <Typography sx={{ color: 'text.secondary', mt: 0.5, fontSize: '0.8rem', fontWeight: 400 }}>
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
   FEATURED PROJECTS SECTION (slim teaser)
───────────────────────────────────────────────────────────── */
const ProjectsSection = () => (
  <Section id="projects" sx={{
    background: 'transparent',
    borderTop: 'none',
  }}>
    <SectionHeader
      label="Featured Work"
      title={<>Projects that <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #06B6D4)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ship value..</Box></>}
    />
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {PROJECTS.map((project, i) => (
        <FadeIn key={project.id} delay={i * 0.1}>
          <GlowCard sx={{ p: { xs: 3, md: 4 } }} glowIntensity={0.7}>
            <Grid container spacing={3} alignItems="flex-start">
              <Grid size={{ xs: 12, md: 8 }}>
                {/* Header row */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1, flexWrap: 'wrap' }}>
                  <Typography
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 600,
                      fontSize: '1.25rem',
                      color: 'text.primary',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Box component="span" sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.62rem',
                    color: project.accent,
                    border: `1px solid ${alpha(project.accent, 0.3)}`,
                    background: alpha(project.accent, 0.06),
                    px: 1, py: 0.25,
                    borderRadius: '4px',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </Box>
                </Box>

                <Typography sx={{ fontSize: '0.78rem', color: project.accentLight, fontFamily: '"JetBrains Mono", monospace', mb: 1.5 }}>
                  {project.subtitle}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.75, fontSize: '0.88rem' }}>
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
                      {project.liveLabel || 'Live Demo'}
                    </Button>
                  )}
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid ${BORDER}`,
                  borderRadius: '10px',
                  p: 2.5,
                }}>
                  {project.stats.map(({ label, value }) => (
                    <Box key={label} sx={{ display: 'flex', justifyContent: 'space-between', py: 1, borderBottom: `1px solid ${BORDER}`, '&:last-child': { borderBottom: 'none', pb: 0 } }}>
                      <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontFamily: '"JetBrains Mono", monospace' }}>{label}</Typography>
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
        variant="contained"
        size="large"
        component={RouterLink}
        to="/projects"
        endIcon={<ArrowOutwardIcon />}
        sx={{ px: 4, py: 1.4, fontSize: '0.95rem', fontFamily: '"Playfair Display", serif' }}
      >
        View All Projects
      </Button>
    </Box>
  </Section>
);

/* ─────────────────────────────────────────────────────────────
   GITHUB ACTIVITY SECTION
───────────────────────────────────────────────────────────── */
const GitHubSection = () => {
  const GITHUB_USERNAME = 'sahitya1903';
  const GITHUB_STATS = [
    { label: 'Contributions', value: '1100+', color: '#10B981' },
    { label: 'Public Repos', value: '10+', color: VIOLET_LIGHT },
    { label: 'Stars Earned', value: '30+', color: '#F59E0B' },
    { label: 'Followers', value: '15+', color: '#06B6D4' },
  ];

  return (
    <Section id="github" sx={{
      background: 'transparent',
      borderTop: 'none',
    }}>
      <SectionHeader
        label="GitHub Activity"
        title={<>Open source <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #10B981)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>footprint..</Box></>}
      />

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {GITHUB_STATS.map((stat, i) => (
          <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
            <FadeIn delay={i * 0.04}>
              <GlowCard sx={{ p: 3, textAlign: 'center' }}>
                <Typography sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '2rem', fontWeight: 700,
                  color: stat.color,
                  mb: 0.5,
                  textShadow: `0 0 20px ${alpha(stat.color, 0.4)}`,
                }}>
                  {stat.value}
                </Typography>
                <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary' }}>
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
              <GitHubIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
              <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', color: 'text.secondary' }}>
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
              sx={{ fontSize: '0.78rem' }}
            >
              Visit Profile
            </Button>
          </Box>

          {/* GitHub contribution graph */}
          <Box
            sx={{
              borderRadius: '8px',
              overflow: 'hidden',
              background: 'rgba(255,255,255,0.02)',
              border: `1px solid ${BORDER}`,
              p: 2,
              minHeight: '120px',
            }}
          >
            <Box
              component="img"
              loading="lazy"
              src={`https://ghchart.rshah.org/7C3AED/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME} GitHub contribution chart`}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              sx={{ width: '100%', height: 'auto', display: 'block', filter: 'opacity(0.9)', borderRadius: '4px' }}
            />
          </Box>

          {/* GitHub stats card */}
          <Box sx={{ mt: 3, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
            <Box
              component="img"
              loading="lazy"
              src={`https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${GITHUB_USERNAME}&theme=transparent`}
              alt="GitHub Stats"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              sx={{
                width: '100%',
                maxWidth: { xs: '380px', sm: '450px' },
                height: { xs: '140px', sm: '185px' },
                display: 'block',
                margin: '0 auto',
                objectFit: 'contain',
              }}
            />
            <Box
              component="img"
              loading="lazy"
              src={`https://github-readme-stats-fast.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=006AFF&text_color=94A3B8&bg_color=00000000`}
              alt="Top Languages"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              sx={{
                width: '100%',
                maxWidth: { xs: '380px', sm: '380px' },
                height: { xs: '140px', sm: '185px' },
                display: 'block',
                margin: '0 auto',
                objectFit: 'contain',
              }}
            />
          </Box>
        </GlowCard>
      </FadeIn>
    </Section>
  );
};

/* ─────────────────────────────────────────────────────────────
   HOME PAGE (assembles all sections)
───────────────────────────────────────────────────────────── */
const Home = () => (
  <>
    <Hero />
    <About />
    <ProjectsSection />
    <GitHubSection />
    <Contact />
  </>
);

export default Home;
