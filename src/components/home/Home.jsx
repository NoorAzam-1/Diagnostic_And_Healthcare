import { Header } from "@/components/common/Header";
import LandingFooter from "@/components/common/LandingFooter";
import HeroSection from "./HeroSection";
import TrustedBySection from "./TrustedBySection";
import ProductOverviewSection from "./ProductOverviewSection";
import HowItWorksSection from "./HowItsWorkSection";
import RoleAccessSection from "./RoleAccessSection";
import DynamicLabConfigurationSection from "./DynamicLabConfigurationSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrustedBySection />
      <ProductOverviewSection />
      <HowItWorksSection />
      <RoleAccessSection />
      <DynamicLabConfigurationSection />
      <LandingFooter />
    </>
  );
}
