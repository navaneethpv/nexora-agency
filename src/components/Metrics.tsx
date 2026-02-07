"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const metrics = [
    { label: "Products Launched", value: "40+", description: "Production-ready solutions deployed globally." },
    { label: "Technical Precision", value: "99.9%", description: "Code quality and performance standards." },
    { label: "Partner Retention", value: "92%", description: "Long-term collaboration with our clients." },
    { label: "Avg. Speed Increase", value: "2.5x", description: "Optimization across legacy system migrations." },
];

export default function Metrics() {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="section-container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {metrics.map((metric, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} direction="up" distance={20}>
                            <div className="flex flex-col items-start p-8 md:p-10 rounded-4xl bg-white/2 border border-white/5 hover:border-accent/20 transition-all duration-500 group h-full">
                                <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-white/40 mb-4 tracking-tight group-hover:from-accent group-hover:to-accent-secondary transition-all duration-500">
                                    {metric.value}
                                </span>
                                <h3 className="text-base md:text-lg font-medium text-white mb-2 uppercase tracking-widest opacity-90">
                                    {metric.label}
                                </h3>
                                <p className="text-secondary text-sm md:text-base font-normal opacity-60 leading-relaxed">
                                    {metric.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
