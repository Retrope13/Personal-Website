import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import MyPhoto from './assets/imgs/SamMcKayPic.jpg';
import {motion, sync, useCycle} from 'framer-motion';
import {useEffect, useRef} from 'react';
import {Navigation} from './assets/Components/Navigation';
import { useDimensions} from "./assets/Components/use-dimensions";
import { MenuToggle } from './assets/Components/MenuToggle';
import React, {useContext} from 'react';
import styled from 'styled-components';


const Head = styled.h1`
  color: #FFFFFF;
  margin-top: 0vh;
  font-family: Bavista;
  font-size: 10vh;
  background-color: #00000000;
  border-radius: 5px;
  height: auto;
  `

const TextHead = styled.h1`
  color: #FFFFFF;
  font-family: Bavista;
  font-size: 8vh;
  background-color: #00000000;
  height: 10vh;
`

const TextDiv = styled.div`
  border: .15vw solid #FFFFFF;
  border-radius: 2vw;
  height: auto;
  background-color: #1b2636;
  justify-content: center;
  align-items: center;
  width: 55vw;
  padding-left: 2vw;
  margin-left: 25vw;
  margin-bottom: 3vh;
`

const BioTextDiv = styled.div`
  border: .15vw solid #FFFFFF;
  border-radius: 2vw;
  background-color: #1b2636;
  justify-content: center;
  width: 55vw;
  padding-left: 2vw;
  margin-left: 25vw;
  margin-bottom: 3vh;
  margin-top: -59vh;
  padding-top: 3vh;
  display: flex;
`

const Para = styled.p`
  font-family: Alexandria;
  font-size: 2.2vh;
  color: #FFFFFF;
  display: flex-box;
  align-items: flex-start;
  width: 55vw;
  height: 19vh
`

const AchievementsHead = styled.h1`
  color: #FFFFFF;
  margin-top: -22vh;
  font-family: Bavista;
  font-size: 8vh;
  background-color: #00000000;
  height: 10vh;
`

const sidebar ={
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transitions: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

function App() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const height = useDimensions(containerRef).current.height;
  const [isLoaded, toggleLoaded] = useCycle(false, true);

  return (
    <div className="App">
      <title>Home</title>
      <body>
        <div className='top'>
          <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          >
            <motion.div className="background" variants={sidebar}/>
              {/*This preserves the animation while also preventing users from clicking on links when the nav is closed*/}
              <div style={{pointerEvents: isOpen ? 'all' : 'none'}}> 
              <Router>
              <Navigation/>
              </Router>
              </div>
            <MenuToggle toggle={isOpen} onClick={toggleOpen}/>
          </motion.nav>
          </div>
        <motion.div 
        transition={{duration: 1}} 
        animate={{x: isOpen ? 100 : -100}} 
        className="content">

          
        </motion.div>
      </body>
    </div>
  );
}

export default App;
