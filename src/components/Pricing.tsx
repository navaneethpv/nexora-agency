"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function WhyNexora() {
    const checklist = [
        "Clear communication",
        "Quality-driven approach",
        "Secure and reliable systems",
        "Easy to manage and update",
        "Designed to grow over time",
        "Ongoing support and guidance"
    ];

    return (
        <section id="why" className="relative py-16 md:py-32 px-4 overflow-hidden bg-black">
            {/* Soft background ambient glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
                <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent/20 blur-[80px] md:blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent-secondary/10 blur-[80px] md:blur-[120px] rounded-full" />
            </div>

            <div className="section-container relative z-10 px-2 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6">
                        Why <span className="text-accent underline decoration-accent/20 underline-offset-4 md:underline-offset-8">Nexora</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="glass-card rounded-4xl sm:rounded-[2.5rem] md:rounded-[4rem] p-6 sm:p-10 md:p-16 lg:p-20 relative overflow-hidden">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-20">
                            {/* Left Content */}
                            <div className="flex-1 space-y-6 md:space-y-10 w-full text-center lg:text-left">
                                <div className="space-y-4 md:space-y-6">
                                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                                        Built for reliability <br className="hidden sm:block" /> and growth
                                    </h3>
                                    <p className="text-secondary text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                                        We create digital platforms that are reliable, easy to manage, and built to last.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 sm:gap-y-6 text-left">
                                    {checklist.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 + i * 0.05 }}
                                            className="flex items-center gap-3 sm:gap-4 group"
                                        >
                                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
                                                <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5" strokeWidth={3} />
                                            </div>
                                            <span className="text-secondary text-sm sm:text-base md:text-lg font-bold group-hover:text-white transition-colors">
                                                {item}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Right CTA Card */}
                            <div className="w-full lg:w-[400px] shrink-0">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-black/40 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 md:p-12 rounded-4xl sm:rounded-[2.5rem] md:rounded-[3rem] text-center shadow-2xl relative group overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 relative z-10">Ready to get started?</h4>
                                    <p className="text-secondary text-xs sm:text-sm md:text-base font-medium mb-8 sm:mb-10 relative z-10">
                                        Let's discuss your website or digital requirements.
                                    </p>

                                    <div className="space-y-4 sm:space-y-5 relative z-10">
                                        <button className="w-full bg-accent text-white py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl md:rounded-3xl font-black text-sm sm:text-base md:text-lg tracking-wide hover:brightness-110 transition-all shadow-xl shadow-accent-glow/20 active:scale-[0.98] group/btn flex items-center justify-center gap-2">
                                            Get started
                                            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                                        </button>

                                        <button className="block w-full text-secondary hover:text-white text-[10px] sm:text-xs md:text-sm font-black tracking-[0.2em] uppercase transition-colors py-2">
                                            Book a call
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Subtle bottom divider */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
        </section>
    );
}
