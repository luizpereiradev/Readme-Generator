import React from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from './useLocalStorage';

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

  const newProjectState = React.useState({
    name: '',
    desc: '',
    tec: '',
  });

  const atualProjectState = React.useState('Pixel Art Maker');

  const memo = React.useMemo(() => ({
    projects: projectsState,
    atualProject: atualProjectState,
    isLoading: loadingState,
    newProject: newProjectState,
  }), [projectsState, atualProjectState, loadingState, newProjectState]);

  return (
    <GlobalContext.Provider
      value={memo}
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalStorage.propTypes = { children: PropTypes.node.isRequired };
