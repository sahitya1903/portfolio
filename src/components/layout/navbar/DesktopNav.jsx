import { Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../../../config/site';
import { VIOLET, VIOLET_LIGHT } from '../../../theme/theme';
import { isNavLinkActive } from './navActive';

/** DesktopNav — the pill nav shown at `md+`, with a sliding active-dot indicator. */
const DesktopNav = ({ pathname, activeSection }) => (
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
                  background: VIOLET_LIGHT,
                  boxShadow: `0 0 8px ${alpha(VIOLET_LIGHT, 0.8)}`,
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  </Box>
);

export default DesktopNav;
