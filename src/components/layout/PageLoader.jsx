import { Box, CircularProgress } from '@mui/material';

/** PageLoader — centered spinner used as the <Suspense> fallback for lazy routes. */
const PageLoader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <CircularProgress size={40} />
  </Box>
);

export default PageLoader;
