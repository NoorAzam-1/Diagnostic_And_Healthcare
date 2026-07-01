import AboutHero from "@/components/about/AboutHero";
import Build from "@/components/about/Build";
import CTA from "@/components/about/CTA";
import Design from "@/components/about/Design";
import Looking from "@/components/about/Looking";
import Platform from "@/components/about/Platform";
import Principle from "@/components/about/Principle";
import Problem from "@/components/about/Problem";
import WhyChoose from "@/components/about/WhyChoose";

export default function page() {
  return (
    <div className="bg-background">
      <AboutHero />
      <Problem />
      <WhyChoose />
      <Design />
      <Build />
      <Platform />
      <Principle />
      <Looking />
      <CTA />
    </div>
  );
}
