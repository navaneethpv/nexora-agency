"use client";

import { useState, useEffect, useRef } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/work-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { RiArrowLeftLine, RiCheckboxCircleLine, RiStackLine, RiCpuLine, RiTrophyLine, RiArrowRightLine, RiExternalLinkLine, RiCloseLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const project = projects.find(p => p.slug === slug);

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Lock scroll when lightbox is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-end mb-12 md:mb-16">
                        <div className="hero-text space-y-4">
                            <span className="text-accent font-mono tracking-widest uppercase block">
                                {project.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                {project.title}
                            </h1>
                            {project.liveLink && (
                                <div className="pt-2">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-white font-medium transition-all text-sm md:text-base"
                                    >
                                        Live Demo <RiExternalLinkLine size={18} />
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className="lg:pl-10 hero-text">
                            <p className="text-lg md:text-2xl text-gray-300 font-medium leading-relaxed">
                                {project.shortDescription}
                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-[16/10] md:aspect-video w-full rounded-3xl overflow-hidden border border-white/10 hero-image">
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

            {/* Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
                <section className="py-20 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto content-section">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Visual Showcase</h2>
                            <p className="text-gray-400 text-lg max-w-xl">
                                Detailed snapshots of the interface and user experience across different segments of the platform.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:gap-8">
                        {project.gallery.map((image, i) => (
                            <div
                                key={i}
                                onClick={() => setSelectedImage(image)}
                                className="group relative aspect-square md:aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-white/5 cursor-zoom-in"
                            >
                                <Image
                                    src={image}
                                    alt={`Screenshot ${i + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-medium px-6 py-2 rounded-full border border-white/20 backdrop-blur-md">
                                        View Screenshot
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Lightbox Modal */}
                    <AnimatePresence>
                        {selectedImage && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedImage(null)}
                                className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                            >
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-8 right-8 md:top-12 md:right-12 text-white/70 hover:text-white transition-all p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full z-50 group cursor-pointer"
                                    aria-label="Close Gallery"
                                >
                                    <RiCloseLine size={32} className="group-hover:rotate-90 transition-transform duration-300" />
                                </button>

                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    className="relative w-full max-w-6xl h-full flex items-center justify-center"
                                    onClick={(e: React.MouseEvent) => e.stopPropagation()}
                                >
                                    <div className="relative w-full h-full max-h-[80vh] rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                                        <Image
                                            src={selectedImage}
                                            alt="Selected Project Screenshot"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </section>
            )}

            {/* Live Link Section */}
            {project.liveLink && (
                <section className="py-20 md:py-32 px-6 md:px-10 content-section">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="relative rounded-[3rem] overflow-hidden bg-white/2 border border-white/10 p-12 md:p-20 flex flex-col items-center text-center">
                            {/* Decorative background */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

                            <div className="relative z-10">
                                <span className="text-accent font-mono tracking-widest uppercase mb-6 block">Experience it live</span>
                                <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-3xl">
                                    See the project in action <br /> from your browser.
                                </h2>
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-accent hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
                                >
                                    Visit Live Website <RiExternalLinkLine />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-24 md:py-32 px-6 md:px-10 text-center content-section">
                <div className="max-w-3xl mx-auto bg-linear-to-b from-white/5 to-transparent border border-white/10 rounded-[3rem] p-10 md:p-16">
                    <RiTrophyLine className="w-12 h-12 md:w-16 md:h-16 text-accent mx-auto mb-8" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to create something extraordinary?</h2>
                    <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                        Let{"'"}s apply the same level of precision and strategy to your next project.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-accent text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-accent/20 active:scale-95 inline-flex items-center gap-2"
                    >
                        Start Your Project <RiArrowRightLine />
                    </Link>
                </div>
            </section>

            <Footer />
            <FloatingWhatsApp />
        </main>
    );
}
