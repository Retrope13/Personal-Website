import './Home.css';
import MyPhoto from './assets/imgs/SamMcKayPic.jpg';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const Head = styled.h1`
  color: #ce7052; 
  margin-top: 0vh;
  font-family: Alba;
  font-size: 100px;
  background-color: #00000000;
  text-shadow: 
    6px 6px 0 #dc9954, /*cream*/
    10px 10px 0 #d3c598; /*Brown*/
  `

function Home() {
  const progress = document.getElementById("progressbar1")
  let totalHeight = document.body.scrollHeight - window.innerHeight;  
  let startingTop = 10
  if (progress) {
    progress.style.top = startingTop + 'vh'

  }
  window.onscroll = function(){
    let progressHeight = (window.scrollY / totalHeight) * 100; 
    if (progress) {
      progress.style.height = progressHeight + "%" 
      progress.style.top = (0 + 'vh') 
      startingTop = startingTop - .5   
    }
  }

  return (
    <div className="App">
      <div className="Heading"> 
          <div className='cream-circle'/>
          <div className='light-orange-circle'/> 
          <div className='orange-circle'/>
          <div className='brown-circle'/>
          <div className='background-circle'/>
      </div>
      <title>Home</title>
      <body> 
        <div id="scrollpath"> 
          <div id="progressbar1"/>
        </div>
          <h2>CreativeScroll Progress Bar</h2> 
        <section>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?

         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?

         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?

         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
          </p>
        </section>
      </body>
    </div>
  );
}

export default Home;
