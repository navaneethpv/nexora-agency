"use client";

import { useRef } from "react";
import { Star, Quote, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, useAnimationFrame, useMotionValue, useTransform, useInView, useScroll } from "framer-motion";
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
  const tickerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: tickerRef,
    offset: ["start end", "end start"],
  });

  const tickerX = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <main className="min-h-screen selection:bg-accent/30 selection:text-white bg-background">
      <CustomCursor />
      <Navbar />
      <Hero />

      {/* Trust Section - Ticker moved higher */}
      <section ref={tickerRef} className="py-20 md:py-32 border-b border-white/5 relative bg-background overflow-hidden">
        <div className="section-container relative">
          <div className="mb-12 md:mb-16 relative z-10 flex justify-center">
            <ShinyText
              text="ENGINEERING SCALE FOR INDUSTRY LEADERS"
              className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.5em] text-center opacity-40"
              color="rgba(255,255,255,0.4)"
              shineColor="#ffffff"
              speed={4}
            />
          </div>

          <div className="w-full relative z-10">
            <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] pointer-events-none">
              <motion.div
                style={{ x: tickerX }}
                className="flex flex-nowrap gap-16 md:gap-32 items-center shrink-0 py-4 md:py-8"
              >
                {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 md:gap-8 group shrink-0"
                  >
                    <div className="relative z-10 p-3 md:p-5 bg-white/3 rounded-2xl border border-white/5 transition-colors group-hover:border-accent/40 group-hover:bg-white/5">
                      <tech.icon className="w-8 h-8 md:w-12 md:h-12 text-white/20 group-hover:text-white transition-all duration-700" />
                    </div>
                    <span className="text-lg md:text-3xl font-medium tracking-tight text-white/30 group-hover:text-white transition-colors duration-400">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Moved directly under trust */}
      <FeaturesSection />

      <div className="flex flex-col gap-32 md:gap-48 pb-32 md:pb-48">
        {/* Proof - Selected Work */}
        <SelectedWork />

        {/* Strategy & Thinking - Process */}
        <div className="section-container">
          <ScrollReveal>
            <section className="river-flow rounded-[3rem] border border-white/5 px-4 py-8 md:py-24">
              <Process />
            </section>
          </ScrollReveal>
        </div>

        {/* Expanded Visual Proof - Showcase now full width */}
        <ScrollReveal>
          <div className="relative z-10 overflow-hidden">
            <MockupShowcase />
          </div>
        </ScrollReveal>

        <div className="section-container">
          <div className="flex flex-col gap-32 md:gap-48">
            <ScrollReveal>
              <Testimonial />
            </ScrollReveal>

            <ScrollReveal>
              <WhyNexora />
            </ScrollReveal>

            <ScrollReveal>
              <FAQ />
            </ScrollReveal>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
