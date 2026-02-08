"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiAddLine } from "react-icons/ri";
import ScrollReveal from "./ScrollReveal";

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer: "Project timelines vary depending on scope and requirements. Most projects typically take a few weeks, with clear milestones defined at the start to ensure steady progress and predictable delivery."
    },
    {
        question: "Do you offer ongoing maintenance?",
        answer: "Yes. We offer ongoing support and maintenance to help keep your website reliable, secure, and up to date. The level of support is tailored to your needs."
    },
    {
        question: "Which technologies do you specialize in?",
        answer: "We use modern, reliable technologies chosen based on the needs of each project. Our focus is on stability, performance, and long-term maintainability rather than specific tools."
    },
    {
        question: "Can you help with existing projects?",
        answer: "Yes. We can review, improve, or extend existing websites and platforms, whether it’s a redesign, performance improvements, or structural updates."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative py-24 md:py-40 bg-background overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1600px] pointer-events-none opacity-20">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/10 blur-[130px] rounded-full" />
            </div>

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                    {/* Left Column: Title */}
                    <div className="lg:col-span-5">
                        <ScrollReveal direction="right" distance={30}>
                            <div className="sticky top-32">
                                <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white leading-[0.9] mb-8">
                                    Commonly <br />
                                    <span className="text-accent font-bold">Quest</span>ions
                                </h2>
                                <p className="text-secondary text-base md:text-xl font-normal leading-relaxed opacity-70 max-w-md">
                                    Everything you need to know about our distilled engineering process and technical ethics.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-7 space-y-4">
                        {faqs.map((faq, index) => (
                            <ScrollReveal key={index} delay={index * 0.1} direction="up" distance={20}>
                                <div
                                    className={`glass-card rounded-3xl border transition-all duration-500 overflow-hidden ${openIndex === index
                                        ? 'bg-white/5 border-accent/30'
                                        : 'bg-white/2 border-white/5 hover:border-white/20'
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex justify-between items-center text-left p-6 md:p-10 group"
                                        aria-expanded={openIndex === index}
                                        aria-controls={`faq-answer-${index}`}
                                        id={`faq-question-${index}`}
                                    >
                                        <span className={`text-xl md:text-2xl font-medium pr-8 transition-colors duration-300 ${openIndex === index ? 'text-accent' : 'text-white/90'
                                            }`}>
                                            {faq.question}
                                        </span>
                                        <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-all duration-500 ${openIndex === index ? 'rotate-45 bg-accent border-accent text-white' : 'group-hover:border-accent text-white/50'
                                            }`}>
                                            <RiAddLine className="w-5 h-5" />
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                id={`faq-answer-${index}`}
                                                role="region"
                                                aria-labelledby={`faq-question-${index}`}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                            >
                                                <div className="px-6 md:px-10 pb-8 md:pb-12 text-base md:text-xl text-secondary leading-relaxed font-normal opacity-80 border-t border-white/5 pt-6">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
