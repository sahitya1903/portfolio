import { Box, Chip } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

/**
 * FilterChip — a category toggle for the /projects archive, showing the
 * category name plus a count badge. Styled active/inactive.
 */
const FilterChip = ({ label, count, isActive, onClick }) => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;

  return (
    <Chip
      onClick={onClick}
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <span>{label}</span>
          <Box
            component="span"
            sx={{
              fontSize: '0.6rem',
              background: isActive
                ? alpha(primaryColor, 0.15)
                : 'rgba(15, 23, 42, 0.06)',
              color: isActive ? primaryColor : 'text.secondary',
              px: 0.75,
              py: 0.1,
              borderRadius: '4px',
              fontWeight: 700,
              minWidth: '18px',
              textAlign: 'center',
              lineHeight: 1.5,
            }}
          >
            {count}
          </Box>
        </Box>
      }
      sx={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '0.75rem',
        fontWeight: isActive ? 600 : 400,
        cursor: 'pointer',
        background: isActive ? alpha(primaryColor, 0.1) : '#FFFFFF',
        color: isActive ? primaryColor : 'text.secondary',
        border: `1px solid ${
          isActive
            ? alpha(primaryColor, 0.6)
            : theme.palette.divider
        }`,
        borderRadius: '8px',
        height: 34,
        transition: 'all 0.2s ease',
        boxShadow: isActive ? `0 0 16px ${alpha(primaryColor, 0.18)}` : 'none',
        '&:hover': {
          background: alpha(primaryColor, 0.1),
          color: primaryColor,
          borderColor: alpha(primaryColor, 0.45),
          transform: 'translateY(-1px)',
        },
      }}
    />
  );
};

export default FilterChip;
