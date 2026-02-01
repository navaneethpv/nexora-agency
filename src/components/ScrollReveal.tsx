"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({
    children,
    direction = "up",
    delay = 0
}: {
    children: React.ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
}) {
    const directions = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: 40 },
        right: { x: -40 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction],
                scale: 0.95
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
        >
            {children}
        </motion.div>
    );
}
