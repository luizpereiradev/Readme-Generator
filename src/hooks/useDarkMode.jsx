import useLocalStorage from './useLocalStorage';

function useDarkMode() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return [
    theme,
    toggleTheme,
  ];
}

export default useDarkMode;
