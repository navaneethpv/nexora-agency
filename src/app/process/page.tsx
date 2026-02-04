"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ClipboardList, Lightbulb, Layout, Code2, Search, Rocket } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function ProcessPage() {
    const steps = [
        {
            icon: <ClipboardList className="w-6 h-6" />,
            title: "Understanding Your Needs",
            description: "We start by listening. Before any work begins, we take time to understand your goals, your audience, and the problem you’re trying to solve.",
            step: "01"
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Planning & Direction",
            description: "We define the project scope, priorities, content structure, and timeline to ensure clarity before execution.",
            step: "02"
        },
        {
            icon: <Layout className="w-6 h-6" />,
            title: "Design & Structure",
            description: "We create clean, user-focused designs that are easy to navigate, work across all devices, and reflect your brand.",
            step: "03"
        },
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Development & Implementation",
            description: "We carefully build the platform with attention to structure, performance, and long-term maintainability.",
            step: "04"
        },
        {
            icon: <Search className="w-6 h-6" />,
            title: "Review & Refinement",
            description: "We review everything thoroughly and address feedback to ensure a smooth, consistent experience.",
            step: "05"
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Launch & Ongoing Support",
            description: "After launch, we assist with a smooth handover and remain available for future support or improvements.",
            step: "06"
        }
    ];

    const expectations = [
        "Clear and honest communication",
        "Predictable timelines",
        "Thoughtful decision-making",
        "Reliable outcomes"
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
                        className="space-y-6 max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                            Our <span className="text-accent text-glow">Process</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-white/90">
                            A clear, collaborative approach focused on quality, clarity, and long-term reliability.
                        </p>
                        <p className="max-w-2xl mx-auto text-lg text-secondary font-medium leading-relaxed">
                            We follow a simple and transparent process to ensure every project is delivered with care, consistency, and confidence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 relative">
                <div className="section-container">
                    <ScrollReveal>
                        <div className="p-10 md:p-16 rounded-[2.5rem] glass-card border border-white/5 bg-linear-to-br from-white/5 to-transparent text-center max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
                            <p className="text-lg md:text-xl text-secondary font-medium leading-relaxed max-w-3xl mx-auto">
                                We believe a good process should feel structured — not overwhelming. Our approach keeps communication clear, decisions intentional, and outcomes reliable.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-24 relative">
                <div className="section-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {steps.map((item, i) => (
                            <ScrollReveal
                                key={i}
                                delay={i * 0.1}
                                direction={i % 3 === 0 ? "left" : i % 3 === 1 ? "up" : "right"}
                                distance={40}
                            >
                                <div className="h-full p-8 rounded-3xl glass-card border border-white/5 bg-white/2 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden">
                                    {/* Step Number Background */}
                                    <div className="absolute -right-4 -top-4 text-8xl font-bold text-white/5 select-none pointer-events-none group-hover:text-accent/10 transition-colors">
                                        {item.step}
                                    </div>

                                    <div className="relative z-10 space-y-6">
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </div>

                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-accent-glow transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-secondary font-medium leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expectations Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-[500px] bg-accent-secondary/5 blur-[120px] -translate-y-1/2 -z-10" />

                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <ScrollReveal>
                                <h2 className="text-4xl md:text-5xl font-bold">What You Can Expect</h2>
                                <p className="text-secondary text-lg font-medium leading-relaxed max-w-xl">
                                    Partnership with Nexora means more than just code. It means a predictable, professional experience from day one.
                                </p>
                            </ScrollReveal>
                        </div>

                        <div className="grid gap-4">
                            {expectations.map((text, i) => (
                                <ScrollReveal key={i} delay={i * 0.1}>
                                    <div className="flex items-center gap-4 p-6 rounded-2xl glass-card border border-white/5 bg-white/2 hover:border-accent/30 transition-all duration-300 group">
                                        <div className="p-2 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-black transition-all">
                                            <Check size={18} strokeWidth={3} />
                                        </div>
                                        <span className="text-lg font-bold text-white/90">{text}</span>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 md:px-0">
                <div className="section-container">
                    <div className="relative py-24 rounded-[3rem] overflow-hidden text-center bg-card border border-white/10">
                        {/* Glow Effects */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(11,185,243,0.15),transparent_70%)]" />

                        <div className="relative z-10 space-y-8 max-w-2xl mx-auto px-6">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                                Ready to start a project?
                            </h2>
                            <p className="text-secondary text-xl font-medium">
                                Let’s discuss your ideas and see how Nexora can help bring them to life.
                            </p>
                            <div className="pt-4">
                                <Link href="/contact" className="inline-block">
                                    <button className="bg-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-accent/20">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
