"use client";

import { useRef, useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/**
 * A hook that adds a "magnetic" effect to an element using Framer Motion.
 * It's cleaner and more performant than mixing multiple animation libraries.
 */
export default function useMagnetic() {
    const magneticRef = useRef<HTMLDivElement>(null);

    // Initial position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring configuration for smooth "elastic" feel
    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    useEffect(() => {
        const element = magneticRef.current;
        if (!element) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = element.getBoundingClientRect();

            // Calculate distance from center
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const deltaX = clientX - centerX;
            const deltaY = clientY - centerY;

            // Define strength (0.35 = 35% pull towards cursor)
            const strength = 0.35;

            x.set(deltaX * strength);
            y.set(deltaY * strength);
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
        };

        // Apply transformations via style
        const unsubscribeX = springX.on("change", (latest) => {
            if (element) element.style.transform = `translate3d(${latest}px, ${springY.get()}px, 0)`;
        });
        const unsubscribeY = springY.on("change", (latest) => {
            if (element) element.style.transform = `translate3d(${springX.get()}px, ${latest}px, 0)`;
        });

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
            unsubscribeX();
            unsubscribeY();
        };
    }, [x, y, springX, springY]);

    return magneticRef;
}
