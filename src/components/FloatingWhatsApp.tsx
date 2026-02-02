"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button after 600px of scrolling (past hero section)
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        // Initial check in case page is already scrolled
        toggleVisibility();
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    href="https://wa.me/your-number"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 40 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                    }}
                    className="fixed bottom-8 right-8 z-100 group"
                >
                    <div className="relative">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-accent/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Main Button */}
                        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(139,92,246,0.3)] border border-white/20 overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-tr from-black/20 to-transparent" />
                            <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10" />
                        </div>

                        {/* Status indicator */}
                        <div className="absolute top-1 right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-[#0a0a0a]">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        </div>

                        {/* Hover Label */}
                        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                            <div className="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-2xl whitespace-nowrap shadow-2xl">
                                <span className="text-white text-sm font-bold tracking-tight">Chat with us</span>
                            </div>
                        </div>
                    </div>
                </motion.a>
            )}
        </AnimatePresence>
    );
}
