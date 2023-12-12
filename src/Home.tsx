import './Home.css';
import MyPhoto from './assets/imgs/SamMcKayPic.jpg';
import headerImg from './assets/imgs/retrolineHeading.png'
import footerImg from './assets/imgs/footerImg.png'
import github from './assets/imgs/github.png'
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const Head = styled.h1`
  position: absolute;
  z-index: 1;
  color: #ce7052; 
  top: 3vh;
  left: 3vw;
  font-family: Alba;
  font-size: 8vw;
  background-color: #00000000;
  text-shadow: 
    6px 6px 0 #dc9954, /*light orange*/
    10px 10px .2vw #6F5345; /*cream*/
  `

const StyledH2 = styled.h2`
  position: relative;
  display: inline;
  margin-right: 2vw;
  z-index: 1;
  color: #ce7052; 
  top: 3vh;
  font-family: Alba;
  font-size: 5vw;
  background-color: #00000000;
  text-shadow: 
    6px 6px 0 #dc9954, /*light orange*/
    10px 10px .2vw #6F5345; /*cream*/
  `

  const Content = styled.p`
    position: relative;
    font-family: Roca2;
    font-size: 1.4vw;
    left: 3vw;
    color: #7C331D;
    /*washed red: #D45456, aqua blue: #289C9D, */
  `

  const Icon = styled.img`
    position: relative;
    width: 7vw;
    height: 11.75vh;
    background-color: #6F5345;
    border-radius: 1vw;
    top: 4vh;

    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);

    &:hover,
    &:focus {
      cursor: pointer;
      box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
      7px 7px 20px 0px rgba(0,0,0,.1),
      4px 4px 5px 0px rgba(0,0,0,.1);
      transform: scale(1.1)
    }
  `

function Home() {
  const progress = document.getElementById("progressbar1")
  let totalHeight = document.body.scrollHeight - window.innerHeight;  
  let startingTop = 0
  if (progress) { 
    progress.style.top = startingTop + 'vh'

  }
  window.onscroll = function(){
    let progressHeight = ((window.scrollY * .5) / totalHeight) * 100;
    console.log(window.scrollY*1.5)
    console.log(window.innerHeight)
    if (progress) {
      progress.style.height = progressHeight  + "vh"   
      progress.style.top = (0 + 'vh') 
    }
  }

  return (
    
    <div className="App">
      <title>Home</title>
      <img id='headerImg' src={headerImg}/>
      <div className="Heading">
        <div className ='hider'>
        </div>
          <div id="scrollpath">  
            <div id="progressbar1"/> 
          </div> 

      </div> 
      <body> 
        <Head>
          Sam McKay
        </Head>
        <section>
          <StyledH2>About me</StyledH2>
          <Content>
            I'm a recent college graduate with a Bachelor of Science degree in Computer Science from Colorado State University. 
            During my time at CSU I earned a 3.72 GPA, was on the Dean's list, and was an active member of the National Society for Collegiate Scholars. 
            I am most passionate about web development and design but more recently I have been taking an interest in offensive cybersecurity and game development.
            </Content>
            <div id="h2Container">
              <StyledH2>Projects</StyledH2><Icon src={github}/> 
              {/* I need to add the <a> to make this actually take you to github^^ */}

            </div>
            <Content>
            I have worked on several projects during my time at CSU but I have also created many personal projects. All of the code for the projects can be found on Github.
          </Content>
        <img id="footerImg" src={footerImg}/>
        </section>
      </body>
    </div>
  );
}

export default Home;
