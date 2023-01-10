import React from 'react';
import PropTypes from 'prop-types';

import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import ProjectsList from './ProjectsList';
import OptionsNav from './OptionsNav';
import { GlobalContext } from '../../store/GlobalStorage';
import ToggleMenu from './ToggleMenu';

function Navbar({ page }) {
  const {
    atualProject: [, setAtual],
  } = React.useContext(GlobalContext);
  const navigate = useNavigate();
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <ToggleMenu isOpen={isOpen} setOpen={setOpen} />
      <div
        className={`bg-[#282C34] p-2 ${
        // eslint-disable-next-line no-nested-ternary
          !isOpen
            ? 'overflow-hidden w-0 h-0 opacity-0'
            : isOpen === 'screen'
              ? 'block min-w-[16rem]'
              : 'absolute min-w-[16rem] z-50'
        } h-full lg:block transition-all ease-linear duration-300`}
      >
        <button
          className="border border-white/20"
          type="button"
          onClick={() => {
            navigate('/form');
            setAtual('');
          }}
        >
          <FiPlus size={16} />
          Generate new Readme
        </button>
        <ProjectsList page={page} />
        <OptionsNav page={page} />
      </div>
    </>
  );
}

Navbar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Navbar;
