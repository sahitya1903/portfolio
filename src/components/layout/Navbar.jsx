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
import { motion } from 'framer-motion';
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
        width: 32,
        height: 32,
        borderRadius: '8px',
        boxShadow: `0 0 16px ${alpha(VIOLET, 0.3)}`,
        flexShrink: 0,
        objectFit: 'cover'
      }}
    />
    <Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '0.9rem',
          color: 'text.primary',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
        }}
      >
        Sahitya Kushwaha
      </Typography>
      <Typography
        sx={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.62rem',
          color: VIOLET_LIGHT,
          lineHeight: 1,
          letterSpacing: '0.05em',
        }}
      >
        sahitya.codes
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
    if (drawerOpen) {
      const timer = setTimeout(() => setDrawerOpen(false), 0);
      return () => clearTimeout(timer);
    }
  }, [pathname, drawerOpen]);

  // Scrollspy logic to automatically highlight section on scroll
  useEffect(() => {
    if (pathname !== '/') {
      const timeoutId = setTimeout(() => setActiveSection(''), 0);
      return () => clearTimeout(timeoutId);
    }

    const sectionIds = ['skills', 'experience', 'projects', 'github', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // offset for navbar and breathing room

      let currentSection = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = id;
            break;
          }
        }
      }

      // Check if we are at the bottom of the page (within 50px tolerance)
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50) {
        currentSection = 'contact';
      }

      setActiveSection((prev) => (prev !== currentSection ? currentSection : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Defer initial run to avoid synchronous state update in effect body
    const timeoutId = setTimeout(handleScroll, 0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
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
            ? `rgba(5,5,8,0.85)`
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? `1px solid ${BORDER}` : 'none',
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
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
              component="nav"
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 0.5,
                background: alpha(VIOLET, 0.04),
                border: `1px solid ${alpha(VIOLET, 0.1)}`,
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
                      color: isActive ? '#F8FAFC' : '#64748B',
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '0.82rem',
                      px: 2,
                      py: 0.75,
                      borderRadius: '8px',
                      background: isActive ? alpha(VIOLET, 0.15) : 'transparent',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        color: '#F8FAFC',
                        background: alpha(VIOLET, 0.08),
                      },
                    }}
                  >
                    {label}
                  </Box>
                );
              })}
            </Box>

            {/* Hamburger — mobile only */}
            <IconButton
              id="nav-menu-toggle"
              onClick={() => setDrawerOpen(true)}
              sx={{
                display: { xs: 'flex', md: 'none' },
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
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            background: `linear-gradient(160deg, rgba(15,12,30,0.55) 0%, rgba(8,8,14,0.45) 100%)`,
            backdropFilter: 'blur(32px) saturate(200%)',
            WebkitBackdropFilter: 'blur(32px) saturate(200%)',
            borderLeft: `1px solid ${alpha(VIOLET, 0.2)}`,
            boxShadow: `-20px 0 80px ${alpha(VIOLET, 0.12)}, inset 0 0 80px ${alpha(VIOLET, 0.03)}`,
          },
        }}
      >
        {/* Header */}
        <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo />
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{
              color: '#94A3B8',
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
                    color: isActive ? VIOLET_LIGHT : '#334155',
                    fontWeight: 600,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.92rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#F8FAFC' : '#94A3B8',
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
