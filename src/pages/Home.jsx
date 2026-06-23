import { Box, Container, Typography, Button, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { alpha } from '@mui/material/styles';

import About from './About';
import Contact from './Contact';
import GlowCard from '../components/ui/GlowCard';
import TechBadge from '../components/ui/TechBadge';
import SectionHeader from '../components/ui/SectionHeader';
import { VIOLET, VIOLET_LIGHT, BORDER } from '../theme/theme';

/* ─────────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────────── */

const PROJECTS = [
  {
    id: 'roomify',
    title: 'Roomify',
    subtitle: 'Hotel Booking Platform',
    desc: 'A modern hotel booking platform where users can browse accommodations, create listings, upload images, and share reviews through a secure and responsive web interface.',
    tags: ['EJS', 'Node.js', 'Express.js', 'MongoDB', 'MUI'],
    accent: VIOLET,
    accentLight: VIOLET_LIGHT,
    github: 'https://github.com/sahitya1903/roomify',
    live: 'https://roomify-1gzx.onrender.com',
    stats: [
      { label: 'Type', value: 'Full-Stack' },
      { label: 'Stack', value: 'EJS + Node.js' },
      { label: 'Status', value: 'Live' },
    ],
    category: ['Full-Stack', 'Node.js'],
  },
  {
    id: 'drowsiness-detection',
    title: 'Alert Drive',
    subtitle: 'Real-time Driver Drowsiness Detection & Alert System',
    desc: 'Real-time drowsiness detection using computer vision and deep learning. Monitors eye aspect ratio and facial landmarks via a webcam to trigger audio alerts.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Streamlit'],
    accent: '#D97706',
    accentLight: '#FBBF24',
    github: 'https://github.com/sahitya1903/alert-drive',
    live: 'https://alert-drive.streamlit.app',
    stats: [
      { label: 'Type', value: 'AI / ML' },
      { label: 'Model', value: 'CNN' },
      { label: 'Status', value: 'Live' },
    ],
    category: ['Python', 'AI / ML'],
  },
];

const STATS = [
  { value: '2+', label: 'Years Coding' },
  { value: '6+', label: 'Projects' },
  { value: '900+', label: 'GitHub Contributions' },
  { value: '15+', label: 'Tech Stack Tools' },
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
                Open to opportunities
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
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: '2.3rem', sm: '3rem' },
                fontWeight: 500,
                lineHeight: 1.2,
                letterSpacing: '0.03em',
                color: '#F8FAFC',
                mb: 2,
              }}
            >
              Hey, I'm{' '}
              <Box component="span" sx={{
                background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #06B6D4)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Sahitya..
              </Box>
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
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: 'italic',
                mt: 2,
                mb: 4,
                maxWidth: 560,
                fontSize: { xs: '1.2rem', md: '1.55rem' },
                lineHeight: 1.4,
                color: '#94A3B8',
                letterSpacing: '0.03em',
              }}
            >
              Welcome to my corner of the web!
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
                id="hero-view-resume"
                variant="contained"
                size="large"
                component="a"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<DescriptionOutlinedIcon />}
                sx={{ px: 3, py: 1.4, fontSize: '0.95rem', fontFamily: '"Playfair Display", serif' }}
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
                  sahitya.codes ~ main
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
                    <Box component="span" sx={{ color: line.color, pl: line.indent * 2 }}>{line.text}</Box>
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
            pb: 4,
            borderTop: `1px solid ${BORDER}`,
            borderBottom: `1px solid ${BORDER}`,
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
   FEATURED PROJECTS SECTION (slim teaser)
───────────────────────────────────────────────────────────── */
const ProjectsSection = () => (
  <Section id="projects" sx={{ borderTop: `1px solid ${BORDER}` }}>
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
                </Box>

                <Typography sx={{ fontSize: '0.78rem', color: project.accentLight, fontFamily: '"JetBrains Mono", monospace', mb: 1.5 }}>
                  {project.subtitle}
                </Typography>

                <Typography variant="body2" sx={{ color: '#64748B', mb: 2.5, lineHeight: 1.75, fontSize: '0.88rem' }}>
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
                  background: 'rgba(255,255,255,0.02)',
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
    { label: 'Contributions', value: '900+', color: '#10B981' },
    { label: 'Public Repos', value: '10+', color: VIOLET_LIGHT },
    { label: 'Stars Earned', value: '20+', color: '#F59E0B' },
    { label: 'Followers', value: '15+', color: '#06B6D4' },
  ];

  return (
    <Section id="github" sx={{ borderTop: `1px solid ${BORDER}` }}>
      <SectionHeader
        label="GitHub Activity"
        title={<>Open source <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #10B981)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>footprint..</Box></>}
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
              src={`https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${GITHUB_USERNAME}&layout=compact&theme=transparent`}
              alt="GitHub Stats"
              onError={(e) => { e.target.style.display = 'none'; }}
              sx={{ width: '100%', height: '200px' }}
            />
            <Box
              component="img"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=9D6FFF&text_color=94A3B8&bg_color=00000000`}
              alt="Top Languages"
              onError={(e) => { e.target.style.display = 'none'; }}
              sx={{ width: '100%', height: '200px' }}
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
