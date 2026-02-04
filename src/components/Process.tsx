"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Braces, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "We understand your vision, target audience, and core technical requirements to build a solid foundation.",
        icon: Search
    },
    {
        number: "02",
        title: "Design",
        description: "Crafting intuitive, high-fidelity user interfaces that balance aesthetics with functional clarity.",
        icon: PenTool
    },
    {
        number: "03",
        title: "Build",
        description: "Developing robust, scalable production systems using cutting-edge technologies and best practices.",
        icon: Braces
    },
    {
        number: "04",
        title: "Refine",
        description: "Rigorous testing and optimization to ensure your product is polished, fast, and ready for global scale.",
        icon: Rocket
    }
];

export default function Process() {
    return (
        <section id="process" className="py-20 md:py-32 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="section-container relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
                    <ScrollReveal direction="left" distance={40}>
                        <div className="max-w-2xl">
                            <span className="text-accent font-bold text-xs md:text-sm tracking-[0.4em] uppercase block mb-4">OUR METHODOLOGY</span>
                            <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tighter text-white">
                                A Strategic Path <br />
                                <span className="italic font-medium text-secondary">to Digital Excellence</span>
                            </h2>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
                    {/* Horizontal Connector Line (Desktop) */}
                    <div className="absolute top-6 left-0 w-full h-px bg-white/5 hidden lg:block" />

                    {steps.map((step, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.15}
                            direction={index % 2 === 0 ? "up" : "down"}
                            distance={30}
                        >
                            <div className="group relative">
                                {/* Mobile Vertical Line */}
                                {index !== steps.length - 1 && (
                                    <div className="absolute left-6 top-12 bottom-0 w-px bg-linear-to-b from-accent/30 via-accent/5 to-transparent md:hidden" />
                                )}

                                <div className="flex flex-row lg:flex-col items-start gap-6 lg:gap-8 transition-all duration-500">
                                    {/* Number & Icon Container */}
                                    <div className="relative shrink-0">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent relative z-10 backdrop-blur-xl group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-500 shadow-xl group-hover:shadow-accent/5">
                                            <step.icon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-500" />

                                            {/* Step Number Badge */}
                                            <div className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-lg border-2 border-black">
                                                {step.number}
                                            </div>
                                        </div>

                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
                                    </div>

                                    <div className="flex-1 space-y-3 md:space-y-4 pt-1 md:pt-0">
                                        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-accent transition-colors duration-500">
                                            {step.title}
                                        </h3>
                                        <p className="text-secondary text-sm md:text-base leading-relaxed font-medium">
                                            {step.description}
                                        </p>

                                        {/* Animated Underline (Desktop) */}
                                        <div className="h-0.5 w-0 md:group-hover:w-full bg-accent transition-all duration-700 hidden lg:block" />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
