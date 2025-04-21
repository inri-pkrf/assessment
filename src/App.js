import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Intro from './componentsJSX/Intro';
import Header from './componentsJSX/Header';
import HomePage from './componentsJSX/HomePage';
// import Diagram from './Diagram';
// import Menu from './Menu';
// import Gallery from './Gallery';
// import Relations from './Relations';
// import Ogen from './Ogen';
// import Target from './Target';


function App() {
  return (
    <div className="App">
      <img
        src={process.env.PUBLIC_URL + '/assets/images/orangeTriangle.png'}
        alt="orangeTriangle"
        className="orangeTriangle-comp"
      />
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home-page" element={<HomePage />} />
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
