import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Education from './components/Education';
import CardContainer from './pages/homepage/Cards/CardContainer';
import EducationDeck from "./pages/homepage/Cards/EducationDeck";
import WorkExp from './pages/homepage/Cards/WorkExp';
import Resume from './pages/Resume';
import './App.css';

function App() {
  return (
    <main className="App">
      <Router>
        <WorkExp/>
        <EducationDeck />
        <CardContainer />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/E" exact element={<Education />} />
          <Route path="/Resume" exact element={<Resume />} />
        </Routes>
        <h1>My Resume</h1>
      </Router>
    </main>
  );
}

export default App;
