import TopBar from "@/components/topbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Work from "@/components/work";
import UpFAB from "@/components/up-fab";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] w-full relative">
      <TopBar />
      <Hero />
      <About />
      <Work />
      <Socials />
      <UpFAB />
    </div>
  );
}
