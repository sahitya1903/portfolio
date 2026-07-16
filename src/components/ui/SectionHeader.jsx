import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import { VIOLET, VIOLET_LIGHT } from '../../theme/theme';

/**
 * SectionHeader — animated label + heading + optional subtext.
 * label: small overline tag (e.g. "// 01  FEATURED WORK")
 * title: main H2 heading (can contain JSX for gradient spans)
 * subtitle: optional body text
 */
const SectionHeader = ({ label, title, subtitle, align = 'center', sx = {} }) => {
  const isCenter = align === 'center';

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px 150px 0px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      sx={{ mb: { xs: 6, md: 8 }, textAlign: align, ...sx }}
    >
      {label && (
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            mb: 2.5,
            px: 2,
            py: 0.6,
            borderRadius: '100px',
            border: `1px solid ${alpha(VIOLET, 0.3)}`,
            background: alpha(VIOLET, 0.08),
          }}
        >
          <Box
            sx={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: VIOLET_LIGHT,
              animation: 'pulse-glow 2s ease-in-out infinite',
            }}
          />
          <Typography
            variant="caption"
            sx={{
              color: VIOLET_LIGHT,
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.68rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            {label}
          </Typography>
        </Box>
      )}

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
