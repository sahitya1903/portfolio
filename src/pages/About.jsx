import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import { alpha } from '@mui/material/styles';

import GlowCard from '../components/ui/GlowCard';
import SectionHeader from '../components/ui/SectionHeader';
import FadeIn from '../components/ui/FadeIn';
import useRevealOnce, { REVEAL_EASE } from '../hooks/useRevealOnce';
import { VIOLET, VIOLET_LIGHT } from '../theme/theme';

/* ─────────────────────────────────────────────────────────────
   DATA — reverse chronological order (most recent first)
───────────────────────────────────────────────────────────── */

const EXPERIENCES = [
  {
    type: 'work',
    icon: <WorkIcon />,
    title: 'Software Development Intern',
    org: 'Humora Technologies Private Limited',
    period: 'Aug 2026 – Present',
    desc: 'Building and shipping web platform features across Next.js, backend services, and CI/CD.',
    color: '#34D399',
  },
  {
    type: 'achievement',
    icon: <EmojiEventsIcon />,
    title: 'Open Source Contributor',
    org: 'Hacktoberfest',
    period: 'Oct 2025 - Nov 2025',
    desc: 'Ranked Top 10,000 globally in Hacktoberfest 2025 and earned the Supercontributor badge.',
    color: '#F59E0B',
  },
  {
    type: 'education',
    icon: <SchoolIcon />,
    title: 'B.Tech in Electronics and Communication Engineering',
    org: 'National Institute of Technology Andhra Pradesh',
    period: 'Aug 2023 - Present',
    desc: 'Final-year ECE student pursuing a Minor in Software Engineering.',
    color: '#06B6D4',
  },
];

/* Vertical timeline spine — draws once when scrolled into view */
const TimelineLine = () => {
  const [ref, inView] = useRevealOnce('0px 0px -100px 0px');
  return (
    <motion.div
      ref={ref}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: inView ? 1 : 0 }}
      transition={{ duration: 1.2, ease: REVEAL_EASE }}
      style={{
        position: 'absolute',
        left: '50%',
        marginLeft: '-0.5px',
        top: 0,
        bottom: 0,
        width: '1px',
        transformOrigin: 'top',
        background: `linear-gradient(to bottom, transparent, ${alpha(VIOLET, 0.6)}, ${alpha(VIOLET, 0.3)}, transparent)`,
      }}
    />
  );
};

/* ─────────────────────────────────────────────────────────────
   ABOUT — Experience & Milestones (two-column timeline)
───────────────────────────────────────────────────────────── */
const About = () => (
  <Box component="section" id="experience" sx={{
    py: { xs: 3.5, md: 4.5 },
    background: 'transparent',
  }}>
    <Container maxWidth="lg">
      <SectionHeader
        title={<>Journey & <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #10B981)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Milestones..</Box></>}
      />
      <Box sx={{ position: 'relative' }}>
        <TimelineLine />

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
                  <Typography sx={{ fontSize: '0.83rem', color: 'text.secondary', lineHeight: 1.6 }}>
                    {exp.desc}
                  </Typography>
                </Box>
              </Box>
            </GlowCard>
          );

          return (
            <FadeIn key={i} delay={i * 0.1}>
              {/* ── Desktop: two-column symmetric layout ── */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mb: i === EXPERIENCES.length - 1 ? 0 : 4 }}>
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
              <Box sx={{ display: { xs: 'block', md: 'none' }, mb: i === EXPERIENCES.length - 1 ? 0 : 3 }}>
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
);

export default About;
