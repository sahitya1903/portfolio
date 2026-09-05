import { Chip } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

const TechBadge = ({ label, icon, color, sx = {} }) => {
  const theme = useTheme();
  const accentColor = color || theme.palette.primary.main;

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
        color: accentColor,
        background: alpha(accentColor, 0.07),
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
          background: alpha(accentColor, 0.14),
          color: accentColor,
          transform: 'translateY(-1px)',
          boxShadow: `0 4px 12px ${alpha(accentColor, 0.2)}`,
        },
        ...sx,
      }}
    />
  );
};

export default TechBadge;
