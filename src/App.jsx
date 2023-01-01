import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";
import generateReadme from "./utils/api";

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

  const [name, setName] = useState('README GENERATOR')
  const [description, setDescription] = useState('um gerador de readme que usa ia para gerar o readme de projetos open source, ele é feito usando react e openai')

  return (
    <div className="flex h-[80vh] w-screen gap-4 mt-20 ml-5">
      <div className="w-[15vw] h-full overflow-auto flex flex-col">
      {/* <form onSubmit={(e) => generateReadme(e, name, description, setCode)}>
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
      </form> */}
        <button onClick={(e) => generateReadme(e, name, description, setCode)}>Gerar Readme</button>
      </div>
      <div className="flex h-4/5 w-4/5 gap-8">
        <CodeEditor code={code} setCode={setCode}/>
        <Preview code={code}/>
      </div>
    </div>
  );
}
