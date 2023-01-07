import React from 'react';

import '../index.css';
import CodeEditor from '../components/CodeEditor';
import Navbar from '../components/Navbar';
import Preview from '../components/Preview';
import Alert from '../components/Alert';

export default function App() {
  return (
    <div className="flex h-[100vh] w-screen gap-1">
      <Navbar page="editor" />
      <div className="flex gap-1 w-screen">
        <CodeEditor />
        <Preview />
      </div>
      <Alert />
    </div>
  );
}
