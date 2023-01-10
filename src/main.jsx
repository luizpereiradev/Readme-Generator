import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Editor from './pages/editor/index';
import Home from './pages/Home';
import Form from './pages/Form';
import Alert from './components/Alert';
import { GlobalStorage } from './store/GlobalStorage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalStorage>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Alert />
    </GlobalStorage>
  </BrowserRouter>,
);
