"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
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
        <section className="river-flow py-16 md:py-32 rounded-4xl md:rounded-[4rem] border border-white/5 px-4 md:px-0 gpu-stable">
            <div className="section-container max-w-2xl px-6">
                <ScrollReveal direction="down" distance={20}>
                    <h2 className="text-3xl md:text-5xl font-black text-center mb-10 md:mb-16 text-white leading-tight">
                        Commonly Asked <br className="md:hidden" />
                        <span className="italic font-medium text-accent">Questions</span>
                    </h2>
                </ScrollReveal>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} direction="up" distance={10}>
                            <div className="border-b border-white/10 pb-4">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex justify-between items-center text-left py-4 md:py-6 hover:text-accent transition-all group"
                                >
                                    <span className="text-[1.1rem] md:text-xl font-bold pr-4 text-white/90 group-hover:text-accent transition-colors leading-snug">{faq.question}</span>
                                    <Plus className={`w-5 h-5 md:w-6 md:h-6 shrink-0 transition-transform duration-500 ${openIndex === index ? 'rotate-45 text-accent' : 'text-secondary group-hover:text-accent'}`} />
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-6 text-base md:text-lg text-secondary leading-relaxed font-medium">
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
        </section>
    );
}
