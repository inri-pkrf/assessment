import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Intro from './componentsJSX/Intro';
import Header from './componentsJSX/Header';
import Home from './componentsJSX/Home';
// import Diagram from './Diagram';
// import Menu from './Menu';
// import Gallery from './Gallery';
// import Relations from './Relations';
// import Ogen from './Ogen';
// import Target from './Target';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
