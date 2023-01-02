import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import About from "./components/forms/About";
import Preview from "./components/Preview";
import downloadFile from "./utils/download";

/* TODO:
  - [x] Criar um editor de código
  - [x] Criar um preview do readme
  - [x] Criar um botão para copiar o readme gerado
  - [x] Criar um formulário para inserir as informações do projeto
  - [x] Criar um botão para salvar o readme gerado
*/

export default function App() {
  const [code, setCode] = useState(`# README GENERATOR

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

  const [page, setPage] = useState(0)
  const [newProject, setNewProject] = useState({
    name: "",
    desc: "",
  })

  return (
    <div className="flex h-[80vh] w-screen gap-3 mt-20">
      <div className="w-[15vw] h-full overflow-auto flex flex-col">
        <p>Menu</p>
        <button onClick={(e) => setPage(page + 1)}>Gerar Readme</button>
        <button onClick={ e => downloadFile(code)}>Download</button>
      </div>
      <div className="flex h-4/5 w-4/5 gap-8">
        {page === 0 &&
        <>
          <CodeEditor code={code} setCode={setCode}/>
          <Preview code={code}/>
        </>
        }
        {page >= 1 && <About setProject = {setNewProject} project = {newProject} setPage = {setPage} setCode = {setCode}/>}
      </div>
    </div>
  );
}
