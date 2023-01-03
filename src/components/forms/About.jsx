import React from 'react';
import PropTypes from 'prop-types';
import generateReadme from '../../utils/api';
import { GlobalContext } from '../../store/GlobalStorage';

function About({
  project, setPage, setProject,
}) {
  const { projects, atualProject } = React.useContext(GlobalContext);
  const [projectsList, setCode] = projects;
  const setAtual = atualProject[1];
  return (
    <form
      onSubmit={async (e) => {
        console.log('carregando');
        await setCode({ ...projectsList, [project.name]: await generateReadme(e, project) });
        console.log('carregamento concluido');
        setAtual(project.name);
        setPage((page) => page - 1);
      }}
      className="flex flex-col h-full w-full items-center justify-center"
    >
      <div className="flex flex-col gap-8 ">
        <h1 className=" text-4xl w-full font-semibold border-none mb-20">
          Nos diga mais sobre seu projeto
        </h1>
        <label htmlFor="name">
          <p className="pt-3 pb-1 m-0">Nome do Projeto:</p>
          <input
            className="w-full rounded-xl h-8"
            type="text"
            value={project.name}
            id="name"
            onChange={(e) => setProject({ ...project, name: e.target.value })}
          />
        </label>

        <label htmlFor="desc">
          <p className="pt-3 pb-1 m-0">Breve Descrição:</p>
          <input
            className="w-full rounded-xl h-8"
            type="text"
            value={project.desc}
            id="desc"
            onChange={(e) => setProject({ ...project, desc: e.target.value })}
          />
        </label>
      </div>
      <button type="submit" className="w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20">
        Proximo
      </button>
    </form>
  );
}

About.propTypes = {
  setProject: PropTypes.func.isRequired,
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
  setPage: PropTypes.func.isRequired,
};

export default About;
