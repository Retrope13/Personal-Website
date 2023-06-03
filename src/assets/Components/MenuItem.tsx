import {motion} from 'framer-motion';
import { Link, Route, Routes } from 'react-router-dom';
import React, {useContext} from 'react';
import Home from '../imgs/Home_Icon.png';
import Projects from '../imgs/Projects_Icon.png';
import Contact from '../imgs/Contact_Icon.png';

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

const pages = ['/', '/projects', '/contact'];
const titles = ["Home", "Projects", "Contact Me"];
const icons = [Home, Projects, Contact];

export const MenuItem: React.FC<MenuItemProps> = ({ i }) => {
    function handleClick() {
        window.location.href = pages[i];
    }

    return (
        //if I move the img into the link it makes the icon part of the link, but it resizes the image
        <motion.li 
        variants = {variants}
        whileHover={{scale: 1.1}}
        whileTap = {{scale: 1}} >
        <img src={icons[i]} className="icon-placeholder"/> 
        <motion.a href={pages[i]} onClick={handleClick} className='text-placeholder'>{titles[i]} </motion.a>

        </motion.li>
    );
};