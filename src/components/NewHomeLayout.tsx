"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
    RiArrowRightLine, 
    RiSparkling2Line, 
    RiFlashlightLine,
    RiCodeSSlashLine,
    RiPaletteLine,
    RiShieldFlashLine,
    RiNodeTree,
    RiMenu4Line,
    RiCloseLine
} from "react-icons/ri";
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import TrustTicker from "@/components/TrustTicker";
import Footer from "@/components/Footer";

// Inline new Navbar matching the design (transparent, centered text links)
function NewNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Services", href: "/#services" },
        { name: "Work", href: "/#work" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f1519]/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
            <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <Image
                        src="/logo.png"
                        alt="Nexora Logo"
                        width={180}
                        height={45}
                        className="h-8 w-auto brightness-200"
                        priority
                    />
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            className="text-sm font-semibold text-white/80 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:block">
                    <Link href="/contact">
                        <button className="bg-accent text-[#0f1519] px-6 py-2.5 rounded-md text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-accent/20">
                            Get in Touch
                        </button>
                    </Link>
                </div>

                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <RiCloseLine className="w-6 h-6" /> : <RiMenu4Line className="w-6 h-6" />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0f1519]/95 backdrop-blur-xl border-b border-white/10"
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
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                <button className="w-full bg-accent text-[#0f1519] mt-4 px-5 py-3 rounded-md font-bold hover:brightness-110 transition-all">
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

