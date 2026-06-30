import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import { VIOLET, VIOLET_LIGHT, VIOLET_DARK } from '../../theme/theme';

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
            border: (theme) => theme.palette.mode === 'dark'
              ? `1px solid ${alpha(VIOLET, 0.3)}`
              : `1px solid ${alpha(VIOLET, 0.2)}`,
            background: (theme) => theme.palette.mode === 'dark'
              ? alpha(VIOLET, 0.08)
              : alpha(VIOLET, 0.06),
          }}
        >
          <Box
            sx={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: (theme) => theme.palette.mode === 'dark' ? VIOLET_LIGHT : VIOLET,
              animation: (theme) => theme.palette.mode === 'dark' ? 'pulse-glow 2s ease-in-out infinite' : 'none',
              opacity: (theme) => theme.palette.mode === 'dark' ? 1 : 0.8,
            }}
          />
          <Typography
            variant="caption"
            sx={{
              color: (theme) => theme.palette.mode === 'dark' ? VIOLET_LIGHT : VIOLET_DARK,
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
          color: (theme) => theme.palette.mode === 'dark' ? 'text.primary' : '#0F172A',
          mb: subtitle ? (theme => theme.palette.mode === 'dark' ? 2 : 2.5) : 0,
          ...(isCenter && { textAlign: 'center' }),
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: (theme) => theme.palette.mode === 'dark' ? 'text.secondary' : '#64748B',
            maxWidth: isCenter ? 560 : '100%',
            ...(isCenter && { mx: 'auto' }),
            lineHeight: 1.8,
            fontSize: (theme) => theme.palette.mode === 'dark' ? '1rem' : '1.05rem',
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;
