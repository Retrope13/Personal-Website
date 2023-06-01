import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import temp from './assets/imgs/images.jpg';
import {motion, sync, useCycle} from 'framer-motion';
import {useRef} from 'react';
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
  background-color: #27374D;
  border-radius: 5px;
  `

const BioHead = styled.h1`
  color: #FFFFFF;
  margin-top: -15vh;
  font-family: Bavista;
  font-size: 8vh;
  background-color: #27374D;
  border-radius: 5px;
`

const Para = styled.p`
  font-family: Alexandria;
  font-size: 3vh;
  color: #FFFFFF;
  display: flex;
  align-items: flex-start;
  margin-top: -10vh;
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

  return (
    <div className="App">
      <body>
        <div className='top'>
          <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          >
            <motion.div className="background" variants={sidebar}/>
            <Router>
              {/*This preserves the animation while also preventing users from clicking on links when the nav is closed*/}
              <div style={{pointerEvents: isOpen ? 'all' : 'none'}}> 
              <Navigation/>
              </div>
            </Router>
            <MenuToggle toggle={isOpen} onClick={toggleOpen}/>
          </motion.nav>
          </div>
        <div className="content">
          <Head>Chez McKay</Head>
        <div className="image-container">
      <img src={temp} alt="temporary photo"/>
        </div>
        <div>
          <BioHead className='bio-heading'>A bit about me</BioHead>
        </div>
        <div className="bio-container">
        <Para>
          Edit App.tsx and save to reload.
        </Para>
        </div>
        </div>
      </body>
    </div>
  );
}

export default App;
