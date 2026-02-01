"use client";

import { useState } from "react";

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
                <h2 className="text-3xl font-bold text-center mb-12">
                    Commonly Asked <span className="font-serif-italic font-medium text-secondary">Questions</span>
                </h2>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-white/5 pb-3">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center text-left py-3 hover:opacity-70 transition-opacity"
                            >
                                <span className="text-base font-bold">{faq.question}</span>
                                <span className={`text-xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>+</span>
                            </button>
                            {openIndex === index && (
                                <div className="pb-3 text-sm text-secondary leading-relaxed animate-fade-in">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
