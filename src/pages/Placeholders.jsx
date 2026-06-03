import { Box, Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { alpha } from '@mui/material/styles';
import { VIOLET, VIOLET_LIGHT } from '../theme/theme';

const ComingSoon = ({ title, label }) => (
  <Box sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          display: 'inline-flex', alignItems: 'center', gap: 1,
          px: 2, py: 0.75, mb: 3, borderRadius: '100px',
          border: `1px solid ${alpha(VIOLET, 0.3)}`,
          background: alpha(VIOLET, 0.06),
        }}
      >
        <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: VIOLET_LIGHT, letterSpacing: '0.1em' }}>
          {label}
        </Typography>
      </Box>
      <Typography variant="h2" sx={{ mb: 2, color: 'text.primary' }}>
        {title}
      </Typography>
      <Typography sx={{ color: '#475569', mb: 4, lineHeight: 1.8 }}>
        This page is being crafted with care. Check back soon — it'll be worth the wait.
      </Typography>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        component={RouterLink}
        to="/"
        sx={{ px: 3 }}
      >
        Back to Home
      </Button>
    </Container>
  </Box>
);

export const About = () => <ComingSoon title="About Me" label="// about" />;
export const Projects = () => <ComingSoon title="All Projects" label="// projects" />;
export const Blog = () => <ComingSoon title="Blog" label="// blog" />;
export const Contact = () => <ComingSoon title="Get In Touch" label="// contact" />;
