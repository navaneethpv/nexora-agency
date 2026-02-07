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
        <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-background">
            <div className="section-container">
                <ScrollReveal direction="down" distance={20}>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-8xl font-medium mb-6 md:mb-0 tracking-tight leading-none text-white">
                                Specialized <br />
                                <span className="text-accent font-bold">Solutions</span>
                            </h2>
                        </div>
                        <p className="max-w-md text-secondary text-lg md:text-xl font-normal leading-relaxed opacity-80">
                            Distilled digital engineering for industries demanding technical precision and aesthetic absolute.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 md:gap-8">
                    {/* Big Card 1 - Web Dev */}
                    <div className="md:col-span-8 md:row-span-1">
                        <FeatureCard
                            feature={features[0]}
                            index={0}
                            className="bg-white/2 border-white/5 h-full"
                            iconSize="w-8 h-8 md:w-10 md:h-10"
                        />
                    </div>

                    {/* Smaller Card 2 - Design */}
                    <div className="md:col-span-4 md:row-span-1">
                        <FeatureCard
                            feature={features[1]}
                            index={1}
                            className="bg-accent/5 border-accent/10 h-full"
                        />
                    </div>

                    {/* Smaller Card 3 - Fast */}
                    <div className="md:col-span-4 md:row-span-1">
                        <FeatureCard
                            feature={features[2]}
                            index={2}
                            className="bg-white/2 border-white/5 h-full"
                        />
                    </div>

                    {/* Big Card 4 - Secure */}
                    <div className="md:col-span-8 md:row-span-1">
                        <FeatureCard
                            feature={features[5]}
                            index={5}
                            className="bg-white/2 border-white/5 h-full"
                            iconSize="w-8 h-8 md:w-10 md:h-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ feature, index, className = "", iconSize = "w-6 h-6 md:w-7 md:h-7" }: { feature: any, index: number, className?: string, iconSize?: string }) {
    return (
        <ScrollReveal key={index} delay={index * 0.1} direction="up" distance={20} className="h-full">
            <motion.div
                className={`glass-card p-10 md:p-12 rounded-[2.5rem] transition-all duration-700 group h-full relative overflow-hidden border ${className}`}
            >
                <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/3 border border-white/5 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-700">
                        <feature.icon className={iconSize} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-medium mb-4 text-white group-hover:text-accent transition-colors duration-300">
                        {feature.title}
                    </h3>
                    <p className="text-secondary text-base md:text-lg leading-relaxed font-normal opacity-70 group-hover:opacity-100 transition-opacity">
                        {feature.description}
                    </p>
                </div>
                {/* Subtle radial glow on hover */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-1000 z-0 pointer-events-none" />
            </motion.div>
        </ScrollReveal>
    );
}
