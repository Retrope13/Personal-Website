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

const pages = ["../../", "../../Projects", "../../Contact"]
const titles = ["Home", "Projects", "Contact Me"]

export const MenuItem: React.FC<MenuItemProps> = ({ i }) => {
    return (
        //if I move the img into the link it makes the icon part of the link, but it resizes the image
        <motion.li 
        variants = {variants}
        whileHover={{scale: 1.1}}
        whileTap = {{scale: 1}} >
        <img src={Home} className="icon-placeholder"/> 
        <Link to={pages[i]} className='text-placeholder'> 
        {titles[i]} </Link>
        </motion.li>
    );
};