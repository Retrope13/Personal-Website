import './contacts.css';
import { TextDiv } from './App';
import linkedIn from './assets/imgs/LinkedIn.png';
import phone from './assets/imgs/Phone.png';
import github from './assets/imgs/github.png';
import email from './assets/imgs/Contact_Icon.png';
import {motion, useCycle} from 'framer-motion';
import { useRef} from 'react';
import { useDimensions} from "./assets/Components/use-dimensions";
import {Navigation} from './assets/Components/Navigation';
import { MenuToggle } from './assets/Components/MenuToggle';
import styled from 'styled-components';
import React from 'react';




const Head = styled.h1`
  color: #FFFFFF;
  margin-top: 0vh;
  font-family: Bavista;
  font-size: 10vh;
  background-color: #00000000;
  border-radius: 5px;
  height: auto;
  `

const Intro = styled.h2`
  color: #fff;
  margin: 8px 0;
  margin-top: 1vh;
  font-family: "Alba";
  font-size: 3.2vh;
  margin-left: 5vw;
`

const Icons = styled.img`
  width: 5vw;
  height: 9vh;
  display: inline-flex;
  margin-top: 1vh;
  margin-bottom: 1vh
`

const ContactText = styled.h2`
  color: #fff;
  margin: 8px 0;
  margin-top: 1vh;
  font-family: "Alba";
  font-size: 3.2vh;
  margin-left: 0vw;
  display: inline-flex;
  align-items: 'center;
  vertical-align: middle;
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

function Contact() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const height = useDimensions(containerRef).current.height;

  return (
    <div className="App">
      <title>Contact Me</title>
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
            <Head>Connect with me</Head>
            <Intro>Here are a few ways to get in touch with me!</Intro>

            <TextDiv style={{width: '30vw', marginLeft: '15vw', alignItems: 'center', display: 'inline-block'}}>
              <Icons src={phone} style={{height: '7vh', width: '4vw'}} alt="An all white icon of a handheld phone"/>
              <ContactText>fdsafdsa</ContactText>
            </TextDiv >

            <a href='mailto:sammckay31@gmail.com?subject=In%20Regards%20To%20Your%20Website'>
            <TextDiv style={{width: '30vw', marginLeft: '2vw', marginTop:'7vh', alignItems: 'center', display: 'inline-block'}}>
            <Icons src={email} style={{height: '8vh', width: '5vw'}} alt="An all white, thin lined icon of an envelope rounded on the sides"/>
            </TextDiv>
            </a>

            <a href='https://github.com/Retrope13' target='_blank'>
            <TextDiv style={{width: '30vw', marginLeft: '15vw', marginTop: '7vh', alignItems: 'center', display: 'inline-block'}}>
            <Icons src={github} alt="An all white icon version of the GitHub logo"/>
            </TextDiv>
            </a>

            <a href='https://www.linkedin.com/in/sam-mckay13/' target='_blank'>
            <TextDiv style={{width: '30vw', marginLeft: '2vw', marginTop: '7vh', alignItems: 'center', display: 'inline-block'}}>
            <Icons src={linkedIn} alt="An all white icon version of the LinkedIn logo"/>
            </TextDiv>
            </a>


          </motion.div>
      </body>
    </div>
  );
}

export default Contact;
