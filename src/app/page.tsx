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
import Image from "next/image";
import { ExternalLink, Layers, Terminal, Cpu, Database, Palette } from "lucide-react";

const techStack = [
  { name: "Next.js", icon: Layers },
  { name: "TypeScript", icon: Terminal },
  { name: "React", icon: Cpu },
  { name: "Node.js", icon: Database },
  { name: "Tailwind", icon: Palette },
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

      {/* Logo Wall */}
      <section className="py-20 flex flex-col items-center border-t border-white/5 relative bg-white/1">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] font-bold text-secondary uppercase tracking-[0.3em] mb-12 opacity-80"
        >
          Built with cutting-edge Technologies
        </motion.p>
        <div className="section-container">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 group cursor-default"
              >
                <tech.icon className="w-5 h-5 text-white/50 group-hover:text-accent transition-colors" />
                <span className="text-base font-bold tracking-tight text-white/80 group-hover:text-white transition-colors">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Testimonial />

      {/* Portfolio Section */}
      <section id="work" className="py-28 bg-white/1 relative">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Selected Work</h2>
            <p className="text-secondary text-lg font-medium">Interface details and clean layouts designed for usability and speed.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-4/3 bg-white/5 rounded-[2.5rem] border border-white/5 overflow-hidden mb-8 group ring-1 ring-white/0 hover:ring-accent/30 transition-all duration-500">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-2xl w-full flex justify-between items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-white font-bold text-sm">View Case Study</span>
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3 px-2">
                  <p className="text-xs font-bold text-accent uppercase tracking-[0.2em]">{item.category}</p>
                  <h3 className="text-2xl font-bold leading-tight group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                  <p className="text-base text-secondary leading-relaxed font-medium line-clamp-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeaturesSection />
      <WhyNexora />
      <FAQ />
      <Footer />
    </main>
  );
}
