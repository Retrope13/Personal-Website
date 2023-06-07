import * as React from 'react';
import {MotionValue, motion} from 'framer-motion';
import {closeSpring, openSpring} from './animations'; 
import { Image } from './Image';
import gitIcon from '../../imgs/github.png';
import CSU from '../../imgs/CSU.png';
import { useState, useEffect } from 'react';

interface TitleProps { 
    title: string;
    category: string;
    isSelected: boolean;
    link: string;
}

export const Title: React.FC<TitleProps> = ({ title, category, isSelected, link}) => {
      const [isSchool, setisSchool] = useState(false);
      const x = isSelected ? 30 : 15;
      const y = x;


      useEffect(() => {
        setisSchool(!title.includes("Personal Project"));
      });

    
      return (
        <motion.div
          className="title-container"
          initial={false}
          animate={{ x, y }}
          transition={isSelected ? openSpring : closeSpring}
          transformTemplate={scaleTranslate}
          style={{
            transform: `scale(1, -1) translate(${x}px, ${y}px) translateZ(0)`,
            transformOrigin: "top left",
            originX: 0,
            originY: 0,
            zIndex: 1,
            position: "absolute"
          }}
        >
          <span className="category" style={{zIndex: 1}}>{category}</span>
          <h2 style={{zIndex: 2}}>{title}</h2>
          <a className='repoLink' href={link} target='_blank'>
          <img style={{height: "7vh", width: "4vw", marginTop: "1vh"}} src={gitIcon}/>
          </a>
          {isSchool &&
          <img style={{height: "7vh", width: "4vw", marginTop: "1vh"}} src={CSU}/>
}
        </motion.div>
      );
    };

const scaleTranslate =({x, y, scale}: {x: number; y: number; scale: number}) =>
`scale(${scale}) translate(${x}px, ${y}px) translateZ(0)`;

{/*This ^^ might need to change to be more reactive across device screens */}