import { Box, Container, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { alpha } from '@mui/material/styles';
import { VIOLET, VIOLET_LIGHT, BORDER } from '../../theme/theme';

const SOCIAL_LINKS = [
  { icon: <GitHubIcon sx={{ fontSize: 17 }} />, href: 'https://github.com/sahitya1903', label: 'GitHub', color: '#0F172A' },
  { icon: <LinkedInIcon sx={{ fontSize: 17 }} />, href: 'https://linkedin.com/in/sahityakushwaha', label: 'LinkedIn', color: '#0A66C2' },
  { icon: <EmailIcon sx={{ fontSize: 17 }} />, href: 'mailto:sahitya7985@gmail.com', label: 'Email', color: VIOLET_LIGHT },
  {
    icon: (
      <Box sx={{ width: 15, height: 15, borderRadius: '3px', background: '#FFA116', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box component="span" sx={{ fontSize: '7px', fontWeight: 900, color: '#fff', lineHeight: 1 }}>LC</Box>
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
      mt: 2,
      overflow: 'hidden',
      background: (theme) => theme.palette.mode === 'dark' ? 'transparent' : 'linear-gradient(180deg, #F8F7FF 0%, #F3F4F6 100%)',
      borderTop: `1px solid ${BORDER}`,
    }}
  >
    {/* Top gradient edge */}
    <Box sx={{
      position: 'absolute',
      top: 0, left: '10%', right: '10%',
      height: '1px',
      background: `linear-gradient(90deg, transparent, ${alpha(VIOLET, 0.6)}, ${alpha('#06B6D4', 0.4)}, transparent)`,
    }} />

    {/* Ambient glow behind footer */}
    <Box sx={{
      position: 'absolute',
      top: '-40px', left: '50%', transform: 'translateX(-50%)',
      width: 400, height: 120,
      borderRadius: '50%',
      background: `radial-gradient(ellipse, ${alpha(VIOLET, 0.08)} 0%, transparent 70%)`,
      filter: 'blur(30px)',
      pointerEvents: 'none',
    }} />

    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>

      {/* ── Main footer content ── */}
      <Box sx={{ py: { xs: 5, md: 6 }, textAlign: 'center' }}>

        {/* Brand mark */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 1 }}>
          {/* Animated pulse dot */}
          <Box sx={{
            width: 8, height: 8, borderRadius: '50%',
            background: VIOLET_LIGHT,
            boxShadow: `0 0 10px ${alpha(VIOLET_LIGHT, 0.7)}`,
            animation: 'pulse-glow 2.5s ease infinite',
          }} />
          <Typography sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '1rem',
            fontWeight: 600,
            color: 'text.secondary',
            letterSpacing: '0.05em',
          }}>
            Sahitya Kushwaha
          </Typography>
        </Box>

        <Typography
          component="a"
          href="https://www.sahitya.codes"
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.75rem',
            color: alpha(VIOLET_LIGHT, 0.6),
            textDecoration: 'none',
            letterSpacing: '0.06em',
            transition: 'color 0.2s',
            '&:hover': { color: VIOLET_LIGHT },
          }}
        >
          www.sahitya.codes
        </Typography>

        {/* Social links row */}
        <Box sx={{
          display: 'flex', gap: 1.5, justifyContent: 'center', mt: 2, flexWrap: 'wrap',
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
                border: `1px solid ${BORDER}`,
                background: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(15, 23, 42, 0.02)',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                color: 'text.secondary',
                '&:hover': {
                  borderColor: (theme) => {
                    const resolvedColor = label === 'GitHub' && theme.palette.mode === 'dark' ? '#FFFFFF' : color;
                    return alpha(resolvedColor, 0.4);
                  },
                  background: (theme) => {
                    const resolvedColor = label === 'GitHub' && theme.palette.mode === 'dark' ? '#FFFFFF' : color;
                    return alpha(resolvedColor, 0.08);
                  },
                  color: (theme) => {
                    return label === 'GitHub' && theme.palette.mode === 'dark' ? '#FFFFFF' : color;
                  },
                  transform: 'translateY(-2px)',
                  boxShadow: (theme) => {
                    const resolvedColor = label === 'GitHub' && theme.palette.mode === 'dark' ? '#FFFFFF' : color;
                    return `0 4px 20px ${alpha(resolvedColor, 0.15)}`;
                  },
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

      {/* ── Bottom bar ── */}
      <Box sx={{
        position: 'relative',
        py: 2.5,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1.5,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0, left: '15%', right: '15%',
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${alpha(VIOLET, 0.25)}, transparent)`,
        },
      }}>
        <Typography sx={{
          fontSize: '0.76rem',
          color: 'text.secondary',
          fontFamily: '"Playfair Display", serif',
          display: 'flex', alignItems: 'center', gap: 0.5,
        }}>
          © {new Date().getFullYear()} · Designed & built with
          <FavoriteIcon sx={{ fontSize: 11, color: '#EF4444', mx: 0.25 }} />
          by Sahitya
        </Typography>

        <Typography sx={{
          fontSize: '0.76rem',
          color: 'text.secondary',
          fontFamily: '"Playfair Display", serif',
          letterSpacing: '0.05em',
        }}>
          React · Vite · MUI · Framer Motion
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
