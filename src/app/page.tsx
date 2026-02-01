import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import FeaturesSection from "@/components/FeaturesSection";
import WhyNexora from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Image from "next/image";

const logos = [
  { name: "Logoipsum", text: "Logoipsum" },
  { name: "LOQQ", text: "LOQQ" },
  { name: "IPSUM", text: "IPSUM" },
  { name: "Chain", text: "CHAIN" },
  { name: "Nexora", text: "NEXORA" },
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
      <section className="py-16 flex flex-col items-center border-t border-white/5">
        <p className="text-[10px] font-medium text-secondary uppercase tracking-[0.2em] mb-10">
          Built with cutting-edge Technologies
        </p>
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-12 opacity-40 grayscale items-center justify-items-center">
            {["Next.js", "TypeScript", "React", "Node.js", "Tailwind"].map((tech, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-sm bg-white/20" />
                <span className="text-sm font-bold tracking-tighter">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Testimonial />

      {/* Portfolio Section */}
      <section id="work" className="py-20 bg-white/1">
        <div className="section-container">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Selected Work</h2>
            <p className="text-secondary text-base">Interface details and clean layouts designed for usability and speed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-4/3 bg-white/5 rounded-3xl border border-white/5 overflow-hidden mb-6 group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider">{item.category}</p>
                  <h3 className="text-lg font-bold leading-snug group-hover:text-white/90 transition-colors">{item.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed line-clamp-2">{item.description}</p>
                </div>
              </div>
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
