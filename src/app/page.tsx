import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import FeaturesSection from "@/components/FeaturesSection";
import Pricing from "@/components/Pricing";
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
    title: "The fastest way to visualize and share your data.",
    category: "SaaS / Analytics",
    image: "/saas-dashboard.png"
  },
  {
    title: "Find your logo, own your brand.",
    category: "Branding / Identity",
    image: "/branding-logo.png"
  },
  {
    title: "High-fidelity renderings for next-gen products.",
    category: "Design Assets / 3D",
    image: "/device-mockup.png"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Hero />

      {/* Logo Wall */}
      <section className="py-16 flex flex-col items-center">
        <p className="text-[10px] font-medium text-secondary uppercase tracking-[0.2em] mb-8">
          Our designs are featured on:
        </p>
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-6 opacity-30 grayscale items-center justify-items-center">
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-white/20" />
                <span className="text-sm font-bold tracking-tighter">{logo.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Testimonial />

      {/* Portfolio Section */}
      <section className="py-20 bg-white/[0.01]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] bg-white/5 rounded-3xl border border-white/5 overflow-hidden mb-6 group">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturesSection />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
