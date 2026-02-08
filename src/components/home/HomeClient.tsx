"use client";

import dynamic from "next/dynamic";

// Dynamically import heavy components to clear the critical path and boost performance towards 100
const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"), { ssr: false });
const SelectedWork = dynamic(() => import("@/components/home/SelectedWork"), { ssr: false });
const Process = dynamic(() => import("@/components/Process"), { ssr: false });
const MockupShowcase = dynamic(() => import("@/components/MockupShowcase"), { ssr: false });
const Testimonial = dynamic(() => import("@/components/Testimonial"), { ssr: false });
const WhyNexora = dynamic(() => import("@/components/Pricing"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const ScrollReveal = dynamic(() => import("@/components/ScrollReveal"), { ssr: false });
const TrustTicker = dynamic(() => import("@/components/TrustTicker"), { ssr: false });

export default function HomeClient() {
    return (
        <>
            {/* Critical Path Ends Here. Following components are lazy-loaded for Score 100 Performance */}
            <TrustTicker />

            <FeaturesSection />

            <div className="flex flex-col gap-32 md:gap-48 pb-32 md:pb-48">
                {/* Proof - Selected Work */}
                <SelectedWork />

                {/* Strategy & Thinking - Process */}
                <div className="section-container">
                    <ScrollReveal>
                        <section className="river-flow rounded-[3rem] border border-white/5 px-4 py-8 md:py-24">
                            <Process />
                        </section>
                    </ScrollReveal>
                </div>

                {/* Expanded Visual Proof - Showcase now full width */}
                <ScrollReveal>
                    <div className="relative z-10 overflow-hidden">
                        <MockupShowcase />
                    </div>
                </ScrollReveal>

                <div className="section-container">
                    <div className="flex flex-col gap-32 md:gap-48">
                        <ScrollReveal>
                            <Testimonial />
                        </ScrollReveal>

                        <ScrollReveal>
                            <WhyNexora />
                        </ScrollReveal>

                        <ScrollReveal>
                            <FAQ />
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </>
    );
}
