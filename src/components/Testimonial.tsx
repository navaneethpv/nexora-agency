"use client";

export default function Testimonial() {
    return (
        <section className="py-24">
            <div className="section-container">
                <div className="bg-white/5 border border-white/5 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 text-[120px] font-serif-italic select-none pointer-events-none">"</div>

                    <div className="flex gap-1 mb-8">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <span key={i} className="text-[#FFD700]">★</span>
                        ))}
                    </div>

                    <blockquote className="text-2xl md:text-4xl font-semibold leading-tight mb-12 max-w-4xl italic">
                        "Nexora has completely transformed how we handle design. The speed and quality are unmatched, and the subscription model is exactly what our startup needed."
                    </blockquote>

                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-white/10" />
                        <div>
                            <p className="font-bold">Alex Rivera</p>
                            <p className="text-secondary text-sm">CEO at TechFlow</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
