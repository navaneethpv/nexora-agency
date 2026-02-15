"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/work-data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiArrowLeftUpLine, RiArrowRightUpLine } from "react-icons/ri";
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
        <section ref={containerRef} id="work" className="py-24 md:py-32 bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full opacity-40" />
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-accent-secondary/5 blur-[120px] rounded-full opacity-30" />
            </div>

            <div className="section-container relative z-10">
                <div className="mb-12 md:mb-32 work-title flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-4xl md:text-7xl font-medium tracking-tighter text-white uppercase leading-[0.9]">
                            Showcase <span className="text-secondary opacity-60">Projects</span>
                        </h2>
                    </div>
                    <p className="text-secondary text-base md:text-lg font-light max-w-md leading-relaxed border-l border-white/10 pl-6 mt-4 md:mt-0 block">
                        A cinematic distillation of high-performance digital systems and industry-leading design solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 md:gap-y-32">
                    {featuredProjects.map((project, i) => (
                        <Link
                            href={`/work/${project.slug}`}
                            key={project.slug}
                            className={`group project-card block relative will-change-transform ${i === 2 ? 'md:col-span-2 md:w-2/3 md:mx-auto' : ''}`}
                            aria-label={`View case study for ${project.title}`}
                        >
                            <article className="flex flex-col gap-6 md:gap-8">
                                {/* Image Container */}
                                <div className="relative aspect-video w-full overflow-hidden rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 group-hover:border-accent/30 transition-all duration-500">
                                    <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                    <ParallaxScroll speed={0.05} className="w-full h-full">
                                        <Image
                                            src={project.coverImage}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </ParallaxScroll>

                                    {/* Floating Badge Removed */}
                                </div>

                                {/* Content */}
                                <div className="space-y-3 md:space-y-4 px-1 md:px-2">
                                    <div className="flex justify-between items-start gap-3 md:gap-4">
                                        <div className="space-y-1.5 md:space-y-2">
                                            <h3 className="text-xl md:text-4xl font-medium text-white group-hover:text-accent transition-colors duration-300 leading-tight">
                                                {project.title}
                                            </h3>
                                            <p className="text-secondary text-sm md:text-base leading-relaxed line-clamp-2 max-w-md">
                                                {project.shortDescription}
                                            </p>
                                        </div>

                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300 shrink-0">
                                            <RiArrowRightUpLine className="w-4 h-4 md:w-5 md:h-5 text-white transition-transform duration-300 group-hover:rotate-45" />
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 pt-1 md:pt-2">
                                        {project.features.slice(0, 3).map((feature, idx) => (
                                            <span key={idx} className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider border border-white/5 px-2 py-1 rounded-md">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 md:mt-24 flex justify-start view-all-btn">
                    <Link
                        href="/work"
                        className="group relative flex items-center gap-3 text-white/50 hover:text-white transition-colors duration-300"
                        aria-label="View all projects"
                    >
                        <span className="text-sm md:text-base font-medium uppercase tracking-widest">View Entire Portfolio</span>
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                            <RiArrowRightUpLine className="w-5 h-5 transition-transform group-hover:rotate-45" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
