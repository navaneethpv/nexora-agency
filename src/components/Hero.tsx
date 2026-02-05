"use client";

import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, Variants, useMotionValue, useSpring } from "framer-motion";
import useMagnetic from "@/hooks/useMagnetic";
import Link from "next/link";

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
            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.12] mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            <HeroBackground3D />

            {/* Background Glows */}
            <motion.div
                style={{ x: mouseXSpring, y: mouseYSpring }}
                className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
            >
                <div className="absolute top-[-10%] left-[-5%] w-full h-full bg-accent/5 blur-[120px] rounded-full opacity-60" />
                <div className="absolute bottom-[-10%] right-[-5%] w-1/2 h-1/2 bg-accent-secondary/5 blur-[100px] rounded-full opacity-40" />
            </motion.div>

            <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto">
                <div className="hero-label inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/3 px-4 py-2 text-[10px] md:text-[11px] font-bold text-white/80 mb-6 md:mb-10 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_0_20px_rgba(11,185,243,0.1)] hover:border-accent/30 transition-colors duration-500">
                    <Sparkles className="w-3.5 h-3.5 text-accent" />
                    <span className="uppercase tracking-[0.2em]">WEB DEVELOPMENT & DIGITAL SOLUTIONS</span>
                </div>

                <div className="mb-2 md:mb-4">
                    <span className="text-[13px] md:text-[14px] font-black tracking-[0.4em] text-white/50 uppercase">A COMPLETE</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 md:mb-8 leading-[1.1] md:leading-[1.02]">
                    Modern Web Solutions for <br />
                    <span className="font-medium text-glow bg-clip-text text-transparent bg-linear-to-b from-accent to-accent-secondary min-h-[1.1em] inline-block text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-wider">
                        {currentText}
                        <span className="inline-block w-[2.5px] h-[0.85em] bg-accent ml-2 animate-[blink_1s_step-end_infinite] align-middle shadow-[0_0_8px_rgba(11,185,243,0.8)]"></span>
                    </span>
                </h1>

                <p className="max-w-2xl text-base md:text-xl text-secondary mb-8 md:mb-12 leading-relaxed font-medium opacity-90">
                    Nexora builds clean, scalable, and performance-focused websites and web applications for businesses and institutions.
                </p>

                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center w-full sm:w-auto px-4 sm:px-0"
                >
                    <Link href="/#work" className="w-full sm:w-auto">
                        <div ref={magneticBtn1} className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto group relative text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-sm md:text-base font-bold hover:brightness-110 transition-all shadow-2xl shadow-accent/40 active:scale-95 flex items-center justify-center gap-3 overflow-hidden bg-linear-to-r from-accent to-accent-secondary">
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative">View Our Work →</span>
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 relative group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </Link>
                    <div ref={magneticBtn2} className="w-full sm:w-auto">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto group relative bg-white/5 border border-white/10 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-sm md:text-base font-bold hover:bg-white/10 transition-all backdrop-blur-xl active:scale-95">
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full shadow-[0_0_20px_rgba(255,255,255,0.05)]" />
                                <span className="relative">Get in Touch</span>
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Subtle floating decorative elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-10 w-4 h-4 rounded bg-accent/20 blur-sm md:block hidden"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-10 w-6 h-6 rounded-full bg-accent-secondary/20 blur-sm md:block hidden"
            />
        </section>
    );
}
