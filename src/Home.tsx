import './Home.css';
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

export const TextDiv = styled.div`
  border: .15vw solid #FFFFFF;
  border-radius: 2vw;
  height: auto;
  background-color: #1b2636;
  justify-content: center;
  align-items: center;
  width: 70%;
  padding-left: 1vw;
  margin-left: 27vw;
  margin-bottom: 3vh;
`

const Para = styled.p`
  font-family: Alexandria;
  font-size: 2vh;
  color: #FFFFFF;
  display: flex-box;
  align-items: flex-start;
  width: auto;
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

function Home() {
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
              <Navigation/>
              </div>
            <MenuToggle toggle={isOpen} onClick={toggleOpen}/>
          </motion.nav>
          </div>
        <motion.div 
        transition={{duration: 1}} 
        animate={{x: isOpen ? 50 : -150}} 
        className="content">
          <Head>Sam McKay</Head>
          <div className='image-container'>
           <img src={MyPhoto} alt="Photo of me at Meow Wolf!"/> {/*You can put a div behind the image to give it some depth*/}
          </div>
      <TextDiv style={{ marginTop: '-59vh', paddingTop: '3vh', display: 'flex'}}>      
          <TextHead style={{marginBottom: '8vh', whiteSpace: 'nowrap', marginTop: '-17vh', marginLeft: '-3vw'}} className='bio-heading'>A bit about me</TextHead>
        <div className='bio-container'>
        <Para style={{width: '50vw'}}>
        Welcome to my website! I am Sam McKay, a 22-year-old college graduate with a degree in Computer Science from CSU! 
        I love user experience/user interface design, and website development focused on disability-driven development, so this website was a way to sharpen my tool set.
        I pursued a degree in computer science because of the potential it has proven to have as a tool to help people and the creative liberties that it affords developers.
        </Para>
          </div>
          </TextDiv>
        <TextDiv>
       <div className="CSU-heading">
          <TextHead style={{marginTop: '-22vh'}}>My time at CSU</TextHead>
       </div>

       <div className='CSU-container'>
          <Para style={{width: '99%'}}>While enrolled at CSU, I had the opportunity to work on several incredible projects, which you can see on the projects page of this website.
           Within many of these projects, I took on a leadership role and gained a firm grasp of various languages, libraries, and concepts, which have greatly assisted me in my journey as a developer.
            <ul className='Languages'>
              <li className='ulTitleL'>Languages:</li>
              <li>Javascript,</li>
              <li>Java,</li>
              <li>C,</li>
              <li>C++,</li>
              <li>Python,</li>
              <li>HTML,</li>
              <li>PHP,</li>
              <li>Typescript,</li>
              <li>R</li>
              </ul>


              <ul className='Concepts'>
              <li className='ulTitleC'>Concepts:</li>
              <li>Agile Scrum,</li>
              <li>Test-driven development,</li>
              <li>Object-Oriented design,</li>
              <li>Game design,</li>
              <li>VR development,</li>
              <li>Machine learning,</li>
              <li>Team management,</li>
              <li>Time management,</li>
              <li>Language acquisition</li>
              </ul>
          </Para>
       </div>
          </TextDiv>
        </motion.div>
      </body>
    </div>
  );
}

export default Home;
