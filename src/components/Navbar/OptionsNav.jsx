import React from 'react';

import {
  FiDownload, FiSun, FiMoon,
} from 'react-icons/fi';
import { GlobalContext } from '../../store/GlobalStorage';
import downloadFile from '../../utils/download';

function OptionsNav() {
  const {
    projects: [projectsList],
    atualProject: [atual],
    themeState: [theme, setTheme],
  } = React.useContext(GlobalContext);

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
