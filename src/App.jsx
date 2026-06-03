import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';
import GlobalStyles from './theme/GlobalStyles';
import CursorGlow from './components/ui/CursorGlow';
import PageWrapper from './components/layout/PageWrapper';
import Home from './pages/Home';
import { About, Projects, Blog, Contact } from './pages/Placeholders';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <CursorGlow />
      <BrowserRouter>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
