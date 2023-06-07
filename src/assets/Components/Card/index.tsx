import * as React from "react";
import { memo, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { useInvertedBorderRadius } from "../utils/use-inverted-border-radius";
import { CardData } from "../../../types";
import { CardContent } from "./CardContent";
import { Title } from "./Title";
import { openSpring, closeSpring } from "./animations";
import { useScrollConstraints } from "../utils/use-scroll-constraints";
import { useWheelScroll } from "../utils/use-wheel-scroll";

interface Props extends CardData {
    isSelected: boolean;
    history: {
        push: (route: string) => void;
    };
}

const dismissDistance = 150;

export const Card = memo(
    ({
        isSelected,
        id,
        title,
        category,
        innerText,
        link
    }: Props) => {
        const y = useMotionValue(0);
        const zIndex = useMotionValue(isSelected ? 2 : 0);

        const inverted = useInvertedBorderRadius(20);

        const cardRef = useRef(null);
        const constraints = useScrollConstraints(cardRef, isSelected);

        function checkSwipeToDismiss() {
            if (y.get() > dismissDistance ) {
                window.location.href = "http://localhost:3000/projects";
            }
        }

        function checkZIndex(latest: {scaleX: number}) {
            if (isSelected) {
                zIndex.set(2);
            } else if (!isSelected && latest.scaleX < 1.01) {
                zIndex.set(0);
            }
        }

        const containerRef = useRef(null);
        useWheelScroll(
            containerRef,
            y,
            constraints,
            checkSwipeToDismiss,
            isSelected
        );

        return (
            <li ref={containerRef} className={`card`}>
                <Overlay isSelected={isSelected}/>
                <div className={`card-content-container ${isSelected ? "open" : "closed"}`}>
                    <motion.div
                        ref={cardRef}
                        className="card-content"
                        style={{...inverted, zIndex, y}}
                        transition={isSelected ? openSpring : closeSpring}
                        drag={isSelected ? "y": false}
                        dragConstraints={constraints}
                        onDrag={checkSwipeToDismiss}
                        onUpdate={checkZIndex}>
                            <Title title={title} category={category} isSelected={isSelected}  link={link}/>
                            <CardContent innerText={innerText}/>
                        </motion.div>
                </div>
                {!isSelected && <Link to={id} className={`card-open-link`} />}
            </li>
        );

    }, 

    (prev, next) => prev.isSelected === next.isSelected
);

interface OverlayProps {
    isSelected: boolean;
}

const Overlay = ({ isSelected }: OverlayProps) => (
    <motion.div
    initial={false}
    animate={{opacity: isSelected ? 1 : 0}}
    transition={{duration: .2}}
    style={{pointerEvents: isSelected ? "auto" : "none"}}
    className="overlay">
        <Link to="/projects"/>
    </motion.div>
);