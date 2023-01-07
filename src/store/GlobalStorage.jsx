import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../hooks/useLocalStorage';
import useDarkMode from '../hooks/useDarkMode';

export const GlobalContext = React.createContext();

export function GlobalStorage({ children }) {
  const projectsState = useLocalStorage('projects', {
    'Pixelv Art Maker': '# Pixel Art Maker',
    'Pixels Art Maker': '# Pixel Art Maker',
    'Pixela Art Maker': '# Pixel Art Maker',
    'Pixel Art Maker': '# Pixel Art Maker',
    'Pixelb Art Maker': '# Pixel Art Maker',
  });

  const loadingState = React.useState(false);
  const themeState = useDarkMode();

  const newProjectState = React.useState({
    name: '',
    desc: '',
    tec: '',
  });

  const atualProjectState = React.useState(
    projectsState[0] ? Object.keys(projectsState[0])[0] : null,
  );

  useEffect(() => {
    window.document
      .querySelectorAll('h1, h2, h3, h4, h5, h6, p, li')
      .forEach((block) => {
        if (themeState[0] === 'light') {
          block.classList.add('text-black');
          block.classList.remove('text-white');
          window.document.body.classList.add('bg-[#F7F7F8]');
          window.document.body.classList.remove('bg-[hsl(220,12%,20%)]');
        } else {
          block.classList.add('text-white');
          block.classList.remove('text-black');
          window.document.body.classList.add('bg-[hsl(220,12%,20%)]');
          window.document.body.classList.remove('bg-[#F7F7F8]');
        }
      });
  }, [atualProjectState, projectsState]);

  const memo = React.useMemo(
    () => ({
      projects: projectsState,
      atualProject: atualProjectState,
      isLoading: loadingState,
      newProject: newProjectState,
      themeState,
    }),
    [
      projectsState,
      atualProjectState,
      loadingState,
      newProjectState,
      themeState,
    ],
  );

  return (
    <GlobalContext.Provider value={memo}>{children}</GlobalContext.Provider>
  );
}

GlobalStorage.propTypes = { children: PropTypes.node.isRequired };
