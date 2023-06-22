import './Projects.css';
import {motion, useCycle} from 'framer-motion';
import { useRef} from 'react';
import {Navigation} from './assets/Components/Navigation';
import { useDimensions} from "./assets/Components/use-dimensions";
import { MenuToggle } from './assets/Components/MenuToggle';
import { List } from './CardList';


const sidebar ={
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at 40px 40px)",
    transitions: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

function Projects() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const height = useDimensions(containerRef).current.height;
  const isMobile = window.innerWidth < 1000;
  console.log(window.innerWidth);
  let variant = {};

    if (!isMobile) {
      variant = {
        animate: {
          x: 0
        }
      };
    } else {
      variant = {
        animate: {
          y: 250
        }
      };
    }

  return (
    <div className="App">
      <title>Projects</title>
      <body className='Projects'>
        <div className='top'>
          <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          >
            <motion.div className="background" variants={sidebar}/>
              {/*This preserves the animation while also preventing users from clicking on links when the nav is closed*/}
              <div style={{pointerEvents: isOpen ? 'all' : 'none'}}> 
              <Navigation/>
              </div>
            <MenuToggle toggle={isOpen} onClick={toggleOpen}/>
          </motion.nav>
          </div>
          <motion.div
            transition={{duration: 1}} 
            variants = {variant}
            whileInView={isOpen ? "animate" : "none"}
            className="content">
          <h1 className='Head'>My Projects</h1>
            <List history={{}}/>
            </motion.div>
      </body>
    </div>
  );
}

export default Projects;
