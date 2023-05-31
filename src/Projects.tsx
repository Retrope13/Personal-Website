import React, {useContext} from 'react';
import {useRef} from 'react';
import {motion, sync, useCycle} from 'framer-motion';
import {MenuToggle} from "./assets/Components/MenuToggle";
import './App.css';
import {Navigation} from './assets/Components/Navigation';
import { BrowserRouter as Router } from 'react-router-dom'


function Projects() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Projects
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Projects;