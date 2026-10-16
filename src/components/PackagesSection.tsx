import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TourPackage } from '../types';
import { Clock, Users, CheckCircle2, ArrowRight, Sparkles, Anchor, Compass } from 'lucide-react';

export const PackagesSection: React.FC = () => {
  const { language, packages, selectPackageForBooking, setPreviewPackage } = useApp();
  const [selectedAudience, setSelectedAudience] = useState<string>('all');

  const filteredPackages = packages.filter(pkg => {
    if (selectedAudience === 'all') return true;
    return pkg.audienceCategory === selectedAudience;
  });

  return (
    <section id="packages" className="py-20 bg-[#F0ECDA] border-t border-[#134C65]/15">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B69A5A] mb-2">
            <Compass className="w-3.5 h-3.5 text-[#B69A5A]" />
            <span>{language === 'th' ? 'แพ็กเกจท่องเที่ยวทางทะเล' : 'CURATED CHARTER PACKAGES'}</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#102D4F]">
            {language === 'th' ? 'เลือกสรรประสบการณ์การเดินทางของคุณ' : 'Designed for Discerning Travelers'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans-body">
            {language === 'th'
              ? 'แพ็กเกจท่องเที่ยวที่ออกแบบอย่างพิถีพิถัน ตอบโจทย์ทั้งคู่รัก ครอบครัว กลุ่มเพื่อน และงานเลี้ยงองค์กร พร้อมกัปตันและบริการระดับพรีเมียม'
              : 'Five signature maritime journeys configured with private captaincy, personalized catering, marine sports equipment, and bespoke island itineraries.'}
          </p>

          {/* Audience Filter Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-100 rounded-lg max-w-fit mx-auto">
            <button
              onClick={() => setSelectedAudience('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedAudience === 'all'
                  ? 'bg-white text-[#102D4F] shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'th' ? 'แพ็กเกจทั้งหมด' : 'All Packages'}
            </button>
            <button
              onClick={() => setSelectedAudience('couples')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedAudience === 'couples'
                  ? 'bg-white text-[#102D4F] shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'th' ? 'คู่รัก (Couples)' : 'Couples & Sunset'}
            </button>
            <button
              onClick={() => setSelectedAudience('families')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedAudience === 'families'
                  ? 'bg-white text-[#102D4F] shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'th' ? 'ครอบครัว (Families)' : 'Family Voyage'}
            </button>
            <button
              onClick={() => setSelectedAudience('friends')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedAudience === 'friends'
                  ? 'bg-white text-[#102D4F] shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'th' ? 'กลุ่มเพื่อน (Friends)' : 'Island Escape'}
            </button>
            <button
              onClick={() => setSelectedAudience('vip')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedAudience === 'vip'
                  ? 'bg-white text-[#102D4F] shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'th' ? 'VIP ซูเปอร์ยอร์ช' : 'VIP Prestige'}
            </button>
            <button
              onClick={() => setSelectedAudience('corporate')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedAudience === 'corporate'
                  ? 'bg-white text-[#102D4F] shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'th' ? 'ลูกค้าองค์กร (Corporate)' : 'Corporate'}
            </button>
          </div>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg, index) => {
            const isFeatured = pkg.id === 'pkg-02' || pkg.id === 'pkg-04';
            return (
              <div
                key={pkg.id}
                className={`rounded-xl border transition-all duration-300 flex flex-col justify-between overflow-hidden bg-white ${
                  isFeatured
                    ? 'border-[#B69A5A]/60 shadow-md ring-1 ring-[#B69A5A]/20'
                    : 'border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                {/* Image Top */}
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title[language]}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Clean unboxed category banner on top-left */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-medium px-2 py-0.5 rounded bg-black/50 backdrop-blur-xs text-[#F0ECDA]">
                      0{index + 1}. {pkg.subtitle[language]}
                    </span>
                    {isFeatured && (
                      <span className="font-semibold text-xs px-2 py-0.5 rounded bg-[#B69A5A] text-[#102D4F]">
                        ★ {language === 'th' ? 'ยอดนิยม' : 'Signature'}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif-luxury text-2xl font-semibold">
                      {pkg.title[language]}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Meta Spec Bar */}
                    <div className="flex items-center gap-4 text-xs text-slate-600 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#134C65]" />
                        <span>{pkg.duration[language]}</span>
                      </div>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#134C65]" />
                        <span>Max {pkg.maxPax} {language === 'th' ? 'คน' : 'Guests'}</span>
                      </div>
                    </div>

                    {/* Target Audience Line */}
                    <p className="mt-3 text-xs text-slate-500 font-sans-body">
                      <span className="font-semibold text-slate-700">
                        {language === 'th' ? 'เหมาะสำหรับ: ' : 'Ideal for: '}
                      </span>
                      {pkg.audienceLabel[language]}
                    </p>

                    {/* Features Checklist */}
                    <div className="mt-4 space-y-2">
                      {pkg.features[language].slice(0, 4).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#487F86] shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action Block */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-500 uppercase tracking-wider">
                        {language === 'th' ? 'ราคาเริ่มต้นต่อกลุ่ม' : 'Starting From'}
                      </span>
                      <div className="text-right">
                        <span className="font-price text-2xl font-bold text-[#102D4F]">
                          ฿{pkg.startingPriceThb.toLocaleString()}
                        </span>
                        <span className="block text-[10px] text-slate-500 font-medium">
                          {language === 'th' ? `สูงสุด ${pkg.maxPax} ท่าน` : `Up to ${pkg.maxPax} pax`}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => setPreviewPackage(pkg)}
                        className="py-2.5 px-3 text-xs font-semibold text-[#134C65] hover:text-[#102D4F] bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md transition-colors cursor-pointer text-center"
                      >
                        {language === 'th' ? 'ดูกำหนดการทริป' : 'View Itinerary'}
                      </button>

                      <button
                        onClick={() => {
                          selectPackageForBooking(pkg.id);
                          const el = document.getElementById('booking');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#102D4F] hover:bg-[#134C65] rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs whitespace-nowrap"
                      >
                        <span>{language === 'th' ? 'จองแพ็กเกจนี้' : 'Book Package'}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#B69A5A]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
