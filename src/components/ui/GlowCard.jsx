import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { VIOLET, BORDER } from '../../theme/theme';

/**
 * GlowCard — glassmorphism card with ambient hover glow for dark theme.
 */
const GlowCard = ({ children, glowIntensity = 0.5, sx = {}, ...props }) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <Box
      component={motion.div}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
      onMouseMove={handleMouseMove}
      sx={{
        position: 'relative',
        borderRadius: '16px',
        border: `1px solid ${BORDER}`,
        // Opaque fill — a translucent bg + backdrop-filter drops out during fast
        // scroll on some browsers, making the whole card render invisible.
        background: 'linear-gradient(145deg, #0D0D15 0%, #0A0A11 100%)',
        overflow: 'hidden',
        boxShadow: 'none',
        // transform is animated by framer-motion's whileHover — keep it off the CSS transition
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        /* Ambient hover light */
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${alpha(VIOLET, 0.07)}, transparent 40%)`,
          pointerEvents: 'none',
          transition: 'opacity 0.3s',
          opacity: 0,
          zIndex: 0,
        },
        /* Top shimmer line */
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.15), transparent)',
          pointerEvents: 'none',
          zIndex: 1,
        },
        '&:hover': {
          borderColor: alpha(VIOLET, glowIntensity),
          boxShadow: `0 0 0 1px ${alpha(VIOLET, glowIntensity * 0.4)}, 0 20px 60px ${alpha(VIOLET, glowIntensity * 0.12)}, inset 0 1px 0 rgba(255,255,255,0.05)`,
          '&::before': { opacity: 1 },
        },
        ...sx,
      }}
      {...props}
    >
      {/* Content sits above absolute pseudo-layers */}
      <Box sx={{ position: 'relative', zIndex: 2, height: '100%' }}>
        {children}
      </Box>
    </Box>
  );
};

export default GlowCard;
