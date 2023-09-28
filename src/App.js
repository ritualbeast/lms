
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './views/login/Login';
import Registros from './views/visualizarRegistros/Registros';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registros" element={<Registros />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
