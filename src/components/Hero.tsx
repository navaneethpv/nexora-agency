"use client";

import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
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

            <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto">
                <ScrollReveal direction="down" duration={1} distance={20}>
                    <div className="hero-label inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/3 px-4 py-2 text-[10px] md:text-[11px] font-medium text-white/70 mb-8 md:mb-12 backdrop-blur-xl transition-colors duration-500 hover:border-accent/40">
                        <Sparkles className="w-3.5 h-3.5 text-accent" />
                        <span className="uppercase tracking-[0.3em]">CRAFTING EXCEPTIONAL DIGITAL EXPERIENCES</span>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2} direction="down" duration={1} distance={20}>
                    <div className="mb-4 md:mb-6">
                        <span className="text-[12px] md:text-[13px] font-medium tracking-[0.5em] text-secondary opacity-80 uppercase">A COMPLETE PARTNER FOR</span>
                    </div>

                    <h1 className="text-[2.5rem] sm:text-6xl md:text-8xl font-medium tracking-tight mb-8 md:mb-12 leading-[1.05] text-white">
                        Modern Web Solutions for <br />
                        <span className="bg-clip-text text-transparent bg-linear-to-b from-accent to-accent-secondary inline-block uppercase tracking-wider font-semibold">
                            {currentText}
                            <span className="inline-block w-[2px] md:w-[2.5px] h-[0.85em] bg-accent ml-2 animate-[blink_1s_step-end_infinite] align-middle"></span>
                        </span>
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.4} direction="up" duration={1} distance={20}>
                    <p className="max-w-[90%] md:max-w-2xl text-base md:text-xl text-secondary mb-12 md:mb-16 leading-relaxed font-normal opacity-90 mx-auto">
                        Nexora builds clean, scalable, and performance-focused websites and web applications for visionary businesses.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.6} direction="up" duration={1} distance={20}>
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center items-center w-full sm:w-auto px-4 sm:px-0">
                        <Link href="/#work" className="w-full sm:w-auto">
                            <div ref={magneticBtn1} className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto group relative bg-accent text-white px-10 md:px-12 py-5 md:py-6 rounded-full text-base font-medium transition-all active:scale-95 flex items-center justify-center gap-3 overflow-hidden shadow-lg shadow-accent/10 hover:shadow-accent/20">
                                    <span className="relative">View Our Portfolio</span>
                                    <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform duration-400" />
                                </button>
                            </div>
                        </Link>
                        <div ref={magneticBtn2} className="w-full sm:w-auto">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto group relative bg-white/5 border border-white/10 text-white px-10 md:px-12 py-5 md:py-6 rounded-full text-base font-medium hover:bg-white/10 transition-all backdrop-blur-xl active:scale-95">
                                    <span>Get in Touch</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
