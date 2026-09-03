import { Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { alpha, useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../../../config/site';
import { isNavLinkActive } from './navActive';

/** DesktopNav — the pill nav shown at `md+`, with a sliding active-dot indicator. */
const DesktopNav = ({ pathname, activeSection }) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const primaryColor = theme.palette.primary.main;

  return (
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
          background: isLight ? 'rgba(15, 23, 42, 0.03)' : 'rgba(255, 255, 255, 0.03)',
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: '12px',
          px: 0.75,
          py: 0.4,
        }}
      >
        {NAV_LINKS.map((link) => {
          const isActive = isNavLinkActive(link, pathname, activeSection);
          return (
            <Box
              key={link.label}
              component={RouterLink}
              to={link.hash}
              id={`nav-${link.label.toLowerCase()}`}
              sx={{
                position: 'relative',
                textDecoration: 'none',
                fontFamily: '"Inter", sans-serif',
                color: isActive ? primaryColor : 'text.secondary',
                fontWeight: isActive ? 600 : 500,
                fontSize: '0.85rem',
                px: 2,
                py: 0.75,
                borderRadius: '8px',
                background: isActive ? alpha(primaryColor, 0.09) : 'transparent',
                transition: 'all 0.22s ease',
                '&:hover': {
                  color: 'text.primary',
                  background: isLight ? 'rgba(15, 23, 42, 0.05)' : 'rgba(255, 255, 255, 0.06)',
                },
              }}
            >
              {link.label}
              {/* One persistent node that slides between links via the shared layoutId */}
              {isActive && (
                <motion.div
                  layoutId="nav-active-dot"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  style={{
                    position: 'absolute',
                    bottom: 2,
                    left: 'calc(50% - 2px)',
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: primaryColor,
                    boxShadow: `0 0 8px ${alpha(primaryColor, 0.8)}`,
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default DesktopNav;
