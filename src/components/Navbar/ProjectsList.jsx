import React from 'react';
import PropTypes from 'prop-types';

import { VscMarkdown } from 'react-icons/vsc';
import { FiDelete } from 'react-icons/fi';
import { GlobalContext } from '../../store/GlobalStorage';

function ProjectsList({ setPage, page }) {
  const {
    projects: [projectsList, setProjectsList],
    atualProject: [atual, setAtualProject],
  } = React.useContext(GlobalContext);

  const handleDelete = (e) => {
    setAtualProject(projectsList[Object.keys(projectsList)[0]] || false);
    setProjectsList(
      ({ [e.target.parentNode.textContent]: l, ...rest }) => ({ ...rest }),
    );
  };

  return (
    <nav className="h-3/4 overflow-scroll">
      {Object.keys(projectsList)?.map((project) => project && (
      <button
        className={`group relative ${atual === project && page < 1 && 'bg-white/20'}`}
        type="button"
        onClick={(e) => {
          setAtualProject(e.target.textContent);
          setPage(0);
        }}
        key={project}
      >
        <VscMarkdown size={16} />
        {project}
        <FiDelete
          size={16}
          className="hidden group-hover:block p-1 absolute right-1"
          onClick={(e) => handleDelete(e)}
        />
      </button>
      ))}
    </nav>
  );
}

ProjectsList.propTypes = {
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default ProjectsList;
