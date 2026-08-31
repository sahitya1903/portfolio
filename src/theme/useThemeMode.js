import { useContext } from 'react';
import { ThemeModeContext } from './ThemeContext';

export const useThemeMode = () => useContext(ThemeModeContext);

export default useThemeMode;
