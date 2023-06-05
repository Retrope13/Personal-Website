import * as React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { motion } from "framer-motion";

export const CardContent = React.memo(() => {
  return (
    <motion.div
      className="content-container"
      style={{ transformOrigin: "top left" }}
    >
      <p>fjdksalfjdkalfjdlsafjsdlka</p>
    </motion.div>
  );
});