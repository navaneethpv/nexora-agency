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
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiAdobephotoshop, SiExpress, SiMongodb } from "react-icons/si";


const techStack = [
  { name: "Next.js", icon: RiNextjsFill },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Tailwind", icon: RiTailwindCssFill },
  { name: "Photoshop", icon: SiAdobephotoshop },
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
        <section className="py-24 flex flex-col items-center border-t border-white/5 relative bg-white/2 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold text-secondary uppercase tracking-[0.4em] mb-16 relative z-10"
          >
            Built with cutting-edge Technologies
          </motion.p>

          <div className="w-full relative z-10">
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <motion.div
                animate={{ x: "-50%" }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ willChange: "transform" }}
                className="flex flex-nowrap gap-32 items-center shrink-0 pr-32"
              >
                {[...techStack, ...techStack].map((tech, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="flex items-center gap-3 md:gap-4 group cursor-default shrink-0 transition-transform duration-300"
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
        <section id="work" className="py-20 md:py-28 bg-white/1 relative overflow-hidden">
          <div className="section-container px-4 md:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">Selected Work</h2>
              <p className="text-secondary text-base md:text-lg font-medium">Interface details and clean layouts designed for usability and speed.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {portfolio.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-4/3 bg-white/5 rounded-3xl md:rounded-4xl border border-white/5 overflow-hidden mb-6 md:mb-8 group ring-1 ring-white/0 hover:ring-accent/30 transition-all duration-500">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8">
                      <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl w-full flex justify-between items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-white font-bold text-xs md:text-sm">View Case Study</span>
                        <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 md:space-y-3 px-2">
                    <p className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-[0.2em]">{item.category}</p>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                    <p className="text-sm md:text-base text-secondary leading-relaxed font-medium line-clamp-2">{item.description}</p>
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
