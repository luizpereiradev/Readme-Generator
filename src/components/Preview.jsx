import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

function Preview({code}) {
  return (
    <div
      className="w-[40vw] h-[80vh] bg-[#282a36] overflow-auto border-white border border-solid"
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={code} className='px-4'/>
    </div>
  );
}

export default Preview;
