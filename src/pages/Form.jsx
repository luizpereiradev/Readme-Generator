import React from 'react';

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
      <div className="flex gap-1 w-screen">
        <Form setCode={setProjects} />
      </div>
      {loading && <Loading />}
    </div>
  );
}
