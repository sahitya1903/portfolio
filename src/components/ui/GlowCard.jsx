import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { VIOLET, BORDER } from '../../theme/theme';

/**
 * GlowCard — glassmorphism card that dynamically swaps style behaviors
 * to keep the dark mode EXACTLY as it was initially, and premium light theme for light mode.
 */
const GlowCard = ({ children, glowIntensity = 0.5, sx = {}, ...props }) => (
  <Box
    component={motion.div}
    whileHover={{ y: (theme) => theme.palette.mode === 'dark' ? -4 : -3 }}
    transition={{ type: 'spring', stiffness: 320, damping: 20 }}
    sx={{
      position: 'relative',
      borderRadius: '16px',
      border: `1px solid ${BORDER}`,
      background: (theme) =>
        theme.palette.mode === 'dark'
          ? 'linear-gradient(145deg, rgba(13,13,20,0.95) 0%, rgba(9,9,15,0.98) 100%)'
          : '#FFFFFF',
      backdropFilter: 'blur(12px)',
      overflow: 'hidden',
      boxShadow: (theme) =>
        theme.palette.mode === 'dark'
          ? 'none'
          : '0 1px 4px rgba(15,23,42,0.05), 0 1px 2px rgba(15,23,42,0.04)',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
      /* Ambient hover light */
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: 'inherit',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${alpha(VIOLET, 0.06)}, transparent 40%)`
            : `radial-gradient(480px circle at var(--mouse-x, 50%) var(--mouse-y, 30%), ${alpha(VIOLET, 0.07)}, transparent 40%)`,
        pointerEvents: 'none',
        transition: 'opacity 0.3s',
        opacity: 0,
        zIndex: 0,
      },
      /* Top highlighted border lines for light mode only */
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '10%',
        right: '10%',
        height: '1px',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'transparent'
            : 'linear-gradient(90deg, transparent, rgba(124,58,237,0.12), transparent)',
        pointerEvents: 'none',
        zIndex: 1,
      },
      '&:hover': {
        borderColor: (theme) =>
          theme.palette.mode === 'dark'
            ? alpha(VIOLET, glowIntensity)
            : alpha(VIOLET, glowIntensity * 0.5),
        boxShadow: (theme) =>
          theme.palette.mode === 'dark'
            ? `0 0 0 1px ${alpha(VIOLET, glowIntensity * 0.4)}, 0 20px 60px ${alpha(VIOLET, glowIntensity * 0.12)}, inset 0 1px 0 rgba(255,255,255,0.05)`
            : `0 0 0 1px ${alpha(VIOLET, glowIntensity * 0.12)}, 0 12px 36px rgba(15,23,42,0.09), 0 4px 12px rgba(15,23,42,0.05)`,
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

export default GlowCard;
