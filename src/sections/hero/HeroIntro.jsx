import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

import { SITE } from '../../config/site';
import { REVEAL_EASE } from '../../hooks/useRevealOnce';
import { VIOLET } from '../../theme/theme';

/** HeroIntro — headline, italic subhead, and the résumé CTA (hero left column). */
const HeroIntro = () => (
  <>
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.05, ease: REVEAL_EASE }}
    >
      <Typography
        component="h1"
        sx={{
          fontFamily: '"Playfair Display", serif',
          fontSize: { xs: '2.3rem', sm: '3.3rem', md: '4rem' },
          fontWeight: 500,
          lineHeight: 1.08,
          letterSpacing: '-0.03em',
          color: '#FFFFFF',
          mb: 2,
        }}
      >
        Hey, I'm{' '}
        <Box component="span" sx={{
          background: 'linear-gradient(125deg, #7C3AED 0%, #8B5CF6 45%, #06B6D4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Sahitya
        </Box>
        <Box component="span" sx={{ color: VIOLET, opacity: 0.5 }}>..</Box>
      </Typography>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: REVEAL_EASE }}
    >
      <Typography
        sx={{
          fontFamily: '"Playfair Display", serif',
          fontStyle: 'italic',
          mt: 1,
          mb: 4,
          maxWidth: 520,
          fontSize: { xs: '1.1rem', md: '1.35rem' },
          lineHeight: 1.45,
          color: 'text.secondary',
          letterSpacing: '0.02em',
        }}
      >
        Welcome to my corner of the web!
      </Typography>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15, ease: REVEAL_EASE }}
    >
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button
          id="hero-view-resume"
          variant="contained"
          size="large"
          component="a"
          href={SITE.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<DescriptionOutlinedIcon />}
          sx={{ px: 4, py: 1.4, fontSize: '0.95rem', fontFamily: '"Playfair Display", serif' }}
        >
          View Resume
        </Button>
      </Box>
    </motion.div>
  </>
);

export default HeroIntro;
