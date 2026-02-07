"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Layers, Monitor, Smartphone, Zap, MousePointer2 } from "lucide-react";

const projects = [
    {
        title: "Azure Resorts",
        category: "Hospitality Experience",
        src: "/resort-macbook-mockup.png",
        accent: "rgba(11, 185, 243, 0.4)",
        description: "A luxury booking platform with immersive 3D interactions and seamless user flow.",
        tags: ["Next.js", "Three.js", "GSAP"],
    },
    {
        title: "Summit Academy",
        category: "Educational Portal",
        src: "/college-mac.png",
        accent: "rgba(142, 142, 147, 0.4)",
        description: "Modern academic management system designed for high-volume student engagement.",
        tags: ["React", "Custom CMS", "Tailwind"],
    },
    {
        title: "Portfolio Edge",
        category: "Creative Showcase",
        src: "/device-mockup.png",
        accent: "rgba(10, 127, 217, 0.4)",
        description: "High-performance agency portfolio with fluid motion and deep interactions.",
        tags: ["Framer", "SEO", "Vercel"],
    },
];

export default function MockupShowcase() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const springConfig = { stiffness: 100, damping: 30, mass: 1 };

    // Background horizontal move based on index
    const bgX = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]), springConfig);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[300vh] w-full bg-black"
        >
            {/* Sticky Wrapper */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center py-20 px-6 md:px-20">

                {/* Background Ambient Aura */}
                <motion.div
                    style={{ x: bgX }}
                    className="absolute inset-0 z-0 pointer-events-none"
                >
                    <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-accent/10 blur-[150px] rounded-full" />
                    <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-accent-secondary/10 blur-[120px] rounded-full" />
                </motion.div>

                {/* Main Layout Container */}
                <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Side: Content Reveal */}
                    <div className="order-2 lg:order-1 flex flex-col gap-8 md:gap-12">
                        <div className="flex flex-col gap-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3 text-accent font-bold tracking-[0.3em] text-[11px] uppercase"
                            >
                                <span className="w-8 h-px bg-accent/50" />
                                <span>Recent Work</span>
                            </motion.div>

                            <div className="relative h-[120px] md:h-[180px] overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -50, opacity: 0 }}
                                        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                                        className="absolute inset-0"
                                    >
                                        <h2 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter">
                                            {projects[activeIndex].title}
                                        </h2>
                                        <p className="text-accent text-lg md:text-2xl font-medium mt-2">
                                            {projects[activeIndex].category}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <motion.p
                                key={`desc-${activeIndex}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-gray-400 text-sm md:text-lg max-w-md leading-relaxed"
                            >
                                {projects[activeIndex].description}
                            </motion.p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {projects[activeIndex].tags.map((tag, i) => (
                                <motion.span
                                    key={tag}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs text-white/60 font-medium"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-fit flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm md:text-base font-bold shadow-2xl shadow-white/10 hover:bg-accent hover:text-white transition-all group"
                        >
                            Explore Project
                            <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </motion.button>
                    </div>

                    {/* Right Side: 3D Stacked View */}
                    <div className="order-1 lg:order-2 relative h-[300px] md:h-[500px] flex items-center justify-center">
                        <div className="relative w-full h-full perspective-[2000px]">
                            {projects.map((project, index) => {
                                // Progress-based thresholds for which card is "active"
                                const start = index / projects.length;
                                const end = (index + 1) / projects.length;

                                // Scale and Z-Index based on proximity to active scroll point
                                const isActive = useTransform(scrollYProgress, [start, end], [1, 1.1]);

                                // Auto-update active index state
                                useEffect(() => {
                                    const unsubscribe = scrollYProgress.on("change", (latest) => {
                                        const currentIndex = Math.min(
                                            Math.floor(latest * projects.length),
                                            projects.length - 1
                                        );
                                        if (currentIndex !== activeIndex) {
                                            setActiveIndex(currentIndex);
                                        }
                                    });
                                    return () => unsubscribe();
                                }, [scrollYProgress, activeIndex]);

                                // Animation for stacking
                                const stackY = useTransform(
                                    scrollYProgress,
                                    [index * 0.25, (index + 1) * 0.25, (index + 2) * 0.25],
                                    [100, 0, -100]
                                );

                                const stackOpacity = useTransform(
                                    scrollYProgress,
                                    [index * 0.25 - 0.1, index * 0.25, (index + 1) * 0.25, (index + 1) * 0.25 + 0.1],
                                    [0, 1, 1, 0]
                                );

                                const stackScale = useTransform(
                                    scrollYProgress,
                                    [index * 0.25, (index + 1) * 0.25],
                                    [0.8, 1]
                                );

                                return (
                                    <motion.div
                                        key={index}
                                        style={{
                                            y: stackY,
                                            opacity: stackOpacity,
                                            scale: stackScale,
                                            zIndex: index === activeIndex ? 50 : 10,
                                        }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                            {/* Glow Behind */}
                                            <div
                                                className="absolute inset-0 pointer-events-none"
                                                style={{ backgroundColor: project.accent, filter: "blur(60px)", opacity: 0.15 }}
                                            />

                                            <div className="relative w-full h-full glass-card overflow-hidden">
                                                <Image
                                                    src={project.src}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover"
                                                    priority={index === 0}
                                                />
                                                <div className="absolute inset-0 bg-linear-to-tr from-black/60 via-transparent to-white/10" />
                                            </div>
                                        </div>

                                        {/* Perspective Badges */}
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 5, repeat: Infinity, delay: index * 0.5 }}
                                            className="absolute -top-10 -right-10 md:-top-16 md:-right-16 p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl"
                                        >
                                            <MousePointer2 className="w-6 h-6 md:w-10 md:h-10 text-accent opacity-50" />
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Progress Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                    {projects.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? "w-12 bg-accent" : "w-1.5 bg-white/20"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Scroll Space to trigger animations */}
            <div className="h-[200vh]" />
        </section>
    );
}
