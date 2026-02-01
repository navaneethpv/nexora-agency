"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Parentheses, Rocket } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "We understand goals, users, and technical needs.",
        icon: Search
    },
    {
        number: "02",
        title: "Design",
        description: "We create clean, user-focused interfaces.",
        icon: PenTool
    },
    {
        number: "03",
        title: "Build",
        description: "We develop scalable, production-ready systems.",
        icon: Parentheses
    },
    {
        number: "04",
        title: "Refine",
        description: "We test, optimize, and prepare for growth.",
        icon: Rocket
    }
];

export default function Process() {
    return (
        <section id="process" className="py-16 md:py-24 border-t border-white/5">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl mb-12 md:mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight px-4 md:px-0">
                        How <span className="italic font-medium text-accent">We Work</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 px-4 md:px-0">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="flex flex-col relative"
                        >
                            <div className="flex items-center gap-4 mb-5 md:mb-6 group">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-sm md:text-base font-bold text-accent bg-white/5 backdrop-blur-sm group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-500">
                                    {step.number}
                                </div>
                                <div className="h-px flex-1 bg-white/5 lg:block hidden last:hidden relative overflow-hidden">
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        whileInView={{ x: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: index * 0.2 + 0.5, ease: "easeInOut" }}
                                        className="absolute inset-0 bg-accent/30"
                                    />
                                </div>
                            </div>

                            <div className="text-accent mb-3 md:mb-4 scale-100 md:scale-110">
                                <step.icon className="w-5 h-5" />
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{step.title}</h3>
                            <p className="text-secondary text-xs md:text-sm leading-relaxed font-medium">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
