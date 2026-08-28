import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      ':root': {
        '--border-color': 'rgba(255,255,255,0.07)',
      },

      'body': {
        backgroundColor: '#050508',
        color: '#F8FAFC',
        overflowX: 'hidden',
      },

      /* ---- Noise texture overlay ---- */
      'body::before': {
        content: '""',
        position: 'fixed',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
        pointerEvents: 'none',
        zIndex: 0,
      },

      /* ---- Subtle dot grid ---- */
      'body::after': {
        content: '""',
        position: 'fixed',
        inset: 0,
        backgroundImage:
          'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
        zIndex: 0,
      },

      '#root': {
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
      },

      /* ---- Keyframe animations ---- */
      '@keyframes float': {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-14px)' },
      },

      '@keyframes floatReverse': {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(14px)' },
      },

      '@keyframes floatSlow': {
        '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
        '33%': { transform: 'translateY(-10px) translateX(8px)' },
        '66%': { transform: 'translateY(6px) translateX(-6px)' },
      },

      '@keyframes pulse-glow': {
        '0%, 100%': { opacity: 0.6 },
        '50%': { opacity: 1 },
      },

      '@keyframes pulse-ring': {
        '0%': { transform: 'scale(1)', opacity: 0.8 },
        '100%': { transform: 'scale(2.2)', opacity: 0 },
      },

      '@keyframes cursor-blink': {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0 },
      },

      '@keyframes marquee': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-50%)' },
      },
    }}
  />
);

export default GlobalStyles;
