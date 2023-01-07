import React from 'react';
import PropTypes from 'prop-types';

import { VscMarkdown } from 'react-icons/vsc';
import { FiDelete } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../store/GlobalStorage';

function ProjectsList({ page }) {
  const {
    projects: [projectsList, setProjectsList],
    atualProject: [atual, setAtualProject],
    notificationState: [, setNotification],
  } = React.useContext(GlobalContext);

  const navigate = useNavigate();

  const handleDelete = (e) => {
    const project = e.target.parentNode.textContent;
    if (project === '') return;
    setAtualProject(false);
    setNotification({ notification: `Project "${project}" deleted`, id: Math.random() });
    setProjectsList(
      ({ [project]: l, ...rest }) => ({ ...rest }),
    );
  };

  return (
    <nav className="h-3/4 overflow-scroll">
      {Object.keys(projectsList)?.map((project) => project && (
      <button
        className={`group relative ${atual === project && page !== 'form' && 'bg-white/20'}`}
        type="button"
        onClick={(e) => {
          setAtualProject(e.target.textContent);
          navigate('/editor');
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
  page: PropTypes.string.isRequired,
};

export default ProjectsList;
