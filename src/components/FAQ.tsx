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
        <section className="py-32 bg-[#051F20]">
            <div className="section-container relative z-10 max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Left Column: Title */}
                    <div className="lg:col-span-4">
                        <ScrollReveal direction="right" distance={30}>
                            <div className="sticky top-32">
                                <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#DAF1DE] leading-tight mb-6">
                                    Frequently<br />Asked Questions
                                </h2>
                                <p className="text-[#8EB69B] text-base font-light leading-relaxed max-w-sm">
                                    Everything you need to know about our distilled engineering process and technical ethics.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-8 space-y-4">
                        {faqs.map((faq, index) => (
                            <ScrollReveal key={index} delay={index * 0.1} direction="up" distance={20}>
                                <div
                                    className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${openIndex === index
                                        ? 'bg-[#0B2B26] border-[#235347]'
                                        : 'bg-transparent border-[#163832] hover:border-[#235347]'
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex justify-between items-center text-left p-8 group"
                                        aria-expanded={openIndex === index}
                                        aria-controls={`faq-answer-${index}`}
                                        id={`faq-question-${index}`}
                                    >
                                        <span className={`text-xl font-medium pr-8 transition-colors duration-300 ${openIndex === index ? 'text-[#DAF1DE]' : 'text-[#DAF1DE]/90 group-hover:text-[#DAF1DE]'
                                            }`}>
                                            {faq.question}
                                        </span>
                                        <div className={`w-10 h-10 rounded-full border border-[#235347] flex items-center justify-center shrink-0 transition-transform duration-500 ${openIndex === index ? 'rotate-45' : ''}`}>
                                            <RiAddLine className={`w-5 h-5 transition-colors ${openIndex === index ? 'text-[#DAF1DE]' : 'text-[#8EB69B] group-hover:text-[#DAF1DE]'}`} />
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
                                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                            >
                                                <div className="px-8 pb-10 text-base text-[#8EB69B] font-light leading-relaxed border-t border-[#163832] pt-6">
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
