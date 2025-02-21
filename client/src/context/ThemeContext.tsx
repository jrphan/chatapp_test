import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, ThemeType } from '../styles/theme';
import React, { createContext, useState, useContext, useEffect } from 'react';

interface ThemeContextProps {
  theme: ThemeType;
  themeCurrent: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeCurrent, setThemeCurrent] = useState<string>('light');

  const getInitialTheme = (): ThemeType => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'dark') return darkTheme;
      if (storedTheme === 'light') return lightTheme;

      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return systemPrefersDark ? darkTheme : lightTheme;
    }
    return lightTheme;
  };

  const [theme, setTheme] = useState<ThemeType>(getInitialTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme === darkTheme ? 'dark' : 'light');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    setThemeCurrent((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ themeCurrent, theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProviderWrapper');
  }
  return context;
};
