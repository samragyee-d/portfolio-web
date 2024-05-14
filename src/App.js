import React from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/homepage/homepage.js";
import './App.css';


function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={Homepage}/>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
