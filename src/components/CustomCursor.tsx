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
        <>
            {/* Trail effect */}
            <motion.div
                style={{
                    x: useSpring(mouseX, { damping: 40, stiffness: 300 }),
                    y: useSpring(mouseY, { damping: 40, stiffness: 300 }),
                    opacity: isVisible ? 0.3 : 0,
                }}
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent/20 pointer-events-none z-[9998] hidden md:block"
            />

            <motion.div
                style={{
                    x: cursorX,
                    y: cursorY,
                    opacity: isVisible ? 1 : 0,
                    scale: isHovering ? 2 : 1,
                }}
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:block"
            >
                {/* Main Chassis */}
                <div className={`absolute inset-0 rounded-full border transition-all duration-500 ${isHovering ? 'bg-accent/10 border-accent scale-125' : 'border-white/20'
                    }`} />

                {/* Technical Crosshair/Center */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-4 h-px bg-accent/40 absolute" />
                    <div className="h-4 w-px bg-accent/40 absolute" />
                </div>

                {/* Core Dot */}
                <div className={`absolute inset-[40%] rounded-full bg-accent shadow-[0_0_15px_rgba(11,185,243,0.8)] transition-transform duration-500 ${isHovering ? 'scale-0' : 'scale-100'}`} />
            </motion.div>
        </>
    );
}
