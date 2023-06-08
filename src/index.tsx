import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Projects from './Projects';
import Contact from './Contact';


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Projects/*' element={<Projects/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path="*" element={<Home/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();