"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-6">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="glass-pill rounded-full p-2 flex items-center justify-between w-full"
            >
                <div className="flex items-center gap-12 pl-6 pr-1 w-full justify-between">
                    <Link href="/" className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity whitespace-nowrap">
                        Nexora
                    </Link>

                    <div className="hidden md:flex items-center gap-10 text-sm font-bold text-secondary">
                        <Link href="#about" className="hover:text-white transition-colors duration-300">About</Link>
                        <Link href="#services" className="hover:text-white transition-colors duration-300">Services</Link>
                        <Link href="#work" className="hover:text-white transition-colors duration-300">Work</Link>
                        <Link href="#contact" className="hover:text-white transition-colors duration-300">Contact</Link>
                    </div>

                    <div className="flex items-center">
                        <button className="bg-accent text-white px-8 py-3 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-xl shadow-accent/30 active:scale-95 whitespace-nowrap">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </motion.div>
        </nav>
    );
}
