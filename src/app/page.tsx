"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import FeaturesSection from "@/components/FeaturesSection";
import WhyNexora from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ShinyText from "@/components/ShinyText";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiAdobephotoshop, SiExpress, SiMongodb, SiAdobeillustrator } from "react-icons/si";


const techStack = [
  { name: "Next.js", icon: RiNextjsFill },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Tailwind", icon: RiTailwindCssFill },
  { name: "Photoshop", icon: SiAdobephotoshop },
  { name: "Illustrator", icon: SiAdobeillustrator },
  { name: "Figma", icon: FaFigma },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
];

const portfolio = [
  {
    title: "Website Platform for Business Management",
    description: "A modern, responsive web interface focused on clarity, performance, and ease of use.",
    category: "Web App · UI Design · Performance",
    image: "/saas-dashboard.png"
  },
  {
    title: "E-commerce Infrastructure for Retail Scale",
    description: "High-performance checkout systems and inventory management dashboards.",
    category: "E-Commerce · Scalable Architecture",
    image: "/device-mockup.png"
  },
  {
    title: "Brand Identity & Design System for Startups",
    description: "Cohesive visual languages that unify product and marketing across all platforms.",
    category: "Branding · Design Systems",
    image: "/branding-logo.png"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Hero />

      <ScrollReveal>
        <section className="py-16 md:py-24 flex flex-col items-center border-t border-white/5 relative bg-white/2 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 relative z-10"
          >
            <ShinyText
              text="Built with cutting-edge Technologies"
              className="text-[11px] md:text-lg font-bold uppercase tracking-[0.4em]"
              color="rgba(255,255,255,0.4)"
              shineColor="#ffffff"
              speed={3}
            />
          </motion.div>

          <div className="w-full relative z-10">
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <motion.div
                animate={{ x: "-50%" }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ willChange: "transform" }}
                className="flex flex-nowrap gap-5 md:gap-16 items-center shrink-0 pr-5 md:pr-16"
              >
                {[...techStack, ...techStack].map((tech, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: 0, scale: 1 }}
                    className="flex items-center gap-2 md:gap-4 group cursor-default shrink-0 transition-transform duration-300"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <tech.icon className="w-8 h-8 md:w-10 md:h-10 text-white/30 group-hover:text-white transition-all duration-500 relative z-10" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg md:text-xl font-bold tracking-tight text-white/40 group-hover:text-white transition-colors duration-300">
                        {tech.name}
                      </span>
                      <motion.div
                        className="h-0.5 w-0 group-hover:w-full bg-accent transition-all duration-500"
                        layoutId={`underline-${i}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Subtle Decorative Line */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <Process />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonial />
      </ScrollReveal>

      <ScrollReveal>
        <section id="work" className="py-24 md:py-32 bg-black/2 relative overflow-hidden">
          {/* Abstract Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff,transparent_1px)] bg-size-[40px_40px] opacity-[0.03]" />
          </div>

          <div className="section-container px-4 md:px-0 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24 md:mb-40"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 bg-white/2 p-8 md:p-12 rounded-[2.5rem] border border-white/5 backdrop-blur-sm">
                <div className="max-w-2xl">
                  <span className="text-xs md:text-sm font-bold text-accent tracking-[0.4em] uppercase block mb-4">OUR IMPACT</span>
                  <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-[0.9] tracking-tighter">Strategic Digital <br />Showcase</h2>
                  <p className="text-secondary text-lg md:text-xl font-medium leading-relaxed">We transform visionary ideas into market-leading digital products through precision engineering and elite design.</p>
                </div>
                <div className="hidden md:block">
                  <div className="flex flex-col items-end">
                    <span className="text-4xl font-bold text-white">12+</span>
                    <span className="text-xs font-bold text-secondary tracking-widest uppercase">Global Awards</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-40 md:gap-72">
              {portfolio.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-24 items-center group`}
                >
                  {/* Visual Frame */}
                  <div className="w-full lg:w-[62%] relative">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[3rem] border border-white/10 bg-white/2 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-all duration-1000 group-hover:scale-105 ease-out"
                        sizes="(max-width: 1024px) 100vw, 65vw"
                      />
                      {/* Gradient Mask */}
                      <div className="absolute inset-0 bg-linear-to-tr from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                    </div>
                    {/* Floating Tech Tag */}
                    <div className={`absolute -top-4 ${i % 2 === 0 ? '-right-4' : '-left-4'} bg-accent px-6 py-3 rounded-2xl text-[10px] font-black tracking-[0.2em] text-white shadow-2xl z-20`}>
                      {item.category.split(' · ')[0]}
                    </div>
                  </div>

                  {/* Narrative Block */}
                  <div className="w-full lg:w-[38%] space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-accent/50 font-bold text-sm tracking-widest uppercase">
                        <span>0{i + 1}</span>
                        <div className="h-px w-8 bg-accent/20" />
                        <span>CASE STUDY</span>
                      </div>
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1] tracking-tighter group-hover:text-accent transition-colors duration-500">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-lg md:text-xl text-secondary leading-relaxed font-medium line-clamp-3">
                      {item.description}
                    </p>

                    <div className="pt-6">
                      <button className="group/btn relative inline-flex items-center gap-6 text-white font-bold text-lg">
                        <span className="relative z-10">View Full Impact</span>
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:border-accent transition-all duration-500">
                          <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </div>
                        <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent group-hover/btn:w-full transition-all duration-700" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <FeaturesSection />
      </ScrollReveal>
      <ScrollReveal>
        <WhyNexora />
      </ScrollReveal>
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
