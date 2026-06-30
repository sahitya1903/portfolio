import { useState, useEffect, useContext } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { VIOLET, VIOLET_LIGHT, BORDER } from '../../theme/theme';
import { ThemeModeContext } from '../../App';

const NAV_LINKS = [
  { label: 'Skills', path: '/#skills' },
  { label: 'Experience', path: '/#experience' },
  { label: 'Projects', path: '/#projects' },
  { label: 'GitHub', path: '/#github' },
  { label: 'Contact', path: '/#contact' },
];

const Logo = () => (
  <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
    <Box
      component="img"
      src="/logo.png"
      alt="SK Logo"
      sx={{
        width: 36,
        height: 36,
        imageRendering: '-webkit-optimize-contrast',
        filter: (theme) => theme.palette.mode === 'dark'
          ? 'brightness(1.15) contrast(1.1) drop-shadow(0 0 8px rgba(139, 92, 246, 0.5))'
          : 'brightness(0.95) contrast(1.05) drop-shadow(0 2px 6px rgba(15, 23, 42, 0.22))',
        flexShrink: 0,
        objectFit: 'contain',
        transition: 'all 0.3s ease',
      }}
    />
    <Box>
      <Typography
        sx={{
          fontFamily: '"Playfair Display", serif',
          fontWeight: 400,
          fontSize: '1.1rem',
          color: 'text.primary',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
        }}
      >
        SAHITYA KUSHWAHA
      </Typography>

    </Box>
  </RouterLink>
);

