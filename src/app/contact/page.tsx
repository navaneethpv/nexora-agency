"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { RiMailLine, RiArrowRightLine, RiCheckboxCircleLine, RiSparkling2Line, RiSendPlaneLine, RiPhoneLine } from "react-icons/ri";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setIsSubmitted(true);
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-black selection:bg-accent/30 selection:text-white">
            <Navbar />

            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full opacity-50" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-secondary/5 blur-[120px] rounded-full opacity-50" />
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff,transparent_1px)] bg-size-[40px_40px] opacity-[0.03]" />
            </div>

            <div className="section-container relative z-10 pt-32 md:pt-48 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Text & Info */}
                    <div>
                        <div className="space-y-12">
                            <ScrollReveal direction="down" distance={20} delay={0.1}>
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="p-2 rounded-lg bg-accent/10">
                                        <RiSparkling2Line className="w-5 h-5 text-accent" />
                                    </div>
                                    <span className="text-accent font-bold tracking-widest uppercase text-sm">Contact Us</span>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[1.1]">
                                    Let&apos;s build specific <br />
                                    <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-secondary">
                                        digital solutions.
                                    </span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <p className="text-lg md:text-xl text-secondary font-medium leading-relaxed mb-12 max-w-xl">
                                    Usually, we respond within 24 hours. Whether you have a specific project in mind or just want to explore possibilities, we are here to help.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.4} direction="right">
                                <div className="space-y-6 mb-12">
                                    <div className="flex items-start gap-4 p-6 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-sm hover:border-accent/20 transition-all duration-300 group">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent/20 group-hover:text-accent transition-all">
                                            <RiMailLine className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg mb-1">Email Us</h3>
                                            <a href="mailto:agency@nexoraweb.tech" className="text-secondary hover:text-white transition-colors">
                                                agency@nexoraweb.tech
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-6 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-sm hover:border-accent/20 transition-all duration-300 group">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent/20 group-hover:text-accent transition-all">
                                            <RiPhoneLine className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg mb-1">Call Us</h3>
                                            <div className="flex flex-col gap-1">
                                                <a href="tel:+916282592895" className="text-secondary hover:text-white transition-colors">
                                                    +91 62825 92895
                                                </a>
                                                <a href="tel:+918921592748" className="text-secondary hover:text-white transition-colors">
                                                    +91 89215 92748
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <div className="space-y-4">
                                <ScrollReveal delay={0.5} direction="up" distance={10}>
                                    <h3 className="text-white/40 font-bold uppercase tracking-widest text-xs mb-6">What happens next?</h3>
                                </ScrollReveal>
                                {[
                                    "We analyze your requirements and goals.",
                                    "We schedule a quick discovery call.",
                                    "We provide a tailored proposal and timeline."
                                ].map((step, i) => (
                                    <ScrollReveal key={i} delay={0.6 + (i * 0.1)} direction="left" distance={20}>
                                        <div className="flex items-center gap-3 text-secondary">
                                            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold text-accent">
                                                {i + 1}
                                            </div>
                                            <span>{step}</span>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative">
                        <ScrollReveal delay={0.2}>
                            <div className="p-8 md:p-10 rounded-[2.5rem] bg-white/2 border border-white/10 backdrop-blur-xl relative overflow-hidden">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-6"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-4">
                                            <RiCheckboxCircleLine className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white">Message Sent!</h3>
                                        <p className="text-secondary max-w-xs">
                                            Thank you for reaching out. We will get back to you shortly.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="mt-4 text-accent font-bold hover:text-white transition-colors"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-bold text-white/60 ml-1">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all font-medium placeholder:text-white/20"
                                                placeholder="John Doe"
                                                value={formState.name}
                                                onChange={e => setFormState({ ...formState, name: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-bold text-white/60 ml-1">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all font-medium placeholder:text-white/20"
                                                placeholder="john@company.com"
                                                value={formState.email}
                                                onChange={e => setFormState({ ...formState, email: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-bold text-white/60 ml-1">Subject</label>
                                            <select
                                                id="subject"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all font-medium [&>option]:bg-zinc-900"
                                                value={formState.subject}
                                                onChange={e => setFormState({ ...formState, subject: e.target.value })}
                                            >
                                                <option value="" disabled>Select a topic...</option>
                                                <option value="project">Start a Project</option>
                                                <option value="hiring">Join the Team</option>
                                                <option value="general">General Inquiry</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-bold text-white/60 ml-1">Message</label>
                                            <textarea
                                                id="message"
                                                required
                                                rows={5}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all font-medium placeholder:text-white/20 resize-none"
                                                placeholder="Tell us about your project..."
                                                value={formState.message}
                                                onChange={e => setFormState({ ...formState, message: e.target.value })}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-accent text-white font-bold text-lg py-4 rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                                        >
                                            {isSubmitting ? (
                                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    Send Message
                                                    <RiSendPlaneLine className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            <Footer />
            <FloatingWhatsApp />
        </main>
    );
}
