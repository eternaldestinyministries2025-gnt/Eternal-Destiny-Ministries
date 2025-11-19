import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { QuickLinks } from "@/components/QuickLinks";
import { ServiceTimes } from "@/components/ServiceTimes";
import { GospelCrusades } from "@/components/GospelCrusades";
import { Charity } from "@/components/Charity";
import { Services } from "@/components/Services";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <QuickLinks />
        <ServiceTimes />
        <GospelCrusades />
        <Charity />
        <Services />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
