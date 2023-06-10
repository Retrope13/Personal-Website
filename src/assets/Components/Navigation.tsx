import {motion} from 'framer-motion';
import { MenuItem } from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.35}
  },
  closed: {
    transition: {staggerChildren:.1, staggerDirection: -1}
  }
};

export const Navigation = () => (

  <motion.ul variants={variants}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i}/>
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2];