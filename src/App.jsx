import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { dracula } from "@uiw/codemirror-theme-dracula";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

export default function App() {
  const [code, setCode] = useState(`
  # README GENERATOR
  
  README Generator é um gerador de readme que usa inteligência artificial para gerar o readme de projetos open source. Ele foi criado usando React e OpenAI para ajudar os desenvolvedores a criar rapidamente um readme de qualidade para seus projetos.
  
  ## Recursos
  
  - Geração automática de readme usando inteligência artificial
  - Interface intuitiva e fácil de usar
  - Suporte a vários formatos de readme
  - Suporte a vários idiomas
  - Suporte a vários temas
  
  ## Como usar
  
  1. Acesse o site do README Generator
  2. Selecione o formato de readme desejado
  3. Selecione o idioma desejado
  4. Selecione o tema desejado
  5. Insira as informações necessárias
  6. Clique em "Gerar Readme"
  7. Copie o readme gerado para o seu projeto
  
  ## Contribuindo
  
  Se você deseja contribuir para o README Generator, siga as etapas abaixo:
  
  1. Faça um fork do repositório
  2. Crie uma branch para suas alterações
  3. Faça as alterações necessárias
  4. Envie um pull request
  
  ## Licença
  
  README Generator é um software de código aberto licenciado sob a licença MIT.
  `);

  const configuration = new Configuration({
    apiKey:'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' ,
  });
  const openai = new OpenAIApi(configuration);

  const getReadme = async (event) => {
    event.preventDefault()
    //setar o texto como code
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Crie um readme para um projeto o nome é ${name} e em resumo ele é: ${description}`,
      temperature: 0,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    setCode(response.data.choices[0].text);
  }

  const [name, setName] = useState('README GENERATOR')
  const [description, setDescription] = useState('um gerador de readme que usa ia para gerar o readme de projetos open source, ele é feito usando react e openai')

  return (
    <div style={{ display: "flex", height: '100vh', width: "100vw"}}>
      <div style={{ display: "flex", height: '100%', width: "80%"}}>
        <CodeMirror
          theme={dracula}
          height="100%"
          width="40vw"
          value={code}
          onChange={(e) => setCode(e)}
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
        />
        <div style={{ width: "49%", height:"100%", paddingLeft: "1%", overflow:"auto"}}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            children={code}
          />
        </div>
      </div>

      <form onSubmit={(e) => getReadme(e)}>
        <label style={{display: "block"}}>
          Nome Do Projeto
          <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          <p>resuma o seu projeto</p>
          <textarea type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>

    </div>
  );
}
