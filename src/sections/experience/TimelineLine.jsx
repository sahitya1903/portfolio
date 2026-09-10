import { motion } from 'framer-motion';
import { alpha, useTheme } from '@mui/material/styles';

import useRevealOnce, { REVEAL_EASE } from '../../hooks/useRevealOnce';

/** TimelineLine — the vertical spine; draws itself once on scroll-in. */
const TimelineLine = () => {
  const [ref, inView] = useRevealOnce('0px 0px -100px 0px');
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;

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
        background: `linear-gradient(to bottom, transparent, ${alpha(primaryColor, 0.6)}, ${alpha(primaryColor, 0.3)}, transparent)`,
      }}
    />
  );
};

export default TimelineLine;
