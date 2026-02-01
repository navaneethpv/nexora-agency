"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-16 border-t border-white/5">
            <div className="section-container">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10 leading-tight">
                        Are you ready? This could be the <br />
                        <span className="font-serif-italic font-medium">start of something big.</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button className="bg-accent text-white px-7 py-3 rounded-full text-sm font-semibold hover:brightness-110 transition-all">
                            Book a call
                        </button>
                        <button className="bg-white/5 border border-white/10 text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-all">
                            See plans
                        </button>
                    </div>
                </div>

                <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] font-medium text-secondary">
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">About</Link>
                        <Link href="#" className="hover:text-white transition-colors">Blog</Link>
                        <Link href="#" className="hover:text-white transition-colors">Features</Link>
                        <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
                        <Link href="#" className="hover:text-white transition-colors">Legal</Link>
                    </div>

                    <div className="flex items-center gap-2">
                        <span>Created by</span>
                        <div className="h-5 w-5 rounded-full bg-white/10" />
                        <span className="text-white">Nexora Agency</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
