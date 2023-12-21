import './Home.css';

import Headshot from './assets/imgs/SamMcKayPic.png';
import headerImg from './assets/imgs/retrolineHeading.png'
import footerImg from './assets/imgs/footerImg.png'
import github from './assets/imgs/github.png'
import LinkedIn from './assets/imgs/LinkedIn.png';
import email from './assets/imgs/email.png';
import Resume from './assets/imgs/Resume.pdf'; 
import Download from './assets/imgs/Download.png'; 

import styled from 'styled-components';
import { useEffect, useState } from 'react';

const HeadShot = styled.img`
  position: absolute;
  z-index: 2;
  border-radius: 20px;
  border: 7px solid #DC9954;
  left: 80px;
  top: 45px;
  width: 600px;
`

const Head = styled.h1`
  position: absolute;
  z-index: 2;
  color: #ce7052; 
  top: 120px;
  left: 750px;
  font-family: Alba;
  font-size: 150px;
  background-color: #00000000;
  white-space: nowrap;
  text-shadow: 
    7px 7px 0 #dc9954, /*light orange*/
    14px 14px 3px #6F5345; /*cream*/
  `

const Subtitle = styled.h3`
  position: absolute;
  z-index: 2;
  color: #6F5345; 
  top: 400px;
  left: 750px;
  font-family: Roca2;
  font-size: 30px;
  white-space: nowrap;
` //~Change the font family for this 

const StyledH2 = styled.h2`
  position: relative;
  display: inline;
  margin-right: 50px;
  z-index: 1;
  color: #ce7052; 
  top: 30px; 
  font-family: Alba;
  font-size: 100px;
  background-color: #00000000;
  text-shadow: 
    5px 5px 0 #dc9954, /*light orange*/
    10px 10px 3px #6F5345; /*cream*/
    `

  //*Jenelle's website has the buttons faded, then when you hover on them they saturate and grow.
  const Icon = styled.img`
    position: relative;
    width: 100px;
    height: 100px;
    background-color: #6F5345;
    border-radius: 20px;
    top: 50px;
    z-index: 3;  
    overflow: none; 
    cursor: pointer;


    //! I might want to change this to an angled drop shadown but idk
    box-shadow:inset 0px 0px 0px 0px rgba(255,255,255,.5),
    0px 0px 5px 2px rgba(0,0,0,1),
    10px 10px 10px 0px rgba(0,0,0,.1);

    &:active,
    &:focus {
      box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
      7px 7px 20px 0px rgba(0,0,0,.1),
      4px 4px 5px 0px rgba(0,0,0,.1);
      transform: scale(.95); //*I might want to change this
    }
  `
      //^ maybe I should add a background div to the content so it stands out more?
  const Content = styled.p`
    position: relative;
    font-family: Roca2;
    font-size: 30px;
    left: 70px;
    width: 1350px; 
    color: #7C331D;
    /*washed red: #D45456, aqua blue: #289C9D, */ 
  `
  const ContactH2 = styled.h2`
    position: relative;
    display: flex;
    justify-content: center;
    width: 1920px;
    top: -30px;
    left: -60px;
    z-index: 1;
    color: #ce7052; 
    font-family: Alba;
    font-size: 100px;
    background-color: #00000000;
    text-shadow: 
      5px 5px 0 #dc9954, /*light orange*/
      10px 10px 3px #6F5345; /*cream*/
  `

