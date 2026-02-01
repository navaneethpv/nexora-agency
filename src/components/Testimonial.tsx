"use client";

export default function Testimonial() {
    return (
        <section className="py-20">
            <div className="section-container">
                <div className="bg-white/5 border border-white/5 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-5 text-[100px] italic select-none pointer-events-none">"</div>

                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold tracking-widest uppercase mb-6">
                        Philosophy
                    </div>

                    <blockquote className="text-2xl md:text-4xl font-bold leading-tight mb-8 max-w-4xl">
                        Designed for Clarity. <br />
                        <span className="italic font-medium text-secondary">Built for Scale.</span>
                    </blockquote>

                    <p className="text-lg text-secondary leading-relaxed max-w-3xl mb-0">
                        At Nexora, we focus on building digital products that are simple, reliable, and future-ready. Our work prioritizes usability, performance, and maintainability—so businesses can grow without technical friction.
                    </p>
                </div>
            </div>
        </section>
    );
}
