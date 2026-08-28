import { createTheme, alpha } from '@mui/material/styles';

/* ── Brand palette ─────────────────────────────────────────── */
const VIOLET        = '#7C3AED';
const VIOLET_LIGHT  = '#8B5CF6';
const VIOLET_DARK   = '#5B21B6';

/* ── CSS Variable mapping for borders ──────────────────────── */
const BORDER = 'var(--border-color)';

// ── DARK THEME ──
const darkTheme = createTheme({
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
      default: '#050508',
      paper: '#0D0D14',
    },
    surface: {
      elevated: '#13131E',
      card: '#0F0F1A',
      subtle: 'rgba(124, 58, 237, 0.03)',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
      disabled: '#475569',
    },
    divider: 'rgba(255,255,255,0.07)',
    success: { main: '#10B981' },
    error: { main: '#EF4444' },
    warning: { main: '#F59E0B' },
  },

  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
      fontWeight: 800,
      lineHeight: 1.04,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: '1.3rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1.05rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.9rem',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0.01em',
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
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
    },
    button: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      letterSpacing: '0.01em',
      textTransform: 'none',
      lineHeight: 1.75,
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
          backgroundColor: '#050508',
          color: '#F8FAFC',
          overflowX: 'hidden',
        },
        '::-webkit-scrollbar': { width: '6px' },
        '::-webkit-scrollbar-track': { background: '#050508' },
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
          borderRadius: 10,
          fontWeight: 600,
          transition: 'all 0.22s ease',
        },
        sizeSmall: {
          padding: '0 14px',
          height: '31px',
          fontSize: '0.78rem',
        },
        sizeMedium: {
          padding: '0 22px',
          height: '40px',
          fontSize: '0.875rem',
        },
        sizeLarge: {
          padding: '0 28px',
          height: '48px',
          fontSize: '0.95rem',
        },
        contained: {
          background: `linear-gradient(135deg, ${VIOLET}, ${VIOLET_DARK})`,
          '&:hover': {
            background: `linear-gradient(135deg, ${VIOLET_LIGHT}, ${VIOLET})`,
            transform: 'translateY(-2px)',
            boxShadow: `0 8px 25px ${alpha(VIOLET, 0.4)}`,
          },
          '&:active': { transform: 'translateY(0)' },
        },
        outlined: {
          borderColor: 'rgba(255,255,255,0.07)',
          borderWidth: '1.5px',
          color: '#94A3B8',
          '&:hover': {
            borderColor: VIOLET,
            borderWidth: '1.5px',
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
          backgroundColor: '#0F0F1A',
          border: `1px solid rgba(255,255,255,0.07)`,
          borderRadius: 16,
          backgroundImage: 'none',
          transition: 'all 0.25s ease',
          '&:hover': {
            borderColor: 'rgba(124,58,237,0.45)',
            boxShadow: `0 0 0 1px ${alpha(VIOLET, 0.2)}, 0 20px 60px ${alpha(VIOLET, 0.08)}`,
            transform: 'translateY(-2px)',
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          fontSize: '0.75rem',
          fontFamily: '"JetBrains Mono", monospace',
        },
        outlined: {
          borderColor: 'rgba(255,255,255,0.07)',
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
        root: { borderColor: 'rgba(255,255,255,0.07)' },
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          height: 5,
          background: 'rgba(255,255,255,0.05)',
        },
        bar: {
          borderRadius: 6,
          background: `linear-gradient(90deg, ${VIOLET}, ${VIOLET_LIGHT})`,
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: '#13131E',
          border: `1px solid rgba(255,255,255,0.07)`,
          color: '#F8FAFC',
          fontSize: '0.73rem',
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

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            backgroundColor: 'rgba(255,255,255,0.025)',
            transition: 'background 0.2s ease',
            '& fieldset': {
              borderColor: 'rgba(255,255,255,0.07)',
              transition: 'border-color 0.2s ease',
            },
            '&:hover fieldset': {
              borderColor: alpha(VIOLET, 0.5),
            },
            '&.Mui-focused': {
              backgroundColor: 'rgba(255,255,255,0.04)',
              '& fieldset': {
                borderColor: VIOLET,
                boxShadow: `0 0 0 3px ${alpha(VIOLET, 0.12)}`,
              },
            },
            '&.Mui-error fieldset': {
              borderColor: '#EF4444',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#64748B',
            fontSize: '0.875rem',
            '&.Mui-focused': { color: VIOLET_LIGHT },
            '&.Mui-error': { color: '#EF4444' },
          },
          '& .MuiOutlinedInput-input': {
            color: '#F8FAFC',
            fontSize: '0.9rem',
            '&::placeholder': { color: '#475569', opacity: 1 },
          },
          '& .MuiFormHelperText-root': {
            fontSize: '0.75rem',
            marginTop: '6px',
          },
        },
      },
    },
  },
});

export default darkTheme;

export { VIOLET, VIOLET_LIGHT, BORDER };
