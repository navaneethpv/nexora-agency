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
import TracingBeam from "@/components/ui/TracingBeam";

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
  const x = useTransform(baseX, (v: number) => `${(v % 25) - 25}%`);

  const tickerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(tickerRef, { margin: "0px 0px 400px 0px" });

  useAnimationFrame((t: number, delta: number) => {
    if (!isInView) return;
    // Faster, smoother infinite ticker
    baseX.set(baseX.get() - 0.05);
  });

  return (
    <main className="min-h-screen selection:bg-accent/30 selection:text-white">
      <CustomCursor />
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-black">
        <MockupShowcase />
      </div>

      <section ref={tickerRef} className="py-16 md:py-24 border-t border-white/5 relative bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-accent/5 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-accent-secondary/5 blur-3xl rounded-full pointer-events-none" />

          <div className="mb-16 relative z-10 flex justify-center">
            <ShinyText
              text="Built with cutting-edge Technologies"
              className="text-[11px] md:text-lg font-bold uppercase tracking-[0.4em] text-center"
              color="rgba(255,255,255,0.4)"
              shineColor="#ffffff"
              speed={3}
            />
          </div>

          <div className="w-full relative z-10">
            <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] pointer-events-none">
              <motion.div
                style={{ x }}
                className="flex flex-nowrap gap-12 md:gap-24 items-center shrink-0 py-8"
              >
                {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 md:gap-6 group shrink-0 transition-transform duration-300"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                      <div className="relative z-10 p-2 md:p-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 group-hover:border-accent/30 transition-colors">
                        <tech.icon className="w-8 h-8 md:w-12 md:h-12 text-white/30 group-hover:text-white transition-all duration-500" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base md:text-2xl font-bold tracking-tight text-white/50 group-hover:text-white transition-colors duration-300">
                        {tech.name}
                      </span>
                      <div className="h-0.5 w-0 group-hover:w-full bg-accent transition-all duration-500" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Subtle Decorative Line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
      </section>

      <TracingBeam className="px-6">
        <div className="flex flex-col gap-24 md:gap-32 pb-24">
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
        </div>
      </TracingBeam>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
