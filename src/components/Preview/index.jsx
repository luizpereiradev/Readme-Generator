import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import React from 'react';
import { GlobalContext } from '../../store/GlobalStorage';

function Preview() {
  const {
    atualProject: [atual],
    projects: [projectsList],
    themeState: [theme],
  } = React.useContext(GlobalContext);
  return (
    <div className="w-[50%]">
      <p className="h-[1vh]">Preview</p>
      <div
        className={`w-full h-[93vh] ${
          theme === 'dark' ? 'bg-[#282C34]' : 'bg-white'
        } overflow-auto`}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="px-4">
          {projectsList[atual]}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Preview;