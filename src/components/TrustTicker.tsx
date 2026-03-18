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
        <section id="trust-section" className="py-16 md:py-24 border-b border-[#163832] bg-[#051F20] overflow-hidden">
            <div className="section-container relative max-w-[1400px] mx-auto px-6">
                <div className="mb-10 flex">
                    <ShinyText
                        text="POWERING MODERN EXPERIENCES"
                        className="text-xs font-semibold uppercase tracking-[0.3em]"
                        color="rgba(142,182,155,0.5)"
                        shineColor="#DAF1DE"
                        speed={4}
                    />
                </div>

                <div className="w-full relative z-10">
                    <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] pointer-events-none">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
                            className="flex flex-nowrap gap-12 md:gap-24 items-center shrink-0 py-4 w-max pr-16 md:pr-32"
                        >
                            {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 md:gap-6 group shrink-0"
                                >
                                    <div className="p-3 md:p-4 bg-[#0B2B26] rounded-xl border border-[#163832] transition-colors group-hover:border-[#235347]">
                                        <tech.icon className="w-7 h-7 md:w-9 md:h-9 text-[#8EB69B]/70 group-hover:text-[#DAF1DE] transition-colors duration-500" />
                                    </div>
                                    <span className="text-lg md:text-2xl font-light tracking-tight text-[#8EB69B]/80 group-hover:text-[#DAF1DE] transition-colors duration-400">
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
