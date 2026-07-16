import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { ThemeProvider, CssBaseline, Box, CircularProgress } from '@mui/material';
import { useScroll, useSpring, motion } from 'framer-motion';
import theme from './theme/theme';
import GlobalStyles from './theme/GlobalStyles';
import CursorGlow from './components/ui/CursorGlow';
import PageWrapper from './components/layout/PageWrapper';
import Home from './pages/Home';

// Route-level code splitting
const Projects = lazy(() => import('./pages/Projects'));

// Scroll to hash element utility
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

// Scroll progress bar — thin violet→cyan gradient line along top of viewport
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #7C3AED, #8B5CF6, #06B6D4)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <CursorGlow />
      <ScrollProgressBar />
      <BrowserRouter>
        <ScrollToHash />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={
              <Suspense fallback={
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
                  <CircularProgress size={40} />
                </Box>
              }>
                <Projects />
              </Suspense>
            } />
          </Routes>
        </PageWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
