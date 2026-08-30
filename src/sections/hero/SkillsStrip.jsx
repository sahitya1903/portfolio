import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';

import { REVEAL_EASE } from '../../hooks/useRevealOnce';
import { VIOLET, BORDER } from '../../theme/theme';
import { SKILLS } from './hero.data';
import MarqueeRow from './MarqueeRow';

/** SkillsStrip — bordered band housing the auto-scrolling skill-logo marquee. */
const SkillsStrip = () => (
  <Box
    component={motion.div}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.28, ease: REVEAL_EASE }}
    sx={{
      mt: { xs: 4, md: 5 },
      position: 'relative',
      overflow: 'hidden',
      py: 1.25,
      borderTop: `1px solid ${BORDER}`,
      borderBottom: `1px solid ${BORDER}`,
      background: 'linear-gradient(180deg, rgba(139,92,246,0.045) 0%, rgba(255,255,255,0.012) 100%)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)',
      maskImage: 'linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '12%',
        right: '12%',
        height: '1px',
        background: `linear-gradient(90deg, transparent, ${alpha(VIOLET, 0.35)}, transparent)`,
      },
      '&:hover .marquee-row': { animationPlayState: 'paused' },
    }}
  >
    <MarqueeRow items={SKILLS} duration={50} />
  </Box>
);

export default SkillsStrip;
