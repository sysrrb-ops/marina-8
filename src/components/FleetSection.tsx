import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Yacht } from '../types';
import { Users, Bed, Gauge, Shield, Sparkles, Anchor, ChevronRight } from 'lucide-react';

export const FleetSection: React.FC = () => {
  const { language, yachts, selectYachtForBooking, setPreviewYacht } = useApp();
  const [activeFilter, setActiveFilter] = useState<'all' | 'superyacht' | 'catamaran' | 'flybridge'>('all');

  const filteredYachts = yachts.filter(y => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'superyacht') return y.lengthFeet >= 80;
    if (activeFilter === 'catamaran') return y.model.toLowerCase().includes('catamaran');
    if (activeFilter === 'flybridge') return y.model.toLowerCase().includes('flybridge') || y.model.toLowerCase().includes('manhattan');
    return true;
  });

  return (
    <section id="fleet" className="py-20 bg-[#EAE4D0]/40 border-t border-[#134C65]/15">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B69A5A] mb-2">
              <Anchor className="w-3.5 h-3.5 text-[#B69A5A]" />
              <span>{language === 'th' ? 'กองเรือยอร์ชระดับลักชัวรี' : 'THE PRIVATE FLEET'}</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#102D4F]">
              {language === 'th' ? 'เรือยอร์ชส่วนตัวและสิ่งอำนวยความสะดวก' : 'Masterpieces of Naval Elegance'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl font-sans-body">
              {language === 'th'
                ? 'เรือยอร์ชทุกลำผ่านการตรวจรับรองมาตรฐานความปลอดภัยสากล พร้อมกัปตันและลูกเรือผู้เชี่ยวชาญ ดูแลตลอดเส้นทาง'
                : 'Every vessel in our fleet is maintained to pristine SOLAS standards, certified with elite maritime crew, stabilization systems, and luxurious onboard living.'}
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented Controls) */}
          <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-lg shrink-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-[#102D4F] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'th' ? 'เรือทุกลำ' : 'All Vessels'}
            </button>
            <button
              onClick={() => setActiveFilter('superyacht')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'superyacht'
                  ? 'bg-[#102D4F] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'th' ? 'ซูเปอร์ยอร์ช (90ft+)' : 'Superyacht'}
            </button>
            <button
              onClick={() => setActiveFilter('catamaran')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'catamaran'
                  ? 'bg-[#102D4F] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'th' ? 'คาตามารัน 2 ท้อง' : 'Catamaran'}
            </button>
            <button
              onClick={() => setActiveFilter('flybridge')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'flybridge'
                  ? 'bg-[#102D4F] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'th' ? 'ฟลายบริดจ์สปอร์ต' : 'Flybridge'}
            </button>
          </div>
        </div>

        {/* Yacht Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredYachts.map((yacht) => (
            <div
              key={yacht.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group"
            >
              {/* Yacht Image with Spec Overlays */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={yacht.image}
                  alt={yacht.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102D4F]/90 via-[#102D4F]/20 to-transparent" />

                {/* Top Badges (clean text with hairline backdrop) */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                  <span className="px-2.5 py-1 rounded bg-black/40 backdrop-blur-xs text-[#F0ECDA]">
                    {yacht.builder} · {yacht.yearBuilt}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#B69A5A] text-[#102D4F] font-semibold">
                    {yacht.lengthFeet} Feet
                  </span>
                </div>

                {/* Bottom Title on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif-luxury text-2xl font-semibold tracking-wide">
                    {yacht.name}
                  </h3>
                  <p className="text-xs text-slate-200 font-sans-body">
                    {yacht.model}
                  </p>
                </div>
              </div>

              {/* Vessel Information & Naval Specs */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-xs text-[#134C65] italic mb-4 font-sans-body">
                    &ldquo;{yacht.tagline[language]}&rdquo;
                  </p>

                  {/* Naval Architecture Spec Grid */}
                  <div className="grid grid-cols-3 gap-3 py-3 border-y border-slate-100 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#134C65] shrink-0" />
                      <div>
                        <span className="font-semibold tabular-nums">{yacht.capacityPax}</span> Guests
                        <span className="block text-[10px] text-slate-400">Day Charter</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-[#134C65] shrink-0" />
                      <div>
                        <span className="font-semibold tabular-nums">{yacht.cabins}</span> Staterooms
                        <span className="block text-[10px] text-slate-400">En-suite</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-[#134C65] shrink-0" />
                      <div>
                        <span className="font-semibold tabular-nums">{yacht.speedKnots}</span> Knots
                        <span className="block text-[10px] text-slate-400">Max Speed</span>
                      </div>
                    </div>
                  </div>

                  {/* Curated Amenities List */}
                  <div className="mt-4 space-y-1.5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {language === 'th' ? 'สิ่งอำนวยความสะดวกเด่น' : 'Signature Amenities'}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                      {yacht.amenities[language].slice(0, 4).map((amenity, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B69A5A]" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Controls */}
                <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-100">
                  <button
                    onClick={() => setPreviewYacht(yacht)}
                    className="text-xs font-semibold text-[#134C65] hover:text-[#102D4F] flex items-center gap-1 py-1 cursor-pointer"
                  >
                    <span>{language === 'th' ? 'ดูข้อมูลทางเทคนิค' : 'View Full Specs'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => {
                      selectYachtForBooking(yacht.id);
                      const el = document.getElementById('booking');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#102D4F] hover:bg-[#134C65] rounded-md transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {language === 'th' ? 'เลือกเรือลำนี้' : 'Select This Yacht'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
