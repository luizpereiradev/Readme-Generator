import React from 'react';
import PropTypes from 'prop-types';

import { FiPlus } from 'react-icons/fi';
import ProjectsList from './ProjectsList';
import OptionsNav from './OptionsNav';

function Navbar({ setPage, page }) {
  return (
    <div className="bg-[#282C34] p-2 min-w-[16rem] ">
      <button
        className="border border-white/20"
        type="button"
        onClick={() => setPage(1)}
      >
        <FiPlus size={16} />
        Generate new Readme
      </button>

      <ProjectsList setPage={setPage} page={page} />
      <OptionsNav />
    </div>
  );
}

Navbar.propTypes = {
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default Navbar;
