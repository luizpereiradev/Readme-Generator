import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { dracula } from "@uiw/codemirror-theme-dracula";

function CodeEditor({code, setCode}) {
  return (
    <CodeMirror
      className=" border-white border border-solid"
      theme={dracula}
      height="80vh"
      width="40vw"
      value={code}
      onChange={(e) => setCode(e)}
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
    />
  );
}

export default CodeEditor;
