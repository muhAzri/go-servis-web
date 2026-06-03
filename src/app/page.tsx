import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { ComponentsShowcase } from "@/components/ComponentsShowcase";
import { PrivacySection } from "@/components/PrivacySection";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ComponentsShowcase />
        <PrivacySection />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
