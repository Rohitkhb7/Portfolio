import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import ContactGrid from "@/components/ContactGrid";
import Projects from "@/components/Projects";
import GithubCalendarSection from "@/components/GithubCalendarSection";
import TechStackSection from "@/components/TechStackSection";
import Footer from "@/components/Footer";
import CursorDog from "@/components/CursorDog";

export default function Home() {
  return (
    <div className="flex flex-col items-center relative min-h-screen w-full bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-200 bg-grid-pattern">
      <CursorDog />
      {/* Header */}
      <Header />

      {/* Main Central Blueprint Container */}
      <main className="w-full max-w-[800px] border-x border-[var(--border-dashed)] border-dashed px-4 sm:px-6 md:px-6 py-3 min-h-screen flex flex-col gap-8 mt-4 z-20 mb-5 mx-auto bg-[var(--bg-primary)]/80 backdrop-blur-[1px]">
        <HeroBanner />
        <div className="w-full border-t border-dashed border-[var(--border-dashed)]" />
        <AboutSection />
        <div className="w-full border-t border-dashed border-[var(--border-dashed)]" />
        <ContactGrid />
        <div className="w-full border-t border-dashed border-[var(--border-dashed)]" />
        <Projects />
        <div className="w-full border-t border-dashed border-[var(--border-dashed)]" />
        <GithubCalendarSection />
        <div className="w-full border-t border-dashed border-[var(--border-dashed)]" />
        <TechStackSection />
        <Footer />
      </main>
    </div>
  );
}
