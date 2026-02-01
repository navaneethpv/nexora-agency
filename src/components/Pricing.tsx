"use client";

import { useState } from "react";

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(false);

    const basePrice = 2995;
    const extraPrice = 1000;

    return (
        <section id="pricing" className="py-20">
            <div className="section-container">
                <div className="text-center max-w-xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Pricing that's <span className="font-serif-italic font-medium">so simple</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
                        <div className="flex flex-col md:flex-row justify-between gap-10 relative z-10">
                            <div className="space-y-6 flex-1">
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">Design subscription</h3>
                                    <p className="text-secondary text-base">One request at a time. Pause or cancel anytime.</p>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        "One request at a time",
                                        "Average 48 hour delivery",
                                        "Unlimited revisions",
                                        "Cancel or pause anytime"
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="text-accent text-sm">✓</span>
                                            <span className="text-secondary text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-black/40 backdrop-blur-md border border-white/5 p-7 rounded-3xl w-full md:w-[320px] flex flex-col items-center">
                                <div className="flex items-center gap-3 mb-6 bg-white/5 p-1 rounded-full w-full">
                                    <button
                                        onClick={() => setIsAnnual(false)}
                                        className={`flex-1 py-1.5 rounded-full text-[10px] font-bold transition-all ${!isAnnual ? 'bg-white text-black' : 'text-secondary hover:text-white'}`}
                                    >
                                        MONTHLY
                                    </button>
                                    <button
                                        onClick={() => setIsAnnual(true)}
                                        className={`flex-1 py-1.5 rounded-full text-[10px] font-bold transition-all ${isAnnual ? 'bg-white text-black' : 'text-secondary hover:text-white'}`}
                                    >
                                        WITH ADD-ON
                                    </button>
                                </div>

                                <div className="text-center mb-6">
                                    <div className="text-4xl font-bold mb-1">
                                        ${isAnnual ? (basePrice + extraPrice).toLocaleString() : basePrice.toLocaleString()}
                                    </div>
                                    <div className="text-secondary text-[10px] uppercase tracking-widest">PER MONTH</div>
                                </div>

                                <button className="w-full bg-accent text-white py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all mb-3 text-sm">
                                    Get started
                                </button>
                                <button className="text-secondary text-xs hover:text-white transition-colors">
                                    Book a call
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
