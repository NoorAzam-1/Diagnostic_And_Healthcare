import CTASection from "@/components/home/CTASection";
import DynamicLabConfiguration from "@/components/home/DynamicLabConfiguration";
import FAQs from "@/components/home/FAQs";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItsWorks";
import Platform from "@/components/home/Platform";
import Pricing from "@/components/home/Pricing";
import ProductOverview from "@/components/home/ProductOverview";
import RoleAccessSection from "@/components/home/RoleAccessSection";
import SecurityCompliance from "@/components/home/SecurityCompliance";
import StorageArchitecture from "@/components/home/StorageArchitecture";
import Testimonials from "@/components/home/Testimonials";
import TrustedBySection from "@/components/home/TrustedBySection";
import WhyChooseHaraiOne from "@/components/home/WhyChoose";

export default function page() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ProductOverview />
      <HowItWorks />
      <WhyChooseHaraiOne />
      <Platform />
      <RoleAccessSection />
      <DynamicLabConfiguration />
      <StorageArchitecture />
      <SecurityCompliance />
      <Testimonials />
      <Pricing />
      <FAQs />
      <CTASection />
    </>
  );
}
