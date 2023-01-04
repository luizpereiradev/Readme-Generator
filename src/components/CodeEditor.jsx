import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { EditorView } from '@codemirror/view';
import { FiCopy } from 'react-icons/fi';
import React from 'react';
import { oneDark } from '@codemirror/theme-one-dark';
import { GlobalContext } from '../store/GlobalStorage';

function CodeEditor() {
  const { atualProject, projects } = React.useContext(GlobalContext);
  const [atual] = atualProject;
  const [projectsList, setProjects] = projects;

  return (
    <div className="w-[50%] h-screen">
      <p className="h-[1vh]">Editor</p>
      <CodeMirror
        className="relative text-base"
        theme={oneDark}
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
          className="absolute top-0 right-0 m-2 cursor-pointer text-green-500 hover:text-green-600 hover:w-8 hover:h-8 transition-all duration-200 z-10"
          onClick={() => navigator.clipboard.writeText(projectsList[atual])}
        />
      </CodeMirror>
    </div>
  );
}

export default CodeEditor;
