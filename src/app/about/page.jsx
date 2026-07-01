import AboutHero from "@/components/about/AboutHero";
import Build from "@/components/about/Build";
import Design from "@/components/about/Design";
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
    </div>
  );
}
