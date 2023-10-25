import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Contactme from './pages/contactme';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <Router>
      <div className="App bg-white">
        <header className="App-header ">
         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skill" element={<Portfolio />} />
            <Route path="/aboutme" element={<Contactme />} />

          </Routes>
        </header>
      </div>
    </Router>
  );
};

export default App;
