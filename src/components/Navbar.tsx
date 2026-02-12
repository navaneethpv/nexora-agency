"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import useMagnetic from "@/hooks/useMagnetic";

export default function Navbar() {
    const magneticBtn = useMagnetic();
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [hoveredPath, setHoveredPath] = useState<string | null>(null);

    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Services", href: "/#services" },
        { name: "Work", href: "/#work" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-2 md:top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[98%] md:max-w-[1500px] px-2 md:px-6">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`glass-pill rounded-full transition-all duration-500 ${scrolled ? 'py-2 md:py-3 shadow-2xl' : 'py-3 md:py-5'} px-5 md:px-10 flex items-center justify-between`}
            >
                <div className="flex items-center gap-4 lg:gap-8 xl:gap-16 pl-4 md:pl-8 pr-1 md:pr-2 w-full justify-between">
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
                            className="h-7 md:h-9 lg:h-10 xl:h-12 w-auto brightness-200 transition-all duration-300"
                            priority
                            loading="eager"
                            sizes="(max-width: 768px) 150px, 240px"
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
                                    className="relative px-3 lg:px-4 py-2 text-xs lg:text-sm font-bold text-white/80 hover:text-white transition-colors duration-300 rounded-full block"
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
                        <Link href="/contact" className="hidden md:block">
                            <div ref={magneticBtn}>
                                <button className="bg-accent text-white px-4 lg:px-8 py-2 lg:py-3 rounded-full text-[10px] lg:text-sm font-bold hover:brightness-110 transition-all shadow-xl shadow-accent/30 active:scale-95 whitespace-nowrap bg-linear-to-r from-accent to-accent-secondary">
                                    Get in Touch
                                </button>
                            </div>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden text-white p-2 ml-auto"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMobileMenuOpen ? <RiCloseLine className="w-6 h-6" /> : <RiMenu4Line className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden absolute top-full left-0 w-full mt-2 bg-black/90 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-sm font-bold text-white/80 hover:text-white py-2 border-b border-white/5"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-2">
                                <button className="w-full bg-accent text-white px-5 py-3 rounded-xl font-bold hover:brightness-110 transition-all">
                                    Get in Touch
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
