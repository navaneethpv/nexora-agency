"use client";
import TextScrollReveal from "./TextScrollReveal";

export default function Testimonial() {
    return (
        <section className="py-10 md:py-20 px-4 md:px-0">
            <div className="section-container">
                <div className="relative bg-[#0a0a0a] border border-white/5 rounded-3xl md:rounded-[2.5rem] p-6 md:p-16 overflow-hidden group">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="absolute top-0 right-0 p-4 md:p-6 opacity-5 text-[60px] md:text-[100px] italic select-none pointer-events-none group-hover:opacity-10 transition-opacity duration-700">"</div>

                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8 md:mb-10">
                        <span className="text-[10px] md:text-xs font-black tracking-[0.3em] text-accent uppercase">PHILOSOPHY</span>
                    </div>

                    <blockquote className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight mb-6 md:mb-8 max-w-4xl">
                        Designed for Clarity. <br />
                        <span className="italic font-medium text-secondary">Built for Scale.</span>
                    </blockquote>

                    <div className="max-w-3xl">
                        <TextScrollReveal
                            text="At Nexora, we focus on building digital products that are simple, reliable, and future-ready. Our work prioritizes usability, performance, and maintainability—so businesses can grow without technical friction."
                            className="text-sm md:text-lg font-medium leading-relaxed"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
