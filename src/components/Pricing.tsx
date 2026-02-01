export default function WhyNexora() {
    return (
        <section id="why" className="py-20">
            <div className="section-container">
                <div className="text-center max-w-xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why <span className="italic font-medium text-accent">Nexora</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
                        <div className="flex flex-col md:flex-row justify-between gap-10 relative z-10">
                            <div className="space-y-6 flex-1">
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">A performance-first mindset</h3>
                                    <p className="text-secondary text-base">We don't just build sites; we build high-performance assets for your business.</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                    {[
                                        "Clear communication",
                                        "Clean and maintainable code",
                                        "Performance-first mindset",
                                        "Long-term scalability",
                                        "Institution-ready security",
                                        "Dedicated support"
                                    ].map((point, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="text-accent text-sm">✓</span>
                                            <span className="text-secondary text-sm font-medium">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-black/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl w-full md:w-[320px] flex flex-col items-center justify-center text-center">
                                <h4 className="text-lg font-bold mb-2">Ready to scale?</h4>
                                <p className="text-xs text-secondary mb-6">Let's discuss your technical needs.</p>

                                <button className="w-full bg-accent text-white py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all mb-3">
                                    Get started
                                </button>
                                <button className="text-secondary text-[10px] uppercase tracking-widest hover:text-white transition-colors">
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
