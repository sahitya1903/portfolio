import { Box, Tooltip } from '@mui/material';

const REST_COLOR = '#64748B';

/** SkillIcon — one marquee glyph: uniform neutral tone at rest, lifts + colours on hover. */
const SkillIcon = ({ Icon, color, label }) => {
  return (
    <Tooltip
      title={label}
      arrow
      placement="top"
      disableInteractive
      enterDelay={0}
      enterNextDelay={0}
      enterTouchDelay={0}
      leaveDelay={0}
      slotProps={{
        tooltip: {
          sx: {
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.72rem',
            fontWeight: 500,
            letterSpacing: '0.02em',
            px: 1.1,
            py: 0.55,
            background: '#1B1B27',
            border: '1px solid rgba(255,255,255,0.14)',
            color: '#F8FAFC',
            boxShadow: '0 8px 24px rgba(0,0,0,0.55)',
          },
        },
        arrow: { sx: { color: '#1B1B27' } },
        transition: { timeout: { enter: 120, exit: 0 } },
      }}
    >
      <Box
        component="span"
        role="img"
        aria-label={label}
        sx={{
          flexShrink: 0,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          color: REST_COLOR,
          opacity: 0.65,
          transition: 'color .28s ease, opacity .28s ease, transform .28s ease',
          '& svg': { width: 26, height: 26 },
          '&:hover': {
            color,
            opacity: 1,
            transform: 'translateY(-3px) scale(1.18)',
          },
        }}
      >
        <Icon />
      </Box>
    </Tooltip>
  );
};

export default SkillIcon;
