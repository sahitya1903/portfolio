import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, Box, Container, IconButton, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';

import { SPY_SECTION_IDS } from '../../../config/site';
import useScrollSpy from '../../../hooks/useScrollSpy';
import { REVEAL_EASE } from '../../../hooks/useRevealOnce';
import { VIOLET, VIOLET_LIGHT, BORDER } from '../../../theme/theme';

import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileDrawer from './MobileDrawer';

/** Navbar — fixed AppBar shell: scroll-aware background, scroll-spy, mobile drawer. */
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 20 });
  const activeSection = useScrollSpy(SPY_SECTION_IDS, { enabled: pathname === '/' });

  // Close drawer on route change
  useEffect(() => {
    const timer = setTimeout(() => setDrawerOpen(false), 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        component={motion.header}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: REVEAL_EASE }}
        sx={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
          background: scrolled ? 'rgba(5,5,8,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(124,58,237,0.12)' : 'none',
          boxShadow: scrolled ? '0 1px 32px rgba(124,58,237,0.08), 0 1px 4px rgba(0,0,0,0.3)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1.5 }}>
            <Logo />

            <DesktopNav pathname={pathname} activeSection={activeSection} />

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

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        pathname={pathname}
        activeSection={activeSection}
      />
    </>
  );
};

export default Navbar;
