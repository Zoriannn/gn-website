import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import AboutContent from "../../components/about-us/about-content";
import AboutHero from "../../components/about-us/about-hero";
import TeamSection from "../../components/about-us/team-section";
import ContactCTA from "../../components/about-us/contact-cta";
import LocateUs from "../../components/about-us/locate-us";


export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col">
        <AboutHero />
        <AboutContent />
        <TeamSection />
        <ContactCTA />
        <LocateUs/>
      </main>
      <Footer />
    </>
  );
}
