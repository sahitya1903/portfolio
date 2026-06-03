import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

const PageWrapper = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Box
          key={pathname}
          component={motion.main}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          sx={{ flex: 1, pt: { xs: '64px', md: '72px' } }}
        >
          {children}
        </Box>
      </AnimatePresence>
      <Footer />
    </Box>
  );
};

export default PageWrapper;
