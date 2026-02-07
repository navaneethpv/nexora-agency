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
        <section ref={containerRef} id="work" className="py-24 md:py-40 bg-background relative overflow-hidden">
            {/* Minimal Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full opacity-50" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-accent-secondary/5 blur-[150px] rounded-full opacity-30" />
            </div>

            <div className="relative z-10">
                <div className="mb-24 md:mb-32 max-w-4xl work-title">
                    <h2 className="text-5xl md:text-8xl font-medium mb-10 tracking-tight text-white leading-[0.95]">
                        Selected Work
                    </h2>
                    <p className="text-secondary text-lg md:text-2xl font-normal leading-relaxed max-w-2xl">
                        A curated selection of digital products and brand identities crafted with precision and purpose.
                    </p>
                </div>

                <div className="flex flex-col gap-24 md:gap-40">
                    {featuredProjects.map((project, i) => (
                        <Link href={`/work/${project.slug}`} key={project.slug} className="group project-card block">
                            <article className="border-t border-white/10 pt-12 md:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
                                {/* Text Content */}
                                <div className="space-y-8 md:space-y-12 order-2 lg:order-1">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <span className="text-accent font-medium text-xs md:text-sm tracking-[0.2em] uppercase">0{i + 1}</span>
                                            <span className="w-12 h-px bg-white/10"></span>
                                            <span className="text-secondary font-medium text-xs md:text-sm tracking-[0.2em] uppercase">{project.category}</span>
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-medium text-white group-hover:text-accent transition-colors duration-500">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <p className="text-secondary text-base md:text-lg leading-relaxed max-w-xl">
                                        {project.shortDescription}
                                    </p>
                                    <ul className="flex flex-wrap gap-2 md:gap-3">
                                        {project.features.slice(0, 3).map((feature, idx) => (
                                            <li key={idx} className="px-4 py-1.5 bg-white/3 border border-white/5 rounded-full text-[11px] md:text-xs text-secondary font-medium uppercase tracking-wider">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex items-center gap-2 text-white text-sm md:text-base font-medium group-hover:gap-4 transition-all duration-300">
                                        <span>View Case Study</span>
                                        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div className="order-1 lg:order-2 relative aspect-16/10 overflow-hidden rounded-3xl bg-white/5 border border-white/5">
                                    <Image
                                        src={project.coverImage}
                                        alt={project.title}
                                        fill
                                        className="object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                <div className="mt-24 md:mt-40 flex justify-center view-all-btn">
                    <Link
                        href="/work"
                        className="group inline-flex items-center gap-3 text-lg font-medium text-white pb-1 border-b border-white/10 hover:border-accent transition-all duration-300"
                    >
                        <span>Explore Our Full Portfolio</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
