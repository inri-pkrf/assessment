import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import '../componentsCss/App.css'; 

import Intro from './Intro';
import Header from './Header';
import Home from './Home';
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
        {/* <Route path="/diagram" element={<Diagram />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/relations" element={<Relations />} />
        <Route path="/ogen" element={<Ogen />} />
        <Route path="/target" element={<Target />} /> */}
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
