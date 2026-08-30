import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import theme from './theme/theme';
import GlobalStyles from './theme/GlobalStyles';
import CursorGlow from './components/ui/CursorGlow';
import ScrollProgressBar from './components/ui/ScrollProgressBar';
import ScrollToHash from './components/ui/ScrollToHash';
import PageWrapper from './components/layout/PageWrapper';
import PageLoader from './components/layout/PageLoader';
import Home from './pages/Home';

// Route-level code splitting — keep the landing bundle light.
const Projects = lazy(() => import('./pages/Projects'));
const Experience = lazy(() => import('./pages/Experience'));
const GitHub = lazy(() => import('./pages/GitHub'));
const Contact = lazy(() => import('./pages/Contact'));

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
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/github" element={<GitHub />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </PageWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
