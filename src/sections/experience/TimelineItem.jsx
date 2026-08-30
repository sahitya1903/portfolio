import { Box, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';

import GlowCard from '../../components/ui/GlowCard';
import FadeIn from '../../components/ui/FadeIn';

/** The milestone card — shared by the desktop and mobile layouts. */
const MilestoneCard = ({ exp }) => {
  const { Icon } = exp;
  return (
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
          <Icon />
        </Box>
        <Box>
          <Typography sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 600,
            fontSize: '1.05rem',
            color: 'text.primary',
            mb: 0.25,
          }}>
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
};

/**
 * TimelineItem — one row of the experience timeline: a symmetric two-column
 * layout with a pulsing centre node on desktop, a single accent-rail stack on
 * mobile.
 */
const TimelineItem = ({ exp, index, isLast }) => {
  const isLeft = index % 2 === 0;
  const card = <MilestoneCard exp={exp} />;

  return (
    <FadeIn delay={index * 0.1}>
      {/* Desktop: two-column symmetric layout */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mb: isLast ? 0 : 4 }}>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', pr: 3 }}>
          {isLeft ? card : null}
        </Box>

        <Box sx={{ width: 48, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, position: 'relative' }}>
          <Box sx={{
            position: 'absolute',
            width: 24, height: 24, borderRadius: '50%',
            border: `1px solid ${alpha(exp.color, 0.5)}`,
            animation: 'pulse-ring 2s ease-out infinite',
          }} />
          <Box sx={{
            width: 12, height: 12, borderRadius: '50%',
            background: exp.color,
            boxShadow: `0 0 16px ${alpha(exp.color, 0.8)}, 0 0 4px ${exp.color}`,
            border: '2px solid #050508',
            zIndex: 1,
          }} />
        </Box>

        <Box sx={{ flex: 1, pl: 3 }}>
          {!isLeft ? card : null}
        </Box>
      </Box>

      {/* Mobile: single-column stack */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, mb: isLast ? 0 : 3 }}>
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
};

export default TimelineItem;
