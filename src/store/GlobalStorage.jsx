/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from './useLocalStorage';

export const GlobalContext = React.createContext();

export function GlobalStorage({ children }) {
  const [projects, setProjects] = useLocalStorage('projects', {
    'Pixel Art Maker': '# Pixel Art Maker',
  });

  const [atualProject, setAtualProject] = React.useState('Pixel Art Maker');

  return (
    <GlobalContext.Provider
      value={{
        projects: [projects, setProjects],
        atualProject: [atualProject, setAtualProject],
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalStorage.propTypes = { children: PropTypes.node.isRequired };
