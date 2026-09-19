import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import SareePleatingFeature from './components/SareePleatingFeature';
import QuoteBuilder from './components/QuoteBuilder';
import LookbookGallery from './components/LookbookGallery';
import HighlightsSection from './components/HighlightsSection';
import Testimonials from './components/Testimonials';
import LocationSection from './components/LocationSection';
import InstagramFeed from './components/InstagramFeed';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('HD Bridal Muhurtham Makeover');

  const handleOpenBooking = (serviceName) => {
    if (typeof serviceName === 'string') {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Luxury Header */}
      <Navbar onOpenBooking={() => handleOpenBooking('HD Bridal Muhurtham Makeover')} />

      {/* Main Content Sections */}
      <main style={{ flexGrow: 1 }}>
        <Hero onOpenBooking={() => handleOpenBooking('HD Bridal Muhurtham Makeover')} />
        <ServicesSection onSelectService={handleOpenBooking} />
        <BeforeAfterSlider onOpenBooking={() => handleOpenBooking('HD Bridal Muhurtham Makeover')} />
        <SareePleatingFeature onOpenBooking={() => handleOpenBooking('Saree Pre-Pleating & Box Folding')} />
        <QuoteBuilder preSelectedService={selectedService} />
        <LookbookGallery />
        <HighlightsSection />
        <Testimonials onOpenBooking={() => handleOpenBooking('HD Bridal Muhurtham Makeover')} />
        <LocationSection onOpenBooking={() => handleOpenBooking('HD Bridal Muhurtham Makeover')} />
        <InstagramFeed />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile-Friendly Floating Quick Contact Dock */}
      <FloatingActions />

      {/* Universal Quick Date Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />
    </div>
  );
}
