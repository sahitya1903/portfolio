import { Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import SectionPage from '../components/layout/SectionPage';
import { REVEAL_EASE } from '../hooks/useRevealOnce';
import { VIOLET_LIGHT } from '../theme/theme';

/** 404 — shown for any unmatched route. */
const NotFound = () => (
  <SectionPage>
    <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: REVEAL_EASE }}
      >
        <Typography
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: { xs: '4.5rem', md: '6rem' },
            fontWeight: 700,
            lineHeight: 1,
            background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #06B6D4)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </Typography>

        <Typography variant="h3" sx={{ color: 'text.primary', mt: 2, mb: 1.5 }}>
          Page not found
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
          The page you're looking for doesn't exist or has moved.
        </Typography>

        <Button
          variant="contained"
          size="large"
          component={RouterLink}
          to="/"
          startIcon={<ArrowBackIcon />}
          sx={{ px: 4, py: 1.4, fontSize: '0.95rem', fontFamily: '"Playfair Display", serif' }}
        >
          Back to Home
        </Button>
      </motion.div>
    </Container>
  </SectionPage>
);

export default NotFound;
