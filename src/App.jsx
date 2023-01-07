import React from 'react';

import CodeEditor from './components/CodeEditor';
import Form from './components/Form';
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
  - [x] Salvar os projetos no local storage
  - [x] Criar uma navegação lateral para acessar os projetos salvos
  - [x] Criar um botão para salvar projetos
*/

export default function App() {
  const {
    projects: [projects, setProjects],
    isLoading: [loading],
    atualProject: [atual],
  } = React.useContext(GlobalContext);
  const [page, setPage] = React.useState(0);

  return (
    <div className="flex h-[100vh] w-screen gap-1">
      <Navbar setPage={setPage} page={page} />

      <div className="flex gap-1 w-screen">
        {(page === 0 && Object.keys(projects).length !== 0 && atual) && (
          <>
            <CodeEditor />
            <Preview />
          </>
        )}
        {(page >= 1 || Object.keys(projects).length === 0 || !atual) && (
          <Form setPage={setPage} setCode={setProjects} />
        )}
      </div>
      {loading && <Loading />}
    </div>
  );
}
