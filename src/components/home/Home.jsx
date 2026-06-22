import { Header } from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "./HeroSection";
import TrustedBySection from "./TrustedBySection";
import ProductOverviewSection from "./ProductOverviewSection";
import HowItWorksSection from "./HowItsWorkSection";
import RoleAccessSection from "./RoleAccessSection";
import DynamicLabConfigurationSection from "./DynamicLabConfigurationSection";
import StorageArchitectureSection from "./StorageArchitectureSection";

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
      <StorageArchitectureSection />
      <Footer />
    </>
  );
}
