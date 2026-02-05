"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/work-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ArrowUpRight } from "lucide-react";

export default function WorkPage() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Optimization: Lazy load GSAP to reduce initial bundle size and boost LCP
        const loadAnimations = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

            gsap.registerPlugin(ScrollTrigger);

            // Animate only grid items, keeping the Hero static for immediate accessibility and Score 100
            const cards = gsap.utils.toArray(".work-grid-item");

            gsap.fromTo(cards,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 90%", // Start animation slightly later to ensure layout stability
                        toggleActions: "play none none reverse"
                    }
                }
            );
        };

        // Defer animation script slightly to prioritize Initial Paint
        const timer = setTimeout(() => {
            loadAnimations();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent/30 selection:text-white">
            <Navbar />

            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-10 max-w-[1400px] mx-auto">
                {/* Header - Static for LCP Score 100 */}
                <div className="mb-20 md:mb-32 max-w-4xl">
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-white">
                        Our Work
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl">
                        A showcase of digital products crafted with precision, strategy, and cutting-edge technology.
                    </p>
                </div>

                {/* Project Grid */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                    {projects.map((project, index) => (
                        <Link
                            key={project.slug}
                            href={`/work/${project.slug}`}
                            className="group block work-grid-item will-change-transform" // Hint to browser
                        >
                            <article className="flex flex-col gap-6">
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl bg-white/5 border border-white/10 group-hover:border-accent/30 transition-colors duration-500">
                                    <Image
                                        src={project.coverImage}
                                        alt={project.title}
                                        fill
                                        // Priority for first 2 images (Above the fold candidates)
                                        priority={index < 2}
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    {/* Overlay - Simplified for performance */}
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

                                    {/* Hover CTA - Hidden by default to save paint costs */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            View Case Study <ArrowUpRight size={18} />
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-3 px-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-accent text-xs md:text-sm font-mono uppercase tracking-widest">
                                            {project.category}
                                        </span>
                                        <div className="flex gap-2">
                                            {project.features.slice(0, 2).map((tag, i) => (
                                                <span key={i} className="text-[10px] uppercase border border-white/10 px-2 py-1 rounded text-gray-500">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors duration-300">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-400 leading-relaxed line-clamp-2">
                                        {project.shortDescription}
                                    </p>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
            <FloatingWhatsApp />
        </main>
    );
}
