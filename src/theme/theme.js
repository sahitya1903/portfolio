import { createTheme, alpha } from '@mui/material/styles';

/* ── Cobalt & Cyan palette (Option 3 Light Mode) ─────────── */
const COBALT        = '#2563EB';
const COBALT_LIGHT  = '#3B82F6';
const COBALT_DARK   = '#1D4ED8';
const CYAN          = '#06B6D4';
const CYAN_LIGHT    = '#38BDF8';

/* ── Violet palette (Dark Mode) ──────────────────────────── */
const VIOLET        = '#7C3AED';
const VIOLET_LIGHT  = '#8B5CF6';
const VIOLET_DARK   = '#5B21B6';

/* ── CSS Variable mapping for borders ──────────────────────── */
const BORDER = 'var(--border-color)';

/* ── Shared Typography ─────────────────────────────────────── */
const sharedTypography = {
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
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.65,
  },
  caption: {
    fontSize: '0.75rem',
    fontFamily: '"JetBrains Mono", "Courier New", monospace',
    letterSpacing: '0.05em',
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
};

// ── LIGHT THEME (Option 3: Electric Cobalt & Sky Cyan) ───────
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: COBALT,
      light: COBALT_LIGHT,
      dark: COBALT_DARK,
      contrastText: '#ffffff',
    },
    secondary: {
      main: CYAN,
      light: CYAN_LIGHT,
      dark: '#0E7490',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    surface: {
      elevated: '#FFFFFF',
      card: '#FFFFFF',
      subtle: 'rgba(37, 99, 235, 0.05)',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
      disabled: '#94A3B8',
    },
    divider: 'rgba(15, 23, 42, 0.08)',
    success: { main: '#10B981' },
    error: { main: '#EF4444' },
    warning: { main: '#F59E0B' },
  },

  typography: sharedTypography,
  shape: { borderRadius: 12 },
  spacing: 8,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*, *::before, *::after': { boxSizing: 'border-box' },
        html: { scrollBehavior: 'smooth' },
        body: {
          backgroundColor: '#F8FAFC',
          color: '#0F172A',
          overflowX: 'hidden',
        },
        '::-webkit-scrollbar': { width: '6px' },
        '::-webkit-scrollbar-track': { background: '#F8FAFC' },
        '::-webkit-scrollbar-thumb': {
          background: 'rgba(37, 99, 235, 0.35)',
          borderRadius: '3px',
        },
        '::-webkit-scrollbar-thumb:hover': { background: COBALT },
        '::selection': {
          background: alpha(COBALT, 0.2),
          color: '#0F172A',
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
        sizeSmall: { padding: '0 14px', height: '31px', fontSize: '0.78rem' },
        sizeMedium: { padding: '0 22px', height: '40px', fontSize: '0.875rem' },
        sizeLarge: { padding: '0 28px', height: '48px', fontSize: '0.95rem' },
        contained: {
          background: `linear-gradient(135deg, ${COBALT}, ${COBALT_DARK})`,
          color: '#ffffff',
          '&:hover': {
            background: `linear-gradient(135deg, ${COBALT_LIGHT}, ${COBALT})`,
            transform: 'translateY(-2px)',
            boxShadow: `0 8px 25px ${alpha(COBALT, 0.35)}`,
          },
          '&:active': { transform: 'translateY(0)' },
        },
        outlined: {
          borderColor: 'rgba(15, 23, 42, 0.12)',
          borderWidth: '1.5px',
          color: '#334155',
          '&:hover': {
            borderColor: COBALT,
            borderWidth: '1.5px',
            color: COBALT,
            background: alpha(COBALT, 0.06),
          },
        },
        text: {
          color: '#475569',
          '&:hover': { color: '#0F172A', background: 'rgba(15, 23, 42, 0.05)' },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(15, 23, 42, 0.08)',
          borderRadius: 16,
          backgroundImage: 'none',
          boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.25s ease',
          '&:hover': {
            borderColor: alpha(COBALT, 0.4),
            boxShadow: `0 0 0 1px ${alpha(COBALT, 0.15)}, 0 20px 40px -10px ${alpha(COBALT, 0.12)}`,
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
          borderColor: 'rgba(15, 23, 42, 0.12)',
          color: '#475569',
          '&:hover': {
            borderColor: alpha(COBALT, 0.6),
            color: COBALT,
            background: alpha(COBALT, 0.06),
          },
        },
        filled: {
          background: alpha(COBALT, 0.08),
          color: COBALT_DARK,
          border: `1px solid ${alpha(COBALT, 0.2)}`,
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
        root: { borderColor: 'rgba(15, 23, 42, 0.08)' },
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          height: 5,
          background: 'rgba(15, 23, 42, 0.06)',
        },
        bar: {
          borderRadius: 6,
          background: `linear-gradient(90deg, ${COBALT}, ${CYAN})`,
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: '#0F172A',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#F8FAFC',
          fontSize: '0.73rem',
          borderRadius: 8,
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: COBALT,
          textDecorationColor: alpha(COBALT, 0.4),
          '&:hover': { color: COBALT_DARK, textDecorationColor: COBALT_DARK },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            transition: 'background 0.2s ease, border-color 0.2s ease',
            '& fieldset': {
              borderColor: 'rgba(15, 23, 42, 0.12)',
              transition: 'border-color 0.2s ease',
            },
            '&:hover fieldset': {
              borderColor: alpha(COBALT, 0.5),
            },
            '&.Mui-focused': {
              backgroundColor: '#FFFFFF',
              '& fieldset': {
                borderColor: COBALT,
                boxShadow: `0 0 0 3px ${alpha(COBALT, 0.12)}`,
              },
            },
            '&.Mui-error fieldset': {
              borderColor: '#EF4444',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#64748B',
            fontSize: '0.875rem',
            '&.Mui-focused': { color: COBALT },
            '&.Mui-error': { color: '#EF4444' },
          },
          '& .MuiOutlinedInput-input': {
            color: '#0F172A',
            fontSize: '0.9rem',
            '&::placeholder': { color: '#94A3B8', opacity: 1 },
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

// ── DARK THEME ────────────────────────────────────────────────
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: VIOLET,
      light: VIOLET_LIGHT,
      dark: VIOLET_DARK,
      contrastText: '#ffffff',
    },
    secondary: {
      main: CYAN,
      light: CYAN_LIGHT,
      dark: '#0E7490',
      contrastText: '#ffffff',
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

  typography: sharedTypography,
  shape: { borderRadius: 12 },
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
        sizeSmall: { padding: '0 14px', height: '31px', fontSize: '0.78rem' },
        sizeMedium: { padding: '0 22px', height: '40px', fontSize: '0.875rem' },
        sizeLarge: { padding: '0 28px', height: '48px', fontSize: '0.95rem' },
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
          border: '1px solid rgba(255,255,255,0.07)',
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
          border: '1px solid rgba(255,255,255,0.07)',
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

export const getAppTheme = (mode = 'light') => (mode === 'dark' ? darkTheme : lightTheme);

export default lightTheme;

export {
  COBALT,
  COBALT_LIGHT,
  COBALT_DARK,
  CYAN,
  CYAN_LIGHT,
  VIOLET,
  VIOLET_LIGHT,
  VIOLET_DARK,
  BORDER,
};
