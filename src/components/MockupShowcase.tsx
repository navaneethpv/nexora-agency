"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Image from "next/image";
import ParallaxScroll from "./ParallaxScroll";

const showcaseImages = [
    "/Gallery/resort1.png",
    "/Gallery/college1.png",
    "/Gallery/resort2.png",
    "/Gallery/college2.png",
    "/Gallery/resort3.png",
    "/Gallery/college3.png",
    "/Gallery/resort4.png",
    "/Gallery/college4.png",
    "/Gallery/resort1.png",
    "/Gallery/college1.png",
    "/Gallery/resort2.png",
    "/Gallery/college2.png",
    "/Gallery/resort3.png",
    "/Gallery/college3.png",
    "/Gallery/resort4.png",
];

export default function MockupShowcase() {
    const firstRow = showcaseImages.slice(0, 5);
    const secondRow = showcaseImages.slice(5, 10);
    const thirdRow = showcaseImages.slice(10, 15);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Spring configuration for smooth motion
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

    const rawTranslateX = useTransform(scrollYProgress, [0, 1], [0, 600]);
    const rawTranslateXReverse = useTransform(scrollYProgress, [0, 1], [0, -600]);
    const rawOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const rawTranslateY = useTransform(scrollYProgress, [0, 1], [-200, 0]);

    // Apply springs for that premium "Nexora" feel
    const translateX = useSpring(rawTranslateX, springConfig);
    const translateXReverse = useSpring(rawTranslateXReverse, springConfig);
    const opacity = useSpring(rawOpacity, springConfig);
    const translateY = useSpring(rawTranslateY, springConfig);

    return (
        <div
            ref={ref}
            className="min-h-[140vh] md:min-h-[180vh] py-12 md:py-32 overflow-hidden antialiased relative flex flex-col bg-black w-full"
        >
            <Header />
            <motion.div
                style={{
                    translateY,
                    opacity,
                }}
                className="w-full will-change-transform"
            >
                <div className="flex flex-col gap-6 md:gap-16">
                    <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-12 translate-x-[10%] md:translate-x-0">
                        {firstRow.map((src, i) => (
                            <GalleryCard
                                key={`row1-${i}`}
                                src={src}
                                translate={translateX}
                            />
                        ))}
                    </motion.div>
                    <motion.div className="flex flex-row space-x-4 md:space-x-12 -translate-x-[10%] md:translate-x-0">
                        {secondRow.map((src, i) => (
                            <GalleryCard
                                key={`row2-${i}`}
                                src={src}
                                translate={translateXReverse}
                            />
                        ))}
                    </motion.div>
                    <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-12 translate-x-[10%] md:translate-x-0">
                        {thirdRow.map((src, i) => (
                            <GalleryCard
                                key={`row3-${i}`}
                                src={src}
                                translate={translateX}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

const Header = () => {
    return (
        <div className="section-container relative mx-auto py-12 md:py-20 w-full left-0 top-0">
            <ParallaxScroll speed={0.02} direction="up">
                <h2 className="text-3xl md:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6 md:mb-10 gpu-stable">
                    Engineering <br />
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-accent to-accent-secondary font-semibold">Bespoke</span> Digital Platforms
                </h2>
            </ParallaxScroll>
            <ParallaxScroll speed={0.04} direction="up">
                <p className="max-w-2xl text-base md:text-xl font-normal text-white/90 leading-relaxed">
                    At <span className="text-white font-medium">Nexora</span>, we converge technical xcellence with
                    distilled design to build high-performance products that command attention.
                </p>
            </ParallaxScroll>
        </div>
    );
};

const GalleryCard = ({
    src,
    translate,
}: {
    src: string;
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.4 }
            }}
            className="h-48 w-72 md:h-80 md:w-[500px] lg:h-[450px] lg:w-[700px] relative shrink-0 will-change-transform rounded-2xl md:rounded-4xl overflow-hidden border border-white/10 bg-white/5"
        >
            <Image
                src={src}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                alt="Showcase Gallery Image"
                sizes="(max-width: 768px) 400px, 800px"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
        </motion.div>
    );
};
