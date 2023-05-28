import React from 'react';
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="container">
      <div className='firstDiv'><a>Home</a></div>
      <div><a>Projects</a></div>
      <div><a>Contact Me</a></div>
    </nav>
  );
}

export default NavBar;