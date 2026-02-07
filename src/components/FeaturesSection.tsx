"use client";

import { motion } from "framer-motion";
import { RiCodeSSlashLine, RiPaletteLine, RiFlashlightLine, RiNodeTree, RiSmartphoneLine, RiShieldFlashLine } from "react-icons/ri";
import ScrollReveal from "./ScrollReveal";

const features = [
    {
        title: "Web Development",
        description: "Custom websites built for institutions and businesses.",
        icon: RiCodeSSlashLine
    },
    {
        title: "User-Friendly Design",
        description: "Simple, clean, and easy-to-use interfaces.",
        icon: RiPaletteLine
    },
    {
        title: "Fast & Reliable Websites",
        description: "Smooth performance with quick loading times.",
        icon: RiFlashlightLine
    },
    {
        title: "Future-Ready Systems",
        description: "Digital solutions that grow with your needs.",
        icon: RiNodeTree
    },
    {
        title: "Responsive Design",
        description: "Perfect experience across all devices.",
        icon: RiSmartphoneLine
    },
    {
        title: "Secure & Trusted Technology",
        description: "Safe, stable, and dependable platforms.",
        icon: RiShieldFlashLine
    }
];

export default function FeaturesSection() {
    return (
        <section id="services" className="py-24 md:py-32 relative overflow-hidden">
            <div className="section-container">
                <ScrollReveal direction="down" distance={20}>
                    <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-4xl md:text-7xl font-medium mb-6 md:mb-8 tracking-tight leading-none text-white">
                            Core <span className="text-accent font-semibold">Expertise</span>
                        </h2>
                        <p className="text-secondary text-lg md:text-xl font-normal leading-relaxed opacity-80">
                            Distilled digital solutions for industries demanding technical precision and aesthetic excellence.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.1}
                            direction="up"
                            distance={20}
                        >
                            <motion.div
                                className="glass-card p-8 md:p-10 rounded-4xl transition-all duration-500 group h-full relative"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/3 border border-white/5 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-700 shadow-sm">
                                    <feature.icon className="w-6 h-6 md:w-7 md:h-7" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-medium mb-4 text-white group-hover:text-accent transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-secondary text-sm md:text-base leading-relaxed font-normal opacity-80">
                                    {feature.description}
                                </p>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
