import { Box, Container, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { alpha } from '@mui/material/styles';
import { VIOLET, VIOLET_LIGHT, BORDER } from '../../theme/theme';

const SOCIAL_LINKS = [
  { icon: <GitHubIcon sx={{ fontSize: 17 }} />, href: 'https://github.com/sahitya1903', label: 'GitHub', color: '#F0F6FC' },
  { icon: <LinkedInIcon sx={{ fontSize: 17 }} />, href: 'https://linkedin.com/in/sahityakushwaha', label: 'LinkedIn', color: '#4DABF7' },
  { icon: <EmailIcon sx={{ fontSize: 17 }} />, href: 'mailto:sahitya7985@gmail.com', label: 'Email', color: '#A78BFA' },
  {
    icon: (
      <Box
        component="svg"
        viewBox="0 0 128 128"
        sx={{ width: 15, height: 15 }}
      >
        <path fill="currentColor" d="M117.555 76.558c0-3.957-3.008-7.178-6.72-7.178H57.159c-3.712 0-6.72 3.221-6.72 7.178 0 3.958 3.002 7.18 6.72 7.18h53.676c3.712.005 6.72-3.217 6.72-7.18"/>
        <path fill="currentColor" d="m18.79 96.996 23.003 23.26c5.19 5.221 12.363 7.744 20.283 7.744s15.094-2.73 20.294-7.968l13.803-14.065c2.72-2.741 2.624-7.28-.208-10.133-2.832-2.854-7.333-2.95-10.048-.208L71.645 109.53c-2.465 2.49-5.878 3.53-9.649 3.53s-7.179-1.04-9.653-3.53L29.419 86.26c-2.47-2.49-3.712-6.133-3.712-9.936s1.243-7.238 3.712-9.728l22.854-23.361c2.47-2.49 5.952-3.44 9.718-3.44s7.179 1.04 9.648 3.53l14.273 13.9c2.72 2.746 7.221 2.65 10.053-.203 2.832-2.859 2.928-7.398.208-10.14L82.37 32.825a26.64 26.64 0 0 0-12.758-7.094l-.18-.037 13.05-13.35c2.73-2.741 2.635-7.285-.197-10.139S74.945-.74 72.22 2.002L18.79 55.87c-5.19 5.237-7.905 12.464-7.905 20.454S13.6 91.77 18.79 96.996"/>
        <path fill="currentColor" d="M43.5 121.674a11.3 11.3 0 0 1-2.528-1.925c-7.078-7.11-14.187-14.187-21.249-21.318C9.115 87.721 7.445 72.1 15.531 59.39a32 32 0 0 1 4.475-5.355L71.33 2.605c3.333-3.34 7.99-3.478 11.088-.358 2.987 3.003 2.81 7.76-.416 11.019-4.101 4.139-8.208 8.267-12.315 12.4-.219.651-.747 1.067-1.2 1.531-4.603 4.672-9.334 9.222-13.872 13.963-.592.619-1.398.992-1.984 1.627-7.59 7.59-15.27 15.094-22.753 22.784-6.054 6.225-5.85 15.67.363 22.012 6.976 7.125 14.075 14.134 21.126 21.195.357.357.725.704 1.088 1.056 2.496 1.616 2.528 6.667.976 8.912-1.712 2.48-3.947 4-7.11 3.883-1.061-.032-1.936-.458-2.821-.955"/>
      </Box>
    ),
    href: 'https://leetcode.com/u/sahitya1903/',
    label: 'LeetCode',
    color: '#FFA116',
  },
];

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
    {/* Ambient Glow — stronger */}
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

      {/* ── Main footer content ── */}
      <Box sx={{ pt: 2, pb: 0, textAlign: 'center' }}>

        {/* Brand mark */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 0.5 }}>
          {/* Animated pulse dot */}
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
            Sahitya Kushwaha
          </Typography>
        </Box>

        {/* Social links row */}
        <Box sx={{
          display: 'flex', gap: 1.5, justifyContent: 'center', mt: 1.5, flexWrap: 'wrap',
        }}>
          {SOCIAL_LINKS.map(({ icon, href, label, color }) => (
            <Box
              key={label}
              component="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              sx={{
                display: 'flex', alignItems: 'center', gap: 0.75,
                px: 1.5, py: 0.6,
                borderRadius: '8px',
                border: `1px solid ${alpha(color, 0.3)}`,
                background: alpha(color, 0.07),
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                color,
                '&:hover': {
                  borderColor: alpha(color, 0.65),
                  background: alpha(color, 0.16),
                  color,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 6px 22px ${alpha(color, 0.3)}`,
                },
              }}
            >
              <Box sx={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
                {icon}
              </Box>
              <Typography sx={{
                fontSize: '0.72rem',
                fontWeight: 500,
                color: 'inherit',
                fontFamily: '"Inter", sans-serif',
              }}>
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
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
