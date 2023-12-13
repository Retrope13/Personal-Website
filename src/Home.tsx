import './Home.css';

import Headshot from './assets/imgs/SamMcKayPic.png';
import headerImg from './assets/imgs/retrolineHeading.png'
import footerImg from './assets/imgs/footerImg.png'
import github from './assets/imgs/github.png'
import Download from './assets/imgs/Download.png'

import styled from 'styled-components';
import React, { useRef, useEffect } from 'react';


const Head = styled.h1`
  position: absolute;
  z-index: 1;
  color: #ce7052; 
  top: 10vh;
  left: 39vw;
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
    border-radius: 1.2vw;
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

  const HeadShot = styled.img`
    position: absolute;
    z-index: 2;
    border-radius: 10%;
    border: .5vw solid #DC9954;
    left: 4vw;
    top: 7vh;
    width: 30vw;
  `

function Home() {
  const PDFPath = './assets/img/SamMcKay2023.pdf';
  const progress = document.getElementById("progressbar1")
  let totalHeight = document.body.scrollHeight - window.innerHeight;  

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
      <div className="MyComponent"/>
      <title>Home</title>
      <HeadShot src={Headshot}></HeadShot>
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
          <StyledH2>About Me</StyledH2>
          <Content>
            I'm a recent college graduate with a Bachelor of Science degree in Computer Science from Colorado State University. 
            During my time at CSU I earned a 3.72 GPA, was on the Dean's list, and was an active member of the National Society for Collegiate Scholars. 
            I am most passionate about web development and design but more recently I have been taking an interest in offensive cybersecurity and game development.
            </Content>
              <StyledH2>Projects</StyledH2><Icon src={github}/> {/* I might also want to use framer motion to make the button hover effect look cooler */}
              {/* I need to add the <a> to make this actually take you to github^^ */}
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
            This personal project was a significant learning experience, and I am pleased that I challenged myself in this innovative way."
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

          <StyledH2>Resume</StyledH2> <Icon src={Download}/>
          <Content> 
          </Content> 

          <StyledH2>Contact Me</StyledH2>
          <Content>fdsaf</Content>
        <img id="footerImg" src={footerImg}/>
        </section>
      </body>
    </div>
  );
}

export default Home;
