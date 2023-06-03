import { useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export function useInvertedBorderRadius(radius: number) {
    const scaleX = useMotionValue(1);
    const scaleY = useMotionValue(1);
    const borderRadius = useMotionValue('${radius}px');

    useEffect(() => {
        function updateRadius() {
            const latestX = scaleX.get();
            const latestY = scaleY.get();
            const xRadius = latestX * radius + "px";
            const yRadius = latestY * radius + 'px';

            borderRadius.set(`${xRadius} ${yRadius}`);
        }

        const unsubScaleX = scaleX.onChange(updateRadius);
        const unsubScaleY = scaleY.onChange(updateRadius);

        return () => {
            unsubScaleX();
            unsubScaleY();
        };
    }, [radius, scaleX, scaleY]);

    return {
        scaleX,
        scaleY,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius
    };
}