"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Shield, Zap, Target, Users, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const differentiators = [
        "Transparent communication without technical jargon",
        "Rigorous quality assurance and performance testing",
        "Direct access to specialized engineering talent",
        "Scalable solutions designed for long-term growth",
        "Predictable timelines and reliable delivery",
        "User-centric design focused on measurable outcomes"
    ];

    return (
        <main className="min-h-screen bg-background text-white selection:bg-accent/30 selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-44 pb-32 overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full animate-float-slow" />
                    <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-accent-secondary/10 blur-[100px] rounded-full animate-float-slower" />
                </div>

                <div className="section-container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                            About <span className="text-accent text-glow">Nexora</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-secondary font-medium leading-relaxed">
                            A specialized digital agency dedicated to building high-performance websites and web applications for forward-thinking brands and institutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Who and What Section */}
            <section className="py-24 relative">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-accent">
                                    <Shield size={14} />
                                    <span>Who We Are</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
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
                        <ScrollReveal>
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
            <section className="py-24 bg-white/2">
                <div className="section-container">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold">The Nexora Approach</h2>
                        <p className="text-secondary text-base md:text-lg font-medium">We focus on clarity, quality, and reliability in everything we build.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Zap className="text-accent" />,
                                title: "Clarity",
                                description: "We remove confusion from the process. You’ll always know what we’re building, why it matters, and how it helps you."
                            },
                            {
                                icon: <Target className="text-accent-secondary" />,
                                title: "Quality",
                                description: "We focus on building solutions that are stable, well-designed, and built to last."
                            },
                            {
                                icon: <Users className="text-accent-glow" />,
                                title: "Reliability",
                                description: "We work as a dependable partner, committed to your goals and long-term success."
                            }
                        ].map((item, i) => (
                            <ScrollReveal key={i}>
                                <div className="p-10 rounded-3xl glass-card h-full hover:bg-white/4 transition-colors border border-white/5 relative group">
                                    <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-secondary leading-relaxed font-medium">{item.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="py-24">
                <div className="section-container">
                    <div className="p-12 md:p-20 rounded-[3rem] glass-pill border border-white/10 relative overflow-hidden">
                        {/* Glow */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -z-10" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div className="space-y-8">
                                <h2 className="text-4xl font-bold">What Makes Nexora Different?</h2>
                                <p className="text-secondary text-lg font-medium leading-relaxed">
                                    We move beyond generic solutions. Our team focuses on engineering products that provide competitive advantages through technical superiority.
                                </p>
                                <button className="bg-accent text-white px-8 py-4 rounded-full font-bold hover:brightness-110 transition-all flex items-center gap-2 group">
                                    Learn Our Process
                                    <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                                </button>
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
            <section className="py-24 relative overflow-hidden">
                <div className="section-container text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Built for Modern Institutions</h2>
                        <p className="max-w-3xl mx-auto text-secondary text-lg mb-16 font-medium">
                            Whether you represent an educational institution, a growing startup, or a corporate entity, Nexora provides the premium digital infrastructure you deserve.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {["Startups", "Educational Institutions", "Corporate Brands", "Digital Solopreneurs"].map((type, i) => (
                                <div key={i} className="py-8 px-6 rounded-3xl border border-white/5 bg-white/2 font-bold text-white/50 tracking-wider hover:text-white hover:border-accent/40 transition-all duration-300">
                                    {type}
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-32 relative">
                <div className="section-container text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <ScrollReveal>
                            <div className="text-accent-glow opacity-30 mb-8 inline-block">
                                <Sparkles size={60} strokeWidth={1} />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold italic leading-tight">
                                &ldquo;To empower organizations by transforming technical complexity into intuitive, high-performance digital experiences that people love to use.&rdquo;
                            </h2>
                            <p className="text-accent font-bold tracking-[0.2em] uppercase mt-12">The Nexora Vision</p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-4 md:px-0">
                <div className="section-container">
                    <div className="relative py-24 rounded-[3rem] overflow-hidden text-center bg-accent-secondary/10 border border-accent/20">
                        {/* Glow Effects */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(11,185,243,0.1),transparent_70%)]" />

                        <div className="relative z-10 space-y-8 max-w-2xl mx-auto px-6">
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-4">
                                Ready to Elevate Your Digital Presence?
                            </h2>
                            <p className="text-white/70 text-lg font-medium">
                                Let&apos;s discuss how Nexora can bring clarity and high-performance engineering to your next project.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <button className="w-full sm:w-auto bg-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-2xl shadow-accent/20">
                                    Start a Conversation
                                </button>
                                <button className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                                    Our Work
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
