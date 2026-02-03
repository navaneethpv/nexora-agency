"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSocialIcon } from "./AnimatedSocialIcon";
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [hoveredPath, setHoveredPath] = useState<string | null>(null);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Work", href: "#work" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[95%] md:max-w-[80%] px-2 md:px-6">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`rounded-full p-1.5 md:p-2 flex items-center justify-between w-full border transition-all duration-500 ${scrolled
                    ? "bg-white/5 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]"
                    : "bg-transparent backdrop-blur-0 border-transparent shadow-none"
                    }`}
            >
                <div className="flex items-center gap-4 md:gap-16 pl-4 md:pl-8 pr-1 md:pr-2 w-full justify-between">
                    <Link
                        href="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="hover:opacity-80 transition-opacity whitespace-nowrap"
                    >
                        <Image
                            src="/logo.png"
                            alt="Nexora Logo"
                            width={240}
                            height={60}
                            className="h-8 md:h-14 w-auto brightness-200"
                        />
                    </Link>

                    <nav
                        className="hidden lg:flex items-center gap-2 relative px-2 py-1"
                        onMouseLeave={() => setHoveredPath(null)}
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                                className="relative"
                            >
                                <Link
                                    href={link.href}
                                    onMouseEnter={() => setHoveredPath(link.href)}
                                    className="relative px-4 py-2 text-sm font-bold text-secondary hover:text-white transition-colors duration-300 rounded-full block"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <AnimatePresence>
                                        {hoveredPath === link.href && (
                                            <motion.div
                                                layoutId="nav-hover"
                                                className="absolute inset-0 bg-white/10 rounded-full z-0"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                transition={{
                                                    type: "spring",
                                                    bounce: 0.25,
                                                    stiffness: 130,
                                                    damping: 18,
                                                }}
                                            />
                                        )}
                                    </AnimatePresence>
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="hidden xl:flex items-center gap-3 border-r border-white/10 pr-6 mr-2">
                            <AnimatedSocialIcon type="whatsapp" href="#" size={20} />
                            <AnimatedSocialIcon type="linkedin" href="#" size={20} />
                            <AnimatedSocialIcon type="github" href="#" size={20} />
                            <AnimatedSocialIcon type="instagram" href="#" size={20} />
                        </div>
                        <button className="bg-accent text-white px-5 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold hover:brightness-110 transition-all shadow-xl shadow-accent/30 active:scale-95 whitespace-nowrap bg-linear-to-r from-accent to-accent-secondary">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </motion.div>
        </nav>
    );
}
