import React from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="*" element={<Home/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();