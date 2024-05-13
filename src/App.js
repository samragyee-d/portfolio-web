import React from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import homepage from "./pages/homepage/homepage.js";
import Education from "./pages/Education/Education.js";
import './App.css';


function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={homepage}/>
        </Routes>
        <Routes>
          <Route path="/Education" exact Component={Education}/>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
