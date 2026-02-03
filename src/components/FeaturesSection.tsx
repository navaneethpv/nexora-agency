"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap, Layers, Smartphone, ShieldCheck } from "lucide-react";

const features = [
    {
        title: "Web Development",
        description: "Custom websites built for institutions and businesses.",
        icon: Code2
    },
    {
        title: "User-Friendly Design",
        description: "Simple, clean, and easy-to-use interfaces.",
        icon: Palette
    },
    {
        title: "Fast & Reliable Websites",
        description: "Smooth performance with quick loading times.",
        icon: Zap
    },
    {
        title: "Future-Ready Systems",
        description: "Digital solutions that grow with your needs.",
        icon: Layers
    },
    {
        title: "Responsive Design",
        description: "Perfect experience across all devices.",
        icon: Smartphone
    },
    {
        title: "Secure & Trusted Technology",
        description: "Safe, stable, and dependable platforms.",
        icon: ShieldCheck
    }
];

export default function FeaturesSection() {
    return (
        <section id="services" className="py-16 md:py-24 bg-white/1 border-y border-white/5 relative overflow-hidden">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-xl mx-auto mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                        What <span className="italic font-medium text-accent">We Do</span>
                    </h2>
                    <p className="text-secondary text-base md:text-lg px-4 md:px-0">
                        Specialized digital services for modern businesses and institutional scale.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, borderColor: "rgba(11, 185, 243, 0.3)" }}
                            className="glass-card p-6 md:p-8 rounded-3xl md:rounded-4xl transition-all duration-300 group relative"
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-5 md:mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                <feature.icon className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{feature.title}</h3>
                            <p className="text-secondary text-xs md:text-sm leading-relaxed group-hover:text-white/80 transition-colors font-medium">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
