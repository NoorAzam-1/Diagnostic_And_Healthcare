import { Header } from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "./HeroSection";
import TrustedBySection from "./TrustedBySection";
import ProductOverview from "./ProductOverview";
import HowItWorks from "./HowItsWorks";
import RoleAccessSection from "./RoleAccessSection";
import DynamicLabConfiguration from "./DynamicLabConfiguration";
import StorageArchitecture from "./StorageArchitecture";
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
      <ProductOverview />
      <HowItWorks />
      <WhyChoose />
      <Platform />
      <RoleAccessSection />
      <DynamicLabConfiguration />
      <StorageArchitecture />
      <SecurityCompliance />
      <Testimonials />
      <Pricing />
      <FAQs />
      <CTASection />
      <ScrollToTopProgress />
      <Footer />
    </>
  );
}
