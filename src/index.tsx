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
      <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();