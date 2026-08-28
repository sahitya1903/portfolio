import { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';

/**
 * SectionHeader — animated heading + optional subtext.
 * title: main H2 heading (can contain JSX for gradient spans)
 * subtitle: optional body text
 */
const SectionHeader = ({ title, subtitle, align = 'center', sx = {} }) => {
  const isCenter = align === 'center';
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  return (
    <Box
      ref={ref}
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      sx={{ mb: { xs: 6, md: 8 }, textAlign: align, ...sx }}
    >
      <Typography
        variant="h2"
        sx={{
          color: 'text.primary',
          mb: subtitle ? 2 : 0,
          ...(isCenter && { textAlign: 'center' }),
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            maxWidth: isCenter ? 560 : '100%',
            ...(isCenter && { mx: 'auto' }),
            lineHeight: 1.8,
            fontSize: '1rem',
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;
