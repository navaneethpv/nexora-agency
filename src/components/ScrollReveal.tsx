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
        up: { y: 60 },
        down: { y: -60 },
        left: { x: 60 },
        right: { x: -60 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction],
                scale: 0.98
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1
            }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.16, 1, 0.3, 1] // Smoother, faster but fluid arrival
            }}
        >
            {children}
        </motion.div>
    );
}
