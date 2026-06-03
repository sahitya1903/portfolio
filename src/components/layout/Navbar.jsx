import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { alpha } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { VIOLET, VIOLET_LIGHT, BORDER } from '../../theme/theme';

const NAV_LINKS = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
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

  // Close drawer on route change
  useEffect(() => { setDrawerOpen(false); }, [pathname]);

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

            {/* Desktop nav */}
            <Box
              component="nav"
              sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}
            >
              {NAV_LINKS.map(({ label, path }) => {
                const isActive = pathname === path;
                return (
                  <Button
                    key={path}
                    component={RouterLink}
                    to={path}
                    id={`nav-${label.toLowerCase()}`}
                    sx={{
                      position: 'relative',
                      color: isActive ? '#fff' : 'text.secondary',
                      fontWeight: isActive ? 600 : 400,
                      px: 1.5,
                      py: 1,
                      fontSize: '0.875rem',
                      '&:hover': { color: '#fff', background: 'transparent' },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 4,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: isActive ? '16px' : '0px',
                        height: '2px',
                        background: VIOLET_LIGHT,
                        borderRadius: '1px',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::after': { width: '16px' },
                    }}
                  >
                    {label}
                  </Button>
                );
              })}
            </Box>

            {/* CTA */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                id="nav-hire-me"
                variant="contained"
                size="small"
                endIcon={<ArrowOutwardIcon sx={{ fontSize: '14px !important' }} />}
                component="a"
                href="mailto:sahitya7985@gmail.com"
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  fontSize: '0.8rem',
                  px: 2,
                  py: 0.75,
                }}
              >
                Hire me
              </Button>

              {/* Hamburger */}
              <IconButton
                id="nav-menu-toggle"
                onClick={() => setDrawerOpen(true)}
                sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.secondary' }}
              >
                <MenuIcon />
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
        PaperProps={{
          sx: {
            width: 280,
            background: 'rgba(5,5,8,0.97)',
            backdropFilter: 'blur(20px)',
            borderLeft: `1px solid ${BORDER}`,
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo />
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ height: '1px', background: BORDER, mx: 2 }} />
        <List sx={{ px: 1, pt: 2 }}>
          {NAV_LINKS.map(({ label, path }, i) => (
            <ListItem key={path} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={path}
                selected={pathname === path}
                sx={{
                  borderRadius: '10px',
                  mb: 0.5,
                  '&.Mui-selected': {
                    background: alpha(VIOLET, 0.1),
                    color: VIOLET_LIGHT,
                    '&:hover': { background: alpha(VIOLET, 0.15) },
                  },
                }}
              >
                <Typography
                  sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.78rem', color: 'text.secondary', mr: 1 }}
                >
                  {String(i + 1).padStart(2, '0')}.
                </Typography>
                <ListItemText primary={label} primaryTypographyProps={{ fontWeight: 500 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 2, mt: 'auto' }}>
          <Button
            fullWidth
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
            component="a"
            href="mailto:sahitya7985@gmail.com"
          >
            Hire me
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
