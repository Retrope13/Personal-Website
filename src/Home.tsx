import './Home.css';
import MyPhoto from './assets/imgs/SamMcKayPic.jpg';
import {motion, useCycle} from 'framer-motion';
import {useEffect, useRef, useState} from 'react';
import {Navigation} from './assets/Components/Navigation';
import { useDimensions} from "./assets/Components/use-dimensions";
import { MenuToggle } from './assets/Components/MenuToggle';
import styled from 'styled-components';


const Head = styled.h1`
  color: #FFFFFF;
  margin-top: 0vh;
  min-width: 100px;
  font-family: Bavista;
  font-size: 100px;
  background-color: #00000000;
  border-radius: 5px;
  height: auto;
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
    clipPath: "circle(0px at 40px 40px)",
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
  const isMobile = window.innerWidth < 1000;
  console.log(window.innerWidth);
  let variant = {};

    if (!isMobile) {
      variant = {
        animate: {
          x: 200
        }
      };
    } else {
      variant = {
        animate: {
          y: 250
        }
      };
    }


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
        variants = {variant}
        whileInView={isOpen ? "animate" : "none"}
        className="content">
          <Head>Sam McKay</Head>
          <div className='image-container'>
           <img src={MyPhoto} alt="Me at Meow Wolf sitting in a semi-circular green chair with twisting tubes behind me!"/> {/*You can put a div behind the image to give it some depth*/}
          </div>
      <div className='TextDiv'>
          <h1 className='TextHead' id='bioHead'>A bit about me</h1>
        <div className='bio-container'>
        <div className='Para'>
        Welcome to my website! I am Sam McKay, a 22-year-old college graduate with a degree in Computer Science from CSU! 
        I love user experience/user interface design, and website development focused on accessibility so this website was a way to sharpen some of the tools in my set and learn some things too!
        I pursued a degree in computer science because of the potential it has as a tool to help people and the creative liberties that it affords developers.
        </div>
          </div>
          </div>
        <div className='TextDiv'>
       <div className="CSU-heading">
          <h1 className='TextHead' style={{marginTop: '-22vh'}}>My time at CSU</h1>
       </div>

       <div className='CSU-container'>
          <div className='Para' >While enrolled at CSU, I earned a 3.71 cumulative GPA, my Bachelor's in Computer Science, and had the opportunity to work on several projects which you can see on the projects page of this website.
           Within many of these projects, I took on a leadership role and gained a firm grasp of various languages, libraries, and concepts, which have greatly assisted me in my journey as a developer.
          {"\n"}

            <ul className='Languages'>
              <li className='ulTitleL' style={{borderBottom: '4px solid #FFFFFF'}} >Languages:</li>
              <li>&#x25CF; Javascript</li>
              <li>&#x25CF; Java</li>
              <li>&#x25CF; C</li>
              <li>&#x25CF; C++</li>
              <li>&#x25CF; Python</li>
              <li>&#x25CF; HTML</li>
              <li>&#x25CF; PHP</li>
              <li>&#x25CF; Typescript</li>
              <li>&#x25CF; R</li>
              </ul>


              <ul className='Concepts'>
              <li className='ulTitleC' style={{borderBottom: '4px solid #FFFFFF'}}>Concepts:</li>
              <li>&#x25CF; Agile Scrum</li>
              <li>&#x25CF; Test-driven development</li>
              <li>&#x25CF; Object-Oriented design</li>
              <li>&#x25CF; Game design</li>
              <li>&#x25CF; VR development</li>
              <li>&#x25CF; Machine Learning</li>
              <li>&#x25CF; Team management</li>
              <li>&#x25CF; Time management</li>
              <li>&#x25CF; Language acquisition</li>
              </ul>
          </div>
       </div>
          </div>
          </motion.div>
      </body>
    </div>
  );
}

export default Home;
