import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OneCrewStrip from "@/components/OneCrewStrip";
import BasementFeature from "@/components/BasementFeature";
import Services from "@/components/Services";
import Comparison from "@/components/Comparison";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import RevealObserver from "@/components/RevealObserver";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main">
        <Hero />
        <OneCrewStrip />
        <BasementFeature />
        <Services />
        <Comparison />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <ServiceArea />
        <ContactForm />
      </main>
      <Footer />
      <MobileCallBar />
      <RevealObserver />
    </>
  );
}
