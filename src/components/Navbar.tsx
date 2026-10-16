import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Anchor, Globe, Database, Compass, Menu, X, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, activeCustomer, setIsDatabaseDrawerOpen, setActiveSection } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F0ECDA]/95 backdrop-blur-md border-b border-[#134C65]/15 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single Text Element) */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
          className="group flex items-center gap-2.5 text-slate-900 shrink-0"
        >
          <div className="w-9 h-9 rounded-full bg-[#102D4F] flex items-center justify-center text-[#B69A5A] shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Anchor className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-luxury text-xl md:text-2xl font-semibold tracking-wider text-[#102D4F] whitespace-nowrap">
              MARINA VALÉRIELLE
            </span>
          </div>
        </a>

        {/* Zone 2: 4–5 Clean Nav Links (Single-Line, Whitespace-Nowrap) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#134C65]">
          <button
            onClick={() => scrollTo('fleet')}
            className="hover:text-[#B69A5A] transition-colors whitespace-nowrap py-1 cursor-pointer"
          >
            {language === 'th' ? 'กองเรือยอร์ช' : 'The Fleet'}
          </button>
          <button
            onClick={() => scrollTo('packages')}
            className="hover:text-[#B69A5A] transition-colors whitespace-nowrap py-1 cursor-pointer"
          >
            {language === 'th' ? 'แพ็กเกจท่องเที่ยว' : 'Charter Packages'}
          </button>
          <button
            onClick={() => scrollTo('experiences')}
            className="hover:text-[#B69A5A] transition-colors whitespace-nowrap py-1 cursor-pointer"
          >
            {language === 'th' ? 'ประสบการณ์ & บริการเสริม' : 'Experiences & Add-ons'}
          </button>
          <button
            onClick={() => scrollTo('promotions')}
            className="hover:text-[#B69A5A] transition-colors whitespace-nowrap py-1 cursor-pointer"
          >
            {language === 'th' ? 'โปรโมชั่นพิเศษ' : 'Exclusive Offers'}
          </button>
          <button
            onClick={() => scrollTo('membership')}
            className="hover:text-[#B69A5A] transition-colors whitespace-nowrap py-1 cursor-pointer"
          >
            {language === 'th' ? 'ระบบสมาชิก Privilege' : 'Privilege Club'}
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action + Utility Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Relational DB Inspector Button */}
          <button
            onClick={() => setIsDatabaseDrawerOpen(true)}
            className="p-2 text-slate-600 hover:text-[#102D4F] hover:bg-[#D8F0F5]/40 rounded-lg transition-colors cursor-pointer"
            title={language === 'th' ? 'เปิดระบบจัดการฐานข้อมูล (Database)' : 'Open Relational Database Inspector'}
            aria-label="Database Management"
          >
            <Database className="w-4 h-4" />
          </button>

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'th' : 'en')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 hover:border-[#134C65] text-[#134C65] transition-colors cursor-pointer"
            title="Switch Language (TH / EN)"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'TH' : 'EN'}</span>
          </button>

          {/* Primary Action Button */}
          <button
            onClick={() => scrollTo('booking')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#102D4F] hover:bg-[#134C65] active:scale-[0.98] rounded-lg shadow-sm transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#B69A5A]" />
            <span>{language === 'th' ? 'จองทริปส่วนตัว' : 'Book Charter'}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#102D4F] rounded-lg"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => scrollTo('fleet')}
              className="text-left py-2 font-medium text-slate-800 hover:text-[#B69A5A]"
            >
              {language === 'th' ? 'กองเรือยอร์ช (The Fleet)' : 'The Fleet'}
            </button>
            <button
              onClick={() => scrollTo('packages')}
              className="text-left py-2 font-medium text-slate-800 hover:text-[#B69A5A]"
            >
              {language === 'th' ? 'แพ็กเกจท่องเที่ยว (Charter Packages)' : 'Charter Packages'}
            </button>
            <button
              onClick={() => scrollTo('experiences')}
              className="text-left py-2 font-medium text-slate-800 hover:text-[#B69A5A]"
            >
              {language === 'th' ? 'ประสบการณ์ & บริการเสริม (Experiences)' : 'Experiences & Add-ons'}
            </button>
            <button
              onClick={() => scrollTo('promotions')}
              className="text-left py-2 font-medium text-slate-800 hover:text-[#B69A5A]"
            >
              {language === 'th' ? 'โปรโมชั่นพิเศษ (Exclusive Offers)' : 'Exclusive Offers'}
            </button>
            <button
              onClick={() => scrollTo('membership')}
              className="text-left py-2 font-medium text-slate-800 hover:text-[#B69A5A]"
            >
              {language === 'th' ? 'ระบบสมาชิก Privilege (Privilege Club)' : 'Privilege Club'}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left py-2 font-medium text-slate-800 hover:text-[#B69A5A]"
            >
              {language === 'th' ? 'ติดต่อเรา & ท่าเทียบเรือ (Contact)' : 'Contact & Marina Pier'}
            </button>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsDatabaseDrawerOpen(true);
              }}
              className="flex items-center gap-2 text-xs text-slate-600 font-medium py-1"
            >
              <Database className="w-4 h-4 text-[#134C65]" />
              <span>{language === 'th' ? 'ระบบฐานข้อมูล (Database)' : 'Relational Database'}</span>
            </button>
            <button
              onClick={() => scrollTo('booking')}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#102D4F] rounded-lg"
            >
              {language === 'th' ? 'จองทริปเลย' : 'Book Charter Now'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
