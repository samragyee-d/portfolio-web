import React from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/homepage/homepage.js";
import Education from "./pages/Education/Education.js";
import CardContainer from "./pages/homepage/Cards/CardContainer.js"; 
import Resume from "./pages/Resume.js";
import './App.css';


function App() {
  return (
    <main className="App">
      <CardContainer />
      <Router>
        <Routes>
          <Route path="/" exact Component={Homepage}/>
        </Routes>
        <Routes>
          <Route path="/E" exact Component={Education}/>  
        </Routes>
        <Routes>
          <Route path="/Resume" exact Component={Resume}/>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
