"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center text-center px-6 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent/20 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[100px] rounded-full"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold text-white/80 mb-8 backdrop-blur-sm"
            >
                <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
                <span>Web Development & Digital Solutions</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.05]"
            >
                Modern Web Solutions for <br />
                <span className="italic font-medium text-accent text-glow">Growing Teams</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-2xl text-lg text-secondary mb-10 leading-relaxed font-medium"
            >
                Nexora builds clean, scalable, and performance-focused websites and web applications for businesses and institutions.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
                <button className="group bg-accent text-white px-8 py-4 rounded-full text-base font-bold hover:brightness-110 transition-all shadow-lg shadow-accent/25 flex items-center gap-2">
                    View Our Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-white/10 transition-all backdrop-blur-md">
                    Get in Touch
                </button>
            </motion.div>
        </section>
    );
}
