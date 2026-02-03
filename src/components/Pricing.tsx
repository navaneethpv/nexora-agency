"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function WhyNexora() {
    return (
        <section id="why" className="py-10 md:py-20 px-4 md:px-0">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-xl mx-auto mb-6 md:mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Why <span className="italic font-medium text-accent">Nexora</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="glass-card rounded-3xl md:rounded-[2.5rem] p-6 md:p-12 relative overflow-hidden group">
                        <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-10 relative z-10">
                            <div className="space-y-6 flex-1">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-3">A performance-first mindset</h3>
                                    <p className="text-secondary text-base md:text-lg font-medium leading-relaxed">We don't just build sites; we build high-performance assets for your business.</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                    {[
                                        "Clear communication",
                                        "Clean and maintainable code",
                                        "Performance-first mindset",
                                        "Long-term scalability",
                                        "Institution-ready security",
                                        "Dedicated support"
                                    ].map((point, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <span className="text-secondary text-xs sm:text-sm font-bold">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-black/40 backdrop-blur-xl border border-white/5 p-6 md:p-8 rounded-3xl md:rounded-4xl w-full lg:w-[320px] flex flex-col items-center justify-center text-center">
                                <h4 className="text-lg md:text-xl font-bold mb-2">Ready to scale?</h4>
                                <p className="text-xs text-secondary mb-6 md:mb-8">Let's discuss your technical needs.</p>

                                <button className="w-full bg-accent text-white py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-accent/20 mb-4">
                                    Get started
                                </button>
                                <button className="text-secondary text-[10px] md:text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                                    Book a call
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
