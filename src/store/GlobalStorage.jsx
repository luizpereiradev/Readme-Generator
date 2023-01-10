import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const loadingState = React.useState(false);
  const themeState = useDarkMode();

  const notificationState = React.useState('seja bem vindo!');

  const newProjectState = React.useState({
    name: '',
    desc: '',
    tec: '',
    lang: '',
  });

  const atualProjectState = React.useState(
    projectsState[0] ? Object.keys(projectsState[0])[0] : null,
  );

  useEffect(() => {
    if (window.location.pathname === '/') return;
    if (atualProjectState[0].length !== 0 && Object.keys(projectsState[0]).length !== 0) {
      navigate('/editor');
    } else {
      navigate('/form');
    }
  }, [projectsState[0], atualProjectState[0]]);

  const memo = React.useMemo(
    () => ({
      projects: projectsState,
      atualProject: atualProjectState,
      isLoading: loadingState,
      newProject: newProjectState,
      themeState,
      notificationState,
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
