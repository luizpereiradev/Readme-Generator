import React from 'react';
import PropTypes from 'prop-types';

import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import ProjectsList from './ProjectsList';
import OptionsNav from './OptionsNav';
import { GlobalContext } from '../../store/GlobalStorage';

function Navbar({ page }) {
  const { atualProject: [, setAtual] } = React.useContext(GlobalContext);
  const navigate = useNavigate();
  return (
    <div className="bg-[#282C34] p-2 min-w-[16rem] ">
      <button
        className="border border-white/20"
        type="button"
        onClick={() => { navigate('/form'); setAtual(''); }}
      >
        <FiPlus size={16} />
        Generate new Readme
      </button>

      <ProjectsList page={page} />
      <OptionsNav page={page} />
    </div>
  );
}

Navbar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Navbar;
