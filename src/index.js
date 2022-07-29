import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main/Main';
import Concursantes from './components/concursantes/Concursantes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='concursantes' element={<Concursantes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
