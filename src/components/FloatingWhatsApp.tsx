"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes, FaPaperPlane } from "react-icons/fa";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
                setIsOpen(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        toggleVisibility();
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const whatsappNumber = "+916282592895"; // Replace with actual number
    const welcomeMessage = "Hi there! 👋 How can we help you today with your digital journey?";

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-100 flex flex-col items-end gap-3 md:gap-4 font-sans max-w-[calc(100vw-32px)]">
                        {/* Chat Window */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    className="w-[300px] xs:w-[320px] md:w-[380px] bg-[#111111] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border border-white/5 mb-2"
                                >
                                    {/* Header Section */}
                                    <div className="bg-accent p-6 md:p-8 flex items-center justify-between">
                                        <div className="flex items-center gap-3 md:gap-4">
                                            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/20 overflow-hidden">
                                                <Image
                                                    src="/logo.png"
                                                    alt="Nexora"
                                                    fill
                                                    className="object-contain p-2 md:p-2.5 brightness-0 invert"
                                                />
                                                <div className="absolute bottom-0.5 right-0.5 md:bottom-1 md:right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-emerald-500 rounded-full border-2 border-accent" />
                                            </div>
                                            <div className="space-y-0.5">
                                                <h4 className="text-white font-bold text-base md:text-lg tracking-tight">Nexora Agency</h4>
                                                <p className="text-white/70 text-[9px] md:text-[10px] font-black tracking-[0.15em] uppercase">Replies within 1h</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-black/10 transition-colors"
                                        >
                                            <FaTimes className="text-white/80 w-4 h-4 md:w-5 md:h-5" />
                                        </button>
                                    </div>

                                    {/* Body Section */}
                                    <div className="p-6 md:p-8 pt-8 md:pt-10">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="bg-[#1a1a1a] border border-white/5 p-5 md:p-6 rounded-[1.25rem] md:rounded-[1.5rem] relative"
                                        >
                                            <p className="text-[#999999] text-sm md:text-[15px] leading-relaxed font-medium">
                                                {welcomeMessage}
                                            </p>
                                            <div className="mt-3 md:mt-4 flex justify-end">
                                                <span className="text-[8px] md:text-[9px] text-white/20 font-black tracking-widest uppercase">Just now</span>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* CTA Footer Wrapper */}
                                    <div className="p-6 md:p-8 pt-0 space-y-4 md:space-y-6">
                                        <div className="h-px w-full bg-white/5" />

                                        <a
                                            href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-3 md:gap-4 w-full bg-accent text-white py-4 md:py-5 rounded-[1.25rem] md:rounded-[1.5rem] font-bold text-sm md:text-[15px] hover:brightness-105 transition-all shadow-xl shadow-accent/20 active:scale-[0.98] group"
                                        >
                                            <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                                            <span>Start WhatsApp Chat</span>
                                            <FaPaperPlane className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-40 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </a>

                                        <p className="text-center text-[9px] md:text-[10px] text-white/20 font-black tracking-[0.2em] uppercase">Executive is Online</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Toggle Button */}
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            initial={{ opacity: 0, scale: 0, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0, y: 40 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group p-0"
                        >
                            <div className="relative">
                                {/* Glow */}
                                <div className={`absolute inset-0 bg-accent/30 blur-2xl rounded-full transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                                {/* Icon Outer */}
                                <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 overflow-hidden ${isOpen ? 'bg-white text-accent' : 'bg-accent text-white'}`}>
                                    <div className="absolute inset-0 bg-linear-to-tr from-black/10 to-transparent" />
                                    {isOpen ? (
                                        <FaTimes className="w-5 h-5 md:w-6 md:h-6 relative z-10 rotate-90" />
                                    ) : (
                                        <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8 relative z-10" />
                                    )}
                                </div>

                                {/* Pulse Status */}
                                {!isOpen && (
                                    <div className="absolute top-0.5 right-0.5 md:top-1 md:right-1 w-3.5 h-3.5 md:w-4 md:h-4 bg-white rounded-full flex items-center justify-center shadow-md border-[2px] md:border-[3px] border-[#0a0a0a]">
                                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent rounded-full animate-pulse" />
                                    </div>
                                )}
                            </div>
                        </motion.button>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
