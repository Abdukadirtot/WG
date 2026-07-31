import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import VisionMission from "@/components/VisionMission";
import CoreValues from "@/components/CoreValues";
import WhyChoose from "@/components/WhyChoose";
import Network from "@/components/Network";
import Commitment from "@/components/Commitment";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

/**
 * Single-page WGHC marketing site.
 * Sections alternate white / soft off-white / navy backgrounds for rhythm,
 * and are linked via anchor navigation in the header & footer.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        <VisionMission />
        <CoreValues />
        <WhyChoose />
        <Network />
        <Commitment />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
