import React from 'react';
import { useApp } from '../context/AppContext';
import { X, CheckCircle, Clock, Users, Anchor, Bed, Gauge, Shield, ArrowRight } from 'lucide-react';

export const Modals: React.FC = () => {
  const {
    language,
    previewYacht,
    setPreviewYacht,
    previewPackage,
    setPreviewPackage,
    selectPackageForBooking,
    selectYachtForBooking
  } = useApp();

  return (
    <>
      {/* YACHT SPECS MODAL */}
      {previewYacht && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8">
            <div className="relative aspect-[16/9] bg-slate-900">
              <img
                src={previewYacht.image}
                alt={previewYacht.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <button
                onClick={() => setPreviewYacht(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#B69A5A] font-semibold">
                  {previewYacht.builder} · {previewYacht.yearBuilt}
                </span>
                <h3 className="font-serif-luxury text-3xl font-semibold">{previewYacht.name}</h3>
                <p className="text-xs text-slate-300">{previewYacht.model}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans-body">
                {previewYacht.description[language]}
              </p>

              {/* Naval Specs Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block">Length</span>
                  <span className="font-semibold text-slate-900 tabular-nums">{previewYacht.lengthFeet} Feet</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block">Day Capacity</span>
                  <span className="font-semibold text-slate-900 tabular-nums">{previewYacht.capacityPax} Guests</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block">Cabins</span>
                  <span className="font-semibold text-slate-900 tabular-nums">{previewYacht.cabins} Staterooms</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block">Crew</span>
                  <span className="font-semibold text-slate-900 tabular-nums">{previewYacht.crewCount} Maritime Staff</span>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h4 className="font-serif-luxury text-base font-semibold text-[#102D4F] mb-2">
                  {language === 'th' ? 'สิ่งอำนวยความสะดวกประจำเรือ' : 'Onboard Features & Marine Amenities'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {previewYacht.amenities[language].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B69A5A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setPreviewYacht(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  {language === 'th' ? 'ปิดหน้าต่าง' : 'Close'}
                </button>
                <button
                  onClick={() => {
                    selectYachtForBooking(previewYacht.id);
                    setPreviewYacht(null);
                    const el = document.getElementById('booking');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#102D4F] hover:bg-[#134C65] rounded-lg transition-colors cursor-pointer"
                >
                  {language === 'th' ? 'เลือกเรือลำนี้เพื่อออกทริป' : 'Select Vessel for Charter'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PACKAGE ITINERARY MODAL */}
      {previewPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8">
            <div className="bg-[#102D4F] text-white p-6 flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#B69A5A] font-semibold block">
                  {previewPackage.subtitle[language]}
                </span>
                <h3 className="font-serif-luxury text-2xl font-semibold">
                  {previewPackage.title[language]}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-300 mt-1">
                  <span>{previewPackage.duration[language]}</span>
                  <span>·</span>
                  <span>Max {previewPackage.maxPax} Guests</span>
                </div>
              </div>
              <button
                onClick={() => setPreviewPackage(null)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Itinerary Timeline */}
              <div>
                <h4 className="font-serif-luxury text-lg font-semibold text-[#102D4F] mb-3">
                  {language === 'th' ? 'กำหนดการเดินทางตลอดทริป (Itinerary Timeline)' : 'Detailed Cruise Itinerary'}
                </h4>
                <div className="space-y-3 relative pl-6 border-l-2 border-slate-200 ml-2">
                  {previewPackage.itinerary.map((item, i) => (
                    <div key={i} className="relative text-xs">
                      <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[#134C65] ring-4 ring-white" />
                      <span className="font-mono font-bold text-[#102D4F] block">{item.time}</span>
                      <p className="text-slate-600 mt-0.5">{item.activity[language]}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-serif-luxury text-base font-semibold text-[#102D4F] mb-2">
                  {language === 'th' ? 'รายการที่รวมในแพ็กเกจ' : 'Inclusions & Guarantees'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {previewPackage.included[language].map((inc, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#487F86] shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Base Charter</span>
                  <span className="font-price text-2xl font-bold text-[#102D4F]">
                    ฿{previewPackage.startingPriceThb.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => {
                    selectPackageForBooking(previewPackage.id);
                    setPreviewPackage(null);
                    const el = document.getElementById('booking');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#102D4F] hover:bg-[#134C65] rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>{language === 'th' ? 'จองแพ็กเกจนี้ทันที' : 'Book This Package'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B69A5A]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
