import { notFound } from "next/navigation";
import { projects } from "@/data/work-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import MacbookAnimation from "@/components/MacbookAnimation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent/30 selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-accent/10 via-transparent to-transparent pointer-events-none" />

                <div className="section-container relative z-10">
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 text-accent font-bold text-sm tracking-widest uppercase mb-12 hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Work
                    </Link>

                    <ScrollReveal>
                        <span className="text-xs md:text-sm font-black tracking-[0.4em] text-accent uppercase mb-6 block">
                            {project.category}
                        </span>
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-10 max-w-4xl">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-3xl text-secondary font-medium leading-relaxed max-w-3xl">
                            {project.shortDescription}
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Featured visual */}
            <section className="-mt-10 mb-20 md:mb-32">
                <div className="max-w-[1400px] mx-auto px-4">
                    <ScrollReveal>
                        <div className="relative aspect-video rounded-4xl md:rounded-[4rem] overflow-hidden border border-white/10 bg-white/2 shadow-3xl">
                            <Image
                                src={project.coverImage}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-20 md:py-32 bg-white/2 border-y border-white/5">
                <div className="section-container">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
                        <div className="md:col-span-4">
                            <ScrollReveal>
                                <h2 className="text-sm font-black tracking-[0.4em] text-accent uppercase mb-6">Overview</h2>
                                <div className="h-px w-20 bg-accent/30" />
                            </ScrollReveal>
                        </div>
                        <div className="md:col-span-8">
                            <ScrollReveal>
                                <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium">
                                    {project.overview}
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge & Solution Section */}
            <section className="pt-24 md:pt-48 pb-0">
                <div className="section-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                        {/* The Challenge */}
                        <ScrollReveal>
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-sm font-black tracking-[0.4em] text-accent uppercase mb-6">The Challenge</h2>
                                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">Identifying the pain points</h3>
                                </div>
                                <div className="space-y-6">
                                    {project.challenge.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold text-white/40">
                                                {i + 1}
                                            </div>
                                            <p className="text-lg md:text-xl text-secondary font-medium">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Our Solution */}
                        <ScrollReveal>
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-sm font-black tracking-[0.4em] text-accent uppercase mb-6">Our Solution</h2>
                                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">Crafting the digital answer</h3>
                                </div>
                                <div className="space-y-6 bg-accent/5 p-8 md:p-10 rounded-4xl border border-accent/10">
                                    {project.solution.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                                            <p className="text-lg md:text-xl text-white font-medium">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 3D Animation Section */}
            {project.macbookImage && (
                <MacbookAnimation texture={project.macbookImage} />
            )}

            {/* Key Features Section */}
            <section className={`py-24 md:py-32 bg-white/2 border-t border-white/5 ${!project.macbookImage ? 'mt-20' : ''}`}>
                <div className="section-container">
                    <div className="mb-20">
                        <ScrollReveal>
                            <h2 className="text-sm font-black tracking-[0.4em] text-accent uppercase mb-6">Key Features</h2>
                            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">The building blocks of success</h3>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                        {project.features.map((feature, i) => (
                            <ScrollReveal key={i}>
                                <div className="p-8 md:p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-accent/20 transition-colors duration-500 h-full group">
                                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white text-accent transition-all duration-500">
                                        <span className="text-sm font-black">0{i + 1}</span>
                                    </div>
                                    <p className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">{feature}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 md:py-48 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="section-container relative z-10 text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-12">Let&apos;s build your <br /> next big idea.</h2>
                        <Link
                            href="/contact"
                            className="inline-flex h-16 md:h-20 items-center px-10 md:px-14 rounded-full bg-accent text-white font-bold text-lg md:text-xl hover:bg-white hover:text-black transition-all duration-500 shadow-xl shadow-accent/20"
                        >
                            Contact Us
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </main>
    );
}
