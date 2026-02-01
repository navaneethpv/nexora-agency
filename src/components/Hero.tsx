"use client";

export default function Hero() {
    return (
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 flex flex-col items-center text-center px-6">
            {/* Subtle Top Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-accent/10 blur-[120px] rounded-full" />
                <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-blue-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 text-[11px] font-medium text-white/70 mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-[#34C759] animate-pulse-green" />
                Hurry, only 3 spots left
            </div>

            <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]">
                The truly <span className="font-serif-italic font-medium">Nexora</span> <br />
                design subscription
            </h1>

            <p className="max-w-xl text-lg text-secondary mb-10 leading-relaxed">
                High-end design services, delivered consistently.
                Replaces unreliable freelancers and expensive agencies for a flat monthly fee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-accent text-white px-8 py-3.5 rounded-full text-base font-semibold hover:brightness-110 transition-all shadow-lg shadow-accent/20">
                    Book a call
                </button>
                <button className="bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-white/10 transition-all">
                    See plans
                </button>
            </div>
        </section>
    );
}
