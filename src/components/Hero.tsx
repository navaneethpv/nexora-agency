"use client";

import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import { RiArrowRightLine, RiSparkling2Line } from "react-icons/ri";
import { motion, Variants, useMotionValue, useSpring } from "framer-motion";
import useMagnetic from "@/hooks/useMagnetic";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import ParallaxScroll from "./ParallaxScroll";
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";

export default function Hero() {
    const magneticBtn1 = useMagnetic();
    const magneticBtn2 = useMagnetic();

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 35, stiffness: 120 };
    const mouseXSpring = useSpring(mouseX, springConfig);
    const mouseYSpring = useSpring(mouseY, springConfig);

    const [isLowEnd, setIsLowEnd] = useState(false);

    useEffect(() => {
        const checkLowEnd = () => {
            const lowEnd = (navigator as any).deviceMemory !== undefined && (navigator as any).deviceMemory <= 4;
            const slowCPU = (navigator as any).hardwareConcurrency !== undefined && (navigator as any).hardwareConcurrency <= 4;
            setIsLowEnd(lowEnd || slowCPU);
        };
        checkLowEnd();

        const handleMouseMove = (e: MouseEvent) => {
            if (isLowEnd) return; // Skip mouse parallax on low-end
            mouseX.set((e.clientX / window.innerWidth - 0.5) * 20);
            mouseY.set((e.clientY / window.innerHeight - 0.5) * 20);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY, isLowEnd]);

    // Typing Animation Logic
    const words = ["Startups", "Business", "Institutions"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[currentWordIndex];
            if (isDeleting) {
                setCurrentText(currentWord.substring(0, currentText.length - 1));
                setTypingSpeed(50);
            } else {
                setCurrentText(currentWord.substring(0, currentText.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && currentText === currentWord) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed]);

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as any,
            },
        },
    };

    return (
        <section
            className="relative min-h-dvh flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-black pt-36 md:pt-0"
            style={{ backgroundColor: "#000000" }}
        >
            <div className="absolute inset-0 z-0 pointer-events-none">
                <GravityStarsBackground
                    starsCount={60}
                    starsSize={2}
                    starsOpacity={0.7}
                    glowIntensity={15}
                    movementSpeed={1.5}
                    className="w-full h-full text-white"
                    mouseInfluence={150}
                    mouseGravity="attract"
                    gravityStrength={10}
                />
            </div>

            {/* Floating Background Elements */}
            {!isLowEnd && (
                <motion.div
                    style={{ x: mouseXSpring, y: mouseYSpring }}
                    className="absolute inset-0 -z-10 overflow-hidden pointer-events-none will-change-transform"
                >
                    <ParallaxScroll speed={0.4} direction="down" className="absolute top-[-10%] left-[-5%] w-full h-full">
                        <div className="absolute inset-0 bg-accent/3 blur-[120px] rounded-full opacity-60" />
                    </ParallaxScroll>
                    <ParallaxScroll speed={0.6} direction="up" className="absolute bottom-[-10%] right-[-5%] w-1/2 h-1/2">
                        <div className="absolute inset-0 bg-accent-secondary/3 blur-[100px] rounded-full opacity-40" />
                    </ParallaxScroll>
                </motion.div>
            )}

            <div className="relative z-10 flex flex-col items-center w-full section-container will-change-[transform,opacity]">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] }}
                    className="hero-label inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/3 px-4 py-2 text-[10px] md:text-[11px] font-medium text-white/70 mb-8 md:mb-12 backdrop-blur-xl transition-colors duration-500 hover:border-accent/40"
                >
                    <RiSparkling2Line className="w-3.5 h-3.5 text-accent" />
                    <span className="tracking-[0.2em] uppercase">Crafting exceptional digital experiences</span>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-6 md:mb-8 font-heading"
                >
                    <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.3em] text-accent/80 uppercase">Engineering next-gen digital equity</span>
                </motion.div>

                <ParallaxScroll speed={0.1} direction="down">
                    <h1 className="text-[1.8rem] sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 md:mb-8 leading-[1.2] md:leading-[1.02] gpu-stable text-wrap-balance">
                        Modern Web Solutions for <br className="hidden md:block" />
                        <span className="font-medium text-glow bg-clip-text text-transparent bg-linear-to-b from-accent to-accent-secondary min-h-[1.1em] inline-block text-[1.5rem] sm:text-4xl md:text-6xl lg:text-7xl uppercase tracking-wider mt-2 md:mt-0">
                            {currentText}
                            <span className="inline-block w-[2px] md:w-[2.5px] h-[0.85em] bg-accent ml-1 md:ml-2 animate-[blink_1s_step-end_infinite] align-middle shadow-[0_0_8px_rgba(11,185,243,0.8)]"></span>
                        </span>
                    </h1>
                </ParallaxScroll>

                <ParallaxScroll speed={0.25} direction="down">
                    <p className="max-w-[95%] md:max-w-2xl text-sm md:text-xl text-white/90 mb-10 md:mb-12 leading-relaxed font-semibold mx-auto gpu-stable px-4 md:px-0 opacity-80">
                        Nexora builds clean, scalable, and performance-focused websites and web applications for businesses and institutions.
                    </p>
                </ParallaxScroll>

                <ParallaxScroll speed={0.3} direction="down">
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center w-full sm:w-auto px-6 sm:px-0"
                    >
                        <Link
                            href="/#work"
                            className="w-full sm:w-auto group relative text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base font-bold hover:brightness-110 transition-all shadow-2xl shadow-accent/40 active:scale-95 flex items-center justify-center gap-3 overflow-hidden bg-linear-to-r from-accent to-accent-secondary"
                        >
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative">View Our Work →</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto group relative bg-white/5 border border-white/10 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base font-bold hover:bg-white/10 transition-all backdrop-blur-xl active:scale-95 flex items-center justify-center"
                        >
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full shadow-[0_0_20px_rgba(255,255,255,0.05)]" />
                            <span className="relative">Get in Touch</span>
                        </Link>
                    </motion.div>
                </ParallaxScroll>

                <ScrollReveal delay={0.6} direction="up" duration={1} distance={20}>
                    <motion.button
                        onClick={() => {
                            const nextSection = document.getElementById('trust-section');
                            if (nextSection) {
                                nextSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        whileHover={{ y: 5 }}
                        className="mt-12 md:mt-16 flex flex-col items-center gap-4 group cursor-pointer"
                        aria-label="Scroll to explore more"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                delay: 1,
                                ease: "easeOut"
                            }}
                            className="flex flex-col items-center gap-3"
                        >
                            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold group-hover:text-accent transition-colors duration-500">Scroll to explore</span>
                            <div className="w-px h-12 bg-linear-to-b from-accent to-transparent relative overflow-hidden group-hover:h-16 transition-all duration-500">
                                <motion.div
                                    animate={{
                                        y: ["-100%", "100%"]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute top-0 left-0 w-full h-1/2 bg-accent shadow-[0_0_15px_rgba(11,185,243,0.8)]"
                                />
                            </div>
                        </motion.div>
                    </motion.button>
                </ScrollReveal>
            </div>
        </section>
    );
}
