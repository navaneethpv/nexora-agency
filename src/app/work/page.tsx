"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/work-data";

export default function WorkListing() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent/30 selection:text-white">
            <Navbar />

            <section className="pt-32 pb-24 md:pt-48 md:pb-32 relative overflow-hidden">
                {/* Ambient Glows */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-secondary/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-24 md:mb-32"
                    >
                        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-8">Selected <br /> Work</h1>
                        <p className="text-xl md:text-3xl text-secondary font-medium leading-relaxed max-w-3xl">
                            A curated selection of projects showcasing our approach to design, development, and digital problem-solving.
                        </p>
                    </motion.div>

                    <div className="flex flex-col gap-32 md:gap-64">
                        {projects.map((item, i) => (
                            <ScrollReveal key={item.slug}>
                                <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 md:gap-20 items-center group`}>
                                    {/* Visual Frame */}
                                    <div className="w-full lg:w-[60%] relative">
                                        <div className="relative aspect-16/10 md:aspect-video overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 bg-white/2 shadow-2xl transition-all duration-700 group-hover:border-accent/30 group-hover:shadow-accent/5">
                                            <Image
                                                src={item.coverImage}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110 ease-out"
                                                sizes="(max-width: 1024px) 100vw, 60vw"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-tr from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />

                                            <div className="absolute top-4 right-4 md:top-8 md:right-8">
                                                <span className="bg-accent/80 backdrop-blur-md px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-black tracking-widest uppercase text-white shadow-xl">
                                                    {item.category.split(' · ')[0]}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Narrative Block */}
                                    <div className="w-full lg:w-[40%] space-y-6 md:space-y-8 px-4 md:px-0">
                                        <div className="space-y-3 md:space-y-4">
                                            <div className="flex items-center gap-3 text-accent group-hover:text-white font-bold text-xs md:text-sm tracking-[0.3em] uppercase transition-colors duration-500">
                                                <span className="opacity-60">0{i + 1}</span>
                                                <div className="h-px w-6 md:w-10 bg-accent/30 group-hover:bg-white/30 transition-colors duration-500" />
                                                <span>PROJECT</span>
                                            </div>
                                            <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-[1.1] tracking-tighter text-white group-hover:text-accent transition-colors duration-500">
                                                {item.title}
                                            </h2>
                                        </div>

                                        <p className="text-base md:text-lg lg:text-xl text-secondary leading-relaxed font-medium">
                                            {item.shortDescription}
                                        </p>

                                        <div className="pt-4 md:pt-6">
                                            <Link
                                                href={`/work/${item.slug}`}
                                                className="group/btn inline-flex items-center gap-4 text-white font-bold text-base md:text-lg"
                                            >
                                                <span className="relative pb-1">
                                                    View Full Impact
                                                    <div className="absolute bottom-0 left-0 w-full h-px bg-white/20 scale-x-100 group-hover:scale-x-0 transition-transform origin-right duration-500" />
                                                    <div className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                                                </span>
                                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:border-accent group-hover/btn:text-white text-white/60 transition-all duration-500">
                                                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
