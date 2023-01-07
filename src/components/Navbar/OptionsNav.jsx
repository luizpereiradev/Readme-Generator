import React from 'react';

import {
  FiDownload, FiSun, FiMoon, FiTrash2, FiCheck,
} from 'react-icons/fi';
import { GlobalContext } from '../../store/GlobalStorage';
import downloadFile from '../../utils/download';

function OptionsNav() {
  const {
    projects: [projectsList, setProjectsList],
    atualProject: [atual],
    themeState: [theme, setTheme],
  } = React.useContext(GlobalContext);

  const [deleteClicked, setDeleteClicked] = React.useState(false);

  const handleDeleteAll = () => {
    if (deleteClicked) {
      setProjectsList({});
      setDeleteClicked(false);
      return;
    }
    setDeleteClicked(true);
  };

  return (
    <div className="border-0 border-t-gray-500 border-t-[1px] border-solid">

      <button type="button" onClick={() => setTheme()}>
        {theme === 'light' ? (
          <>
            <FiMoon size={16} />
            Dark Mode
          </>
        )
          : (
            <>
              <FiSun size={16} />
              Light Mode
            </>
          )}
      </button>

      {Object.keys(projectsList).length !== 0 && (
      <button type="button" onClick={() => handleDeleteAll()}>
        {deleteClicked ? (
          <>
            <FiCheck size={16} />
            Confirm Delete
          </>
        ) : (
          <>
            <FiTrash2 size={16} />
            Delete All
          </>
        )}
      </button>
      )}

      {atual && (
      <button type="button" onClick={() => downloadFile(projectsList[atual])}>
        <FiDownload size={16} />
        Download
      </button>
      )}

    </div>
  );
}

export default OptionsNav;
