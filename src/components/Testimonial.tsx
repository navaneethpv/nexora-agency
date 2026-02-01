"use client";

export default function Testimonial() {
    return (
        <section className="py-16 md:py-20 px-4 md:px-0">
            <div className="section-container">
                <div className="bg-white/5 border border-white/5 rounded-3xl md:rounded-[2.5rem] p-6 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 md:p-6 opacity-5 text-[60px] md:text-[100px] italic select-none pointer-events-none">"</div>

                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[9px] md:text-[10px] font-bold tracking-widest uppercase mb-5 md:mb-6">
                        Philosophy
                    </div>

                    <blockquote className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight mb-6 md:mb-8 max-w-4xl">
                        Designed for Clarity. <br />
                        <span className="italic font-medium text-secondary">Built for Scale.</span>
                    </blockquote>

                    <p className="text-sm md:text-lg text-secondary leading-relaxed max-w-3xl mb-0 font-medium">
                        At Nexora, we focus on building digital products that are simple, reliable, and future-ready. Our work prioritizes usability, performance, and maintainability—so businesses can grow without technical friction.
                    </p>
                </div>
            </div>
        </section>
    );
}
