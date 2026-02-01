"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useCallback, useRef } from "react";

interface AnimatedSocialIconProps {
    type: 'twitter' | 'linkedin' | 'github' | 'instagram';
    href: string;
    size?: number;
}

const VARIANTS: Variants = {
    normal: {
        opacity: 1,
        pathLength: 1,
        pathOffset: 0,
        transition: {
            duration: 0.4,
            opacity: { duration: 0.1 },
        },
    },
    animate: (custom: number) => ({
        opacity: [0, 1],
        pathLength: [0, 1],
        pathOffset: [1, 0],
        transition: {
            duration: 0.6,
            ease: "linear",
            delay: custom * 0.05,
            opacity: { duration: 0.1 },
        },
    }),
};

const PATHS = {
    twitter: [
        "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    ],
    linkedin: [
        "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        "M2 9h4v12H2z",
        "M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"
    ],
    github: [
        "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
    ],
    instagram: [
        "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308 1.03 1.03 1.28 2.166 1.346 3.882.025 1.203.031 1.502.031 4.542s-.006 3.339-.03 4.542c-.06 1.393-.33 2.633-1.308 3.608-1.03 1.03-2.166 1.28-3.882 1.346-1.203.025-1.502.031-4.542.031s-3.339-.006-4.542-.03c-1.393-.06-2.633-.33-3.608-1.308-1.03-1.03-1.28-2.166-1.346-3.882-.025-1.203-.031-1.502-.031-4.542s.006-3.339.03-4.542c.06-1.366.33-2.633 1.308-3.608 1.03-1.03 2.166-1.28 3.882-1.346 1.203-.025 1.502-.031 4.542-.031m0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.261-2.91.564-.787.306-1.455.714-2.119 1.378-.665.664-1.073 1.332-1.379 2.12-.303.762-.507 1.633-.564 2.91-.059 1.28-.073 1.688-.073 4.947s.014 3.667.072 4.947c.057 1.277.261 2.148.564 2.91.306.787.714 1.455 1.378 2.119.664.665 1.332 1.073 2.12 1.379.762.303 1.633.507 2.91.564 1.28.059 1.688.073 4.947.073s3.667-.014 4.947-.072c1.277-.057 2.148-.261 2.91-.564.787-.306 1.455-.714 2.119-1.378.665-.664 1.073-1.332 1.379-2.12.303-.762.507-1.633.564-2.91.059-1.28.073-1.688.073-4.947s-.014-3.667-.072-4.947c-.057-1.277-.261-2.148-.564-2.91-.306-.787-.714-1.455-1.378-2.119-.664-.665-1.332-1.073-2.12-1.379-.762-.303-1.633-.507-2.91-.564-1.28-.059-1.688-.073-4.947-.073z",
        "M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z",
        "M18.406 3.506a1.44 1.44 0 101.44 1.44 1.44 1.44 0 00-1.44-1.44z"
    ]
};

export const AnimatedSocialIcon = ({ type, href, size = 18 }: AnimatedSocialIconProps) => {
    const controls = useAnimation();

    const handleMouseEnter = useCallback(() => {
        controls.start("animate");
    }, [controls]);

    const handleMouseLeave = useCallback(() => {
        controls.start("normal");
    }, [controls]);

    return (
        <motion.a
            href={href}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ y: -2 }}
            className="text-secondary hover:text-white transition-colors duration-300 flex items-center justify-center p-1"
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {PATHS[type].map((path, i) => (
                    <motion.path
                        key={i}
                        d={path}
                        initial="normal"
                        animate={controls}
                        variants={VARIANTS}
                        custom={i}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                ))}
            </svg>
        </motion.a>
    );
};
