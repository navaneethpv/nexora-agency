"use client";

import { motion } from "framer-motion";
import ShinyText from "./ShinyText";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiAdobephotoshop, SiExpress, SiMongodb, SiAdobeillustrator } from "react-icons/si";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";

const techStack = [
    { name: "Next.js", icon: RiNextjsFill },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: FaReact },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Tailwind", icon: RiTailwindCssFill },
    { name: "Photoshop", icon: SiAdobephotoshop },
    { name: "Illustrator", icon: SiAdobeillustrator },
    { name: "Figma", icon: FaFigma },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
];

export default function TrustTicker() {
    return (
        <section id="trust-section" className="py-20 md:py-32 border-b border-white/5 relative bg-background overflow-hidden">
            <div className="section-container relative">
                <div className="mb-12 md:mb-16 relative z-10 flex">
                    <ShinyText
                        text="ENGINEERING SCALE FOR INDUSTRY LEADERS"
                        className="text-[10px] md:text-lg font-semibold uppercase tracking-[0.5em] opacity-40"
                        color="rgba(255,255,255,0.4)"
                        shineColor="#ffffff"
                        speed={4}
                    />
                </div>

                <div className="w-full relative z-10">
                    <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] pointer-events-none">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
                            className="flex flex-nowrap gap-16 md:gap-32 items-center shrink-0 py-4 md:py-8 w-max pr-16 md:pr-32"
                        >
                            {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 md:gap-8 group shrink-0"
                                >
                                    <div className="relative z-10 p-3 md:p-5 bg-white/3 rounded-2xl border border-white/5 transition-colors group-hover:border-accent/40 group-hover:bg-white/5">
                                        <tech.icon className="w-8 h-8 md:w-12 md:h-12 text-white/20 group-hover:text-white transition-all duration-700" />
                                    </div>
                                    <span className="text-lg md:text-3xl font-medium tracking-tight text-white/30 group-hover:text-white transition-colors duration-400">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
