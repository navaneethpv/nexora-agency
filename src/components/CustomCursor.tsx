"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [isVisible, mouseX, mouseY]);

    // Hide on mobile
    if (typeof window !== "undefined" && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
        return null;
    }

    return (
        <motion.div
            style={{
                x: cursorX,
                y: cursorY,
                opacity: isVisible ? 1 : 0,
                scale: isHovering ? 2.5 : 1,
            }}
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:block"
        >
            {/* Outer Ring */}
            <div className={`absolute inset-0 rounded-full border border-accent/30 transition-colors duration-300 ${isHovering ? 'bg-accent/10 border-accent/60' : ''}`} />

            {/* Inner Dot */}
            <div className="absolute inset-[40%] rounded-full bg-accent shadow-[0_0_10px_rgba(11,185,243,0.5)]" />

            {/* Subtle Glow */}
            <div className="absolute -inset-2 rounded-full bg-accent/5 blur-md" />
        </motion.div>
    );
}
