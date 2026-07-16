import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      '::view-transition-old(root), ::view-transition-new(root)': {
        animation: 'none',
        mixBlendMode: 'normal',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        objectFit: 'cover',
        objectPosition: 'top',
      },

      ':root': {
        '--border-color': 'rgba(255,255,255,0.07)',
        '--border-color-med': 'rgba(255,255,255,0.12)',
        '--border-color-hover': 'rgba(124,58,237,0.45)',
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

      /* ---- Gradient text utility ── */
      '.gradient-text': {
        background: 'linear-gradient(135deg, #9D6FFF 0%, #7C3AED 50%, #06B6D4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      },

      /* ── Hero gradient text ── */
      '.gradient-text-hero': {
        background: 'linear-gradient(135deg, #9D6FFF 0%, #7C3AED 50%, #06B6D4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      },

      /* ── Tag / badge pill ── */
      '.tech-pill': {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px 10px',
        borderRadius: '6px',
        fontSize: '0.72rem',
        fontFamily: '"JetBrains Mono", monospace',
        fontWeight: 500,
        border: `1px solid rgba(255,255,255,0.07)`,
        background: 'rgba(255,255,255,0.02)',
        color: '#94A3B8',
      },

      /* ---- Scroll progress bar ---- */
      '.scroll-progress-bar': {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #7C3AED, #8B5CF6, #06B6D4)',
        transformOrigin: '0%',
        zIndex: 9999,
        pointerEvents: 'none',
      },

      /* ---- Keyframe animations ---- */
      '@keyframes shimmer': {
        '0%': { backgroundPosition: '-200% 0' },
        '100%': { backgroundPosition: '200% 0' },
      },

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

      '@keyframes pulse-dot': {
        '0%, 100%': { boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.4)' },
        '50%': { boxShadow: '0 0 0 4px rgba(16, 185, 129, 0)' },
      },

      '@keyframes pulse-ring': {
        '0%': { transform: 'scale(1)', opacity: 0.8 },
        '100%': { transform: 'scale(2.2)', opacity: 0 },
      },

      '@keyframes spin-slow': {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
      },

      '@keyframes fade-in-up': {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },

      '@keyframes cursor-blink': {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0 },
      },

      '@keyframes gradient-shift': {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      },

      '@keyframes text-shimmer': {
        '0%': { backgroundPosition: '-200% center' },
        '100%': { backgroundPosition: '200% center' },
      },

      '@keyframes timeline-draw': {
        from: { scaleY: 0 },
        to: { scaleY: 1 },
      },

      '@keyframes count-up': {
        from: { opacity: 0, transform: 'translateY(8px)' },
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
