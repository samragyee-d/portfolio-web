import React from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/homepage/homepage.js";
import Education from "./pages/Education/Education.js";
import './App.css';


function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={Homepage}/>
        </Routes>
        <Routes>
          <Route path="/E" exact Component={Education}/>  
        </Routes>
      </Router>
    </main>
  );
}

export default App;
