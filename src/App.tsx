import * as React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import temp from './assets/images.jpg';
import {motion, sync, useCycle} from 'framer-motion';
import {useRef} from 'react';
import {Navigation} from './assets/Components/Navigation';
import { useDimensions} from "./assets/Components/use-dimensions";
import { MenuToggle } from './assets/Components/MenuToggle';

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
    clipPath: "circle(30px at 40px 40px)",
    transitions: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

function App() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const dimensions = useDimensions(containerRef);
  return (
    <div className="App">
      <Router>
      <Navigation></Navigation>
      </Router>
      <body>
        <div className="LeftShoulder">
          <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={dimensions.current.height}
          ref={containerRef}
          >
            <motion.div className="background" variants={sidebar}/>
            <Navigation/>
            <MenuToggle toggle={false}/>
          </motion.nav>
        </div>
        <div className="image-container">
      <img src={temp} alt="temporary photo"/>
        </div>
        <div className="text-container">
        <p>
          Edit <code>App.tsx</code> and save to reload.
        </p>
        </div>
        <div></div>
      </body>
    </div>
  );
}

export default App;
