import * as React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { motion } from "framer-motion";

interface ContentProps {
  innerText: string
}

export const CardContent: React.FC<ContentProps> = React.memo(({innerText}) => {
  return (
    <motion.div
      className="content-container"
      style={{ transformOrigin: "top left"}}
    >
      <p style={{whiteSpace: 'pre-line', marginLeft: '2vw'}}> 
      {innerText}
      </p>
    </motion.div>
  );
});