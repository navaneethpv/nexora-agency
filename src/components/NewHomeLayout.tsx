"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiLayout2Line,
    RiCloudLine,
    RiTerminalBoxLine,
    RiRocketLine,
    RiShieldStarLine,
    RiMenu4Line,
    RiCloseLine,
    RiSendPlaneLine,
    RiCheckLine
} from "react-icons/ri";

import TrustTicker from "@/components/TrustTicker";
import FAQ from "@/components/FAQ";
import { navLinks } from "@/components/Navbar";

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

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#051F20]/95 py-4 border-b border-[#163832]' : 'bg-transparent py-6'}`}>
            <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <Image
                        src="/logo.png"
                        alt="Nexora Logo"
                        width={180}
                        height={45}
                        className="md:h-12 h-10 w-auto brightness-200"
                        priority
                    />
                </Link>

                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-[#8EB69B] hover:text-[#DAF1DE] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:block">
                    <Link href="/contact">
                        <button className="bg-[#DAF1DE] text-[#051F20] px-7 py-2.5 rounded-full text-sm font-bold hover:bg-[#8EB69B] transition-colors">
                            Get Started
                        </button>
                    </Link>
                </div>

                <button
                    className="md:hidden text-[#DAF1DE] p-2"
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
                        className="md:hidden bg-[#051F20] border-b border-[#163832] overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-base font-medium text-[#DAF1DE] py-3 border-b border-[#0B2B26]"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                <button className="w-full bg-[#DAF1DE] text-[#051F20] mt-6 px-5 py-3 rounded-full font-bold hover:bg-[#8EB69B] transition-colors">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

function StatsStrip() {
    const stats = [
        { value: "150+", label: "Projects Launched" },
        { value: "99%", label: "Client Satisfaction" },
        { value: "40+", label: "Tech Experts" },
        { value: "12+", label: "Industry Awards" }
    ];

    return (
        <section className="border-t border-b border-[#163832] bg-[#051F20] py-16">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-[#163832] md:divide-x">
                {stats.map((stat, i) => (
                    <div key={i} className={`flex flex-col items-center justify-center text-center ${i % 2 !== 0 ? 'border-l border-[#163832] md:border-0' : ''}`}>
                        <div className="text-4xl md:text-5xl font-light text-[#DAF1DE] mb-3 tracking-tight">{stat.value}</div>
                        <div className="text-xs font-medium text-[#8EB69B] uppercase tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function NewFooter() {
    return (
        <footer className="border-t border-[#163832] bg-[#0B2B26] pt-24 pb-12">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24 text-left">
                    <div className="col-span-1 md:col-span-4 lg:col-span-5">
                        <Link href="/" className="inline-block mb-8">
                            <Image
                                src="/logo.png"
                                alt="Nexora Logo"
                                width={160}
                                height={40}
                                className="h-8 w-auto brightness-200"
                            />
                        </Link>
                        <p className="text-[#8EB69B] text-sm md:text-base max-w-sm leading-relaxed font-light">
                            Defining the digital frontier through precision engineering and minimalist aesthetic design.
                        </p>
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                        <h4 className="text-[#DAF1DE] font-semibold text-sm tracking-wider uppercase mb-8">Agency</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Our Process', 'Expertise', 'Careers'].map(link => (
                                <li key={link}>
                                    <Link href="#" className="text-[#8EB69B] hover:text-[#DAF1DE] transition-colors text-sm font-light">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                        <h4 className="text-[#DAF1DE] font-semibold text-sm tracking-wider uppercase mb-8">Services</h4>
                        <ul className="space-y-4">
                            {['Web Apps', 'UI/UX Design', 'E-Commerce', 'Consulting'].map(link => (
                                <li key={link}>
                                    <Link href="#" className="text-[#8EB69B] hover:text-[#DAF1DE] transition-colors text-sm font-light">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-4 lg:col-span-3">
                        <h4 className="text-[#DAF1DE] font-semibold text-sm tracking-wider uppercase mb-8">Newsletter</h4>
                        <p className="text-[#8EB69B] text-sm mb-6 font-light">Stay updated with digital trends.</p>
                        <form className="flex border border-[#163832] rounded-full overflow-hidden bg-[#051F20] focus-within:border-[#8EB69B] transition-colors">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-transparent border-none text-[#DAF1DE] text-sm px-5 py-3 outline-none w-full placeholder-[#8EB69B]/50"
                            />
                            <button type="submit" className="bg-[#163832] px-5 flex items-center justify-center text-[#DAF1DE] hover:bg-[#235347] transition-colors">
                                <RiSendPlaneLine className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-[#163832] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#8EB69B] tracking-widest uppercase text-center md:text-left">
                    <p>© 2024 NEXORA DIGITAL.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-[#DAF1DE] transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-[#DAF1DE] transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default function NewHomeLayout() {
    return (
        <div className="min-h-screen bg-[#051F20] text-[#DAF1DE] selection:bg-[#235347] font-sans pt-24">
            <NewNavbar />

            {/* HERO SECTION */}
            <section className="relative px-6 pb-24 pt-16 md:pt-24 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                {/* Left Content */}
                <div className="flex flex-col items-start z-10 w-full max-w-xl mx-auto lg:mx-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <span className="text-xs font-semibold text-[#8EB69B] uppercase tracking-[0.2em]">NOW ACCEPTING NEW PROJECTS</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[3.5rem] md:text-[5.5rem] font-light tracking-tight leading-[1] mb-8 text-[#DAF1DE]"
                    >
                        Nexora<br />
                        <span className="font-semibold italic text-[#8EB69B]">Digital<br />Mastery.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#8EB69B] text-lg font-light max-w-[90%] mb-12 leading-relaxed"
                    >
                        A premium web development agency crafting high-performance digital experiences. We blend architectural precision with minimalist design.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Link href="/#work" className="w-full sm:w-auto">
                            <button className="w-full bg-[#DAF1DE] text-[#051F20] px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-[#8EB69B] transition-colors">
                                Launch Project
                            </button>
                        </Link>
                        <Link href="/portfolio" className="w-full sm:w-auto">
                            <button className="w-full bg-transparent border border-[#235347] text-[#DAF1DE] px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-[#0B2B26] transition-colors flex items-center justify-center gap-2">
                                View Portfolio <RiArrowRightLine />
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Content - Visual Minimalist */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none flex items-center justify-center"
                >
                    <div className="w-[85%] h-[85%] bg-[#0B2B26] rounded-[2rem] border border-[#163832] flex items-center justify-center relative overflow-hidden">
                        {/* Minimalist Geometry */}
                        <div className="absolute w-[120%] h-[1px] bg-[#163832] rotate-45" />
                        <div className="absolute w-[120%] h-[1px] bg-[#163832] -rotate-45" />
                        <div className="w-48 h-48 border border-[#235347] rounded-full absolute flex items-center justify-center">
                            <div className="w-32 h-32 border border-[#8EB69B]/30 rounded-full" />
                        </div>
                        <div className="bg-[#051F20] p-6 rounded-2xl border border-[#163832] z-10">
                            <RiLayout2Line className="w-10 h-10 text-[#8EB69B]" />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* TRUST TICKER */}
            <TrustTicker />

            {/* EXPERTISE SECTION */}
            <section className="px-6 py-32 max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between mb-20 gap-10 items-end">
                    <div className="max-w-xl">
                        <div className="text-xs font-semibold text-[#8EB69B] uppercase tracking-[0.2em] mb-6">Our Expertise</div>
                        <h2 className="text-4xl md:text-5xl font-light leading-[1.1] tracking-tight text-[#DAF1DE]">
                            Future-proof solutions<br className="hidden md:block" /> for scaling startups.
                        </h2>
                    </div>
                    <div className="max-w-sm text-[#8EB69B] font-light text-lg leading-relaxed md:pb-2">
                        We don't just build websites; we engineer digital ecosystems that evolve with your vision.
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="p-10 bg-[#0B2B26] rounded-[2rem] border border-[#163832] hover:border-[#235347] transition-colors group">
                        <RiTerminalBoxLine className="w-8 h-8 text-[#8EB69B] mb-8" />
                        <h3 className="text-xl font-medium text-[#DAF1DE] mb-4">Custom Architecture</h3>
                        <p className="text-[#8EB69B] font-light text-base mb-10 leading-relaxed">Scalable, secure, and lightning-fast backend systems built with modern stacks like Node, Go, and Python.</p>
                        <Link href="/services" className="text-[#DAF1DE] text-xs font-semibold tracking-widest uppercase flex items-center gap-2 group-hover:text-[#8EB69B] transition-colors">
                            Learn More <RiArrowRightUpLine className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="p-10 bg-[#0B2B26] rounded-[2rem] border border-[#163832] hover:border-[#235347] transition-colors group">
                        <RiLayout2Line className="w-8 h-8 text-[#8EB69B] mb-8" />
                        <h3 className="text-xl font-medium text-[#DAF1DE] mb-4">Next-Gen UX/UI</h3>
                        <p className="text-[#8EB69B] font-light text-base mb-10 leading-relaxed">User-centric designs featuring minimalist aesthetics, fluid animations, and immersive interactive elements.</p>
                        <Link href="/services" className="text-[#DAF1DE] text-xs font-semibold tracking-widest uppercase flex items-center gap-2 group-hover:text-[#8EB69B] transition-colors">
                            Learn More <RiArrowRightUpLine className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Card 3 */}
                    <div className="p-10 bg-[#0B2B26] rounded-[2rem] border border-[#163832] hover:border-[#235347] transition-colors group">
                        <RiCloudLine className="w-8 h-8 text-[#8EB69B] mb-8" />
                        <h3 className="text-xl font-medium text-[#DAF1DE] mb-4">Cloud Integration</h3>
                        <p className="text-[#8EB69B] font-light text-base mb-10 leading-relaxed">Enterprise-grade cloud infrastructure automation using modern tools on AWS, Azure, and Google Cloud.</p>
                        <Link href="/services" className="text-[#DAF1DE] text-xs font-semibold tracking-widest uppercase flex items-center gap-2 group-hover:text-[#8EB69B] transition-colors">
                            Learn More <RiArrowRightUpLine className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* STATS STRIP */}
            <StatsStrip />

            {/* GLOBAL SCALE SECTION */}
            <section className="px-6 py-32 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="aspect-square w-full max-w-[450px] mx-auto bg-[#0B2B26] rounded-full flex items-center justify-center border border-[#163832] relative">
                    <div className="absolute w-[80%] h-[80%] bg-[#051F20] rounded-full border border-[#235347]" />
                    <RiShieldStarLine className="w-16 h-16 text-[#8EB69B] z-10" />
                </div>

                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-light mb-16 tracking-tight leading-tight text-[#DAF1DE]">Architected for global scale.</h2>

                    <div className="space-y-12">
                        <div className="flex gap-6 items-start">
                            <RiRocketLine className="w-6 h-6 text-[#8EB69B] mt-1 shrink-0" />
                            <div>
                                <h4 className="text-xl font-medium text-[#DAF1DE] mb-3">Rapid Deployment</h4>
                                <p className="text-[#8EB69B] font-light text-base leading-relaxed">
                                    Optimized CI/CD pipelines that push code to production with absolute confidence and zero downtime.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <RiCheckLine className="w-6 h-6 text-[#8EB69B] mt-1 shrink-0" />
                            <div>
                                <h4 className="text-xl font-medium text-[#DAF1DE] mb-3">Security at Core</h4>
                                <p className="text-[#8EB69B] font-light text-base leading-relaxed">
                                    SOC2 compliant methodologies ensuring your data and your users' privacy are protected.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <FAQ />

            {/* CTA SECTION */}
            <section className="px-6 py-32 pb-40 max-w-[1400px] mx-auto">
                <div className="bg-[#0B2B26] rounded-[2rem] border border-[#163832] p-16 md:p-24 text-center">
                    <h2 className="text-4xl md:text-6xl font-light mb-8 max-w-3xl mx-auto leading-tight text-[#DAF1DE]">
                        Ready to build the future of your brand?
                    </h2>
                    <p className="text-[#8EB69B] text-lg font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join the elite companies already scaling with Nexora's engineering excellence.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <button className="w-full bg-[#DAF1DE] text-[#051F20] px-10 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-[#8EB69B] transition-colors">
                                Book a Strategy Call
                            </button>
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto">
                            <button className="w-full bg-transparent border border-[#235347] text-[#DAF1DE] px-10 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-[#163832] transition-colors">
                                Request Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <NewFooter />
        </div>
    );
}
