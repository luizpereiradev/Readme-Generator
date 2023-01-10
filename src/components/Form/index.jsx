/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import generateReadme from '../../utils/api';
import { GlobalContext } from '../../store/GlobalStorage';
import Input from './Input';
import SelectTechnologies from './SelectTechnologies';
import SelectLanguages from './SelectLanguages';

function About() {
  const {
    projects: [projectsList, setCode],
    atualProject: [, setAtual],
    isLoading: [, setLoading],
    newProject: [project, setNewProject],
    notificationState: [, setNotificationState],
  } = React.useContext(GlobalContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!project.name || !project.desc || !project.tec) return setNotificationState({ notification: 'Fill in all the fields', id: Math.random(), type: 'error' });
    if (projectsList[project.name]) return setNotificationState({ notification: 'There is already a project with this name', id: Math.random(), type: 'error' });
    setLoading(true);
    await setCode({
      ...projectsList,
      [project.name]: await generateReadme(project),
    });
    setLoading(false);
    setAtual(project.name);
    navigate('/editor');
    return true;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full w-full xl:w-1/2 items-center justify-center"
    >
      <div className="flex flex-col gap-8 w-5/12 justify-center items-center">
        <Input label="Project Name:" id="name" length={20} />
        <Input label="Short Description:" id="desc" length={100} />
        <SelectTechnologies setValue={setNewProject} />
        <SelectLanguages setValue={setNewProject} />
      </div>
      <button
        type="submit"
        className="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20 flex items-center justify-center"
      >
        Generate Readme
      </button>
    </form>
  );
}

export default About;
