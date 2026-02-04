"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

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
        <section className="py-10 md:py-20 border-t border-white/5 px-4 md:px-0">
            <div className="section-container max-w-2xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-6 md:mb-16"
                >
                    Commonly Asked <span className="italic font-medium text-accent">Questions</span>
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border-b border-white/5 pb-4"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center text-left py-3 md:py-4 hover:text-accent transition-colors group"
                            >
                                <span className="text-base md:text-lg font-bold pr-4">{faq.question}</span>
                                <Plus className={`w-4 h-4 md:w-5 md:h-5 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-accent' : 'text-secondary group-hover:text-accent'}`} />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-4 text-sm md:text-base text-secondary leading-relaxed font-medium">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
