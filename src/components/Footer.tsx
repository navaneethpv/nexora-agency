"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-16 border-t border-white/5">
            <div className="section-container">
                <div className="text-center mb-28">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
                        Let’s Build <br />
                        <span className="italic font-medium text-accent">Something Reliable</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-base md:text-lg text-secondary mb-10 leading-relaxed">
                        If you’re looking for a dependable team to design and build your next digital product, Nexora is ready to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button className="bg-accent text-white px-8 py-4 rounded-full text-sm font-semibold hover:brightness-110 transition-all shadow-lg shadow-accent/20">
                            Contact Nexora
                        </button>
                    </div>
                </div>

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
