import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, IconButton, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { alpha } from '@mui/material/styles';
import { VIOLET, VIOLET_LIGHT, BORDER } from '../../theme/theme';

const SOCIAL_LINKS = [
  { icon: <GitHubIcon fontSize="small" />, href: 'https://github.com/sahitya1903', label: 'GitHub' },
  { icon: <LinkedInIcon fontSize="small" />, href: 'https://linkedin.com/in/sahityakushwaha', label: 'LinkedIn' },
  { icon: <EmailIcon fontSize="small" />, href: 'mailto:sahitya7985@gmail.com', label: 'Email' },
  { icon: null, href: 'https://leetcode.com/u/sahitya1903/', label: 'LeetCode' },
];

const FOOTER_LINKS = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

const Footer = () => (
  <Box
    component="footer"
    sx={{
      borderTop: `1px solid ${BORDER}`,
      background: 'rgba(5,5,8,0.9)',
      backdropFilter: 'blur(12px)',
      py: 4,
      mt: 8,
    }}
  >
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'center', sm: 'center' },
          justifyContent: 'space-between',
          gap: 3,
        }}
      >
        {/* Brand */}
        <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: 'text.primary', mb: 0.25 }}>
            Sahitya Kushwaha
          </Typography>
          <Typography
            component="a"
            href="https://sahitya.codes"
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.68rem',
              color: VIOLET_LIGHT,
              textDecoration: 'none',
              letterSpacing: '0.04em',
              '&:hover': { color: '#fff' },
            }}
          >
            sahitya.codes
          </Typography>
        </Box>

        {/* Nav Links */}
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
          {FOOTER_LINKS.map(({ label, path }) => (
            <Typography
              key={path}
              component={RouterLink}
              to={path}
              sx={{
                fontSize: '0.82rem',
                color: 'text.secondary',
                textDecoration: 'none',
                transition: 'color 0.2s',
                '&:hover': { color: 'text.primary' },
              }}
            >
              {label}
            </Typography>
          ))}
        </Box>

        {/* Social Icons */}
        <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
          {SOCIAL_LINKS.map(({ icon, href, label }) => (
            <IconButton
              key={label}
              component="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              size="small"
              sx={{
                color: 'text.secondary',
                transition: 'all 0.2s',
                '&:hover': {
                  color: label === 'LeetCode' ? '#FFA116' : VIOLET_LIGHT,
                  background: label === 'LeetCode' ? alpha('#FFA116', 0.1) : alpha(VIOLET, 0.1),
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {icon ?? (
                <Box sx={{ width: 16, height: 16, borderRadius: '3px', background: '#FFA116', opacity: 0.75, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box component="span" sx={{ fontSize: '7px', fontWeight: 900, color: '#fff', lineHeight: 1 }}>LC</Box>
                </Box>
              )}
            </IconButton>
          ))}
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          © {new Date().getFullYear()} Sahitya Kushwaha · Built with
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: VIOLET_LIGHT, fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem' }}
        >
          React + MUI + Framer Motion
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          · Hosted at sahitya.codes
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
