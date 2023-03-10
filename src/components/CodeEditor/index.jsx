import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { EditorView } from '@codemirror/view';
import { FiCopy } from 'react-icons/fi';
import React from 'react';
import { PropTypes } from 'prop-types';
import { oneDark } from '@codemirror/theme-one-dark';
import { githubLight } from '@uiw/codemirror-theme-github';
import { GlobalContext } from '../../store/GlobalStorage';

function CodeEditor({ toggle }) {
  const {
    atualProject: [atual],
    projects: [projectsList, setProjects],
    themeState: [theme],
  } = React.useContext(GlobalContext);

  return (
    <div className={`${toggle ? 'w-11/12' : 'w-1/2'} h-screen mx-auto`}>
      <p className={`h-[1vh] ml-[calc(100%-90px)] font-display ${toggle && 'invisible'}`}>Editor</p>
      <CodeMirror
        className="relative text-base"
        theme={theme === 'dark' ? oneDark : githubLight}
        width="100%"
        height="93vh"
        value={projectsList[atual]}
        onChange={(e) => setProjects({ ...projectsList, [atual]: e })}
        extensions={[
          EditorView.lineWrapping,
          markdown({ base: markdownLanguage, codeLanguages: languages }),
        ]}
      >
        <FiCopy
          size={25}
          className="absolute top-0 right-0 m-2 cursor-pointer text-blue-500 hover:text-blue-600 hover:w-8 hover:h-8 transition-all duration-200 z-10"
          onClick={() => navigator.clipboard.writeText(projectsList[atual])}
        />
      </CodeMirror>
    </div>
  );
}

CodeEditor.propTypes = {
  toggle: PropTypes.bool,
};

CodeEditor.defaultProps = {
  toggle: false,
};

export default CodeEditor;
