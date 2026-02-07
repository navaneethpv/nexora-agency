"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxProps {
    children: ReactNode;
    speed?: number; // Positive for moving faster/earlier, negative for slower/later
    className?: string;
    direction?: "up" | "down";
}

export default function ParallaxScroll({
    children,
    speed = 0.5,
    className = "",
    direction = "up"
}: ParallaxProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Transform based on speed
    // 0 is top of viewport, 1 is bottom (offset from start-end to end-start)
    // We want the element to move relative to its scroll progress
    const yTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [direction === "up" ? -100 * speed : 100 * speed, direction === "up" ? 100 * speed : -100 * speed]
    );

    return (
        <motion.div
            ref={ref}
            style={{ y: yTransform }}
            className={`${className} will-change-transform`}
        >
            {children}
        </motion.div>
    );
}
