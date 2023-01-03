import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import React from 'react';
import { GlobalContext } from '../store/GlobalStorage';

function Preview() {
  const { atualProject, projects } = React.useContext(GlobalContext);
  const [projectsList] = projects;
  const [atual] = atualProject;
  return (
    <div className="w-[40vw]">
      <p>Preview</p>
      <div className="w-full h-[70vh] bg-[#282a36] overflow-auto border-white border border-solid">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="px-4"
        >
          {projectsList[atual]}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Preview;
