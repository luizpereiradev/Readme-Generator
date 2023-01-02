import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { EditorView } from "@codemirror/view";

function CodeEditor({ code, setCode }) {
  return (
    <div className="w-[40vw]">
      <p>Editor</p>
      <CodeMirror
        className=" border-white border border-solid"
        theme={dracula}
        width="100%"
        height="70vh"
        value={code}
        onChange={(e) => setCode(e)}
        extensions={[
          markdown({ base: markdownLanguage, codeLanguages: languages }),
          EditorView.lineWrapping,
        ]}
      />
    </div>
  );
}

export default CodeEditor;
