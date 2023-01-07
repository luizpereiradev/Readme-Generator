/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import generateReadme from '../../utils/api';
import { GlobalContext } from '../../store/GlobalStorage';
import Input from './Input';
import SelectLanguages from './SelectLanguages';

function About({ setPage }) {
  const {
    projects: [projectsList, setCode],
    atualProject: [, setAtual],
    isLoading: [, setLoading],
    newProject: [project, setNewProject],
  } = React.useContext(GlobalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!project.name || !project.desc || !project.tec) return window.alert('Preencha todos os campos');
    if (projectsList[project.name]) return window.alert('Já existe um projeto com esse nome');
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
        <Input label="Nome do Projeto:" id="name" length={20} />
        <Input label="Breve Descrição:" id="desc" length={100} />
        <SelectLanguages setValue={setNewProject} />
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
  setPage: PropTypes.func.isRequired,
};

export default About;
