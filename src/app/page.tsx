"use client";

import { useRef, useState, useEffect } from "react";

import { motion, useAnimationFrame, useMotionValue, useTransform, useInView } from "framer-motion";
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
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
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
    title: "Resort Website & Admin Portal",
    description: "A modern, responsive resort website with an admin portal to manage rooms, bookings, content, and enquiries through a simple and intuitive interface.",
    category: "WEBSITE",
    image: "/resort-macbook-mockup.png"
  },
  {
    title: "Commercial E-commerce Infrastructure",
    description: "Built for scale with optimized checkout sequences and a fluid product discovery experience for modern retail brands.",
    category: "E-COMMERCE",
    image: "/device-mockup.png"
  },
  {
    title: "Institutional & Academic Website",
    description: "A structured digital presence for educational institutions, focusing on clear information architecture and accessible user journeys.",
    category: "INSTITUTIONAL",
    image: "/institutional-academic.png"
  }
];

export default function Home() {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${(v % 33.33) - 33.33}%`);

  const tickerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(tickerRef, { margin: "0px 0px 200px 0px" });

  useAnimationFrame((t, delta) => {
    if (!isInView) return;
    // Smoother ticker movement
    baseX.set(baseX.get() - 0.02);
  });

  return (
    <main className="min-h-screen selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Hero />

      <ScrollReveal>
        <section ref={tickerRef} className="py-16 md:py-24 flex flex-col items-center border-t border-white/5 relative bg-white/2 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-accent-secondary/10 blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 relative z-10"
          >
            <ShinyText
              text="Built with cutting-edge Technologies"
              className="text-[11px] md:text-lg font-bold uppercase tracking-[0.4em] text-center"
              color="rgba(255,255,255,0.4)"
              shineColor="#ffffff"
              speed={3}
            />
          </motion.div>

          <div className="w-full relative z-10 px-4 md:px-0">
            <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] cursor-grab active:cursor-grabbing">
              <motion.div
                style={{ x }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDrag={(e, info) => {
                  // Allow manual override of the position
                  baseX.set(baseX.get() + info.delta.x * 0.05);
                }}
                className="flex flex-nowrap gap-5 md:gap-16 items-center shrink-0 py-4"
              >
                {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-1.5 md:gap-4 group shrink-0 transition-transform duration-300"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                      <div className="relative z-10 p-1.5 md:p-3 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 group-hover:border-accent/30 transition-colors">
                        <tech.icon className="w-6 h-6 md:w-10 md:h-10 text-white/20 group-hover:text-white transition-all duration-500" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm md:text-xl font-bold tracking-tight text-white/40 group-hover:text-white transition-colors duration-300">
                        {tech.name}
                      </span>
                      <div className="h-0.5 w-0 group-hover:w-full bg-accent transition-all duration-500" />
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
            <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-accent-secondary/5 blur-[150px] rounded-full" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff,transparent_1px)] bg-size-[40px_40px] opacity-[0.03]" />
          </div>

          <div className="section-container px-4 md:px-0 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24 md:mb-32"
            >
              <div className="max-w-3xl">
                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Selected Work</h2>
                <p className="text-secondary text-lg md:text-2xl font-medium leading-relaxed">
                  A curated selection of projects showcasing our approach to design, development, and digital problem-solving.
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col gap-32 md:gap-64">
              {portfolio.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 md:gap-20 items-center group`}
                >
                  {/* Visual Frame */}
                  <div className="w-full lg:w-[60%] relative">
                    <div className="relative aspect-16/10 md:aspect-video overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 bg-white/2 shadow-2xl transition-all duration-700 group-hover:border-accent/30 group-hover:shadow-accent/5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110 ease-out"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                      {/* Gradient Mask */}
                      <div className="absolute inset-0 bg-linear-to-tr from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />

                      {/* Category Badge In Corner */}
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
                      <div className="flex items-center gap-3 text-accent font-bold text-xs md:text-sm tracking-[0.3em] uppercase">
                        <span className="opacity-60">0{i + 1}</span>
                        <div className="h-px w-6 md:w-10 bg-accent/30" />
                        <span>PROJECT</span>
                      </div>
                      <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] md:leading-none tracking-tighter text-white group-hover:text-accent transition-colors duration-500">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-base md:text-lg lg:text-xl text-secondary leading-relaxed font-medium">
                      {item.description}
                    </p>

                    <div className="pt-4 md:pt-6">
                      <button className="group/btn flex items-center gap-4 text-white font-bold text-base md:text-lg">
                        <span className="relative pb-1">
                          View Full Impact
                          <div className="absolute bottom-0 left-0 w-full h-px bg-white/20 scale-x-100 group-hover:scale-x-0 transition-transform origin-right duration-500" />
                          <div className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                        </span>
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:border-accent group-hover/btn:text-white text-white/60 transition-all duration-500">
                          <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </div>
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
      <FloatingWhatsApp />
    </main>
  );
}
