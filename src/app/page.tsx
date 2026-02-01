import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import FeaturesSection from "@/components/FeaturesSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Hero />

      {/* Logo Wall */}
      <section className="py-20 flex flex-col items-center">
        <p className="text-[11px] font-medium text-secondary uppercase tracking-[0.2em] mb-12">
          Our designs are featured on:
        </p>
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 opacity-30 grayscale items-center justify-items-center">
            <div className="h-4 w-32 bg-white/10 rounded-sm" />
            <div className="h-4 w-28 bg-white/10 rounded-sm" />
            <div className="h-4 w-36 bg-white/10 rounded-sm" />
            <div className="h-4 w-24 bg-white/10 rounded-sm" />
            <div className="h-4 w-30 bg-white/10 rounded-sm" />
          </div>
        </div>
      </section>

      <Process />
      <Testimonial />

      {/* Portfolio Placeholder */}
      <section className="py-24 bg-white/[0.01]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-[4/3] bg-white/5 rounded-[2rem] border border-white/5" />
            <div className="aspect-[4/3] bg-white/5 rounded-[2rem] border border-white/5" />
            <div className="aspect-[4/3] bg-white/5 rounded-[2rem] border border-white/5" />
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
