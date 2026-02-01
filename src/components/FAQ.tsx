"use client";

import { useState } from "react";

const faqs = [
    {
        question: "Why wouldn't I just hire a full-time designer?",
        answer: "The annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize."
    },
    {
        question: "Is there a limit to how many requests I can have?",
        answer: "No, you can add as many design requests to your queue as you'd like, and they will be delivered one by one."
    },
    {
        question: "How fast will I receive my designs?",
        answer: "On average, you'll receive your designs in two business days or less. Some more complex requests can take longer."
    },
    {
        question: "Who are the designers?",
        answer: "Nexora is an agency of one. This means you'll work directly with me, the founder of Nexora. However, power-ups like custom illustrations are provided by partner designers."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 border-t border-white/5">
            <div className="section-container max-w-3xl">
                <h2 className="text-4xl font-bold text-center mb-16">
                    Commonly Asked <span className="font-serif-italic font-medium text-secondary">Questions</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-white/5 pb-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center text-left py-4 hover:opacity-70 transition-opacity"
                            >
                                <span className="text-lg font-bold">{faq.question}</span>
                                <span className={`text-2xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>+</span>
                            </button>
                            {openIndex === index && (
                                <div className="pb-4 text-secondary leading-relaxed animate-fade-in">
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
