import { Header } from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "./HeroSection";
import TrustedBySection from "./TrustedBySection";
import ProductOverviewSection from "./ProductOverviewSection";
import HowItWorksSection from "./HowItsWorkSection";
import RoleAccessSection from "./RoleAccessSection";
import DynamicLabConfigurationSection from "./DynamicLabConfigurationSection";
import StorageArchitectureSection from "./StorageArchitectureSection";
import SecurityCompliance from "./SecurityCompliance";
import ScrollToTopProgress from "../common/ScrollToTop";
import Platform from "./Platform";
import WhyChoose from "./WhyChoose";
import CTASection from "./CTASection";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import FAQs from "./FAQs";

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
      <SecurityCompliance />
      <Platform />
      <WhyChoose />
      <Testimonials />
      <Pricing />
      <FAQs />
      <CTASection />
      <ScrollToTopProgress />
      <Footer />
    </>
  );
}
