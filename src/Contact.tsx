import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigation } from './assets/Components/Navigation';
import { BrowserRouter as Router } from 'react-router-dom'


function Contact() {
  return (
    <div className="App">
      <Router>
      <Navigation></Navigation>
      </Router>
      <header className="App-header">
        <p>
          Contact Me
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

export default Contact;