"use client";

export default function Testimonial() {
    return (
        <section className="py-20">
            <div className="section-container">
                <div className="bg-white/5 border border-white/5 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-5 text-[100px] font-serif-italic select-none pointer-events-none">"</div>

                    <div className="flex gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <span key={i} className="text-[#FFD700] text-sm">★</span>
                        ))}
                    </div>

                    <blockquote className="text-xl md:text-3xl font-semibold leading-tight mb-10 max-w-3xl italic">
                        "Nexora has completely transformed how we handle design. The speed and quality are unmatched, and the subscription model is exactly what our startup needed."
                    </blockquote>

                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-white/10" />
                        <div>
                            <p className="font-bold text-sm">Alex Rivera</p>
                            <p className="text-secondary text-xs">CEO at TechFlow</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
