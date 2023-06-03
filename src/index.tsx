import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import Projects from './projects';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Projects />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();