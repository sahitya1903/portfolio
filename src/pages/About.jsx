import { Box, Container, Typography, Grid } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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
    title: '1100+ GitHub Contributions',
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
   ANIMATED SKILL BAR
───────────────────────────────────────────────────────────── */
const AnimatedSkillBar = ({ skill, color, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });

  return (
    <Box ref={ref}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.75 }}>
        <Typography sx={{ fontSize: '0.82rem', color: 'text.secondary', fontWeight: 500 }}>
          {skill.name}
        </Typography>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.3 }}
        >
          <Typography sx={{ fontSize: '0.72rem', color, fontFamily: '"JetBrains Mono", monospace', fontWeight: 600 }}>
            {skill.level}%
          </Typography>
        </motion.div>
      </Box>
      {/* Track */}
      <Box sx={{ position: 'relative', height: '5px', borderRadius: '3px', background: 'rgba(255,255,255,0.04)' }}>
        {/* Animated fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            borderRadius: '3px',
            background: `linear-gradient(90deg, ${color}, ${alpha(color, 0.6)})`,
            boxShadow: `0 0 8px ${alpha(color, 0.4)}`,
          }}
        />
        {/* Glow tip */}
        <motion.div
          initial={{ left: 0, opacity: 0 }}
          animate={isInView ? { left: `calc(${skill.level}% - 4px)`, opacity: 1 } : { left: 0, opacity: 0 }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: color,
            boxShadow: `0 0 10px ${alpha(color, 0.8)}`,
          }}
        />
      </Box>
    </Box>
  );
};

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
              <FadeIn delay={gi * 0.12}>
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
                    {skillGroup.items.map((skill, si) => (
                      <AnimatedSkillBar
                        key={skill.name}
                        skill={skill}
                        color={skillGroup.color}
                        delay={gi * 0.12 + si * 0.08}
                      />
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
          {/* Vertical timeline line — animated draw */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: 0,
              bottom: 0,
              width: '1px',
              transformOrigin: 'top',
              background: `linear-gradient(to bottom, transparent, ${alpha(VIOLET, 0.6)}, ${alpha(VIOLET, 0.3)}, transparent)`,
              display: 'block',
            }}
          />
          {/* Hide line on mobile via wrapper */}
          <Box sx={{ '& > div > div:first-of-type': { display: { xs: 'none', md: 'block' } } }} />

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
                    boxShadow: `0 0 16px ${alpha(exp.color, 0.2)}`,
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
                  {/* Left half */}
                  <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', pr: 3 }}>
                    {isLeft ? card : null}
                  </Box>

                  {/* Center dot with pulsing ring */}
                  <Box sx={{ width: 48, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, position: 'relative' }}>
                    {/* Pulsing outer ring */}
                    <Box sx={{
                      position: 'absolute',
                      width: 24, height: 24, borderRadius: '50%',
                      border: `1px solid ${alpha(exp.color, 0.5)}`,
                      animation: 'pulse-ring 2s ease-out infinite',
                    }} />
                    {/* Solid dot */}
                    <Box sx={{
                      width: 12, height: 12, borderRadius: '50%',
                      background: exp.color,
                      boxShadow: `0 0 16px ${alpha(exp.color, 0.8)}, 0 0 4px ${exp.color}`,
                      border: `2px solid #050508`,
                      zIndex: 1,
                    }} />
                  </Box>

                  {/* Right half */}
                  <Box sx={{ flex: 1, pl: 3 }}>
                    {!isLeft ? card : null}
                  </Box>
                </Box>

                {/* ── Mobile: single-column stack ── */}
                <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 3 }}>
                  {/* Left colored border on mobile */}
                  <Box sx={{ display: 'flex', gap: 0 }}>
                    <Box sx={{
                      width: '3px', flexShrink: 0,
                      background: `linear-gradient(to bottom, ${exp.color}, ${alpha(exp.color, 0.2)})`,
                      borderRadius: '4px',
                      mr: 2,
                      my: 0.5,
                    }} />
                    <Box sx={{ flex: 1 }}>{card}</Box>
                  </Box>
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
