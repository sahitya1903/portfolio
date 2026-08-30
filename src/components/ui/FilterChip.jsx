import { Box, Chip } from '@mui/material';
import { alpha } from '@mui/material/styles';

import { VIOLET, VIOLET_LIGHT } from '../../theme/theme';

/**
 * FilterChip — a category toggle for the /projects archive, showing the
 * category name plus a count badge. Styled active/inactive.
 */
const FilterChip = ({ label, count, isActive, onClick }) => (
  <Chip
    onClick={onClick}
    label={
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
        <span>{label}</span>
        <Box component="span" sx={{
          fontSize: '0.6rem',
          background: isActive ? alpha(VIOLET, 0.3) : 'rgba(255,255,255,0.06)',
          color: isActive ? VIOLET_LIGHT : 'text.secondary',
          px: 0.75, py: 0.1,
          borderRadius: '4px',
          fontWeight: 700,
          minWidth: '18px',
          textAlign: 'center',
          lineHeight: 1.5,
        }}>
          {count}
        </Box>
      </Box>
    }
    sx={{
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: '0.75rem',
      fontWeight: isActive ? 600 : 400,
      cursor: 'pointer',
      background: isActive ? alpha(VIOLET, 0.2) : 'transparent',
      color: isActive ? VIOLET_LIGHT : 'text.secondary',
      border: `1px solid ${isActive ? alpha(VIOLET, 0.6) : 'rgba(255,255,255,0.07)'}`,
      borderRadius: '8px',
      height: 34,
      transition: 'all 0.2s ease',
      boxShadow: isActive ? `0 0 16px ${alpha(VIOLET, 0.3)}` : 'none',
      '&:hover': {
        background: alpha(VIOLET, 0.12),
        color: VIOLET_LIGHT,
        borderColor: alpha(VIOLET, 0.45),
        transform: 'translateY(-1px)',
      },
    }}
  />
);

export default FilterChip;
