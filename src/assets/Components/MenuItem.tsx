import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import React, {useContext} from 'react';
import Home from '../imgs/Home_Icon.png';

interface MenuItemProps {
    i: number;
}

const variants = {
    open: {
        y: 0,
        opacity: 1, 
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },

    closed: {
        y: 50,
        opacity: 0, 
        transition: {
            y: {stiffness: 1000}
        }
    }

};

const pages = ["/", "/Projects", "/Contact"]
const titles = ["Home", "Projects", "Contact Me"]

export const MenuItem: React.FC<MenuItemProps> = ({ i }) => {
    const style = { border: `2px solid #3AAFA9`, decoration: "none"};
    return (
        <motion.li 
        variants = {variants}
        whileHover={{scale: 1.1}}
        whileTap = {{scale: 0.95}} >
        <img src={Home} className="icon-placeholder" style={style}/>
        <Link to={pages[i]} className='text-placeholder' style={style}> {titles[i]} </Link>
        </motion.li>
    );
};