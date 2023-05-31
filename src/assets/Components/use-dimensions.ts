import {ReactElement, useEffect, useRef, MutableRefObject} from 'react';


export const useDimensions = <T extends HTMLElement>(
    ref: MutableRefObject<T | null>
): MutableRefObject< { width: number, height: number}> => {
    const dimensions = useRef({width: 0, height: 0});

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                dimensions.current.width = ref.current.offsetWidth;
                dimensions.current.height = ref.current.offsetHeight;
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [ref]);

    return dimensions;
};