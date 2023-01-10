import React from 'react';

import productExplainer from '../assets/productExplainer.svg';
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import { GlobalContext } from '../store/GlobalStorage';
import Loading from '../components/Loading';

export default function App() {
  const {
    projects: [, setProjects],
    isLoading: [loading],
  } = React.useContext(GlobalContext);

  return (
    <div className="flex h-[100vh] w-screen gap-1">
      <Navbar page="form" />

      <div className="flex gap-1 w-screen flex-col justify-center items-center">
        <h1 className="font-display text-4xl font-semibold border-none mb-20">
          Describe your project
        </h1>
        <div className="flex w-full relative">
          <Form setCode={setProjects} />
          <img src={productExplainer} alt="product explainer" className="w-1/2 hidden xl:block" />
        </div>
      </div>
      {loading && <Loading />}
    </div>
  );
}
