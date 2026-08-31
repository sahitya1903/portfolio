import { GlobalStyles as MuiGlobalStyles } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const GlobalStyles = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <MuiGlobalStyles
      styles={{
        ':root': {
          '--border-color': isLight
            ? 'rgba(15, 23, 42, 0.08)'
            : 'rgba(255, 255, 255, 0.07)',
          '--bg-color': isLight ? '#F8FAFC' : '#050508',
          '--text-color': isLight ? '#0F172A' : '#F8FAFC',
        },

        'body': {
          backgroundColor: isLight ? '#F8FAFC' : '#050508',
          color: isLight ? '#0F172A' : '#F8FAFC',
          overflowX: 'hidden',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        },

        /* ---- Noise texture overlay ---- */
        'body::before': {
          content: '""',
          position: 'fixed',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='${isLight ? '0.02' : '0.035'}'/%3E%3C/svg%3E")`,
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
          backgroundImage: isLight
            ? 'radial-gradient(circle, rgba(148, 163, 184, 0.28) 1.2px, transparent 1.2px)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
          zIndex: 0,
          transition: 'background-image 0.3s ease',
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
};

export default GlobalStyles;
