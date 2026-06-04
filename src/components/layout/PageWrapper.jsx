import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const PageWrapper = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box
        component="main"
        sx={{ flex: 1, pt: { xs: '64px', md: '72px' } }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default PageWrapper;
