import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import FireParticles from "@/components/FireParticles";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThemeStory from "@/components/ThemeStory";
import TimelineEditions from "@/components/TimelineEditions";
import Speakers from "@/components/Speakers";
import PastSpeakers from "@/components/PastSpeakers";
import StatisticsCounter from "@/components/StatisticsCounter";
import Sponsors from "@/components/Sponsors";
import Gallery from "@/components/Gallery";
import Schedule from "@/components/Schedule";
import Registration from "@/components/Registration";
import PaymentPopup from "@/components/PaymentPopup";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Index() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#EB0028] selection:text-white relative">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Floating Ember Fire Particle Background */}
      <FireParticles />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Storytelling Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Theme Story Section */}
        <ThemeStory />

        {/* 3. Editions Timeline Section */}
        <TimelineEditions />

        {/* 4. Featured Speakers Section */}
        <Speakers />

        {/* 4b. Past Speakers Alumni Section */}
        <PastSpeakers />

        {/* 5. Statistics Counters */}
        <StatisticsCounter />

        {/* 6. Sponsors Infinite Marquee */}
        <Sponsors />

        {/* 7. Gallery Section */}
        <Gallery />

        {/* 8. Event Schedule Timeline */}
        <Schedule />

        {/* 9. Registration Section */}
        <Registration onOpenPayment={() => setIsPaymentOpen(true)} />

        {/* 10. Community Testimonials */}
        <Testimonials />

        {/* 11. Frequently Asked Questions */}
        <FAQ />

        {/* 12. Event Location & Google Maps */}
        <Location />
      </main>

      {/* Footer */}
      <Footer />

      {/* Payment Popup Modal */}
      <PaymentPopup isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} />
    </div>
  );
}
