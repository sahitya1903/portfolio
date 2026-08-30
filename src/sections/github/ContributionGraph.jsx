import { Box } from '@mui/material';
import { BORDER } from '../../theme/theme';

/** ContributionGraph — the ghchart heatmap; scrolls horizontally on small screens. */
const ContributionGraph = ({ username }) => (
  <Box
    sx={{
      borderRadius: '8px',
      background: 'rgba(255,255,255,0.02)',
      border: `1px solid ${BORDER}`,
      p: { xs: 1.25, md: 1.75 },
      display: 'flex',
      overflowX: 'auto',
      '&::-webkit-scrollbar': { height: 5 },
      '&::-webkit-scrollbar-thumb': { background: 'rgba(124,58,237,0.35)', borderRadius: 3 },
    }}
  >
    <Box
      component="img"
      loading="lazy"
      src={`https://ghchart.rshah.org/8B5CF6/${username}`}
      alt={`${username} GitHub contribution chart`}
      onError={(e) => { e.currentTarget.style.display = 'none'; }}
      sx={{
        width: '100%',
        minWidth: { xs: 560, sm: 'auto' },
        height: 'auto',
        display: 'block',
        aspectRatio: '740 / 112',
        filter: 'opacity(0.92)',
        borderRadius: '4px',
      }}
    />
  </Box>
);

export default ContributionGraph;
