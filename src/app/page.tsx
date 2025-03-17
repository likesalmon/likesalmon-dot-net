"use client";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import UpFAB from "@/components/UpFAB";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] w-full relative">
      <TopBar />
      <Hero />
      <About />
      <Work />
      <Footer />
      <UpFAB />
    </div>
  );
}
