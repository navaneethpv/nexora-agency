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
        <section id="process" className="py-24 border-t border-white/5">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        How <span className="italic font-medium text-accent">We Work</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="flex flex-col relative"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-bold text-accent bg-white/5 backdrop-blur-sm">
                                    {step.number}
                                </div>
                                <div className="h-px flex-1 bg-white/5 lg:block hidden last:hidden" />
                            </div>

                            <div className="text-accent mb-4 scale-110">
                                <step.icon className="w-5 h-5" />
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-secondary text-sm leading-relaxed font-medium">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
