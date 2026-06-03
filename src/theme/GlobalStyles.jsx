import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
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

      /* ---- Gradient glow anchors (ambient light) ---- */
      '.ambient-top': {
        position: 'fixed',
        top: '-200px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background:
          'radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      },

      /* ---- Section utilities ---- */
      '.section-container': {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
      },

      '@media (min-width: 600px)': {
        '.section-container': { padding: '0 40px' },
      },

      /* ---- Code font utility ---- */
      '.mono': {
        fontFamily: '"JetBrains Mono", "Courier New", monospace',
      },

      /* ---- Gradient text utility ---- */
      '.gradient-text': {
        background: 'linear-gradient(135deg, #9D6FFF 0%, #7C3AED 50%, #06B6D4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      },

      /* ---- Shimmer animation ---- */
      '@keyframes shimmer': {
        '0%': { backgroundPosition: '-200% 0' },
        '100%': { backgroundPosition: '200% 0' },
      },

      '@keyframes float': {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-12px)' },
      },

      '@keyframes pulse-glow': {
        '0%, 100%': { opacity: 0.6 },
        '50%': { opacity: 1 },
      },

      '@keyframes spin-slow': {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
      },

      '@keyframes fade-in-up': {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },

      /* ---- Glow card hover utility ---- */
      '.glow-card': {
        position: 'relative',
        transition: 'transform 0.3s ease',
        '&:hover': { transform: 'translateY(-4px)' },
      },
    }}
  />
);

export default GlobalStyles;
