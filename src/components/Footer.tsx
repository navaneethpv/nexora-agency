"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { RiArrowRightLine, RiMailLine, RiMapPinLine, RiPhoneLine } from "react-icons/ri";
import { AnimatedSocialIcon } from "./AnimatedSocialIcon";

export default function Footer() {
    return (
        <footer id="contact" className="relative pt-24 pb-12 border-t border-white/5 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-accent/5 blur-[120px] rounded-full -z-10 opacity-50" />

            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <Link href="/" className="inline-block">
                                <Image
                                    src="/logo.png"
                                    alt="Nexora Logo"
                                    width={180}
                                    height={45}
                                    className="h-10 w-auto brightness-200"
                                />
                            </Link>
                            <p className="text-secondary text-lg max-w-md leading-relaxed font-medium">
                                Building next-generation digital experiences with a focus on high-performance, scalability, and premium design.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-white transition-all duration-300 hover:bg-white/5">
                                    <AnimatedSocialIcon type="linkedin" href="https://www.linkedin.com/in/navaneethpv-dev/" target="_blank" size={20} />
                                </div>
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-white transition-all duration-300 hover:bg-white/5">
                                    <AnimatedSocialIcon type="github" href="https://github.com/navaneethpv" target="_blank" size={20} />
                                </div>
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-white transition-all duration-300 hover:bg-white/5">
                                    <AnimatedSocialIcon type="instagram" href="https://www.instagram.com/nexoraweb.tech/" target="_blank" size={20} />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="space-y-6">
                            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Services</h4>
                            <div className="flex flex-col gap-4 text-secondary text-sm font-medium">
                                <Link href="#" className="hover:text-white transition-colors">Web Development</Link>
                                <Link href="#" className="hover:text-white transition-colors">UI/UX Design</Link>
                                <Link href="#" className="hover:text-white transition-colors">Brand Identity</Link>
                                <Link href="#" className="hover:text-white transition-colors">Performance</Link>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Company</h4>
                            <div className="flex flex-col gap-4 text-secondary text-sm font-medium">
                                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                                <Link href="#" className="hover:text-white transition-colors">Work</Link>
                                <Link href="/process" className="hover:text-white transition-colors">Process</Link>
                                <Link href="#" className="hover:text-white transition-colors">Join Us</Link>
                            </div>
                        </div>

                        <div className="space-y-6 col-span-2 md:col-span-1">
                            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Contact</h4>
                            <div className="flex flex-col gap-4 text-secondary text-sm font-medium">
                                <a href="mailto:agency@nexoraweb.tech" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <RiMailLine className="w-3.5 h-3.5" />
                                    <span>agency@nexoraweb.tech</span>
                                </a>
                                <div className="flex flex-col gap-2">
                                    <a href="tel:+916282592895" className="flex items-center gap-2 hover:text-white transition-colors">
                                        <RiPhoneLine className="w-3.5 h-3.5" />
                                        <span>+91 62825 92895</span>
                                    </a>
                                    <a href="tel:+918921592748" className="flex items-center gap-2 hover:text-white transition-colors pl-5">
                                        <span>+91 89215 92748</span>
                                    </a>
                                </div>
                                <div className="pt-2">
                                    <Link href="/contact" className="text-accent font-bold hover:underline inline-flex items-center gap-1 group">
                                        Book a call
                                        <RiArrowRightLine className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-secondary/60 text-[12px] font-medium tracking-wide">
                        © 2026 NEXORA AGENCY. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-8 text-[12px] font-medium text-secondary/60 tracking-wide">
                        <Link href="/privacy" className="hover:text-white transition-colors" aria-label="Privacy Policy">PRIVACY POLICY</Link>
                        <Link href="/terms" className="hover:text-white transition-colors" aria-label="Terms of Service">TERMS OF SERVICE</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
