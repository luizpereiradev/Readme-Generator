import React, { useEffect } from 'react';

import '../../index.css';
import CodeEditor from '../../components/CodeEditor';
import Navbar from '../../components/Navbar';
import Preview from '../../components/Preview';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import ToggleEditor from './ToggleEditor';

export default function App() {
  const { width } = useWindowDimensions();
  const [toggle, setToggle] = React.useState(false);
  const [page, setPage] = React.useState('editor');

  useEffect(() => {
    if (width < 768) {
      setToggle(true);
      return;
    }
    setToggle(false);
  }, [width]);

  return (
    <div className="flex h-[100vh] w-screen gap-1">
      <Navbar page="editor" />
      <div className="flex gap-1 w-screen">
        {toggle ? (
          <>
            <ToggleEditor toggle={toggle} page={page} setPage={setPage} />
            {page === 'editor' ? (
              <CodeEditor toggle={toggle} />
            ) : (
              <Preview toggle={toggle} />
            )}
          </>
        )

          : (
            <>
              <CodeEditor toggle={toggle} />
              <Preview toggle={toggle} />
            </>
          )}

      </div>
    </div>
  );
}
