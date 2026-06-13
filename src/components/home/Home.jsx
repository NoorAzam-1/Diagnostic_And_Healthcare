import { Header } from "@/components/common/Header";
import HeroSection from "./HeroSection";
import LandingFooter from "@/components/common/LandingFooter";
import TrustedBySection from "./TrustedBySection";
import ProductOverviewSection from "./ProductOverviewSection";
import HowItWorksSection from "./HowItsWorkSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/20 blur-[140px] rounded-full pointer-events-none" />

      <Header />
      <HeroSection />
      <TrustedBySection />
      <ProductOverviewSection />
      <HowItWorksSection />
      <LandingFooter />
    </div>
  );
}
