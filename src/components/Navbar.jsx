import React from 'react';
import PropTypes from 'prop-types';
import { VscMarkdown } from 'react-icons/vsc';
import { FiPlus, FiDownload, FiSave } from 'react-icons/fi';
import downloadFile from '../utils/download';
import { GlobalContext } from '../store/GlobalStorage';

function Navbar({ setPage }) {
  const { projects, atualProject } = React.useContext(GlobalContext);
  const [projectsList] = projects;
  const [atual, setAtualProject] = atualProject;
  return (
    <div className="bg-[#282a36] p-2 min-w-[16rem] ">
      <button className="border border-white/20" type="button" onClick={() => setPage(1)}>
        <FiPlus size={16} />
        Gerar novo Readme
      </button>
      <nav className="h-3/4 overflow-scroll">
        {Object.keys(projectsList).map((project) => (
          <button
            type="button"
            onClick={(e) => {
              setAtualProject(e.target.textContent);
              setPage(0);
            }}
            key={project}
          >
            <VscMarkdown size={16} />
            {project}
          </button>
        ))}
      </nav>
      <div className="border-0 border-t-gray-500 border-t-[1px] border-solid">
        <button type="button" onClick={() => downloadFile(projectsList[atual])}>
          <FiDownload size={16} />
          Download
        </button>
        {/* todo - function to save on local storage */}
        <button type="button">
          <FiSave size={16} />
          Save
        </button>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Navbar;
