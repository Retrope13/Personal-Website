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

//!!I originally had a lot of styled react elements and then decided to place 
//!!them in the css file so I had more control over them when changing screen sizes

  //*Jenelle's website has the buttons faded, then when you hover on them they saturate and grow.
      //^ maybe I should add a background div to the content so it stands out more?

function Home() {

  const progress = document.getElementById("progressbar1");
  const totalHeight = document.body.scrollHeight - window.innerHeight; 





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
      <img className='headerImg' alt='a stylistic pattern of two rounded lines intersecting eachother on the right side of the screen, The lines are brown, burnt orange, light orange, and a gray cream.' src={headerImg}/>
      <div className="heading_container">
        <img className='headShot' alt="An image of myself wearing a blue sport jacket and a pinstripe blue and white collared shirt. I am standing in front of a headge of bushes." src={Headshot}></img>
        <h1 className='head'>
            Sam McKay
            <br/>
          </h1> 
            <h3 className='subtitle'>
            WEB DEVELOPER AND SOFTWARE ENGINEER
              </h3>
      </div>
      <div className="heading">
        <div className ='hider'>
        </div>
          <div id="scrollpath">  
            <div id="progressbar1"/> 

          </div> 

      </div> 
      <body> 
        <section>
          <h2 className='styledH2'>About Me</h2>
          <p className='content'>
            I'm a recent college graduate with a Bachelor of Science degree in Computer Science from Colorado State University. 
            During my time at CSU I earned a 3.72 GPA, was on the Dean's list, and was an active member of the National Society for Collegiate Scholars. 
            I am most passionate about web development and design but more recently I have been taking an interest in offensive cybersecurity and game development.
            </p>
              <h2 className='styledH2'>Projects</h2><a href="https://github.com/Retrope13" target='_blank' rel="noreferrer noopener"><img className='icons' src={github} alt="The Github logo done in a white, minimalistic style with a brown background."/></a> {/* I might also want to use framer motion to make the button hover effect look cooler */}
            <p className='content'>
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
          </p>

          <h2 className='styledH2'>Resume</h2><a href={Resume} rel="noreferrer noopener" target="_blank"><img className='icons' alt="A download icon with an arrow pointing downward into a shallow receptical. It is in a white, minimalistic style with a brown background." src={Download}/></a>
          <p className='content'> 
            <iframe title='resume viewer' src={Resume}></iframe>
          </p> 

          <h2 id='contactH2'>Contact Me</h2>
          <p  className="content" id="contactContent">Contact me through Github, Email, or LinkedIn!</p>   
          <div id='contactDiv'>
          <a href="https://github.com/Retrope13" target='_blank' rel="noreferrer noopener"><img className='icons' id="bottomIcons" alt="An icon of the github logo. It is in a white, minimalistic style with a brown background." src={github}/></a>
          <a href="mailto:mckaypable@gmail.com" target='_blank' rel="noreferrer noopener"><img className='icons' id="bottomIcons" alt="An icon of an envelope. It is in a white, minimalistic style with a brown background." src={email}/></a>
          <a href="https://www.linkedin.com/in/sam-mckay13/" target='_blank' rel="noreferrer noopener"><img className='icons' id="bottomIcons" alt="An icon of the LinkedIn logo. It is in a white minimalistic style with a brown background." src={LinkedIn}/></a>
          </div>
        <img id="footerImg" alt='A stylistic rounded line that curves downward and to the right off of the screen. The lines are brown, burnt orange, light orange, and a gray cream. ' src={footerImg}/> 
        </section>
      </body>
    </div>
  );
}

export default Home;
