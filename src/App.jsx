import React from 'react';
import CodeEditor from './components/CodeEditor';
import About from './components/forms/About';
import Navbar from './components/Navbar';
import Preview from './components/Preview';
import { GlobalContext } from './store/GlobalStorage';

/* TODO:
  - [x] Criar um editor de código
  - [x] Criar um preview do readme
  - [x] Criar um botão para copiar o readme gerado
  - [x] Criar um formulário para inserir as informações do projeto
  - [x] Criar um botão para salvar o readme gerado
  - [] Salvar os projetos no local storage
  - [] Criar uma navegação lateral para acessar os projetos salvos
  - [] Criar um botão para salvar projetos
  - [] Criar um botão para gerar um readme aleatório
*/

export default function App() {
  const { projects } = React.useContext(GlobalContext);
  const [setProjects] = projects;

  const [page, setPage] = React.useState(0);
  const [newProject, setNewProject] = React.useState({
    name: '',
    desc: '',
  });

  return (
    <div className="flex h-[80vh] w-screen gap-3 mt-20">
      <Navbar setPage={setPage} />
      <div className="flex h-4/5 w-4/5 gap-8">
        {page === 0 && (
          <>
            <CodeEditor />
            <Preview />
          </>
        )}
        {page >= 1 && (
          <About
            setProject={setNewProject}
            project={newProject}
            setPage={setPage}
            setCode={setProjects}
          />
        )}
      </div>
    </div>
  );
}