function Home() {

  const progress = document.getElementById("progressbar1");
  const totalHeight = document.body.scrollHeight - window.innerHeight; 


  //^ the styling for the icons that are placed at the bottom of the page
  const BottomIcons = {  
    display: "inline-block",
    width: '115px',
    height: '115px',
    top: "-20px"
  }

  //^ the styling for the sentence about contacts at the bottom.
  const ContactContent = {
    display: "flex",
    justifyContent: "center",
    width: "1920px",
    position: "relative",
    left: "-60px",
    top: "-120px",
  } as React.CSSProperties;

  //^The icon for my resume
  const resumeIcon = {
    width: '115px',
    height: '115px'
  }



// ^ Create the function that calculates the height of the progress bar
    window.onscroll = function(){
      let progressHeight;
      if (totalHeight) {
        progressHeight = ((window.scrollY * .7) / totalHeight) * 100;  
        console.log(window.scrollY*1.5);
        console.log(window.innerHeight);

      }
      if (progress) { 
        progress.style.height = progressHeight  + "vh";
        progress.style.top = (0 + 'px'); 
      }

}

  return (
    
    
    <div className="App">
      <div className="MyComponent"/>
      <title>Home</title>
      <div id="heading_container">
        <HeadShot alt="An image of myself wearing a blue sport jacket and a pinstripe blue and white collared shirt. I am standing in front of a headge of bushes." src={Headshot}></HeadShot>
        <Head>
            Sam McKay
            <br/>
          </Head> 
            <Subtitle>
            WEB DEVELOPER AND SOFTWARE ENGINEER
              </Subtitle>
      </div>
      <img id='headerImg' alt='a stylistic pattern of two rounded lines intersecting eachother on the right side of the screen, The lines are brown, burnt orange, light orange, and a gray cream.' src={headerImg}/>
      <div className="Heading">
        <div className ='hider'>
        </div>
          <div id="scrollpath">  
            <div id="progressbar1"/> 

          </div> 

      </div> 
      <body> 
        <section>
          <StyledH2>About Me</StyledH2>
          <Content>
            I'm a recent college graduate with a Bachelor of Science degree in Computer Science from Colorado State University. 
            During my time at CSU I earned a 3.72 GPA, was on the Dean's list, and was an active member of the National Society for Collegiate Scholars. 
            I am most passionate about web development and design but more recently I have been taking an interest in offensive cybersecurity and game development.
            </Content>
              <StyledH2>Projects</StyledH2><a href="https://github.com/Retrope13" target='_blank' rel="noreferrer noopener"><Icon src={github} alt="The Github logo done in a white, minimalistic style with a brown background."/></a> {/* I might also want to use framer motion to make the button hover effect look cooler */}
            <Content>
            I have worked on several projects during my time at CSU but I have also created many personal projects. All of the code for my projects can be found on Github. The projects I am most proud of are: "Gone Fishing", and "Bidder, Faster, Stronger".
            <br/><br/>
            In the 'Gone Fishing' project, I designed a frontend featuring three cards, each displaying a cartoon frog image created using Inkscape. 
            Simultaneously, I developed a backend system that continually monitored emails sent to a specific address. When the subject of an email contained
             a family member's name, their respective card would flip, indicating their absence from home.
            <br/>
            Subsequently, I extended the functionality by creating an Amazon Alexa skill to complement the application. Leveraging the Alexa developer kit and AWS Lambda,
             I established communication with a Bitbucket repository. The backend of the project was then modified to periodically check the Bitbucket repository for new requests to flip a card.
            <br/>
            This personal project was a significant learning experience, and I am pleased that I challenged myself in this innovative way.
            <br/><br/>
            The 'Bidder, Faster, Stronger' project was developed as part of Computer Science 458, Blockchain Principles and Applications, a senior-level CS course offered at CSU.
             The primary objective of this project was to create a smart contract deployable on the Ethereum blockchain, leveraging its decentralized nature for an engaging application.
             <br/>
             The project commenced with the development of a single-page website resembling an auction platform. The auctioned items, represented as minted NFTs, included animals, weapons,
              or armor. A brief description on the website explained that every hour, precisely on the hour, the auctioned item would transition to a new NFT.
            <br/>
            Subsequently, a Solidity smart contract was crafted to enable multiple participants on the Ethereum blockchain to engage in a competitive bidding war. At the end of each hour,
             I would assess the highest bid, transfer the highest bid to my wallet, and the participant with the highest bid would be awarded the corresponding NFT.
             <br/>
             This project provided an invaluable learning experience about blockchain technology, and I utilized Ganache as the testing system. I take great pride in the successful completion of this project.
          </Content>

          <StyledH2>Resume</StyledH2> <a href={Resume} rel="noreferrer noopener" target="_blank">  <Icon alt="A download icon with an arrow pointing downward into a shallow receptical. It is in a white, minimalistic style with a brown background." style={resumeIcon} src={Download}/> </a>
          <Content> 
            <iframe title='resume viewer' src={Resume}></iframe>
          </Content> 

          <ContactH2>Contact Me</ContactH2>
            <Content style={ContactContent}>Feel free to contact me through Github, Email, or LinkedIn!</Content>   
          <div id='contactDiv'>
          <a href="https://github.com/Retrope13" target='_blank' rel="noreferrer noopener"><Icon alt="An icon of the github logo. It is in a white, minimalistic style with a brown background." src={github} style={BottomIcons}/> </a>
          <a href="mailto:mckaypable@gmail.com" target='_blank' rel="noreferrer noopener"><Icon alt="An icon of an envelope. It is in a white, minimalistic style with a brown background." src={email} style={BottomIcons}/> </a>
          <a href="https://www.linkedin.com/in/sam-mckay13/" target='_blank' rel="noreferrer noopener"><Icon alt="An icon of the LinkedIn logo. It is in a white minimalistic style with a brown background." src={LinkedIn} style={BottomIcons}/> </a>
          </div>
        <img id="footerImg" alt='A stylistic rounded line that curves downward and to the right off of the screen. The lines are brown, burnt orange, light orange, and a gray cream. ' src={footerImg}/> 
        </section>
      </body>
    </div>
  );
}

export default Home;
