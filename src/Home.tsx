import './Home.css';
import MyPhoto from './assets/imgs/SamMcKayPic.jpg';
import {motion, useCycle} from 'framer-motion';
import {useRef} from 'react';
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

const TextHead = styled.h1`
  color: #FFFFFF;
  font-family: Bavista;
  font-size: 8vh;
  background-color: #00000000;
  height: 100px;
`

const TextDiv = styled.div`
  border: .15vw solid #FFFFFF;
  border-radius: 2vw;
  height: 400px;
  display: inline-block;
  background-color: #1b2636;
  justify-content: center;
  align-items: flex-start;
  width: 60vw;
  padding-left: 1vw;
  margin-left: 27vw;
  margin-bottom: 3vh;
`

const Para = styled.p`
  font-family: Alexandria;
  font-size: 20px;
  color: #FFFFFF;
  align-items: flex-start;
  width: 99%;
  height: 19vh;
  line-height: auto;
  white-space: pre-line;
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
           <img src={MyPhoto} alt="Me at Meow Wolf sitting in a semi-circular green chair with twisting tubes behind me!"/> {/*You can put a div behind the image to give it some depth*/}
          </div>
      <TextDiv>      
          <TextHead className='bio-heading'>A bit about me</TextHead>
        <div className='bio-container'>
        <Para style={{width: '99%'}}>
        Welcome to my website! I am Sam McKay, a 22-year-old college graduate with a degree in Computer Science from CSU! 
        I love user experience/user interface design, and website development focused on accessibility so this website was a way to sharpen some of the tools in my set and learn some things too!
        I pursued a degree in computer science because of the potential it has as a tool to help people and the creative liberties that it affords developers.
        </Para>
          </div>
          </TextDiv>
        <TextDiv className='CSU-div' style={{height: '750px'}}>
       <div className="CSU-heading">
          <TextHead style={{marginTop: '-22vh'}}>My time at CSU</TextHead>
       </div>

       <div className='CSU-container'>
          <Para >While enrolled at CSU, I earned a 3.71 cumulative GPA, my Bachelor's in Computer Science, and had the opportunity to work on several projects which you can see on the projects page of this website.
           Within many of these projects, I took on a leadership role and gained a firm grasp of various languages, libraries, and concepts, which have greatly assisted me in my journey as a developer.
          {"\n"}

            <ul className='Languages'>
              <li className='ulTitleL'>Languages:</li>
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
              <li className='ulTitleC'>Concepts:</li>
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
          </Para>
       </div>
          </TextDiv>
        </motion.div>
      </body>
    </div>
  );
}

export default Home;
