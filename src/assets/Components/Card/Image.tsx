import * as React from "react";
import { motion } from "framer-motion";
import { closeSpring } from "./animations";
import image from "../../imgs/images.jpg";

interface ImageProps {
  isSelected: boolean,
}

export const Image: React.FC<ImageProps> = ({
  isSelected,

}) => {
  const cardImageRef = React.useRef(null);

  return (
    <div
      className="card-image-container"
      style={{ transformOrigin: "0 0", zIndex:-1, position: "absolute" }}
    >
      <motion.img
        className="card-image"
        ref={cardImageRef}
        src={image}
        alt=""
        initial={false}
        style={{position: "absolute",
      zIndex: -1}}
      />
  </div>
  );
};
