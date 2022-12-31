import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { dracula } from "@uiw/codemirror-theme-dracula";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { useState } from "react";



export default function App() {
  const [code, setCode] = useState(`## Title

\`\`\`jsx
function Demo() {
  return <div>demo</div>
}
\`\`\`

\`\`\`bash
# Not dependent on uiw.
npm install @codemirror/lang-markdown --save
npm install @codemirror/language-data --save
\`\`\`

[weisit ulr](https://uiwjs.github.io/react-codemirror/)

\`\`\`go
package main
import "fmt"
func main() {
  fmt.Println("Hello, 世界")
}
\`\`\`
`);
  return (
    <div style={{ display: "flex" }}>
      <CodeMirror
        theme={dracula}
        height="100vh"
        width="50vw"
        value={code}
        onChange={(e) => setCode(e)}
        extensions={[
          markdown({ base: markdownLanguage, codeLanguages: languages }),
        ]}
      />
      <div style={{ width: "49vw", height:"100vh", paddingLeft: "1vw", overflow:"auto"}}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          children={code}
        />
      </div>
    </div>
  );
}
