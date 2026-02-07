"use client";

import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import { RiArrowRightLine, RiSparkling2Line } from "react-icons/ri";
import { motion, Variants, useMotionValue, useSpring } from "framer-motion";
import useMagnetic from "@/hooks/useMagnetic";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import ParallaxScroll from "./ParallaxScroll";

const HeroBackground3D = dynamic(() => import("./HeroBackground3D"), { ssr: false });

export default function Hero() {
    const magneticBtn1 = useMagnetic();
    const magneticBtn2 = useMagnetic();

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const mouseXSpring = useSpring(mouseX, springConfig);
    const mouseYSpring = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set((e.clientX / window.innerWidth - 0.5) * 20);
            mouseY.set((e.clientY / window.innerHeight - 0.5) * 20);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Typing Animation Logic
    const words = ["Startups", "Business", "Institutions", "Scale"];
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
        <section className="relative h-screen min-h-[800px] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-background">
            <HeroBackground3D />

            {/* Floating Background Elements */}
            <motion.div
                style={{ x: mouseXSpring, y: mouseYSpring }}
                className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
            >
                <ParallaxScroll speed={0.4} direction="down" className="absolute top-[-10%] left-[-5%] w-full h-full">
                    <div className="absolute inset-0 bg-accent/3 blur-[120px] rounded-full opacity-60" />
                </ParallaxScroll>
                <ParallaxScroll speed={0.6} direction="up" className="absolute bottom-[-10%] right-[-5%] w-1/2 h-1/2">
                    <div className="absolute inset-0 bg-accent-secondary/3 blur-[100px] rounded-full opacity-40" />
                </ParallaxScroll>
            </motion.div>

            <div className="relative z-10 flex flex-col items-center w-full section-container">
                <ScrollReveal direction="down" duration={1} distance={20}>
                    <div className="hero-label inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/3 px-4 py-2 text-[10px] md:text-[11px] font-medium text-white/70 mb-8 md:mb-12 backdrop-blur-xl transition-colors duration-500 hover:border-accent/40">
                        <RiSparkling2Line className="w-3.5 h-3.5 text-accent" />
                        <span className="tracking-[0.2em] uppercase">Crafting exceptional digital experiences</span>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2} direction="down" duration={1} distance={20}>
                    <div className="mb-6 md:mb-8 font-heading">
                        <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.3em] text-accent/80 uppercase">Engineering next-gen digital equity</span>
                    </div>

                    <h1 className="text-[2.5rem] sm:text-6xl md:text-8xl font-medium tracking-tight mb-8 md:mb-12 leading-[1.1] text-white">
                        <span className="uppercase">Scalable Systems</span> <br />
                        <span className="bg-clip-text text-transparent bg-linear-to-b from-accent to-accent-secondary inline-block tracking-tight font-semibold">
                            <span className="uppercase">Built for</span> <br /> {currentText}
                            <span className="inline-block w-[2px] md:w-[3px] h-[0.8em] bg-accent ml-2 animate-[blink_1s_step-end_infinite] align-middle"></span>
                        </span>
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.4} direction="up" duration={1} distance={20}>
                    <p className="max-w-[90%] md:max-w-2xl text-base md:text-xl text-secondary mb-12 md:mb-16 leading-relaxed font-normal opacity-90 mx-auto">
                        Nexora builds clean, scalable, and performance-focused websites and web applications for visionary businesses.
                    </p>
                </ScrollReveal>

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
