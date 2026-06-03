import { Chip } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { VIOLET, VIOLET_LIGHT } from '../../theme/theme';

const TechBadge = ({ label, icon, color, sx = {} }) => {
  const accentColor = color || VIOLET;

  return (
    <Chip
      label={label}
      icon={icon}
      variant="outlined"
      size="small"
      sx={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '0.72rem',
        fontWeight: 500,
        borderColor: alpha(accentColor, 0.3),
        color: alpha(accentColor === VIOLET ? VIOLET_LIGHT : accentColor, 0.9),
        background: alpha(accentColor, 0.06),
        borderRadius: '6px',
        height: '26px',
        transition: 'all 0.2s ease',
        '& .MuiChip-icon': {
          fontSize: '14px',
          color: 'inherit',
          marginLeft: '6px',
        },
        '&:hover': {
          borderColor: alpha(accentColor, 0.7),
          background: alpha(accentColor, 0.12),
          color: accentColor === VIOLET ? VIOLET_LIGHT : accentColor,
          transform: 'translateY(-1px)',
          boxShadow: `0 4px 12px ${alpha(accentColor, 0.2)}`,
        },
        ...sx,
      }}
    />
  );
};

export default TechBadge;