const Navbar = () => {
  const { mode, toggleColorMode } = useContext(ThemeModeContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 20 });
  const [activeSection, setActiveSection] = useState('');

  // Close drawer on route change
  useEffect(() => {
    const timer = setTimeout(() => setDrawerOpen(false), 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Scrollspy logic to automatically highlight section on scroll
  useEffect(() => {
    if (pathname !== '/') {
      const timer = setTimeout(() => setActiveSection(''), 0);
      return () => clearTimeout(timer);
    }

    const sectionIds = ['skills', 'experience', 'projects', 'github', 'contact'];
    
    // Store intersection ratios for active visibility comparison
    const visibilities = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilities[entry.target.id] = entry.isIntersecting ? entry.intersectionRect.height : 0;
        });

        // Find the section that has the maximum visible height on the screen
        let maxVisibleHeight = 0;
        let activeId = '';
        
        sectionIds.forEach((id) => {
          if (visibilities[id] > maxVisibleHeight) {
            maxVisibleHeight = visibilities[id];
            activeId = id;
          }
        });

        // Handle case where we are at the bottom of the page (force active contact section)
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120) {
          activeId = 'contact';
        }

        setActiveSection(activeId);
      },
      {
        root: null, // viewport
        rootMargin: '-10% 0px -20% 0px', // focused area: middle part of the screen
        threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], // trigger at multiple steps
      }
    );

    // Start observing sections
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Fallback: check scroll position at the bottom of page on window scroll
    const handleScrollFallback = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
      }
    };
    window.addEventListener('scroll', handleScrollFallback, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollFallback);
    };
  }, [pathname]);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        component={motion.header}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        sx={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
          background: (theme) => scrolled
            ? (theme.palette.mode === 'dark' ? 'rgba(5,5,8,0.85)' : 'rgba(248,247,255,0.85)')
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(15,23,42,0.08)' : 'none',
          boxShadow: scrolled ? '0 1px 16px rgba(15,23,42,0.06)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 1.5,
            }}
          >
            <Logo />

            {/* Desktop nav — right-aligned */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              <Box
                component="nav"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  background: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(15,23,42,0.03)',
                  border: (theme) => theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(15,23,42,0.08)',
                  borderRadius: '12px',
                  px: 0.75,
                  py: 0.4,
                }}
              >
                {NAV_LINKS.map(({ label, path }) => {
                  const sectionId = path.startsWith('/#') ? path.slice(2) : null;
                  const isActive = sectionId
                    ? (pathname === '/' && activeSection === sectionId)
                    : pathname === path;
                  return (
                    <Box
                      key={path}
                      component={RouterLink}
                      to={path}
                      id={`nav-${label.toLowerCase()}`}
                      sx={{
                        position: 'relative',
                        textDecoration: 'none',
                        fontFamily: '"Inter", sans-serif',
                        color: isActive ? VIOLET : (theme) => theme.palette.text.secondary,
                        fontWeight: isActive ? 600 : 500,
                        fontSize: '0.85rem',
                        px: 2,
                        py: 0.75,
                        borderRadius: '8px',
                        background: isActive ? alpha(VIOLET, 0.08) : 'transparent',
                        transition: 'all 0.22s ease',
                        '&:hover': {
                          color: (theme) => theme.palette.text.primary,
                          background: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(15,23,42,0.04)',
                        },
                      }}
                    >
                      {label}
                    </Box>
                  );
                })}
              </Box>

              {/* Theme Toggle Button */}
              <IconButton
                id="theme-toggle"
                onClick={toggleColorMode}
                sx={{
                  border: (theme) => theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(15,23,42,0.08)',
                  borderRadius: '10px',
                  width: 38,
                  height: 38,
                }}
              >
                {mode === 'dark' ? <WbSunnyOutlinedIcon sx={{ fontSize: 20, color: '#FBBF24' }} /> : <DarkModeOutlinedIcon sx={{ fontSize: 20, color: '#475569' }} />}
              </IconButton>
            </Box>

            {/* Mobile Actions — hamburger + theme toggle */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
              <IconButton
                id="theme-toggle-mobile"
                onClick={toggleColorMode}
                sx={{
                  border: (theme) => theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(15,23,42,0.08)',
                  borderRadius: '10px',
                  width: 38,
                  height: 38,
                }}
              >
                {mode === 'dark' ? <WbSunnyOutlinedIcon sx={{ fontSize: 20, color: '#FBBF24' }} /> : <DarkModeOutlinedIcon sx={{ fontSize: 20, color: '#475569' }} />}
              </IconButton>

              <IconButton
                id="nav-menu-toggle"
                onClick={() => setDrawerOpen(true)}
                sx={{
                  color: 'text.secondary',
                  border: `1px solid ${BORDER}`,
                  borderRadius: '10px',
                  width: 38,
                  height: 38,
                }}
              >
                <MenuIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 300,
              background: (theme) => theme.palette.mode === 'dark' ? 'rgba(13, 13, 20, 0.68)' : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderLeft: (theme) => theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.08)' : `1px solid ${theme.palette.divider}`,
              boxShadow: (theme) => theme.palette.mode === 'dark' ? '-16px 0 48px rgba(0, 0, 0, 0.24)' : '-16px 0 48px rgba(15, 23, 42, 0.06)',
            },
          },
        }}
      >
        {/* Header */}
        <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo />
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{
              color: 'text.secondary',
              border: `1px solid ${alpha(VIOLET, 0.2)}`,
              background: alpha(VIOLET, 0.06),
              borderRadius: '10px',
              width: 36,
              height: 36,
              transition: 'all 0.2s',
              '&:hover': {
                background: alpha(VIOLET, 0.12),
                borderColor: alpha(VIOLET, 0.4),
                color: (theme) => theme.palette.mode === 'dark' ? '#F8FAFC' : '#0F172A',
              },
            }}
          >
            <CloseIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>

        {/* Gradient divider */}
        <Box sx={{
          height: '1px', mx: 2.5,
          background: `linear-gradient(90deg, transparent, ${alpha(VIOLET, 0.3)}, transparent)`,
        }} />

        {/* Nav links */}
        <Box sx={{ px: 2, pt: 3, display: 'flex', flexDirection: 'column', gap: 1 }}>
          {NAV_LINKS.map(({ label, path }, i) => {
            const sectionId = path.startsWith('/#') ? path.slice(2) : null;
            const isActive = sectionId
              ? (pathname === '/' && activeSection === sectionId)
              : pathname === path;
            return (
              <Box
                key={path}
                component={RouterLink}
                to={path}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  textDecoration: 'none',
                  px: 2,
                  py: 1.5,
                  borderRadius: '12px',
                  border: `1px solid ${isActive ? alpha(VIOLET, 0.25) : 'transparent'}`,
                  background: isActive ? alpha(VIOLET, 0.1) : 'transparent',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    background: alpha(VIOLET, 0.08),
                    borderColor: alpha(VIOLET, 0.15),
                    transform: 'translateX(4px)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.7rem',
                    color: (theme) => isActive ? VIOLET_LIGHT : theme.palette.text.secondary,
                    fontWeight: 600,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.95rem',
                    fontWeight: isActive ? 600 : 500,
                    color: (theme) => isActive ? (theme.palette.mode === 'dark' ? '#F8FAFC' : VIOLET_LIGHT) : theme.palette.text.secondary,
                  }}
                >
                  {label}
                </Typography>
                {isActive && (
                  <Box sx={{
                    ml: 'auto',
                    width: 6, height: 6, borderRadius: '50%',
                    background: VIOLET_LIGHT,
                    boxShadow: `0 0 8px ${alpha(VIOLET_LIGHT, 0.6)}`,
                  }} />
                )}
              </Box>
            );
          })}
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
