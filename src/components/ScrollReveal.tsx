"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right" | "none";
    delay?: number;
    duration?: number;
    distance?: number;
    className?: string;
    once?: boolean;
}

export default function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.8,
    distance = 40,
    className = "",
    once = true,
}: ScrollRevealProps) {
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mediaQuery.matches);
        const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    if (reducedMotion) {
        return <div className={className}>{children}</div>;
    }

    const variants: Variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? distance : direction === "right" ? -distance : 0,
            y: direction === "up" ? distance : direction === "down" ? -distance : 0,
            scale: 0.95,
            skewY: direction === "none" ? 0 : 2,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            skewY: 0,
            filter: "blur(0px)",
            transition: {
                duration: duration,
                delay: delay,
                ease: [0.16, 1, 0.3, 1] as any,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-10% 0px" }}
            variants={variants}
            className={`${className} will-change-[transform,opacity,filter]`}
        >
            {children}
        </motion.div>
    );
}
