import React from 'react';
import CodeEditor from './components/CodeEditor';
import About from './components/forms/About';
import Navbar from './components/Navbar';
import Preview from './components/Preview';
import { GlobalContext } from './store/GlobalStorage';
import Loading from './components/Loading';

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
  const { projects, isLoading } = React.useContext(GlobalContext);
  const setProjects = projects[1];
  const [loading] = isLoading;
  const [page, setPage] = React.useState(0);

  return (
    <div className="flex h-[100vh] w-screen gap-1">
      <Navbar setPage={setPage} />

      <div className="flex gap-1 w-screen">
        {page === 0 && (
          <>
            <CodeEditor />
            <Preview />
          </>
        )}
        {page >= 1 && (
          <About
            setPage={setPage}
            setCode={setProjects}
          />
        )}
      </div>
      {loading && <Loading />}
    </div>
  );
}
