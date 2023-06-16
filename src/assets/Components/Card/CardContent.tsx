import * as React from "react";
import { motion } from "framer-motion";
import '../../../Card.css';

interface ContentProps {
  innerText: string
}

export const CardContent: React.FC<ContentProps> = React.memo(({innerText}) => {
  return (
    <motion.div
      className="content-container"
      style={{ transformOrigin: "top left", width: 'auto'}}
    >
      <p> 
      {innerText}
      </p>
    </motion.div>
  );
});