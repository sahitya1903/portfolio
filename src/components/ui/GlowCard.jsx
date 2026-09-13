import { Box } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

/**
 * GlowCard — glassmorphism card with an ambient hover glow.
 */
const GlowCard = ({ children, glowIntensity = 0.5, sx = {}, ...props }) => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;

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
        border: `1px solid ${theme.palette.divider}`,
        background: '#FFFFFF',
        overflow: 'hidden',
        boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.05)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        /* Ambient hover light */
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${alpha(primaryColor, 0.08)}, transparent 40%)`,
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
          background: `linear-gradient(90deg, transparent, ${alpha(primaryColor, 0.25)}, transparent)`,
          pointerEvents: 'none',
          zIndex: 1,
        },
        '&:hover': {
          borderColor: alpha(primaryColor, glowIntensity),
          boxShadow: `0 0 0 1px ${alpha(primaryColor, glowIntensity * 0.3)}, 0 20px 40px -10px ${alpha(primaryColor, glowIntensity * 0.15)}`,
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
