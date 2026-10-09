import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Services } from './components/Services';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { AppointmentSection } from './components/AppointmentSection';
import { CtaBanner } from './components/CtaBanner';
import { Faq } from './components/Faq';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { AppointmentModal } from './components/AppointmentModal';

export const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Sticky Header */}
      <Header onOpenBooking={openBookingModal} />

      {/* Main Page Flow */}
      <main>
        {/* 2. Hero Section */}
        <Hero onOpenBooking={openBookingModal} />

        {/* 3. Quick Trust Strip */}
        <TrustStrip />

        {/* 4. Healthcare Services */}
        <Services onOpenBooking={openBookingModal} />

        {/* 5. About Iniya Clinic */}
        <About onOpenBooking={openBookingModal} />

        {/* 6. Why Patients Choose Us */}
        <WhyChooseUs />

        {/* 7. Google Reviews / Social Proof */}
        <Reviews />

        {/* 8. Appointment / Enquiry Section */}
        <AppointmentSection />

        {/* 9. Blue CTA Banner */}
        <CtaBanner onOpenBooking={openBookingModal} />

        {/* 10. FAQ Accordion */}
        <Faq />

        {/* 11. MAP SECTION — MUST BE DIRECTLY ABOVE FOOTER */}
        <MapSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Conversion Bar */}
      <MobileBottomBar onOpenBooking={openBookingModal} />

      {/* Global Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={closeBookingModal}
      />
    </div>
  );
};

export default App;
