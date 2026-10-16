import React from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FleetSection } from './components/FleetSection';
import { PackagesSection } from './components/PackagesSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { PromotionsSection } from './components/PromotionsSection';
import { MembershipSection } from './components/MembershipSection';
import { BookingEngine } from './components/BookingEngine';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import { VoucherModal } from './components/VoucherModal';
import { DatabaseConsole } from './components/DatabaseConsole';

import { NauticalAnimation } from './components/NauticalAnimation';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-[#F0ECDA] text-[#152740] flex flex-col font-sans-body">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <NauticalAnimation />
          <FleetSection />
          <PackagesSection />
          <ExperiencesSection />
          <PromotionsSection />
          <MembershipSection />
          <BookingEngine />
          <ContactSection />
        </main>
        <Footer />
        <Modals />
        <VoucherModal />
        <DatabaseConsole />
      </div>
    </AppProvider>
  );
}
