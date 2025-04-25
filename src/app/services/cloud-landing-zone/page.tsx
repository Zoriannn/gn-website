import Navbar from "@/components/ui/navbar";
import Hero from "@/components/cloud-landing-zone/hero";
import Benefits from "@/components/cloud-landing-zone/benefits-grid";
import FAQ from "@/components/cloud-landing-zone/faq";
import Expertise from "@/components/cloud-landing-zone/expertise";
import CloudScore from "@/components/cloud-landing-zone/cloud-score";
import Features from "@/components/cloud-landing-zone/features";
import Footer from "@/components/ui/footer";

export default function CloudLandingZonePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <CloudScore />
        <Features />
        <Expertise />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
