import { createTheme, alpha } from '@mui/material/styles';

const VIOLET = '#7C3AED';
const VIOLET_LIGHT = '#9D6FFF';
const VIOLET_DARK = '#5B21B6';
const BG_BASE = '#050508';
const BG_SURFACE = '#0D0D14';
const BG_ELEVATED = '#13131E';
const BG_CARD = '#0F0F1A';
const BORDER = 'rgba(255,255,255,0.07)';
const BORDER_HOVER = 'rgba(124,58,237,0.45)';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: VIOLET,
      light: VIOLET_LIGHT,
      dark: VIOLET_DARK,
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#06B6D4',
      light: '#38BDF8',
      dark: '#0E7490',
    },
    background: {
      default: BG_BASE,
      paper: BG_SURFACE,
    },
    surface: {
      elevated: BG_ELEVATED,
      card: BG_CARD,
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
      disabled: '#475569',
    },
    divider: BORDER,
    success: { main: '#10B981' },
    error: { main: '#EF4444' },
    warning: { main: '#F59E0B' },
  },

  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontSize: 'clamp(2.5rem, 6vw, 5rem)',
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontSize: 'clamp(1.8rem, 4vw, 3rem)',
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0.02em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#94A3B8',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.65,
      color: '#64748B',
    },
    caption: {
      fontSize: '0.75rem',
      fontFamily: '"JetBrains Mono", "Courier New", monospace',
      letterSpacing: '0.05em',
      color: '#64748B',
    },
    overline: {
      fontSize: '0.7rem',
      fontWeight: 600,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.01em',
      textTransform: 'none',
    },
  },

  shape: {
    borderRadius: 12,
  },

  spacing: 8,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*, *::before, *::after': { boxSizing: 'border-box' },
        html: { scrollBehavior: 'smooth' },
        body: {
          backgroundColor: BG_BASE,
          color: '#F8FAFC',
          overflowX: 'hidden',
        },
        '::-webkit-scrollbar': { width: '6px' },
        '::-webkit-scrollbar-track': { background: BG_BASE },
        '::-webkit-scrollbar-thumb': {
          background: 'rgba(124,58,237,0.4)',
          borderRadius: '3px',
        },
        '::-webkit-scrollbar-thumb:hover': { background: VIOLET },
        '::selection': {
          background: alpha(VIOLET, 0.35),
          color: '#fff',
        },
      },
    },

    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          fontSize: '0.875rem',
          padding: '10px 20px',
          transition: 'all 0.2s ease',
        },
        contained: {
          background: `linear-gradient(135deg, ${VIOLET}, ${VIOLET_DARK})`,
          '&:hover': {
            background: `linear-gradient(135deg, ${VIOLET_LIGHT}, ${VIOLET})`,
            transform: 'translateY(-1px)',
            boxShadow: `0 8px 25px ${alpha(VIOLET, 0.4)}`,
          },
          '&:active': { transform: 'translateY(0)' },
        },
        outlined: {
          borderColor: BORDER,
          color: '#94A3B8',
          '&:hover': {
            borderColor: VIOLET,
            color: '#fff',
            background: alpha(VIOLET, 0.08),
          },
        },
        text: {
          color: '#94A3B8',
          '&:hover': { color: '#fff', background: 'rgba(255,255,255,0.05)' },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: BG_CARD,
          border: `1px solid ${BORDER}`,
          borderRadius: 16,
          backgroundImage: 'none',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
          '&:hover': {
            borderColor: BORDER_HOVER,
            boxShadow: `0 0 0 1px ${alpha(VIOLET, 0.2)}, 0 20px 60px ${alpha(VIOLET, 0.08)}`,
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
          fontSize: '0.75rem',
          fontFamily: '"JetBrains Mono", monospace',
        },
        outlined: {
          borderColor: BORDER,
          color: '#94A3B8',
          '&:hover': {
            borderColor: alpha(VIOLET, 0.6),
            color: VIOLET_LIGHT,
            background: alpha(VIOLET, 0.06),
          },
        },
        filled: {
          background: alpha(VIOLET, 0.15),
          color: VIOLET_LIGHT,
          border: `1px solid ${alpha(VIOLET, 0.3)}`,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'transparent',
          backgroundImage: 'none',
          boxShadow: 'none',
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: { borderColor: BORDER },
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          height: 4,
          background: 'rgba(255,255,255,0.05)',
        },
        bar: {
          borderRadius: 4,
          background: `linear-gradient(90deg, ${VIOLET}, ${VIOLET_LIGHT})`,
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: BG_ELEVATED,
          border: `1px solid ${BORDER}`,
          color: '#F8FAFC',
          fontSize: '0.75rem',
          borderRadius: 8,
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: VIOLET_LIGHT,
          textDecorationColor: alpha(VIOLET_LIGHT, 0.4),
          '&:hover': { color: '#fff', textDecorationColor: '#fff' },
        },
      },
    },
  },
});

export default theme;
export { VIOLET, VIOLET_LIGHT, VIOLET_DARK, BG_BASE, BG_SURFACE, BG_ELEVATED, BG_CARD, BORDER, BORDER_HOVER };
