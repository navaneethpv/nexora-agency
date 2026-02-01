"use client";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 flex flex-col items-center text-center px-6">
            {/* Subtle Top Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-accent/10 blur-[120px] rounded-full" />
                <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-blue-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-[10px] font-medium text-white/70 mb-6">
                <span className="h-1 w-1 rounded-full bg-accent animate-pulse" />
                Web Development & Digital Solutions
            </div>

            <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                Modern Web Solutions for <br />
                <span className="italic font-medium text-accent">Growing Teams</span>
            </h1>

            <p className="max-w-2xl text-base text-secondary mb-8 leading-relaxed">
                Nexora builds clean, scalable, and performance-focused websites and web applications for businesses and institutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-accent text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all shadow-lg shadow-accent/20">
                    View Our Work
                </button>
                <button className="bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-all">
                    Get in Touch
                </button>
            </div>
        </section>
    );
}
