import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Bio from './components/Bio/Bio';
import Experience from './components/Experience/Experience';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <main className="main-content">
          <Routes>
            <Route path="/bio" element={<Bio />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;