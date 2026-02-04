"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Shield, Zap, Target, Users, Sparkles, User } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const differentiators = [
        "Transparent communication without technical jargon",
        "Careful testing to ensure quality and reliability",
        "Working directly with the team building your project",
        "Scalable solutions designed for long-term growth",
        "Predictable timelines and reliable delivery",
        "User-focused design built around real needs"
    ];

    return (
        <main className="min-h-screen bg-background text-white selection:bg-accent/30 selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent/10 blur-[80px] md:blur-[120px] rounded-full animate-float-slow" />
                    <div className="absolute bottom-[10%] right-[-5%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-accent-secondary/10 blur-[70px] md:blur-[100px] rounded-full animate-float-slower" />
                </div>

                <div className="section-container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                            About <span className="text-accent text-glow">Nexora</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-secondary font-medium leading-relaxed">
                            A specialized digital agency dedicated to building high-performance websites and web applications for forward-thinking brands and institutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Who and What Section */}
            <section className="py-16 md:py-24 relative">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <ScrollReveal direction="left" distance={60}>
                            <div className="space-y-6 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-accent">
                                    <Shield size={14} />
                                    <span>Who We Are</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                    Merging <span className="text-accent underline decoration-accent/20 underline-offset-8">Creativity</span> with Reliable Technology.
                                </h2>
                                <p className="text-secondary text-lg leading-relaxed font-medium">
                                    Nexora is a digital solutions studio focused on building clean, reliable, and easy-to-use digital platforms.
                                </p>
                                <p className="text-secondary text-lg leading-relaxed font-medium">
                                    We believe technology should simplify things, not complicate them. Our goal is to create digital platforms that are clear, accessible, and built to grow with your needs.
                                </p>
                                <p className="text-secondary text-lg leading-relaxed font-medium">
                                    Whether it&apos;s a new website or a modern redesign, we focus on long-term value and usability.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="right" distance={60} delay={0.2}>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: "Clear Communication", desc: "Simple explanations and transparent workflows.", accent: "border-l-accent", hover: "group-hover:text-accent" },
                                    { title: "Modern Approach", desc: "Thoughtful design using current technologies.", accent: "border-l-accent-secondary", hover: "group-hover:text-accent-secondary" },
                                    { title: "Built on Trust", desc: "Honest work with dependable results.", accent: "border-l-accent-glow", hover: "group-hover:text-accent-glow" },
                                    { title: "Quality Focused", desc: "Care and precision in every detail.", accent: "border-l-accent", hover: "group-hover:text-accent" }
                                ].map((card, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{
                                            y: -8,
                                            scale: 1.02,
                                            backgroundColor: "rgba(255, 255, 255, 0.06)"
                                        }}
                                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                        className={`p-6 md:p-8 rounded-3xl glass-card space-y-2 border-l-4 ${card.accent} group cursor-default relative overflow-hidden`}
                                    >
                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />

                                        <h3 className={`text-lg font-bold text-white ${card.hover} transition-colors relative z-10`}>
                                            {card.title}
                                        </h3>
                                        <p className="text-sm text-secondary font-medium relative z-10 leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-16 md:py-24 bg-white/2">
                <div className="section-container">
                    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold">The Nexora Approach</h2>
                        <p className="text-secondary text-base md:text-lg font-medium">We focus on clarity, quality, and reliability in everything we build.</p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: "Clarity",
                                description: "We remove confusion from the process. You’ll always know what we’re building and why it matters.",
                                color: "text-accent",
                                borderHover: "group-hover:border-accent/30",
                                shadowHover: "group-hover:shadow-[0_0_40px_-10px_rgba(11,185,243,0.2)]",
                                bgHover: "group-hover:bg-accent/5"
                            },
                            {
                                icon: <Target className="w-8 h-8" />,
                                title: "Quality",
                                description: "We focus on building solutions that are stable, well-designed, and built to last.",
                                color: "text-accent-secondary",
                                borderHover: "group-hover:border-accent-secondary/30",
                                shadowHover: "group-hover:shadow-[0_0_40px_-10px_rgba(10,127,217,0.2)]",
                                bgHover: "group-hover:bg-accent-secondary/5"
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "Reliability",
                                description: "We work as a dependable partner, committed to your goals and long-term success.",
                                color: "text-accent-glow",
                                borderHover: "group-hover:border-accent-glow/30",
                                shadowHover: "group-hover:shadow-[0_0_40px_-10px_rgba(56,217,255,0.2)]",
                                bgHover: "group-hover:bg-accent-glow/5"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className={`p-10 rounded-3xl glass-card h-full border border-white/5 relative group transition-all duration-500 ${item.borderHover} ${item.shadowHover}`}
                            >
                                <div className={`absolute inset-0 opacity-0 ${item.bgHover} transition-opacity duration-500 rounded-3xl`} />

                                <div className={`mb-8 p-4 rounded-2xl bg-white/5 w-fit ${item.color} group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors relative z-10">{item.title}</h3>
                                <p className="text-secondary leading-relaxed font-medium group-hover:text-white/80 transition-colors relative z-10">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="py-16 md:py-24">
                <div className="section-container">
                    <div className="p-8 md:p-20 rounded-[2.5rem] md:rounded-[3rem] glass-pill border border-white/10 relative overflow-hidden">
                        {/* Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-accent/5 blur-[80px] md:blur-[120px] rounded-full -z-10" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                            <div className="space-y-8">
                                <h2 className="text-4xl font-bold">What Makes Nexora Different?</h2>
                                <p className="text-secondary text-lg font-medium leading-relaxed">
                                    We focus on building thoughtful digital solutions that prioritize clarity, quality, and long-term reliability. Our approach is simple, transparent, and designed to create lasting value.
                                </p>
                                <Link href="/process">
                                    <button className="bg-accent text-white px-8 py-4 rounded-full font-bold hover:brightness-110 transition-all flex items-center gap-2 group hover:cursor-pointer">
                                        Learn Our Process
                                        <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                                    </button>
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {differentiators.map((text, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/20 transition-colors">
                                        <div className="mt-1 p-1 rounded-full bg-accent/20 text-accent">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <p className="text-white/80 font-medium">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Work With */}
            <section className="py-16 md:py-24 relative overflow-hidden">
                <div className="section-container text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Designed for Modern Organizations</h2>
                        <p className="max-w-3xl mx-auto text-secondary text-lg mb-12 md:mb-16 font-medium">
                            Whether you represent an educational institution, a growing startup, or an established organization, Nexora builds reliable digital solutions tailored to your needs.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                            {["Startups", "Educational Institutions", "Organizations & Teams", "Independent Professionals"].map((type, i) => (
                                <div key={i} className="py-6 md:py-8 px-6 rounded-2xl md:rounded-3xl border border-white/5 bg-white/2 font-bold text-white/50 tracking-wider hover:text-white hover:border-accent/40 transition-all duration-300">
                                    {type}
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-20 md:py-32 relative">
                <div className="section-container text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <ScrollReveal>
                            <div className="text-accent-glow opacity-30 mb-8 inline-block">
                                <Sparkles className="w-10 h-10 md:w-[60px] md:h-[60px]" strokeWidth={1} />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold italic leading-tight">
                                &ldquo;To help organizations simplify technology and build digital experiences that are clear, reliable, and easy to use.&rdquo;
                            </h2>
                            <p className="text-accent font-bold tracking-[0.2em] uppercase mt-12">The Nexora Vision</p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 md:py-32 relative text-center">
                <div className="section-container">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">The People Behind Nexora</h2>
                        <p className="max-w-2xl mx-auto text-secondary text-lg mb-16 font-medium">
                            Nexora is built by a small, dedicated team focused on clarity, quality, and reliable delivery.
                        </p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Navaneeth PV",
                                role: "PRODUCT & DEVELOPMENT",
                                desc: "He leads the technical vision at Nexora, specializing in architectural planning and building systems that remain fast and dependable as they scale.",
                                img: "https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=400&h=400&fit=crop"
                            },
                            {
                                name: "Muhammed Yaseen",
                                role: "PRODUCT & DEVELOPMENT",
                                desc: "Dedicated to solving complex engineering challenges, Yaseen focuses on turning intricate requirements into seamless, high-performance digital experiences.",
                                img: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=400&h=400&fit=crop"
                            },
                            {
                                name: "Muhammed Suhail",
                                role: "DESIGNING",
                                desc: "With a deep passion for aesthetics and usability, Suhail crafts the visual languages that define our projects, ensuring every pixel serves the user's journey.",
                                img: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=400&h=400&fit=crop"
                            }
                        ].map((member, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="group relative p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-accent/20 transition-all duration-500 hover:bg-white/5 hover:-translate-y-2">
                                    {/* Placeholder Profile (Instagram Style) */}
                                    <div className="relative w-32 h-32 mx-auto mb-8 rounded-full bg-white/5 flex items-center justify-center border-2 border-white/10 group-hover:border-accent/50 transition-all duration-500 overflow-hidden">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <User className="w-16 h-16 text-white/10 group-hover:text-accent/40 transition-all duration-500" strokeWidth={1} />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{member.name}</h3>
                                            <p className="text-sm font-bold tracking-wider text-white/40 uppercase">{member.role}</p>
                                        </div>
                                        <p className="text-secondary font-medium leading-relaxed text-sm italic">
                                            &ldquo;{member.desc}&rdquo;
                                        </p>
                                    </div>

                                    {/* Subtle Glow */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 md:py-32 px-4 md:px-0">
                <div className="section-container">
                    <div className="relative py-16 md:py-24 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden text-center bg-accent-secondary/10 border border-accent/20">
                        {/* Glow Effects */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(11,185,243,0.1),transparent_70%)]" />

                        <div className="relative z-10 space-y-8 max-w-2xl mx-auto px-6">
                            <h2 className="text-3xl md:text-6xl font-bold leading-tight text-white mb-4">
                                Ready to start your next digital project?
                            </h2>
                            <p className="text-white/70 text-lg font-medium">
                                Let&apos;s talk about building a clear, reliable, and user-friendly digital solution together.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <Link href="/contact">
                                    <button className="w-full sm:w-auto bg-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-2xl shadow-accent/20">
                                        Start a Conversation
                                    </button>
                                </Link>
                                <button className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                                    View Our Work
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
