import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { EditorView } from "@codemirror/view";
import { FiCopy } from "react-icons/fi";

function CodeEditor({ code, setCode }) {
  return (
    <div className="w-[40vw]">
      <p>Editor</p>
      <CodeMirror
        className=" border-white border border-solid relative"
        theme={dracula}
        width="100%"
        height="70vh"
        value={code}
        onChange={(e) => setCode(e)}
        extensions={[
          markdown({ base: markdownLanguage, codeLanguages: languages }),
          EditorView.lineWrapping,
        ]}
      >
        <FiCopy
          size={25}
          className="absolute top-0 right-0 m-2 cursor-pointer text-green-500 hover:text-green-600 hover:w-8 hover:h-8 transition-all duration-200"
          onClick={() => navigator.clipboard.writeText(code)}
        />
      </CodeMirror>
    </div>
  );
}

export default CodeEditor;
