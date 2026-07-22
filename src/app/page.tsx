import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import ContactGrid from "@/components/ContactGrid";
import Projects from "@/components/Projects";
import TechStackSection from "@/components/TechStackSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center relative min-h-screen w-full bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-200">
      
      {/* Full-bleed background vertical guide lines */}
      <div className="border-x border-dashed border-[var(--border-dashed)] bg-transparent absolute z-10 top-0 bottom-0 w-full max-w-[800px] pointer-events-none" />

      {/* Horizontal decorative full-bleed dashed grid lines */}
      <div className="absolute border-t w-screen border-[var(--border-dashed)] border-dashed left-0 top-12 z-10 pointer-events-none" />
      <div className="absolute border-t w-screen border-[var(--border-dashed)] border-dashed left-0 top-[280px] z-10 pointer-events-none" />
      <div className="absolute border-t w-screen border-[var(--border-dashed)] border-dashed left-0 top-[600px] z-10 pointer-events-none" />

      {/* Header */}
      <Header />

      {/* Main Central Blueprint Container */}
      <main className="w-full max-w-[800px] border-x border-[var(--border-dashed)] border-dashed px-4 sm:px-6 md:px-4 py-3 min-h-screen flex flex-col gap-6 mt-4 z-20 mb-5 mx-auto">
        <HeroBanner />
        <AboutSection />
        <ContactGrid />
        <Projects />
        <TechStackSection />
        <Footer />
      </main>
    </div>
  );
}
