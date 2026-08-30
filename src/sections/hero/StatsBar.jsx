import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';

import AnimatedCounter from '../../components/ui/AnimatedCounter';
import { REVEAL_EASE } from '../../hooks/useRevealOnce';
import { VIOLET, VIOLET_LIGHT, BORDER } from '../../theme/theme';
import { HERO_STATS } from './hero.data';

/** StatsBar — the four count-up stat cells beneath the hero. */
const StatsBar = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay: 0.2, ease: REVEAL_EASE }}
  >
    <Box
      sx={{
        mt: { xs: 6, md: 8 },
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
        gap: 2,
      }}
    >
      {HERO_STATS.map(({ value, label, suffix }) => (
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
);

export default StatsBar;
