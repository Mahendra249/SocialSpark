import React, { useRef } from "react";
import "./App.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import InfluencerCard from "./components/InfluencerCard";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import Testimonial from "./components/Testimonials";

function App() {
  // Create refs for each section
  const heroRef = useRef(null);
  const influencerRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);

  // Pass refs to Navbar
  const sectionRefs = {
    home: heroRef,
    influencers: influencerRef,
    stats: statsRef,
    cta: ctaRef,
    testimonials: testimonialRef,
    contact: contactRef,
  };

  return (
    <div>
      <Background />
      <Navbar sectionRefs={sectionRefs} />

      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={influencerRef}>
        <InfluencerCard />
      </div>
      <div ref={statsRef}>
        <StatsSection />
      </div>
      <div ref={ctaRef}>
        <CTASection />
      </div>
      <div ref={testimonialRef}>
        <Testimonial />
      </div>
      <div ref={contactRef}>
        <ContactForm />
      </div>

      <Footer sectionRefs={sectionRefs} />
    </div>
  );
}

export default App;
