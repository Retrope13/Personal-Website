import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Projects from './Projects';
import Contact from './Contact';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Projects />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();