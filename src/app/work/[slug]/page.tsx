"use client";

import { useEffect, useRef } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/work-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { RiArrowLeftLine, RiCheckboxCircleLine, RiStackLine, RiCpuLine, RiTrophyLine, RiArrowRightLine } from "react-icons/ri";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const project = projects.find(p => p.slug === slug);

    if (!project && slug) {
        // handle not found gracefully or let generic 404 take over
        // For a client component, we might return null or redirect
    }

    // Using a Ref to scope GSAP
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!project) return;

        const ctx = gsap.context(() => {
            // Hero Image Parallax / Scale
            gsap.from(".hero-image", {
                scale: 1.1,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out"
            });

            // Text Reveal
            gsap.from(".hero-text", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.5
            });

            // Sections Fade-in
            const sections = gsap.utils.toArray(".content-section");
            sections.forEach((section: any) => {
                gsap.from(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, [project]);

    if (!project) return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>;

    return (
        <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-accent/30 selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-10 overflow-hidden">
                <div className="max-w-[1400px] mx-auto">
                    <Link href="/work" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 hero-text">
                        <RiArrowLeftLine size={20} /> Back to Work
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
                        <div className="hero-text">
                            <span className="text-accent font-mono tracking-widest uppercase mb-4 block">
                                {project.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                {project.title}
                            </h1>
                        </div>
                        <div className="lg:pl-10 hero-text">
                            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
                                {project.shortDescription}
                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-white/10 hero-image">
                        <Image
                            src={project.coverImage}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />
                    </div>
                </div>
            </section>

            {/* Overview & Challenge */}
            <section className="py-10 md:py-20 px-6 md:px-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 content-section">
                <div className="lg:col-span-4">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                        <RiStackLine className="text-accent" /> Overview
                    </h2>
                </div>
                <div className="lg:col-span-8">
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-12">
                        {project.overview}
                    </p>

                    <div className="bg-white/5 border border-white/5 rounded-2xl p-8 md:p-10">
                        <h3 className="text-xl font-bold mb-6 text-white">The Challenge</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.challenge.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Solution & Tech Stack */}
            <section className="py-10 md:py-20 px-6 md:px-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white/2 rounded-3xl content-section">
                <div className="lg:col-span-4">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                        <RiCpuLine className="text-accent" /> The Solution
                    </h2>
                </div>
                <div className="lg:col-span-8 space-y-12">
                    <ul className="grid grid-cols-1 gap-4">
                        {project.solution.map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-lg text-gray-300">
                                <RiCheckboxCircleLine className="text-accent shrink-0 mt-1" size={20} />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white border-t border-white/10 pt-8">Key Features</h3>
                        <div className="flex flex-wrap gap-3">
                            {project.features.map((feature, i) => (
                                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300">
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 md:py-32 px-6 md:px-10 text-center content-section">
                <div className="max-w-3xl mx-auto bg-linear-to-b from-white/5 to-transparent border border-white/10 rounded-[3rem] p-10 md:p-16">
                    <RiTrophyLine className="w-12 h-12 md:w-16 md:h-16 text-accent mx-auto mb-8" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to create something extraordinary?</h2>
                    <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                        Let{"'"}s apply the same level of precision and strategy to your next project.
                    </p>
                    <Link href="/contact">
                        <button className="bg-accent text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-accent/20 active:scale-95 inline-flex items-center gap-2">
                            Start Your Project <RiArrowRightLine />
                        </button>
                    </Link>
                </div>
            </section>

            <Footer />
            <FloatingWhatsApp />
        </main>
    );
}
