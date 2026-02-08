import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeClient from "@/components/home/HomeClient";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent/30 selection:text-white bg-background">
      <Navbar />
      <Hero />

      {/* Above the fold components are direct children. Below the fold is deferred via HomeClient */}
      <HomeClient />

      <Footer />
    </main>
  );
}
