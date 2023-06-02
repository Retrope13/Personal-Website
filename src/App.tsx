import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import temp from './assets/imgs/images.jpg';
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
  background-color: #27374D;
  border-radius: 5px;
  height: auto;
  `

const BioHead = styled.h1`
  color: #FFFFFF;
  margin-top: -28vh;
  font-family: Bavista;
  font-size: 8vh;
  background-color: #27374D;
  border-radius: 5px;
  height: 10vh;
`

const CSUHead = styled.h1`
  color: #FFFFFF;
  margin-top: -20vh;
  font-family: Bavista;
  font-size: 8vh;
  background-color: #1b2636;
  height: 10vh;
  border-radius: 5px;
  border: 2px solid #FFFFFF;
`

const TextDiv = styled.div`
  border: 2px solid #FFFFFF;
  border-radius: 5px;
  height: 40vh;
  background-color: #1b2636;
  justify-content: space-around;
  align-items: center;
`

const Para = styled.p`
  font-family: Alexandria;
  font-size: 2.5vh;
  color: #FFFFFF;
  display: flex;
  align-items: flex-start;
  width: 53vw;
  height: 20vh
`

const Achievements = styled.h1`
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
        <motion.div 
        transition={{duration: 1}} 
        animate={{x: isOpen ? 100 : -100}} 
        className="content">
          <Head>Chez McKay</Head>
          </motion.div>
        <motion.div
        transition={{duration: 1}} 
        animate={{x: isOpen ? 100 : -100}} 
        className='content'>
        <div className="image-container">
      <img src={temp} alt="temporary photo"/>
      {/*I had the idea that when the page loads you could have the text slide in from the right side of the screen and land into a div with a dark background and a white border. This might be pretty hard though */}
        </div>
          <BioHead className='bio-heading'>A bit about me</BioHead>
        <div className='bio-container'>
        <Para>
        Welcome to my website! I am Sam McKay, a 22-year-old college graduate with a degree in Computer Science from CSU! 
        I love user experience/user interface design, and website development focused on disability-driven development, so this website was a way to sharpen my tool set.
        I pursued a degree in computer science because of the potential it has proven to have as a tool to help people and the creative liberties that it affords developers.
        </Para>
          </div>
       <div className="CSU-heading">
          <CSUHead>My time at CSU</CSUHead>
       </div>

       <div className='CSU-container'>
          <Para>While enrolled at CSU I had the opportunity to work on several incredible projects which you can see some of on the projects page of this website.
            Throughout these projects I learned several programming languages such as Javascript, Java, C, C++, Python, HTML, PHP, Typescript, and R. I also became well-versed in concepts such 
            as Agile CMMI, test-driven development, Object-Oriented design, VR development, game design, machine learning, team management, time management, and, most importantly, the process of learning a new programming language.
            {/*It might be a good idea to make the languages and concepts two styled unordered lists sitting shoulder to shoulder. It would probably look cleaner*/}
          </Para>
       </div>
        </motion.div>
      </body>
    </div>
  );
}

export default App;
