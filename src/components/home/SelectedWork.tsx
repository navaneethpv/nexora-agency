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
        <section ref={containerRef} id="work" className="py-24 md:py-40 bg-background relative overflow-hidden">
            {/* Minimal Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full opacity-50" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-accent-secondary/5 blur-[150px] rounded-full opacity-30" />
            </div>

            <div className="relative z-10 section-container">
                <div className="mb-24 md:mb-40 work-title">
                    <h2 className="text-5xl md:text-8xl font-medium mb-10 tracking-tighter text-white leading-[0.85] uppercase">
                        Selected <br />
                        <span className="text-accent font-bold">Equity</span>
                    </h2>
                    <p className="text-secondary text-lg md:text-xl font-light leading-relaxed max-w-3xl opacity-60">
                        A cinematic distillation of high-performance digital systems and architectural brand equity.
                    </p>
                </div>

                <div className="flex flex-col gap-40 md:gap-72">
                    {featuredProjects.map((project, i) => (
                        <Link href={`/work/${project.slug}`} key={project.slug} className="group project-card block relative will-change-transform" aria-label={`View case study for ${project.title}`}>
                            <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-0 items-center">
                                {/* Text Content - Floating Layer */}
                                <div className="lg:col-span-12 lg:row-start-1 lg:col-start-1 z-20 pointer-events-none">
                                    <div className="space-y-8 md:space-y-12">
                                        <div className="flex items-center gap-6 overflow-hidden">
                                            <span className="text-accent font-black text-sm md:text-base tracking-[0.4em] uppercase opacity-40">0{i + 1}</span>
                                            <span className="w-12 h-px bg-white/10"></span>
                                            <span className="text-secondary font-medium text-xs md:text-sm tracking-[0.3em] uppercase">{project.category}</span>
                                        </div>
                                        <h3 className="text-4xl md:text-[7rem] font-medium text-white group-hover:text-accent transition-all duration-700 leading-none tracking-tighter uppercase">
                                            {project.title}
                                        </h3>

                                        <div className="lg:ml-24 max-w-xl space-y-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0">
                                            <p className="text-secondary text-base md:text-2xl leading-relaxed font-light">
                                                {project.shortDescription}
                                            </p>
                                            <div className="flex items-center gap-4 text-white text-sm md:text-lg font-medium group/btn">
                                                <span className="border-b border-accent pb-1">Distill Experience</span>
                                                <RiArrowRightUpLine className="w-5 h-5 text-accent group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Section - Background Layer */}
                                <div className="lg:col-span-8 lg:col-start-5 lg:row-start-1 relative aspect-16/10 z-10">
                                    <ParallaxScroll speed={0.05} direction="down" className="w-full h-full rounded-4xl overflow-hidden bg-white/5 border border-white/5">
                                        <Image
                                            src={project.coverImage}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-all duration-1000 group-hover:scale-110 filter brightness-[0.4] group-hover:brightness-100"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                                            decoding="async"
                                        />
                                        {/* Color Overlay */}
                                        <div className="absolute inset-0 bg-accent/10 opacity-40 group-hover:opacity-0 transition-opacity duration-700 mix-blend-color" />
                                        <div className="absolute inset-0 bg-background/60 group-hover:opacity-0 transition-opacity duration-700" />
                                    </ParallaxScroll>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                <div className="mt-32 md:mt-48 flex justify-center view-all-btn">
                    <Link
                        href="/work"
                        className="group relative bg-white/3 border border-white/10 text-white px-10 md:px-16 py-6 md:py-8 rounded-full text-base md:text-xl font-medium hover:bg-white/5 transition-all backdrop-blur-3xl active:scale-95 flex items-center gap-4"
                        aria-label="View our full portfolio of work"
                    >
                        <span>Distill Full Portfolio</span>
                        <RiArrowRightUpLine className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-accent" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
