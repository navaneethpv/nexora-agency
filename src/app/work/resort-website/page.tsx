"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ShinyText from "@/components/ShinyText";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Layout, Zap, Smartphone, ShieldCheck } from "lucide-react";

export default function ProjectDetails() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent/30 selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full animate-float-slow" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-secondary/10 blur-[100px] rounded-full animate-float-slower" />
                </div>

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Link
                            href="/#work"
                            className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors mb-12 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-bold uppercase tracking-widest">Back to Work</span>
                        </Link>

                        <div className="flex flex-col gap-6 max-w-4xl">
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 w-fit">
                                <span className="text-[10px] md:text-xs font-black tracking-[0.3em] text-accent uppercase">Website · Admin System</span>
                            </div>

                            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                                Resort Website & <br /> Admin Portal
                            </h1>

                            <p className="text-xl md:text-2xl text-secondary font-medium leading-relaxed max-w-2xl mt-4">
                                A modern resort website paired with an admin portal designed to simplify bookings, content management, and enquiries.
                            </p>

                            <p className="text-sm text-secondary/50 italic font-medium">
                                Concept project created to demonstrate system design and user experience.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Project Mockup / Image Section */}
            <section className="pb-24 md:pb-32 px-4 md:px-0">
                <div className="section-container">
                    <ScrollReveal>
                        <div className="relative aspect-video rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/resort-macbook-mockup.png"
                                alt="Resort Project Preview"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-20 md:py-32 bg-white/2 border-y border-white/5">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
                        <div className="lg:col-span-4">
                            <ScrollReveal>
                                <h2 className="text-sm font-black tracking-[0.4em] text-accent uppercase mb-6">Overview</h2>
                                <div className="h-px w-12 bg-accent/30" />
                            </ScrollReveal>
                        </div>
                        <div className="lg:col-span-8">
                            <ScrollReveal>
                                <p className="text-xl md:text-3xl font-medium leading-relaxed text-secondary/90">
                                    This project focuses on creating a clean and user-friendly website for a resort, along with an internal admin portal to manage daily operations efficiently.
                                </p>
                                <p className="text-lg md:text-xl font-medium leading-relaxed text-secondary/70 mt-8">
                                    The goal was to improve the guest booking experience while giving administrators a simple interface to manage rooms, availability, and enquiries.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge & Solution Section */}
            <section className="py-24 md:py-48">
                <div className="section-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                        {/* The Challenge */}
                        <ScrollReveal>
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-sm font-black tracking-[0.4em] text-accent uppercase mb-6">The Challenge</h2>
                                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Identified Gaps</h3>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        "Manual booking management",
                                        "No centralized system for rooms and enquiries",
                                        "Poor mobile experience for guests"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start group">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors shrink-0" />
                                            <p className="text-lg md:text-xl text-secondary font-medium">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Our Solution */}
                        <ScrollReveal>
                            <div className="space-y-10 p-8 md:p-12 rounded-[2.5rem] bg-white/3 border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full" />
                                <div>
                                    <h2 className="text-sm font-black tracking-[0.4em] text-accent uppercase mb-6">Our Solution</h2>
                                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Structured Approach</h3>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        "Responsive resort website for guests",
                                        "Centralized admin dashboard",
                                        "Easy room, booking, and enquiry management",
                                        "Simple interface for non-technical users"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                                            <p className="text-lg md:text-xl text-white font-medium">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-24 md:py-32 bg-white/2 border-t border-white/5">
                <div className="section-container">
                    <div className="mb-20">
                        <ScrollReveal>
                            <h2 className="text-sm font-black tracking-[0.4em] text-accent uppercase mb-6">Key Features</h2>
                            <h3 className="text-4xl md:text-6xl font-bold tracking-tight">Core Functionalities</h3>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Room Listings", desc: "Detailed displays with availability status.", icon: Layout },
                            { title: "Booking Request", desc: "Streamlined system for guest enquiries.", icon: Zap },
                            { title: "Admin Panel", desc: "Complete control over content and rooms.", icon: ShieldCheck },
                            { title: "Enquiry Dashboard", desc: "Centralized hub for managing communications.", icon: Layout },
                            { title: "Mobile Ready", desc: "Optimized experience across all devices.", icon: Smartphone }
                        ].map((feature, i) => (
                            <ScrollReveal key={i}>
                                <div className="p-8 rounded-3xl bg-white/3 border border-white/5 hover:border-accent/20 transition-all group h-full">
                                    <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all text-accent">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                                    <p className="text-secondary font-medium leading-relaxed">{feature.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Design Approach & Outcome */}
            <section className="py-24 md:py-48 relative">
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32">
                        {/* Design Approach */}
                        <ScrollReveal>
                            <div className="space-y-8">
                                <h2 className="text-sm font-black tracking-[0.4em] text-accent uppercase">Design Approach</h2>
                                <p className="text-xl md:text-2xl font-medium leading-relaxed text-secondary">
                                    The design prioritizes clarity, ease of use, and visual calm. The interface is optimized for both guests and administrators, ensuring accessibility across all devices.
                                </p>
                                <div className="pt-8 grid grid-cols-2 gap-8">
                                    <div>
                                        <span className="block text-4xl font-bold mb-2">01</span>
                                        <span className="text-xs font-black tracking-widest text-accent uppercase">Minimalist</span>
                                    </div>
                                    <div>
                                        <span className="block text-4xl font-bold mb-2">02</span>
                                        <span className="text-xs font-black tracking-widest text-accent uppercase">Accessible</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Outcome */}
                        <ScrollReveal>
                            <div className="space-y-8">
                                <h2 className="text-sm font-black tracking-[0.4em] text-accent uppercase">Outcome</h2>
                                <div className="p-8 md:p-12 rounded-[2.5rem] bg-accent/5 border border-accent/10">
                                    <p className="text-xl md:text-2xl font-bold leading-relaxed text-white italic">
                                        "This project demonstrates how a well-structured website and admin system can simplify operations and improve the overall user experience."
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Technology Used */}
            <section className="py-20 bg-white/1 border-y border-white/5">
                <div className="section-container">
                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h2 className="text-sm font-black tracking-[0.4em] text-accent uppercase mb-2">Technology Used</h2>
                                <p className="text-lg text-secondary font-medium">Modern web technologies with a focus on performance and maintainability.</p>
                            </div>
                            <div className="flex gap-4 flex-wrap">
                                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white/60">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-32 md:py-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-accent/5 opacity-30 pointer-events-none" />
                <div className="section-container relative z-10 text-center">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none">
                                    Planning a <br /> similar project?
                                </h2>
                                <p className="text-xl md:text-2xl text-secondary font-medium">
                                    Let’s discuss how we can build a solution <br /> tailored to your needs.
                                </p>
                            </div>

                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-linear-to-r from-accent to-accent-secondary text-white font-bold text-lg shadow-2xl shadow-accent/40 hover:scale-105 active:scale-95 transition-all"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </main>
    );
}
