import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { alpha } from '@mui/material/styles';

import { SOCIAL_LINKS } from '../../../config/site';
import LeetCodeIcon from '../../ui/LeetCodeIcon';

const ICONS = {
  github: <GitHubIcon sx={{ fontSize: 17 }} />,
  linkedin: <LinkedInIcon sx={{ fontSize: 17 }} />,
  email: <EmailIcon sx={{ fontSize: 17 }} />,
  leetcode: <LeetCodeIcon size={15} />,
};

/** SocialLinks — the row of brand-tinted external link pills in the footer. */
const SocialLinks = () => (
  <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', mt: 1.5, flexWrap: 'wrap' }}>
    {SOCIAL_LINKS.map(({ icon, href, label, color }) => (
      <Box
        key={label}
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        sx={{
          display: 'flex', alignItems: 'center', gap: 0.75,
          px: 1.5, py: 0.6,
          borderRadius: '8px',
          border: `1px solid ${alpha(color, 0.3)}`,
          background: alpha(color, 0.07),
          textDecoration: 'none',
          transition: 'all 0.25s ease',
          cursor: 'pointer',
          color,
          '&:hover': {
            borderColor: alpha(color, 0.65),
            background: alpha(color, 0.16),
            color,
            transform: 'translateY(-2px)',
            boxShadow: `0 6px 22px ${alpha(color, 0.3)}`,
          },
        }}
      >
        <Box sx={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
          {ICONS[icon]}
        </Box>
        <Typography sx={{
          fontSize: '0.72rem',
          fontWeight: 500,
          color: 'inherit',
          fontFamily: '"Inter", sans-serif',
        }}>
          {label}
        </Typography>
      </Box>
    ))}
  </Box>
);

export default SocialLinks;
