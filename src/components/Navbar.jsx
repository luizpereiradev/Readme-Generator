import React from 'react';
import PropTypes from 'prop-types';
import downloadFile from '../utils/download';
import { GlobalContext } from '../store/GlobalStorage';

function Navbar({ setPage }) {
  const { projects } = React.useContext(GlobalContext);
  const [projectsList] = projects;
  return (
    <div>
      <button type="button" onClick={() => setPage(1)}>Gerar novo Readme</button>
      <button type="button" onClick={() => downloadFile()}>Download</button>
      <div>
        {Object.keys(projectsList).map((project) => <button type="button" onClick={(e) => { console.log(e.target.textContent); }} key={project}>{project}</button>)}
      </div>
    </div>
  );
}

Navbar.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Navbar;
