import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { FiMenu, FiX } from 'react-icons/fi';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function ToggleMenu({ isOpen, setOpen }) {
  const handleNav = () => {
    setOpen(!isOpen);
  };
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width > 1024) {
      setOpen('screen');
    } else {
      setOpen(false);
    }
  }, [width]);

  return (
    <>
      <div
        className={`absolute ${isOpen === false && 'w-0 h-0'} ${
          isOpen === 'screen' && 'hidden'
        } w-screen h-screen z-30 bg-[rgba(45,47,51,1)]/75 transition-all ease-linear duration-300`}
      />
      <FiMenu
        size={32}
        className={`z-40 absolute top-3 left-5 ${
          (isOpen || isOpen) === 'screen' && 'hidden'
        }`}
        onClick={() => handleNav()}
      />
      <FiX
        size={32}
        className={`absolute top-4 left-72 z-50 ${
          (!isOpen || isOpen === 'screen') && 'hidden'
        }`}
        onClick={() => handleNav()}
      />

    </>
  );
}

ToggleMenu.propTypes = {
  isOpen: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default ToggleMenu;
