"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const metrics = [
    { label: "Projects Delivered", value: "80+" },
    { label: "Client Satisfaction", value: "99%" },
    { label: "Support Cases", value: "100%" },
    { label: "Core Platforms", value: "50+" }
];

export default function Metrics() {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="section-container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {metrics.map((metric, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} direction="up" distance={20}>
                            <div className="relative group p-8 rounded-4xl bg-white/3 border border-white/5 hover:border-accent/40 transition-all duration-700">
                                <div className="text-5xl md:text-7xl font-semibold text-white mb-2 tracking-tighter group-hover:text-accent transition-colors">
                                    {metric.value}
                                </div>
                                <div className="text-secondary text-sm md:text-base font-medium uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">
                                    {metric.label}
                                </div>
                                {/* Technical Accent */}
                                <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-accent/20 group-hover:bg-accent animate-pulse" />
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
