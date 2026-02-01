"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer: "Timelines vary based on complexity, but most marketing sites are delivered in 4-6 weeks, while complex web applications can take 3-4 months."
    },
    {
        question: "Do you offer ongoing maintenance?",
        answer: "Yes, we provide long-term maintenance and support to ensure your product remains secure, updated, and optimized for growth."
    },
    {
        question: "Which technologies do you specialize in?",
        answer: "We specialize in modern, high-performance tech stacks including React, Next.js, TypeScript, and scalable cloud infrastructure."
    },
    {
        question: "Can you help with existing projects?",
        answer: "Absolutely. We can perform technical audits, performance optimizations, or help scale out features for existing web platforms."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 border-t border-white/5">
            <div className="section-container max-w-2xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16"
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
                                className="w-full flex justify-between items-center text-left py-4 hover:text-accent transition-colors group"
                            >
                                <span className="text-lg font-bold">{faq.question}</span>
                                <Plus className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-accent' : 'text-secondary group-hover:text-accent'}`} />
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
                                        <div className="pb-4 text-base text-secondary leading-relaxed font-medium">
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