export default function NewHomeLayout() {
    return (
        <div className="min-h-screen bg-[#0f1519] text-white selection:bg-accent/30 font-sans overflow-x-hidden pt-24">
            <NewNavbar />

            {/* HERO SECTION */}
            <section className="relative px-6 py-12 md:py-24 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                {/* Left Content */}
                <div className="flex flex-col items-start z-10 w-full max-w-xl mx-auto lg:mx-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[10px] md:text-[11px] font-bold text-accent mb-8 uppercase tracking-widest"
                    >
                        <RiSparkling2Line className="w-3.5 h-3.5" />
                        <span>Crafting exceptional digital experiences</span>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
                    >
                        Modern Web <br />
                        <span className="text-glow bg-clip-text text-transparent bg-linear-to-b from-accent to-accent-secondary italic">Solutions.</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg md:text-xl font-medium max-w-[90%] mb-10 leading-relaxed"
                    >
                        Nexora builds clean, scalable, and performance-focused websites and web applications for businesses and institutions.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Link href="/#work" className="w-full sm:w-auto">
                            <button className="w-full bg-accent text-[#0f1519] px-8 py-4 rounded-md font-bold text-sm tracking-wide hover:brightness-110 transition-all shadow-[0_0_20px_rgba(11,185,243,0.3)]">
                                View Our Work
                            </button>
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto">
                            <button className="w-full bg-[#182128] border border-white/10 text-white px-8 py-4 rounded-md font-bold text-sm tracking-wide hover:bg-[#202b33] transition-all flex items-center justify-center gap-2">
                                Get in Touch <RiArrowRightLine />
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Content - Visual */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="relative w-full aspect-square md:aspect-4/3 max-w-lg mx-auto lg:max-w-none"
                >
                    <div className="absolute inset-0 bg-[#131b20] rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,185,243,0.1)_0%,transparent_60%)]" />
                        <GravityStarsBackground
                            starsCount={40}
                            className="w-full h-full text-accent"
                            starsOpacity={0.8}
                        />
                        
                        {/* Abstract globe placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[60%] h-[60%] rounded-full border border-white/10 shadow-[inset_0_0_40px_rgba(11,185,243,0.1),0_0_40px_rgba(11,185,243,0.1)] relative">
                                <div className="absolute top-1/2 left-0 w-full h-px bg-white/5" />
                                <div className="absolute top-1/4 left-0 w-full h-px bg-white/5" />
                                <div className="absolute top-3/4 left-0 w-full h-px bg-white/5" />
                                <div className="absolute top-0 left-1/2 w-px h-full bg-white/5" />
                                <div className="absolute top-0 left-1/4 w-px h-full bg-white/5" />
                                <div className="absolute top-0 left-3/4 w-px h-full bg-white/5" />
                            </div>
                        </div>

                        {/* Floating Card */}
                        <motion.div 
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-[#182128]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4 max-w-[calc(100%-3rem)] shadow-xl"
                        >
                            <div className="bg-[#10151a] p-3 rounded-xl text-accent border border-white/5">
                                <RiFlashlightLine className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-[13px] md:text-sm">Fast & Reliable</h4>
                                <p className="text-white/50 text-[11px] md:text-xs">Smooth performance & quick load.</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* TRUST TICKER (Replaces Stats) */}
            <TrustTicker />

            {/* EXPERTISE SECTION */}
            <section className="px-6 py-24 md:py-32 max-w-[1400px] mx-auto border-t border-white/5">
                <div className="flex flex-col md:flex-row justify-between mb-16 md:mb-24 gap-8">
                    <div>
                        <div className="text-[11px] font-bold text-accent uppercase tracking-widest mb-4">Specialized Solutions</div>
                        <h2 className="text-4xl md:text-5xl font-bold max-w-xl leading-[1.1]">
                            Distilled digital engineering for demanding industries.
                        </h2>
                    </div>
                    <div className="max-w-md text-white/60 font-medium text-base md:text-lg leading-relaxed">
                        We don't just build websites; we architect digital platforms that are stable, intuitive, and engineered to endure.
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#131b20] border border-white/5 rounded-[2rem] p-8 md:p-10 hover:border-white/10 transition-colors group">
                        <div className="bg-[#182128] w-14 h-14 rounded-xl flex items-center justify-center text-accent mb-8 border border-white/5 group-hover:bg-accent/10 transition-colors">
                            <RiCodeSSlashLine className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
                        <p className="text-white/60 text-sm md:text-base mb-8 min-h-[48px]">Custom websites built for institutions and businesses.</p>
                        <Link href="/services" className="text-accent text-xs font-bold tracking-widest uppercase flex items-center gap-2 group-hover:text-accent-glow transition-colors">
                            Learn More <RiArrowRightLine />
                        </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#131b20] border border-white/5 rounded-[2rem] p-8 md:p-10 hover:border-white/10 transition-colors group relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,185,243,0.05)_0%,transparent_60%)]" />
                        <div className="bg-[#182128] w-14 h-14 rounded-xl flex items-center justify-center text-accent mb-8 border border-white/5 group-hover:bg-accent/10 transition-colors relative z-10">
                            <RiPaletteLine className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 relative z-10">User-Friendly Design</h3>
                        <p className="text-white/60 text-sm md:text-base mb-8 min-h-[48px] relative z-10">Simple, clean, and easy-to-use interfaces.</p>
                        <Link href="/services" className="text-accent text-xs font-bold tracking-widest uppercase flex items-center gap-2 group-hover:text-accent-glow transition-colors relative z-10">
                            Learn More <RiArrowRightLine />
                        </Link>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#131b20] border border-white/5 rounded-[2rem] p-8 md:p-10 hover:border-white/10 transition-colors group">
                        <div className="bg-[#182128] w-14 h-14 rounded-xl flex items-center justify-center text-accent mb-8 border border-white/5 group-hover:bg-accent/10 transition-colors">
                            <RiNodeTree className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Future-Ready Systems</h3>
                        <p className="text-white/60 text-sm md:text-base mb-8 min-h-[48px]">Digital solutions that grow with your needs.</p>
                        <Link href="/services" className="text-accent text-xs font-bold tracking-widest uppercase flex items-center gap-2 group-hover:text-accent-glow transition-colors">
                            Learn More <RiArrowRightLine />
                        </Link>
                    </div>
                </div>
            </section>

            {/* GLOBAL SCALE SECTION */}
            <section className="px-6 py-24 md:py-32 max-w-[1400px] mx-auto border-t border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="bg-[#131b20] rounded-[2.5rem] border border-white/5 aspect-square md:aspect-4/3 w-full relative overflow-hidden flex items-center justify-center">
                    <div className="w-[80%] h-[80%] bg-[#1a2329] rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(11,185,243,0.05)_0%,transparent_100%)]" />
                    </div>
                </div>

                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">The Nexora Edge.</h2>
                    
                    <div className="space-y-10">
                        <div className="flex gap-6 items-start">
                            <div className="bg-[#182128] p-3 rounded-full text-accent mt-1 border border-white/5">
                                <RiShieldFlashLine className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-3">Secure & Reliable</h4>
                                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                                    Quality-driven methodologies and built-in security ensuring peace of mind.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="bg-[#182128] p-3 rounded-full text-accent mt-1 border border-white/5">
                                <RiNodeTree className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-3">Architected for Scalability</h4>
                                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                                    Optimized codebases that scale automatically with zero downtime.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="px-6 py-24 pb-32 max-w-[1400px] mx-auto">
                <div className="bg-[#131b20] rounded-[3rem] border border-white/5 p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
                    
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 relative z-10 max-w-2xl mx-auto">
                        Ready to begin?
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl font-medium mb-12 max-w-xl mx-auto relative z-10">
                        Let's discuss your next digital milestone. Join the elite brands sealing their web-presence with Nexora's engineering excellence.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <button className="w-full bg-accent text-[#0f1519] px-8 py-4 rounded-md font-bold text-sm tracking-wide hover:brightness-110 transition-all shadow-[0_0_20px_rgba(11,185,243,0.2)]">
                                Book a Strategy Call
                            </button>
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto">
                            <button className="w-full bg-[#182128] border border-white/10 text-white px-8 py-4 rounded-md font-bold text-sm tracking-wide hover:bg-[#202b33] transition-all">
                                Request Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
