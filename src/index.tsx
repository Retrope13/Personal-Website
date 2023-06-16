import React from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Projects from './Projects';
import Contact from './Contact';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDBlw4rhG_IeQya-voMmzVN7CQoY9X6EL0",
  authDomain: "sam-mckay-personal-website.firebaseapp.com",
  databaseURL: "https://sam-mckay-personal-website-default-rtdb.firebaseio.com",
  projectId: "sam-mckay-personal-website",
  storageBucket: "sam-mckay-personal-website.appspot.com",
  messagingSenderId: "823000142706",
  appId: "1:823000142706:web:37a19942634845725543eb",
  measurementId: "G-Y0954CRPMK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

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