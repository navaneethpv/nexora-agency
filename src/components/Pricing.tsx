"use client";

import { useState } from "react";

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(false);

    const basePrice = 2995;
    const extraPrice = 1000;

    return (
        <section id="pricing" className="py-24">
            <div className="section-container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Pricing that's <span className="font-serif-italic font-medium">so simple</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden group">
                        <div className="flex flex-col md:flex-row justify-between gap-12 relative z-10">
                            <div className="space-y-8 flex-1">
                                <div>
                                    <h3 className="text-3xl font-bold mb-4">Design subscription</h3>
                                    <p className="text-secondary text-lg">One request at a time. Pause or cancel anytime.</p>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        "One request at a time",
                                        "Average 48 hour delivery",
                                        "Unlimited revisions",
                                        "Cancel or pause anytime"
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="text-accent">✓</span>
                                            <span className="text-secondary">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-black/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl w-full md:w-[360px] flex flex-col items-center">
                                <div className="flex items-center gap-4 mb-8 bg-white/5 p-1 rounded-full w-full">
                                    <button
                                        onClick={() => setIsAnnual(false)}
                                        className={`flex-1 py-1.5 rounded-full text-xs font-bold transition-all ${!isAnnual ? 'bg-white text-black' : 'text-secondary hover:text-white'}`}
                                    >
                                        MONTHLY
                                    </button>
                                    <button
                                        onClick={() => setIsAnnual(true)}
                                        className={`flex-1 py-1.5 rounded-full text-xs font-bold transition-all ${isAnnual ? 'bg-white text-black' : 'text-secondary hover:text-white'}`}
                                    >
                                        WITH ADD-ON
                                    </button>
                                </div>

                                <div className="text-center mb-8">
                                    <div className="text-5xl font-bold mb-2">
                                        ${isAnnual ? (basePrice + extraPrice).toLocaleString() : basePrice.toLocaleString()}
                                    </div>
                                    <div className="text-secondary text-sm uppercase tracking-widest">PER MONTH</div>
                                </div>

                                <button className="w-full bg-accent text-white py-4 rounded-2xl font-bold hover:brightness-110 transition-all mb-4">
                                    Get started
                                </button>
                                <button className="text-secondary text-sm hover:text-white transition-colors">
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
