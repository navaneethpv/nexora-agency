"use client";
import TextScrollReveal from "./TextScrollReveal";

export default function Testimonial() {
    return (
        <section className="py-10 md:py-20 px-4 md:px-0">
            <div className="section-container">
                <div className="relative bg-[#0a0a0a] border border-white/5 rounded-3xl md:rounded-[2.5rem] p-5 sm:p-6 md:p-16 overflow-hidden group">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="absolute top-0 right-0 p-4 md:p-6 opacity-5 text-[60px] md:text-[100px] font-black select-none pointer-events-none group-hover:opacity-10 transition-opacity duration-700">"</div>

                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8 md:mb-10">
                        <span className="text-[10px] md:text-xs font-black tracking-[0.3em] text-accent uppercase">PHILOSOPHY</span>
                    </div>

                    <blockquote className="text-2xl sm:text-3xl md:text-7xl font-medium leading-[1.1] mb-8 md:mb-16">
                        Designed for <span className="text-white">Clarity</span>. <br />
                        <span className="font-normal text-secondary">Built for global scale.</span>
                    </blockquote>

                    <div>
                        <TextScrollReveal
                            text="At Nexora, we focus on architecting digital ecosystems that prioritizes technical stability and radical usability. Our work enables visionaries to scale without friction."
                            className="text-lg md:text-3xl font-normal leading-relaxed text-secondary opacity-80"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
