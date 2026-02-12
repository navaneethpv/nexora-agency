"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RiCheckLine } from "react-icons/ri";

export default function WhyNexora() {
    const checklist = [
        "Transparent communication",
        "Quality-driven methodologies",
        "Secure & reliable infrastructure",
        "Intuitive management interfaces",
        "Architected for scalability",
        "Dedicated technical guidance"
    ];

    return (
        <section id="why" className="relative py-24 md:py-32 px-4 overflow-hidden bg-background">
            <div className="section-container relative z-10 px-2 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-left mb-16 md:mb-24"
                >
                    <h2 className="text-4xl sm:text-6xl md:text-8xl font-medium tracking-tighter mb-6 leading-none text-white">
                        The <span className="text-accent font-semibold">Nexora</span> Edge
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    <div className="glass-card rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-16 lg:p-24 relative overflow-hidden">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-24">
                            {/* Left Content */}
                            <div className="flex-1 space-y-10 md:space-y-16 w-full text-center lg:text-left">
                                <div className="space-y-6 md:space-y-8">
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight text-white">
                                        Built for reliability <br className="hidden sm:block" /> and visionary growth
                                    </h3>
                                    <p className="text-secondary text-base md:text-xl font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-90">
                                        We architect digital platforms that are stable, intuitive, and engineered to endure.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 text-left">
                                    {checklist.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 + i * 0.05 }}
                                            className="flex items-center gap-4 group"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shrink-0">
                                                <RiCheckLine className="w-4 h-4" />
                                            </div>
                                            <span className="text-secondary text-base md:text-lg font-normal group-hover:text-white transition-colors duration-300">
                                                {item}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Right CTA Card */}
                            <div className="w-full lg:w-[450px] shrink-0">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white/3 backdrop-blur-2xl border border-white/10 p-6 sm:p-10 md:p-14 rounded-3xl md:rounded-[3rem] text-center shadow-2xl relative group overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    <h4 className="text-2xl md:text-4xl font-medium mb-4 relative z-10 text-white">Ready to begin?</h4>
                                    <p className="text-secondary text-sm md:text-lg font-normal mb-8 md:mb-10 relative z-10 opacity-80">
                                        Let's discuss your next digital milestone.
                                    </p>

                                    <div className="space-y-6 relative z-10">
                                        <Link
                                            href="/contact"
                                            className="w-full bg-accent text-white py-4 md:py-6 rounded-full font-medium text-base md:text-xl group/btn flex items-center justify-center gap-3 active:scale-[0.98] transition-all shadow-lg shadow-accent/10"
                                        >
                                            <span>Get started</span>
                                            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                                        </Link>

                                        <Link
                                            href="/contact"
                                            className="block w-full text-secondary hover:text-white text-[10px] md:text-sm font-medium tracking-widest md:tracking-[0.3em] uppercase transition-colors py-2"
                                        >
                                            Or book a strategy call
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
