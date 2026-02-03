"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, memo } from "react";

interface TextScrollRevealProps {
    text: string;
    className?: string;
}

const Word = memo(({ children, progress, range }: WordProps) => {
    const opacity = useTransform(progress, range, [0.15, 1]);
    return (
        <span className="relative inline-block">
            <motion.span style={{ opacity, willChange: "opacity" }} className="text-white">
                {children}
            </motion.span>
        </span>
    );
});

Word.displayName = "Word";

export default function TextScrollReveal({ text, className = "" }: TextScrollRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "start 0.25"],
    });

    const words = text.split(" ");

    return (
        <div ref={containerRef} className={className}>
            <p className="flex flex-wrap gap-x-[0.2em] gap-y-[0.1em]">
                {words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + 1 / words.length;
                    return (
                        <Word key={i} progress={scrollYProgress} range={[start, end]}>
                            {word}
                        </Word>
                    );
                })}
            </p>
        </div>
    );
}

interface WordProps {
    children: string;
    progress: any;
    range: [number, number];
}

