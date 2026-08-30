import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { VIOLET } from '../../theme/theme';

/**
 * SectionPage — chrome for a standalone route that renders a single site
 * section (e.g. /experience, /github, /contact). Supplies the top/bottom
 * breathing room and ambient orbs the Home scroll gives a section for free.
 */
const SectionPage = ({ children }) => (
  <Box component="div" sx={{ py: { xs: 6, md: 10 }, position: 'relative', overflow: 'hidden' }}>
    <Box sx={{
      position: 'absolute', top: '8%', right: '-6%',
      width: 600, height: 600, borderRadius: '50%',
      background: `radial-gradient(circle, ${alpha(VIOLET, 0.1)} 0%, transparent 65%)`,
      filter: 'blur(60px)', pointerEvents: 'none',
    }} />
    <Box sx={{
      position: 'absolute', bottom: '4%', left: '-8%',
      width: 440, height: 440, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 65%)',
      filter: 'blur(60px)', pointerEvents: 'none',
    }} />
    <Box sx={{ position: 'relative', zIndex: 1 }}>{children}</Box>
  </Box>
);

export default SectionPage;
