import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { Routes } from 'react-router-dom'


import './index.css';
import App from './App';
import About from "./pages/About";
import Collection from "./pages/Collection";
import CalmingStars from "./collection/calmingStars/CalmingStars";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <Router baseline='/'>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/collection/calmingstarts" element={<CalmingStars />} />
    </Routes>
  </Router>
)
