import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import React from 'react';
import { PropTypes } from 'prop-types';
import { GlobalContext } from '../../store/GlobalStorage';

function Preview({ toggle }) {
  const {
    atualProject: [atual],
    projects: [projectsList],
  } = React.useContext(GlobalContext);
  return (
    <div className={`${toggle ? 'w-11/12' : 'w-1/2'} h-screen mx-auto`}>
      <p className={`h-[1vh] ml-[calc(100%-90px)] font-display ${toggle && 'invisible'}`}>Preview</p>
      <div
        className="w-full h-[93vh] dark:bg-[#282C34] bg-white overflow-auto"
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="px-4">
          {projectsList[atual]}
        </ReactMarkdown>
      </div>
    </div>
  );
}

Preview.propTypes = {
  toggle: PropTypes.bool,
};

Preview.defaultProps = {
  toggle: false,
};
export default Preview;
