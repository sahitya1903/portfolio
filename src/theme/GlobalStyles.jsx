import { GlobalStyles as MuiGlobalStyles } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { VIOLET } from './theme';

const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={(theme) => {
      const isDark = theme.palette.mode === 'dark';

      if (isDark) {
        // ── EXACT ORIGINAL STYLES FROM COMMIT FOR DARK THEME ──
        return {
          '::view-transition-old(root), ::view-transition-new(root)': {
            animation: 'none',
            mixBlendMode: 'normal',
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

          /* ---- Gradient text utility ── original purple ── */
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

          /* ---- Shimmer animation ---- */
          '@keyframes shimmer': {
            '0%': { backgroundPosition: '-200% 0' },
            '100%': { backgroundPosition: '200% 0' },
          },

          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-12px)' },
          },

          '@keyframes floatReverse': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(12px)' },
          },

          '@keyframes pulse-glow': {
            '0%, 100%': { opacity: 0.6 },
            '50%': { opacity: 1 },
          },

          '@keyframes pulse-dot': {
            '0%, 100%': { boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.4)' },
            '50%': { boxShadow: '0 0 0 4px rgba(16, 185, 129, 0)' },
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

          /* ---- Glow card hover utility ---- */
          '.glow-card': {
            position: 'relative',
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'translateY(-4px)' },
          },
        };
      } else {
        // ── PREMIUM LIGHT THEME GLOBAL STYLES ──
        return {
          '::view-transition-old(root), ::view-transition-new(root)': {
            animation: 'none',
            mixBlendMode: 'normal',
          },
          ':root': {
            '--border-color': 'rgba(15, 23, 42, 0.08)',
            '--border-color-med': 'rgba(15, 23, 42, 0.12)',
            '--border-color-hover': 'rgba(124, 58, 237, 0.35)',
          },

          'body': {
            backgroundColor: '#FFFFFF',
            color: '#0F172A',
            overflowX: 'hidden',
            backgroundImage: `
              linear-gradient(rgba(124, 58, 237, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124, 58, 237, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
            backgroundAttachment: 'fixed',
          },

          /* ---- Noise texture overlay ---- */
          'body::before': {
            content: '""',
            position: 'fixed',
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.018'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
            pointerEvents: 'none',
            zIndex: 0,
          },

          /* ---- Violet radial glow at top center ---- */
          'body::after': {
            content: '""',
            position: 'fixed',
            top: '-320px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '1000px',
            height: '600px',
            background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.07) 0%, rgba(139,92,246,0.03) 40%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          },

          '#root': {
            position: 'relative',
            zIndex: 1,
            minHeight: '100vh',
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

          /* ---- Gradient text utility ── premium light ── */
          '.gradient-text': {
            background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 50%, #0891B2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          },

          /* ── Hero gradient text ── */
          '.gradient-text-hero': {
            background: 'linear-gradient(120deg, #7C3AED 0%, #8B5CF6 40%, #06B6D4 100%)',
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
            border: '1px solid rgba(124,58,237,0.15)',
            background: 'rgba(124,58,237,0.05)',
            color: '#5B21B6',
          },

          /* ── Section accent label badge ── */
          '.section-label': {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '100px',
            background: 'rgba(124, 58, 237, 0.07)',
            border: '1px solid rgba(124, 58, 237, 0.15)',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.68rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#7C3AED',
          },

          /* ---- Shimmer animation ---- */
          '@keyframes shimmer': {
            '0%': { backgroundPosition: '-200% 0' },
            '100%': { backgroundPosition: '200% 0' },
          },

          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },

          '@keyframes floatReverse': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(10px)' },
          },

          '@keyframes pulse-glow': {
            '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
            '50%': { opacity: 1, transform: 'scale(1.05)' },
          },

          '@keyframes pulse-dot': {
            '0%, 100%': { boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.4)' },
            '50%': { boxShadow: '0 0 0 4px rgba(16, 185, 129, 0)' },
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

          '.glow-card': {
            position: 'relative',
            transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1)',
            '&:hover': { transform: 'translateY(-4px)' },
          },
        };
      }
    }}
  />
);

export default GlobalStyles;
