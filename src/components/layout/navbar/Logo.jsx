import { Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

/** Logo — mark + wordmark, links home. */
const Logo = () => (
  <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
    <Box
      component="img"
      src="/logo.png"
      alt="SK Logo"
      sx={{
        width: 36,
        height: 36,
        imageRendering: '-webkit-optimize-contrast',
        filter: 'brightness(1.15) contrast(1.1) drop-shadow(0 0 8px rgba(139, 92, 246, 0.5))',
        flexShrink: 0,
        objectFit: 'contain',
        transition: 'all 0.3s ease',
        '&:hover': {
          filter: 'brightness(1.3) contrast(1.15) drop-shadow(0 0 14px rgba(139, 92, 246, 0.8))',
          transform: 'scale(1.05)',
        },
      }}
    />
    <Typography
      sx={{
        fontFamily: '"Playfair Display", serif',
        fontWeight: 400,
        fontSize: '1.1rem',
        color: 'text.primary',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
      }}
    >
      SAHITYA KUSHWAHA
    </Typography>
  </RouterLink>
);

export default Logo;
