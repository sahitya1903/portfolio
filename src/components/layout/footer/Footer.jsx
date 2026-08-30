import { Box, Container, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { alpha } from '@mui/material/styles';

import { SITE } from '../../../config/site';
import { VIOLET, VIOLET_LIGHT, BORDER } from '../../../theme/theme';
import SocialLinks from './SocialLinks';

/** Footer — brand mark, social links, copyright. */
const Footer = () => (
  <Box
    component="footer"
    sx={{
      position: 'relative',
      pb: 0,
      borderTop: `1px solid ${BORDER}`,
      background: 'transparent',
      overflow: 'hidden',
    }}
  >
    {/* Ambient glow */}
    <Box sx={{
      position: 'absolute',
      top: '-60px', left: '50%', transform: 'translateX(-50%)',
      width: 600, height: 200,
      borderRadius: '50%',
      background: `radial-gradient(ellipse, ${alpha(VIOLET, 0.12)} 0%, transparent 70%)`,
      filter: 'blur(40px)',
      pointerEvents: 'none',
    }} />

    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <Box sx={{ pt: 2, pb: 0, textAlign: 'center' }}>
        {/* Brand mark */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 0.5 }}>
          <Box sx={{
            width: 8, height: 8, borderRadius: '50%',
            background: VIOLET_LIGHT,
            boxShadow: `0 0 12px ${alpha(VIOLET_LIGHT, 0.8)}`,
            animation: 'pulse-glow 2.5s ease infinite',
          }} />
          <Typography sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '1rem',
            fontWeight: 600,
            color: 'text.primary',
            letterSpacing: '0.05em',
          }}>
            {SITE.name}
          </Typography>
        </Box>

        <SocialLinks />
      </Box>

      <Box sx={{
        position: 'relative',
        pt: 1.5,
        pb: 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Typography sx={{
          fontSize: '0.76rem',
          color: 'text.secondary',
          fontFamily: '"Playfair Display", serif',
          display: 'flex', alignItems: 'center', gap: 0.5,
          textAlign: 'center',
        }}>
          © {new Date().getFullYear()} · Designed & built with
          <FavoriteIcon sx={{ fontSize: 11, color: '#EF4444', mx: 0.25 }} />
          by Sahitya
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
