import { motion } from 'framer-motion';
import useRevealOnce, { REVEAL_EASE } from '../../hooks/useRevealOnce';

/**
 * FadeIn — reveals its children (opacity + slight rise) once they scroll
 * into view. Backed by useRevealOnce (`once: true` latches permanently), so
 * an interrupted reveal can never get stuck at opacity 0.
 */
const FadeIn = ({ children, delay = 0, y = 24 }) => {
  const [ref, inView] = useRevealOnce();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, delay, ease: REVEAL_EASE }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
