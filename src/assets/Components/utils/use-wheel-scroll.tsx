import { RefObject, useEffect } from "react";
import { MotionValue } from "framer-motion";
import { mix } from 'popmotion';
import { debounce } from 'lodash';

interface Constraints {
  top: number;
  bottom: number;
}

const deltaThreshold = 5;
const elasticFactor = 0.2;
const animationDuration = 300;

function springTo(value: MotionValue<number>, from: number, to: number) {
  if (value.isAnimating()) return;

  const start = performance.now();

  const animate = () => {
    const elapsed = performance.now() - start;
    const progress = Math.min(elapsed / animationDuration, 1);
    const currentValue = from + (to - from) * progress;

    value.set(currentValue);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}

const debounceSpringTo = debounce(springTo, 100);

export function useWheelScroll(
  ref: RefObject<Element>,
  y: MotionValue<number>,
  constraints: Constraints | null,
  onWheelCallback: (e: WheelEvent) => void,
  isActive: boolean
) {
  useEffect(() => {
    if (!constraints) return;

    const onWheel: EventListener = (event) => {
      event.preventDefault();

      const wheelEvent = event as WheelEvent;

      const currentY = y.get();
      let newY = currentY - wheelEvent.deltaY;
      let startedAnimation = false;
      const isWithinBounds =
        constraints && newY >= constraints.top && newY <= constraints.bottom;

      if (constraints && !isWithinBounds) {
        newY = mix(currentY, newY, elasticFactor);

        if (newY < constraints.top) {
          if (wheelEvent.deltaY <= deltaThreshold) {
            springTo(y, newY, constraints.top);
            startedAnimation = true;
          } else {
            debounceSpringTo(y, newY, constraints.top);
          }
        }

        if (newY > constraints.bottom) {
          if (wheelEvent.deltaY >= -deltaThreshold) {
            springTo(y, newY, constraints.bottom);
            startedAnimation = true;
          } else {
            debounceSpringTo(y, newY, constraints.bottom);
          }
        }
      }

      if (!startedAnimation) {
        y.stop();
        y.set(newY);
      } else {
        debounceSpringTo.cancel();
      }

      onWheelCallback(wheelEvent);
    };

    if (isActive) {
      const element = ref.current;
      if (element) {
        element.addEventListener("wheel", onWheel, { passive: false });
      }
    }

    return () => {
      const element = ref.current;
      if (element) {
        element.removeEventListener("wheel", onWheel);
      }
    };
  }, [ref, y, constraints, onWheelCallback, isActive]);
}