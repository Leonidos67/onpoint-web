import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Club from "@/components/Club";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Prices from "@/components/Prices";
import HowWork from "@/components/HowWork";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ContactWidget from "@/components/ContactWidget";
import StartsMap from "@/components/StartsMap";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      <StartsMap />
        <About />
        <Club />
        <Services />
        <Gallery />
        <Reviews />
        <Prices />
        <HowWork />
        <CTA />
      </main>
      <Footer />
      <ContactWidget />
    </>
  );
}