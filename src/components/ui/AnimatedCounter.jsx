import { Box } from '@mui/material';
import { useMotionValue, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import useRevealOnce, { REVEAL_EASE } from '../../hooks/useRevealOnce';

/**
 * AnimatedCounter — counts up from 0 to `value` the first time it scrolls into
 * view, then latches. Rendered inline (as a <span>) so it can sit inside a
 * larger typographic element.
 */
const AnimatedCounter = ({ value, suffix = '' }) => {
  const [ref, isInView] = useRevealOnce('0px 0px -60px 0px');
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration: 1.8,
      ease: REVEAL_EASE,
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
    <Box component="span" ref={ref} sx={{ fontFamily: '"JetBrains Mono", monospace' }}>
      {display}{suffix}
    </Box>
  );
};

export default AnimatedCounter;
