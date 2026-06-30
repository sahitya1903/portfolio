import { Box, Container, Typography, Grid, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { alpha } from '@mui/material/styles';

import GlowCard from '../components/ui/GlowCard';
import SectionHeader from '../components/ui/SectionHeader';
import { VIOLET, VIOLET_LIGHT } from '../theme/theme';

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */

const EXPERIENCES = [
  {
    type: 'education',
    icon: <SchoolIcon />,
    title: 'B.Tech in Electronics and Communication Engineering',
    org: 'NIT Andhra Pradesh',
    period: '2023 - Present',
    desc: 'Final Year Student in ECE, Pursuing a Minor in Software Engineering & active member of open-source community.',
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
    title: '1000+ GitHub Contributions',
    org: 'github.com/sahitya1903',
    period: '2024 – Present',
    desc: 'Consistent open-source contributor with an active streak spanning multiple projects — web, AI/ML, and tooling.',
    color: '#10B981',
  },
];

const SKILLS = [
  {
    category: 'Languages', icon: <CodeIcon />, color: VIOLET_LIGHT, items: [
      { name: 'Java', level: 88 },
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 87 },
      { name: 'SQL & Bash', level: 84 },
    ]
  },
  {
    category: 'Frontend', icon: <BrushIcon />, color: '#06B6D4', items: [
      { name: 'React & Redux Toolkit', level: 87 },
      { name: 'Tailwind & Bootstrap', level: 85 },
      { name: 'Material UI', level: 88 },
      { name: 'HTML, CSS & Motion', level: 86 },
    ]
  },
  {
    category: 'Backend & Databases', icon: <StorageIcon />, color: '#10B981', items: [
      { name: 'Node & Express.js', level: 85 },
      { name: 'Passport & Mongoose', level: 83 },
      { name: 'REST API Design', level: 90 },
      { name: 'MongoDB Atlas & MySQL', level: 85 },
    ]
  },
  {
    category: 'Cloud, ML & DevOps', icon: <PsychologyIcon />, color: '#F59E0B', items: [
      { name: 'Azure, Docker & Git', level: 78 },
      { name: 'GitHub Actions (CI/CD)', level: 82 },
      { name: 'TensorFlow & OpenCV', level: 80 },
      { name: 'WebRTC & Streamlit', level: 78 },
    ]
  },
];

/* ─────────────────────────────────────────────────────────────
   FADE-IN WRAPPER
───────────────────────────────────────────────────────────── */
const FadeIn = ({ children, delay = 0, y = 24 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '0px 0px 150px 0px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────
   ABOUT PAGE
───────────────────────────────────────────────────────────── */
const About = () => (
  <>    {/* ── SKILLS ── */}
    <Box component="section" id="skills" sx={{
      pt: { xs: 2.5, md: 4 },
      pb: { xs: 5, md: 7 },
      background: 'transparent',
      borderBottom: 'none',
    }}>
      <Container maxWidth="lg">
        <SectionHeader
          label="Skills"
          title={<>What I'm <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #F59E0B)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>good at..</Box></>}
        />
        <Grid container spacing={3}>
          {SKILLS.map((skillGroup, gi) => (
            <Grid key={skillGroup.category} size={{ xs: 12, sm: 6, md: 3 }}>
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
                    <Typography
                      sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 600,
                        fontSize: '1.05rem',
                        color: 'text.primary',
                      }}
                    >
                      {skillGroup.category}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    {skillGroup.items.map((skill) => (
                      <Box key={skill.name}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.75 }}>
                          <Typography sx={{ fontSize: '0.82rem', color: 'text.secondary', fontWeight: 500 }}>
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
                            background: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(15, 23, 42, 0.04)',
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
      </Container>
    </Box>

    {/* ── EXPERIENCE & MILESTONES (two-column timeline) ── */}
    <Box component="section" id="experience" sx={{
      py: { xs: 5, md: 7 },
      background: 'transparent',
    }}>
      <Container maxWidth="lg">
        <SectionHeader
          label="Experience"
          title={<>Journey & <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #10B981)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Milestones..</Box></>}
        />
        <Box sx={{ position: 'relative' }}>
          {/* Vertical timeline line — perfectly centred */}
          <Box sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: 0, bottom: 0,
            width: '1px',
            background: `linear-gradient(to bottom, transparent, ${alpha(VIOLET, 0.5)}, transparent)`,
            display: { xs: 'none', md: 'block' },
          }} />

          {EXPERIENCES.map((exp, i) => {
            const isLeft = i % 2 === 0;
            const card = (
              <GlowCard sx={{ p: 3, width: '100%' }} glowIntensity={0.5}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box sx={{
                    width: 40, height: 40, borderRadius: '10px', flexShrink: 0,
                    background: alpha(exp.color, 0.15),
                    border: `1px solid ${alpha(exp.color, 0.3)}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: exp.color,
                  }}>
                    {exp.icon}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 600,
                        fontSize: '1.05rem',
                        color: 'text.primary',
                        mb: 0.25,
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.78rem', color: exp.color, fontFamily: '"JetBrains Mono", monospace', mb: 0.5 }}>
                      {exp.org} · {exp.period}
                    </Typography>
                    <Typography sx={{ fontSize: '0.83rem', color: 'text.secondary', lineHeight: 1.65 }}>
                      {exp.desc}
                    </Typography>
                  </Box>
                </Box>
              </GlowCard>
            );

            return (
              <FadeIn key={i} delay={i * 0.1}>
                {/* ── Desktop: two-column symmetric layout ── */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mb: 4 }}>
                  {/* Left half — flex:1 ensures equal widths */}
                  <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', pr: 3 }}>
                    {isLeft ? card : null}
                  </Box>

                  {/* Center dot — fixed 48px strip keeps line perfectly centred */}
                  <Box sx={{ width: 48, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                    <Box sx={{
                      width: 12, height: 12, borderRadius: '50%',
                      background: exp.color,
                      boxShadow: `0 0 14px ${alpha(exp.color, 0.75)}`,
                      border: (theme) => `2px solid ${theme.palette.background.default}`,
                    }} />
                  </Box>

                  {/* Right half */}
                  <Box sx={{ flex: 1, pl: 3 }}>
                    {!isLeft ? card : null}
                  </Box>
                </Box>

                {/* ── Mobile: single-column stack ── */}
                <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 3 }}>
                  {card}
                </Box>
              </FadeIn>
            );
          })}
        </Box>
      </Container>
    </Box>

  </>
);

export default About;
