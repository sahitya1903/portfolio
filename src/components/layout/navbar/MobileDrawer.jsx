import { Box, Drawer, IconButton, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { alpha } from '@mui/material/styles';
import { NAV_LINKS } from '../../../config/site';
import { VIOLET, VIOLET_LIGHT } from '../../../theme/theme';
import Logo from './Logo';
import { isNavLinkActive } from './navActive';

/** MobileDrawer — slide-out nav for `< md`. */
const MobileDrawer = ({ open, onClose, pathname, activeSection }) => (
  <Drawer
    anchor="right"
    open={open}
    onClose={onClose}
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
        onClick={onClose}
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
      {NAV_LINKS.map((link, i) => {
        const isActive = isNavLinkActive(link, pathname, activeSection);
        return (
          <Box
            key={link.label}
            component={RouterLink}
            to={link.hash}
            onClick={onClose}
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
              {link.label}
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
);

export default MobileDrawer;
