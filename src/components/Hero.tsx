import React from 'react';
import { useApp } from '../context/AppContext';
import { Compass, Sparkles, Shield, Anchor, ArrowRight, Star } from 'lucide-react';
import { AudienceCategory } from '../types';

export const Hero: React.FC = () => {
  const { language, selectPackageForBooking, setActiveSection } = useApp();

  const handleAudienceClick = (audience: AudienceCategory, pkgId: string) => {
    selectPackageForBooking(pkgId);
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Subtitle Kicker (Clean unboxed text) */}
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B69A5A] mb-4">
          <Anchor className="w-3.5 h-3.5 text-[#B69A5A]" />
          <span>LUXURY YACHT CHARTERS</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>PRIVATE ISLAND ESCAPES</span>
        </div>

        {/* Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Brand Statement & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#102D4F] leading-[1.12]" style={{ textWrap: 'balance' }}>
              {language === 'th' ? (
                <>
                  ทะเลในแบบของคุณ <br />
                  <span className="italic font-normal text-[#134C65]">ช่วงเวลาพิเศษที่เป็นของคุณ</span>
                </>
              ) : (
                <>
                  Your Ocean, <br />
                  <span className="italic font-normal text-[#134C65]">Your Moment.</span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-[#134C65]/80 leading-relaxed font-sans-body max-w-xl">
              {language === 'th'
                ? 'สัมผัสความหรูหรากลางท้องทะเลสีฟ้าคราม กับประสบการณ์ล่องเรือยอร์ชส่วนตัวที่ออกแบบเพื่อคุณโดยเฉพาะ เลือกเส้นทาง กิจกรรม และบริการเสริมระดับเวิลด์คลาสตามใจปรารถนา'
                : 'Experience consummate bespoke yachting across azure horizons. Tailor your route, secluded island anchorages, onboard fine dining, and marine adventures with our dedicated white-glove crew.'}
            </p>

            {/* Quick Audience Curations (Segmented Controls) */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                {language === 'th' ? 'เลือกรูปแบบการเดินทางที่เหมาะกับคุณ' : 'Curated For Your Occasion'}
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleAudienceClick('couples', 'pkg-02')}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-md bg-[#D8F0F5]/50 hover:bg-[#D8F0F5] text-[#102D4F] border border-[#134C65]/15 transition-all cursor-pointer whitespace-nowrap"
                >
                  {language === 'th' ? 'คู่รัก & ฮันนีมูน' : 'Couples & Sunset'}
                </button>
                <button
                  onClick={() => handleAudienceClick('families', 'pkg-03')}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-md bg-[#D8F0F5]/50 hover:bg-[#D8F0F5] text-[#102D4F] border border-[#134C65]/15 transition-all cursor-pointer whitespace-nowrap"
                >
                  {language === 'th' ? 'ครอบครัว & เด็ก' : 'Family Voyage'}
                </button>
                <button
                  onClick={() => handleAudienceClick('friends', 'pkg-01')}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-md bg-[#D8F0F5]/50 hover:bg-[#D8F0F5] text-[#102D4F] border border-[#134C65]/15 transition-all cursor-pointer whitespace-nowrap"
                >
                  {language === 'th' ? 'กลุ่มเพื่อน & กิจกรรม' : 'Island Escape'}
                </button>
                <button
                  onClick={() => handleAudienceClick('vip', 'pkg-04')}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-md bg-[#102D4F] hover:bg-[#134C65] text-[#F0ECDA] border border-[#B69A5A]/30 transition-all cursor-pointer whitespace-nowrap"
                >
                  {language === 'th' ? 'VIP ซูเปอร์ยอร์ช' : 'VIP Superyacht'}
                </button>
                <button
                  onClick={() => handleAudienceClick('corporate', 'pkg-05')}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-md bg-[#D8F0F5]/50 hover:bg-[#D8F0F5] text-[#102D4F] border border-[#134C65]/15 transition-all cursor-pointer whitespace-nowrap"
                >
                  {language === 'th' ? 'งานเลี้ยงองค์กร' : 'Corporate'}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#packages"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('packages');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#102D4F] hover:bg-[#134C65] rounded-lg shadow-sm transition-all duration-200 flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>{language === 'th' ? 'สำรวจแพ็กเกจท่องเที่ยว' : 'Explore Tour Packages'}</span>
                <ArrowRight className="w-4 h-4 text-[#B69A5A]" />
              </a>
              <a
                href="#fleet"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('fleet');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#102D4F] bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                {language === 'th' ? 'ชมกองเรือยอร์ช' : 'Inspect Yacht Fleet'}
              </a>
            </div>

            {/* Trust Quote / Editorial Anchor */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500 border-t border-slate-100">
              <div className="flex text-[#B69A5A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#B69A5A]" />
                ))}
              </div>
              <span className="font-medium text-slate-700">4.98 / 5.0 Rating</span>
              <span aria-hidden="true">·</span>
              <span>
                {language === 'th' ? 'มาตรฐานความปลอดภัยทางทะเลระดับสากล' : 'Certified SOLAS Marine Safety Standards'}
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (16:9 Focal Carrier) */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-full min-h-[380px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-[#134C65]/15 shadow-lg group">
              <img
                src="/src/assets/images/yacht_hero_ocean_1792168303051.jpg"
                alt="Valérielle Royale luxury superyacht navigating turquoise coastal waters"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102D4F]/85 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Scrim Information Lockup */}
              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <div className="flex items-center gap-2 text-xs font-medium text-[#F0ECDA] mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#B69A5A]" />
                  <span>Flagship Superyacht</span>
                  <span aria-hidden="true">·</span>
                  <span>Benetti Delfino 95&apos;</span>
                </div>
                <p className="font-serif-luxury text-xl font-medium tracking-wide">
                  Valérielle Royale — Private Andaman & Gulf Escapes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI / Trust Strip Placed Immediately Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="font-serif-luxury text-2xl md:text-3xl font-semibold text-[#102D4F] tabular-nums">95 FT</p>
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">
              {language === 'th' ? 'เรือธงซูเปอร์ยอร์ช' : 'Flagship Yacht Length'}
            </p>
          </div>
          <div>
            <p className="font-serif-luxury text-2xl md:text-3xl font-semibold text-[#102D4F] tabular-nums">100%</p>
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">
              {language === 'th' ? 'กัปตัน & บริการส่วนตัว' : 'Private Crew & Captain'}
            </p>
          </div>
          <div>
            <p className="font-serif-luxury text-2xl md:text-3xl font-semibold text-[#102D4F] tabular-nums">5 TOURS</p>
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">
              {language === 'th' ? 'เส้นทางพิเศษเฉพาะกลุ่ม' : 'Curated Ocean Packages'}
            </p>
          </div>
          <div>
            <p className="font-price text-2xl md:text-3xl font-bold text-[#102D4F]">฿18,900</p>
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">
              {language === 'th' ? 'ราคาเริ่มต้นต่อกลุ่ม' : 'Starting Group Rate'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
