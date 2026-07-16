import { useState, useEffect } from 'react';
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
import { alpha } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { VIOLET, VIOLET_LIGHT, BORDER } from '../../theme/theme';

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
        filter: 'brightness(1.15) contrast(1.1) drop-shadow(0 0 8px rgba(139, 92, 246, 0.5))',
        flexShrink: 0,
        objectFit: 'contain',
        transition: 'all 0.3s ease',
        '&:hover': {
          filter: 'brightness(1.3) contrast(1.15) drop-shadow(0 0 14px rgba(139, 92, 246, 0.8))',
          transform: 'scale(1.05)',
        },
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 20 });
  const [activeSection, setActiveSection] = useState('');

  // Close drawer on route change
  useEffect(() => {
    const timer = setTimeout(() => setDrawerOpen(false), 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Scrollspy logic
  useEffect(() => {
    if (pathname !== '/') {
      const timer = setTimeout(() => setActiveSection(''), 0);
      return () => clearTimeout(timer);
    }

    const sectionIds = ['skills', 'experience', 'projects', 'github', 'contact'];
    const visibilities = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilities[entry.target.id] = entry.isIntersecting ? entry.intersectionRect.height : 0;
        });

        let maxVisibleHeight = 0;
        let activeId = '';

        sectionIds.forEach((id) => {
          if (visibilities[id] > maxVisibleHeight) {
            maxVisibleHeight = visibilities[id];
            activeId = id;
          }
        });

        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120) {
          activeId = 'contact';
        }

        setActiveSection(activeId);
      },
      {
        root: null,
        rootMargin: '-10% 0px -20% 0px',
        threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

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
          background: scrolled
            ? 'rgba(5,5,8,0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(124,58,237,0.12)' : 'none',
          boxShadow: scrolled ? '0 1px 32px rgba(124,58,237,0.08), 0 1px 4px rgba(0,0,0,0.3)' : 'none',
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

            {/* Desktop nav */}
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
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
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
                        color: isActive ? VIOLET_LIGHT : 'text.secondary',
                        fontWeight: isActive ? 600 : 500,
                        fontSize: '0.85rem',
                        px: 2,
                        py: 0.75,
                        borderRadius: '8px',
                        background: isActive ? alpha(VIOLET, 0.1) : 'transparent',
                        transition: 'all 0.22s ease',
                        '&:hover': {
                          color: '#F8FAFC',
                          background: 'rgba(255,255,255,0.06)',
                        },
                      }}
                    >
                      {label}
                      {/* Animated active dot indicator */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            layoutId="nav-active-dot"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                            style={{
                              position: 'absolute',
                              bottom: 2,
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: 4,
                              height: 4,
                              borderRadius: '50%',
                              background: VIOLET_LIGHT,
                              boxShadow: `0 0 8px ${alpha(VIOLET_LIGHT, 0.8)}`,
                            }}
                          />
                        )}
                      </AnimatePresence>
                    </Box>
                  );
                })}
              </Box>
            </Box>

            {/* Mobile — hamburger only */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
              <IconButton
                id="nav-menu-toggle"
                onClick={() => setDrawerOpen(true)}
                sx={{
                  color: 'text.secondary',
                  border: `1px solid ${BORDER}`,
                  borderRadius: '10px',
                  width: 38,
                  height: 38,
                  '&:hover': {
                    borderColor: alpha(VIOLET, 0.5),
                    color: VIOLET_LIGHT,
                    background: alpha(VIOLET, 0.08),
                  },
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
              background: 'rgba(13, 13, 20, 0.75)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              borderLeft: '1px solid rgba(124,58,237,0.15)',
              boxShadow: '-16px 0 48px rgba(0, 0, 0, 0.4)',
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
                color: '#F8FAFC',
              },
            }}
          >
            <CloseIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>

        {/* Gradient divider */}
        <Box sx={{
          height: '1px', mx: 2.5,
          background: `linear-gradient(90deg, transparent, ${alpha(VIOLET, 0.4)}, transparent)`,
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
                  border: `1px solid ${isActive ? alpha(VIOLET, 0.3) : 'transparent'}`,
                  background: isActive ? alpha(VIOLET, 0.1) : 'transparent',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    background: alpha(VIOLET, 0.08),
                    borderColor: alpha(VIOLET, 0.2),
                    transform: 'translateX(4px)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.7rem',
                    color: isActive ? VIOLET_LIGHT : 'text.secondary',
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
                    color: isActive ? '#F8FAFC' : 'text.secondary',
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
