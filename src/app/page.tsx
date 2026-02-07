"use client";

import { useRef } from "react";
import { Star, Quote, ChevronRight } from "lucide-react";
import Link from "next/link";
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
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiAdobephotoshop, SiExpress, SiMongodb, SiAdobeillustrator } from "react-icons/si";
import SelectedWork from "@/components/home/SelectedWork";

import MockupShowcase from "@/components/MockupShowcase";
import CustomCursor from "@/components/CustomCursor";

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

export default function Home() {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v: number) => `${(v % 33.33) - 33.33}%`);

  const tickerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(tickerRef, { margin: "0px 0px 200px 0px" });

  useAnimationFrame((t: number, delta: number) => {
    if (!isInView) return;
    // Smoother ticker movement
    baseX.set(baseX.get() - 0.02);
  });

  return (
    <main className="min-h-screen selection:bg-accent/30 selection:text-white">
      <CustomCursor />
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-black">
        <MockupShowcase />
      </div>

      <ScrollReveal direction="none">
        <section ref={tickerRef} className="py-16 md:py-24 flex flex-col items-center border-t border-white/5 relative bg-white/2 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-accent-secondary/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="mb-16 relative z-10">
            <ShinyText
              text="Built with cutting-edge Technologies"
              className="text-[11px] md:text-lg font-bold uppercase tracking-[0.4em] text-center"
              color="rgba(255,255,255,0.4)"
              shineColor="#ffffff"
              speed={3}
            />
          </div>

          <div className="w-full relative z-10 px-4 md:px-0">
            <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] cursor-grab active:cursor-grabbing">
              <motion.div
                style={{ x }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDrag={(e: any, info: any) => {
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

      <SelectedWork />

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
