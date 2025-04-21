import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Intro from './GeneralComponentsJSX/Intro';
import Header from './GeneralComponentsJSX/Header';
import HomePage from './GeneralComponentsJSX/HomePage';

import Diagram from './MainTopicsJSX/Diagram';
import Gallery from './MainTopicsJSX/Gallery';
import Relations from './MainTopicsJSX/Relations';
import Scenario from './MainTopicsJSX/Scenario';
import Target from './MainTopicsJSX/Target';

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
        <Route path="/diagram" element={<Diagram />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/relations" element={<Relations />} />
        <Route path="/scenario" element={<Scenario />} />
        <Route path="/target" element={<Target />} />
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
