import * as React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { motion } from "framer-motion";

interface ContentProps {
  innerText: string
  link: string
}

export const CardContent: React.FC<ContentProps> = React.memo(({innerText, link}) => {
  return (
    <motion.div
      className="content-container"
      style={{ transformOrigin: "top left" }}
    >
      <a href={link}/>
      <p> 
      {innerText}
      </p>
    </motion.div>
  );
});