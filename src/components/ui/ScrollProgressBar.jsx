import { useScroll, useSpring, motion } from 'framer-motion';

/**
 * ScrollProgressBar — thin violet→cyan gradient line pinned to the top of the
 * viewport, scaling with page scroll progress.
 */
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #7C3AED, #8B5CF6, #06B6D4)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ScrollProgressBar;
