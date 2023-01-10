import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

function useDarkMode() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const toggleTheme = (setMode = false) => {
    if (!setMode) {
      if (theme === 'dark') {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    } else {
      setTheme(setMode);
    }
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return [
    theme,
    toggleTheme,
  ];
}

export default useDarkMode;
