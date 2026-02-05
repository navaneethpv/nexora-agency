"use client";

import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";
import useMagnetic from "@/hooks/useMagnetic";
import Link from "next/link";

const HeroBackground3D = dynamic(() => import("./HeroBackground3D"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-black" />
});

export default function Hero() {
    const magneticBtn1 = useMagnetic();
    const magneticBtn2 = useMagnetic();

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 40, // Increased intensity
                y: (e.clientY / window.innerHeight - 0.5) * 40,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Typing Animation Logic
    const words = ["Web Development", "UI Design", "Visual Design"];
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
    }, [currentText, isDeleting, currentWordIndex]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

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
        <section className="relative h-screen min-h-[850px] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-black">
            {/* Background Layer */}
            <HeroBackground3D />

            {/* Ambient Noise Texture */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.1] mix-blend-overlay"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

            {/* Mouse Tracking Glows */}
            <motion.div
                style={{ x: mousePos.x, y: mousePos.y }}
                className="absolute inset-0 -z-10 pointer-events-none"
            >
                <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-accent/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-accent-secondary/5 blur-[120px] rounded-full" />
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col items-center max-w-5xl mx-auto"
            >
                <motion.div
                    variants={{
                        hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
                        visible: {
                            y: 0,
                            opacity: 1,
                            filter: "blur(0px)",
                            transition: {
                                duration: 1,
                                ease: [0.16, 1, 0.3, 1]
                            }
                        }
                    }}
                    className="hero-label inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-[10px] md:text-[11px] font-black text-white/90 mb-8 md:mb-12 backdrop-blur-2xl ring-1 ring-white/10 shadow-[0_0_30px_rgba(11,185,243,0.15)] hover:border-accent/40 hover:scale-105 transition-all duration-500"
                >
                    <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                    <span className="uppercase tracking-[0.3em]">NEXORA · DIGITAL EXCELLENCE UNIT</span>
                </motion.div>

                <motion.h1
                    variants={{
                        hidden: { y: 60, opacity: 0, filter: "blur(20px)" },
                        visible: {
                            y: 0,
                            opacity: 1,
                            filter: "blur(0px)",
                            transition: {
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1] as any
                            }
                        }
                    }}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 md:mb-10 leading-[0.95]"
                >
                    Better Web <br />
                    <span className="font-medium text-glow bg-clip-text text-transparent bg-linear-to-b from-accent to-accent-secondary inline-block">
                        {currentText}
                        <span className="inline-block w-[3px] h-[0.8em] bg-accent ml-2 animate-[blink_1s_step-end_infinite] align-middle shadow-[0_0_15px_rgba(11,185,243,1)]"></span>
                    </span>
                </motion.h1>

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="max-w-2xl text-lg md:text-2xl text-secondary mb-10 md:mb-16 leading-relaxed font-medium opacity-80"
                >
                    We deliver high-performance, visually stunning digital experiences for startups and forward-thinking brands.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center items-center w-full sm:w-auto"
                >
                    <Link href="/#work" className="w-full sm:w-auto">
                        <div ref={magneticBtn1} className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto group relative text-white px-10 md:px-12 py-5 md:py-6 rounded-full text-base md:text-lg font-black hover:brightness-110 transition-all shadow-2xl shadow-accent/40 active:scale-95 flex items-center justify-center gap-4 overflow-hidden bg-linear-to-r from-accent to-accent-secondary">
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative">CHECK OUR IMPACT</span>
                                <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1.5 transition-transform duration-300" />
                            </button>
                        </div>
                    </Link>
                    <div ref={magneticBtn2} className="w-full sm:w-auto">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto group relative bg-white/5 border border-white/20 text-white px-10 md:px-12 py-5 md:py-6 rounded-full text-base md:text-lg font-black hover:bg-white/10 transition-all backdrop-blur-2xl active:scale-95">
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full shadow-[0_0_30px_rgba(255,255,255,0.05)]" />
                                <span className="relative">GET IN TOUCH</span>
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-px h-12 bg-linear-to-b from-accent to-transparent" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent/50">SCROLL</span>
            </motion.div>
        </section>
    );
}
