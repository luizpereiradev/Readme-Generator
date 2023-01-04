/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import generateReadme from '../../utils/api';
import { GlobalContext } from '../../store/GlobalStorage';
import Input from './Input';

function About({ setPage }) {
  const {
    projects: [projectsList, setCode],
    atualProject: [__, setAtual],
    isLoading: [_, setLoading],
    newProject: [project],
  } = React.useContext(GlobalContext);

  const handleSubmit = async (e) => {
    setLoading(true);
    await setCode({
      ...projectsList,
      [project.name]: await generateReadme(e, project),
    });
    setLoading(false);
    setAtual(project.name);
    setPage((page) => page - 1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full w-full items-center justify-center"
    >
      <div className="flex flex-col gap-8 ">
        <h1 className=" text-4xl w-full font-semibold border-none mb-20">
          Nos diga mais sobre seu projeto
        </h1>
        <Input label="Nome do Projeto:" id="name" />
        <Input label="Breve Descrição:" id="desc" />
        <Input label="Tecnologias usadas:" id="tec" />
      </div>
      <button
        type="submit"
        className="w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20"
      >
        Gerar Readme
      </button>
    </form>
  );
}

About.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tec: PropTypes.string.isRequired,
  }).isRequired,
  setPage: PropTypes.func.isRequired,
};

export default About;
