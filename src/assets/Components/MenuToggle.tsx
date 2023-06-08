import * as React from "react";
import {AnimationProps, motion} from 'framer-motion';


interface ToggleProps {
    toggle: boolean;
    onClick: () => void;
}

interface PathProps extends AnimationProps {
    pathData: string,
}

const Path: React.FC<PathProps> = ({pathData, ...props}) => (
    <motion.path
    fill="transparent"
    strokeWidth="4"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap = "round"
    d={pathData}
    {...props}
    />
);

export const MenuToggle: React.FC<ToggleProps> = ({ onClick }) => {

return (
    <button onClick={onClick}>
        <svg width="1.5vw" height="1.5vw" viewBox="0 0 23 23">
            <Path
            pathData=""
            variants = {{
                closed: {d: "M 2 2.5 L 20 2.5"},
                open: {d: "M 3 16.5 L 17 2.5"}
            }} />

            <Path 
            pathData="M 2 9.423 L 20 9.423"
            variants = {{
                closed: {opacity: 1},
                open: {opacity: 0}
            }}
            transition={{duration: 0.1}} />
            <Path
            pathData=""
            variants={{
                closed: {d: "M 2 16.346 L 20 16.346"},
                open: {d: "M 3 2.5 L 17 16.346"}
            }} />
        </svg>
    </button>
);
};