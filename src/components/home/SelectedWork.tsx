"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/work-data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import ParallaxScroll from "../ParallaxScroll";

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWork() {
    const containerRef = useRef<HTMLDivElement>(null);
    const featuredProjects = projects.slice(0, 3);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Section Title
            gsap.from(".work-title", {
                scrollTrigger: {
                    trigger: ".work-title",
                    start: "top 95%", // Trigger earlier
                },
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out"
            });

            // Animate Projects
            const projectCards = gsap.utils.toArray(".project-card");
            projectCards.forEach((card: any, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 95%", // Trigger earlier
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: i * 0.05 // Faster stagger
                });
            });

            // Animate View All Button
            gsap.from(".view-all-btn", {
                scrollTrigger: {
                    trigger: ".view-all-btn",
                    start: "top 98%",
                },
                y: 20,
                opacity: 0,
                duration: 0.5,
                ease: "power2.out",
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="work" className="py-24 md:py-32 bg-black relative overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <ParallaxScroll speed={0.4} direction="up" className="absolute top-1/4 -right-20">
                    <div className="w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
                </ParallaxScroll>
                <ParallaxScroll speed={0.6} direction="down" className="absolute -bottom-20 -left-20">
                    <div className="w-[500px] h-[500px] bg-accent-secondary/5 blur-[150px] rounded-full" />
                </ParallaxScroll>
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff,transparent_1px)] bg-size-[40px_40px] opacity-[0.03]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
                <ParallaxScroll speed={0.15} direction="down" className="mb-20 md:mb-24 max-w-3xl work-title">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white">Selected Work</h2>
                    <p className="text-gray-400 text-lg md:text-2xl font-medium leading-relaxed">
                        A curated selection of projects showcasing our approach to design, development, and digital problem-solving.
                    </p>
                </ParallaxScroll>

                <div className="grid grid-cols-1 gap-16 md:gap-24">
                    {featuredProjects.map((project, i) => (
                        <Link href={`/work/${project.slug}`} key={project.slug} className="group project-card block">
                            <article className="border-t border-white/10 pt-10 md:pt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start">
                                {/* Text Content */}
                                <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <span className="text-accent font-mono text-xs md:text-sm tracking-widest uppercase">0{i + 1}</span>
                                            <span className="w-12 h-px bg-white/20"></span>
                                            <span className="text-white/60 font-mono text-xs md:text-sm tracking-widest uppercase">{project.category}</span>
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-bold text-white group-hover:text-accent transition-colors duration-500">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                        {project.shortDescription}
                                    </p>
                                    <ul className="flex flex-wrap gap-2 md:gap-3">
                                        {project.features.slice(0, 3).map((feature, idx) => (
                                            <li key={idx} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs md:text-sm text-gray-300">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all duration-300">
                                        View Case Study
                                        <ArrowUpRight className="w-5 h-5 text-accent" />
                                    </div>
                                </div>

                                {/* Image with subtle parallax */}
                                <ParallaxScroll speed={0.1} className="order-1 lg:order-2 relative aspect-4/3 md:aspect-16/10 overflow-hidden rounded-2xl bg-white/5">
                                    <Image
                                        src={project.coverImage}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                </ParallaxScroll>
                            </article>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 md:mt-32 flex justify-center view-all-btn">
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-3 text-lg font-bold text-white hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1"
                    >
                        View All Work <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
