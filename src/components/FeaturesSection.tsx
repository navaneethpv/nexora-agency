"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap, Layers, Smartphone, ShieldCheck } from "lucide-react";

const features = [
    {
        title: "Web Development",
        description: "Building clean, scalable, and secure web applications.",
        icon: Code2
    },
    {
        title: "UI & UX Design",
        description: "User-focused interfaces designed for clarity and ease of use.",
        icon: Palette
    },
    {
        title: "Performance Optimization",
        description: "Making your web products lightning-fast and responsive.",
        icon: Zap
    },
    {
        title: "Scalable Architecture",
        description: "Systems designed to grow seamlessly with your business.",
        icon: Layers
    },
    {
        title: "Responsive Design",
        description: "Perfect experiences across all devices and screen sizes.",
        icon: Smartphone
    },
    {
        title: "Technical Excellence",
        description: "A performance-first mindset in every line of code.",
        icon: ShieldCheck
    }
];

export default function FeaturesSection() {
    return (
        <section id="services" className="py-24 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        What <span className="italic font-medium text-accent">We Do</span>
                    </h2>
                    <p className="text-secondary text-lg">
                        Specialized digital services for modern businesses and institutional scale.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, borderColor: "rgba(124, 58, 237, 0.3)" }}
                            className="glass-card p-8 rounded-[2rem] transition-all duration-300 group relative"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-secondary text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
