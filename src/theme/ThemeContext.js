import { createContext } from 'react';

export const THEME_STORAGE_KEY = 'portfolio-theme';

export const ThemeModeContext = createContext({
  mode: 'light',
  toggleTheme: () => {},
  isLight: true,
});

export default ThemeModeContext;
