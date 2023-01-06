import React from 'react';
import PropTypes from 'prop-types';
import { VscMarkdown } from 'react-icons/vsc';
import {
  FiPlus, FiDownload, FiDelete,
} from 'react-icons/fi';
import downloadFile from '../utils/download';
import { GlobalContext } from '../store/GlobalStorage';

function Navbar({ setPage }) {
  const {
    projects: [projectsList, setProjectsList],
    atualProject: [atual, setAtualProject],
  } = React.useContext(GlobalContext);

  const handleDelete = (e) => {
    setAtualProject(projectsList[Object.keys(projectsList)[0]] || null);
    setProjectsList(
      ({ [e.target.parentNode.textContent]: l, ...rest }) => ({ ...rest }),
    );
  };

  return (
    <div className="bg-[#282C34] p-2 min-w-[16rem] ">
      <button
        className="border border-white/20"
        type="button"
        onClick={() => setPage(1)}
      >
        <FiPlus size={16} />
        Gerar novo Readme
      </button>
      <nav className="h-3/4 overflow-scroll">
        {Object.keys(projectsList)?.map((project) => project && (
          <button
            className="group relative"
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
      <div className="border-0 border-t-gray-500 border-t-[1px] border-solid">
        {atual && (
        <button type="button" onClick={() => downloadFile(projectsList[atual])}>
          <FiDownload size={16} />
          Download
        </button>
        )}
      </div>
    </div>
  );
}

Navbar.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Navbar;
