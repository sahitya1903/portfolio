import { createTheme, alpha } from '@mui/material/styles';

/* ── Brand palette ─────────────────────────────────────────── */
const VIOLET        = '#7C3AED';
const VIOLET_LIGHT  = '#8B5CF6';
const VIOLET_DARK   = '#5B21B6';
const INDIGO        = '#4F46E5';
const CYAN          = '#0891B2';

/* ── Light surface system constants ────────────────────────── */
const BG_BASE     = '#FFFFFF';
const BG_SURFACE  = '#FAFAFA';
const BG_ELEVATED = '#F4F4F5';
const BG_CARD     = '#FFFFFF';
const BG_SUBTLE   = '#F0F0FF';

/* ── CSS Variable mappings for dynamic borders ─────────────── */
const BORDER       = 'var(--border-color)';
const BORDER_MED   = 'var(--border-color-med)';
const BORDER_HOVER = 'var(--border-color-hover)';

// ── ORIGINAL DARK THEME FROM COMMIT ──
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

// ── NEW PREMIUM LIGHT THEME ──
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main:          VIOLET,
      light:         VIOLET_LIGHT,
      dark:          VIOLET_DARK,
      contrastText:  '#ffffff',
    },
    secondary: {
      main:  CYAN,
      light: '#06B6D4',
      dark:  '#0E7490',
    },
    background: {
      default: BG_BASE,
      paper:   BG_SURFACE,
    },
    surface: {
      elevated: BG_ELEVATED,
      card:     BG_CARD,
      subtle:   BG_SUBTLE,
    },
    text: {
      primary:   '#0F172A',
      secondary: '#475569',
      tertiary:  '#94A3B8',
      disabled:  '#CBD5E1',
    },
    divider: 'rgba(15, 23, 42, 0.08)',
    success: { main: '#059669', light: '#10B981' },
    error:   { main: '#DC2626', light: '#EF4444' },
    warning: { main: '#D97706', light: '#F59E0B' },
    info:    { main: INDIGO },
  },

  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontFamily:    '"Playfair Display", Georgia, serif',
      fontSize:      'clamp(2.8rem, 6vw, 5.5rem)',
      fontWeight:    800,
      lineHeight:    1.04,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontFamily:    '"Playfair Display", Georgia, serif',
      fontSize:      'clamp(2rem, 4.5vw, 3.2rem)',
      fontWeight:    700,
      lineHeight:    1.15,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontFamily:    '"Playfair Display", Georgia, serif',
      fontSize:      'clamp(1.3rem, 2.5vw, 2rem)',
      fontWeight:    700,
      lineHeight:    1.3,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily:    '"Playfair Display", Georgia, serif',
      fontSize:      '1.3rem',
      fontWeight:    600,
      lineHeight:    1.4,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontFamily: '"Inter", sans-serif',
      fontSize:   '1.05rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontFamily:    '"Inter", sans-serif',
      fontSize:      '0.9rem',
      fontWeight:    600,
      lineHeight:    1.5,
      letterSpacing: '0.01em',
    },
    body1: {
      fontSize:   '1rem',
      lineHeight: 1.75,
      color:      '#475569',
    },
    body2: {
      fontSize:   '0.875rem',
      lineHeight: 1.65,
      color:      '#64748B',
    },
    caption: {
      fontSize:      '0.75rem',
      fontFamily:    '"JetBrains Mono", "Courier New", monospace',
      letterSpacing: '0.05em',
      color:         '#64748B',
    },
    overline: {
      fontSize:      '0.7rem',
      fontWeight:    700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color:         VIOLET,
    },
    button: {
      fontFamily:    '"Playfair Display", serif',
      fontWeight:    600,
      letterSpacing: '0.01em',
      textTransform: 'none',
      lineHeight:    1.75,
    },
  },

  shape: { borderRadius: 12 },
  spacing: 8,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*, *::before, *::after': { boxSizing: 'border-box' },
        html: { scrollBehavior: 'smooth' },
        body: {
          backgroundColor: BG_BASE,
          color: '#0F172A',
          overflowX: 'hidden',
        },
        '::-webkit-scrollbar': { width: '6px' },
        '::-webkit-scrollbar-track': { background: '#F1F5F9' },
        '::-webkit-scrollbar-thumb': {
          background: `linear-gradient(180deg, ${alpha(VIOLET, 0.3)}, ${alpha(VIOLET_LIGHT, 0.4)})`,
          borderRadius: '3px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: `linear-gradient(180deg, ${VIOLET}, ${VIOLET_LIGHT})`,
        },
        '::selection': {
          background: alpha(VIOLET, 0.12),
          color: VIOLET_DARK,
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
          background: `linear-gradient(135deg, ${VIOLET} 0%, ${VIOLET_DARK} 100%)`,
          boxShadow: `0 4px 14px ${alpha(VIOLET, 0.22)}, 0 1px 3px ${alpha(VIOLET, 0.15)}`,
          '&:hover': {
            background: `linear-gradient(135deg, ${VIOLET_LIGHT} 0%, ${VIOLET} 100%)`,
            boxShadow: `0 8px 28px ${alpha(VIOLET, 0.28)}, 0 2px 6px ${alpha(VIOLET, 0.18)}`,
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderColor: 'rgba(15, 23, 42, 0.12)',
          borderWidth: '1.5px',
          color: '#475569',
          background: 'transparent',
          '&:hover': {
            borderColor: VIOLET,
            color: VIOLET,
            background: alpha(VIOLET, 0.04),
          },
        },
        text: {
          color: '#475569',
          '&:hover': { color: VIOLET, background: alpha(VIOLET, 0.05) },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: BG_CARD,
          border: `1px solid rgba(15, 23, 42, 0.08)`,
          borderRadius: 16,
          boxShadow: '0 1px 3px rgba(15,23,42,0.04)',
          transition: 'all 0.25s ease',
          '&:hover': {
            borderColor: alpha(VIOLET, 0.2),
            boxShadow: `0 12px 40px rgba(15,23,42,0.08), 0 0 0 1px ${alpha(VIOLET, 0.1)}`,
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
          background: 'transparent',
          '&:hover': {
            borderColor: alpha(VIOLET, 0.5),
            color: VIOLET,
            background: alpha(VIOLET, 0.04),
          },
        },
        filled: {
          background: alpha(VIOLET, 0.07),
          color: VIOLET_DARK,
          border: `1px solid ${alpha(VIOLET, 0.12)}`,
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
          background: 'rgba(15, 23, 42, 0.05)',
        },
        bar: {
          borderRadius: 6,
          background: `linear-gradient(90deg, ${VIOLET_DARK}, ${VIOLET}, ${VIOLET_LIGHT})`,
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: '#0F172A',
          color: '#F8FAFC',
          fontSize: '0.73rem',
          borderRadius: 8,
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: VIOLET,
          '&:hover': { color: VIOLET_DARK },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            backgroundColor: '#FAFAFA',
            transition: 'background 0.2s ease',
            '& fieldset': {
              borderColor: 'rgba(15, 23, 42, 0.12)',
              transition: 'border-color 0.2s ease',
            },
            '&:hover fieldset': {
              borderColor: alpha(VIOLET, 0.4),
            },
            '&.Mui-focused': {
              backgroundColor: '#FFFFFF',
              '& fieldset': {
                borderColor: VIOLET,
                boxShadow: `0 0 0 3px ${alpha(VIOLET, 0.08)}`,
              },
            },
            '&.Mui-error fieldset': {
              borderColor: '#EF4444',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#64748B',
            fontSize: '0.875rem',
            '&.Mui-focused': { color: VIOLET },
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

export const createAppTheme = (mode) => {
  return mode === 'dark' ? darkTheme : lightTheme;
};

// Default export (backwards compatibility)
const theme = darkTheme;
export default theme;

export {
  VIOLET, VIOLET_LIGHT, VIOLET_DARK, INDIGO, CYAN,
  BG_BASE, BG_SURFACE, BG_ELEVATED, BG_CARD, BG_SUBTLE,
  BORDER, BORDER_MED, BORDER_HOVER,
};
