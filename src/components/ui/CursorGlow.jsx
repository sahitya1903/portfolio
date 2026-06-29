import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { VIOLET } from '../../theme/theme';

/**
 * CursorGlow — follows the mouse cursor with a soft violet radial spotlight.
 * Rendered as a fixed-position overlay so it appears across the whole page.
 */
const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
      glowRef.current.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Box
      ref={glowRef}
      sx={{
        position: 'fixed',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${alpha(VIOLET, 0.06)} 0%, transparent 65%)`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0,
        transition: 'opacity 0.3s ease',
        mixBlendMode: (theme) => (theme.palette.mode === 'dark' ? 'screen' : 'multiply'),
      }}
    />
  );
};

export default CursorGlow;
