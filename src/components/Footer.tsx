"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-16 border-t border-white/5">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-32"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                        Let’s Build <br />
                        <span className="italic font-medium text-accent text-glow">Something Reliable</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-secondary mb-12 leading-relaxed font-medium">
                        If you’re looking for a dependable team to design and build your next digital product, Nexora is ready to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="group bg-accent text-white px-10 py-5 rounded-full text-base font-bold hover:brightness-110 transition-all shadow-xl shadow-accent/30 flex items-center gap-3">
                            Contact Nexora
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                <div id="contact" className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-[12px] font-medium text-secondary border-t border-white/5">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="text-white font-bold text-sm tracking-tight">Nexora</span>
                        </div>
                        <p className="max-w-[200px] leading-relaxed">
                            Web Development & <br />
                            Digital Solutions Company
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                        <div className="flex flex-col gap-3">
                            <span className="text-white">Navigation</span>
                            <div className="flex flex-col gap-2">
                                <Link href="#" className="hover:text-white transition-colors">About</Link>
                                <Link href="#" className="hover:text-white transition-colors">Services</Link>
                                <Link href="#" className="hover:text-white transition-colors">Work</Link>
                                <Link href="#" className="hover:text-white transition-colors">Contact</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="text-white">Contact</span>
                            <div className="flex flex-col gap-2">
                                <span className="hover:text-white transition-colors cursor-pointer">contact@nexora.tech</span>
                                <span className="text-accent">© 2026 Nexora</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
