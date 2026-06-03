import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { VIOLET, BORDER } from '../../theme/theme';

/**
 * GlowCard — glassmorphism card with purple border glow on hover.
 * Accepts all Box props plus `glowIntensity` (0–1, default 0.5).
 */
const GlowCard = ({ children, glowIntensity = 0.5, sx = {}, ...props }) => (
  <Box
    component={motion.div}
    whileHover={{ y: -4 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    sx={{
      position: 'relative',
      borderRadius: '16px',
      border: `1px solid ${BORDER}`,
      background:
        'linear-gradient(145deg, rgba(13,13,20,0.95) 0%, rgba(9,9,15,0.98) 100%)',
      backdropFilter: 'blur(12px)',
      overflow: 'hidden',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: 'inherit',
        background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${alpha(VIOLET, 0.06)}, transparent 40%)`,
        pointerEvents: 'none',
        transition: 'opacity 0.3s',
        opacity: 0,
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
    {children}
  </Box>
);

export default GlowCard;
