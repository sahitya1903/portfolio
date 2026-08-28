import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * FadeIn — reveals its children (opacity + slight rise) once they scroll
 * into view. Driven by the useInView hook with `once: true`, which latches
 * permanently, so an interrupted reveal can never get stuck at opacity 0.
 */
const FadeIn = ({ children, delay = 0, y = 24 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
