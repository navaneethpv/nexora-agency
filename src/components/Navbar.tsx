"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
            <div className="glass-pill rounded-full px-5 py-1.5 flex items-center gap-6">
                <Link href="/" className="text-base font-bold tracking-tight">
                    Nexora
                </Link>

                <div className="hidden md:flex items-center gap-5 text-[12px] font-medium text-secondary">
                    <Link href="#about" className="hover:text-white transition-colors">About</Link>
                    <Link href="#blog" className="hover:text-white transition-colors">Blog</Link>
                    <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                    <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                        Pages <span className="text-[9px]">▼</span>
                    </div>
                </div>

                <div className="flex items-center gap-2.5">
                    <button className="bg-white/5 hover:bg-white/10 text-white px-3.5 py-1 rounded-full text-[12px] font-medium transition-colors border border-white/5">
                        Tutorials
                    </button>
                    <button className="bg-accent text-white px-3.5 py-1 rounded-full text-[12px] font-medium hover:brightness-110 transition-all">
                        Book a call
                    </button>
                </div>
            </div>
        </nav>
    );
}
