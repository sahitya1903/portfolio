import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState, useMemo, createContext } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createAppTheme } from './theme/theme';
import GlobalStyles from './theme/GlobalStyles';
import CursorGlow from './components/ui/CursorGlow';
import PageWrapper from './components/layout/PageWrapper';
import Home from './pages/Home';
import Projects from './pages/Projects';

// Create Theme Mode Context
export const ThemeModeContext = createContext({ toggleColorMode: () => {}, mode: 'light' });

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

function App() {
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem('theme-mode');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    // Default to light as approved by user
    return 'light';
  });

  const colorMode = useMemo(() => ({
    mode,
    toggleColorMode: (event) => {
      if (!document.startViewTransition) {
        setMode((prev) => {
          const next = prev === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme-mode', next);
          return next;
        });
        return;
      }

      const x = event && typeof event.clientX === 'number' ? event.clientX : window.innerWidth / 2;
      const y = event && typeof event.clientY === 'number' ? event.clientY : window.innerHeight / 2;

      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(() => {
        setMode((prev) => {
          const next = prev === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme-mode', next);
          return next;
        });
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`
            ]
          },
          {
            duration: 420,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            pseudoElement: '::view-transition-new(root)'
          }
        );
      });
    }
  }), [mode]);

  const activeTheme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={colorMode}>
      <ThemeProvider theme={activeTheme}>
        <CssBaseline />
        <GlobalStyles />
        <CursorGlow />
        <BrowserRouter>
          <ScrollToHash />
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </PageWrapper>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
