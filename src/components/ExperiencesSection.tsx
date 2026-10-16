import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Waves, UtensilsCrossed, Camera, Sparkles, Car, Check, Plus, ChevronDown, Compass } from 'lucide-react';

export const ExperiencesSection: React.FC = () => {
  const { language, addons, bookingDraft, toggleAddonService } = useApp();
  const [expandedAddon, setExpandedAddon] = useState<string | null>(null);

  const getAddonIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves':
        return <Waves className="w-5 h-5 text-[#487F86]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-[#B69A5A]" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-[#134C65]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#B69A5A]" />;
      case 'Car':
        return <Car className="w-5 h-5 text-[#102D4F]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#134C65]" />;
    }
  };

  return (
    <section id="experiences" className="py-20 bg-[#EAE4D0]/40 border-t border-[#134C65]/15">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B69A5A] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B69A5A]" />
            <span>{language === 'th' ? 'กิจกรรมเสริมและบริการพิเศษ' : 'BESPOKE EXPERIENCES & ADD-ONS'}</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#102D4F]">
            {language === 'th' ? 'ยกระดับการเดินทางให้ตรงใจคุณ' : 'Elevate Your Maritime Journey'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans-body">
            {language === 'th'
              ? 'เพิ่มความประทับใจด้วยบริการเสริมระดับลักชัวรี ตั้งแต่เชฟส่วนตัว อุปกรณ์กีฬาทางน้ำ ช่างภาพโดรนมืออาชีพ ไปจนถึงรถรับส่งลีมูซีน'
              : 'Complement your private charter with tailored gastronomic, photographic, and marine adventure services managed seamlessly by our concierge.'}
          </p>
        </div>

        {/* 5 Addon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addons.map((addon) => {
            const isSelected = bookingDraft.selectedServices.some(s => s.serviceId === addon.id);
            const isExpanded = expandedAddon === addon.id;

            return (
              <div
                key={addon.id}
                className={`bg-white rounded-xl border transition-all duration-200 flex flex-col justify-between p-6 ${
                  isSelected
                    ? 'border-[#134C65] ring-1 ring-[#134C65]/30 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#D8F0F5]/50 flex items-center justify-center shrink-0">
                      {getAddonIcon(addon.icon)}
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 block font-medium">
                        {language === 'th' ? 'ราคาแนะนำ' : 'Price Guide'}
                      </span>
                      <span className="font-price text-lg font-bold text-[#102D4F]">
                        ฿{addon.priceMinThb.toLocaleString()} – ฿{addon.priceMaxThb.toLocaleString()}
                      </span>
                      <span className="block text-[10px] text-slate-400">{addon.unit[language]}</span>
                    </div>
                  </div>

                  <h3 className="font-serif-luxury text-xl font-semibold text-[#102D4F]">
                    {addon.name[language]}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed font-sans-body">
                    {addon.description[language]}
                  </p>

                  {/* Options drawer / selection if options exist */}
                  {addon.options && addon.options.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <button
                        onClick={() => setExpandedAddon(isExpanded ? null : addon.id)}
                        className="flex items-center justify-between w-full text-xs font-semibold text-[#134C65] hover:text-[#102D4F] py-1 cursor-pointer"
                      >
                        <span>
                          {language === 'th'
                            ? `เลือกรูปแบบบริการ (${addon.options.length} ตัวเลือก)`
                            : `Available Configurations (${addon.options.length})`}
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {isExpanded && (
                        <div className="mt-2 space-y-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                          {addon.options.map((opt) => {
                            const isOptionActive = bookingDraft.selectedServices.some(
                              s => s.serviceId === addon.id && s.selectedOptionId === opt.id
                            );
                            return (
                              <button
                                key={opt.id}
                                onClick={() => toggleAddonService(addon.id, opt.id)}
                                className={`w-full text-left p-2 rounded text-xs transition-colors cursor-pointer flex items-center justify-between gap-2 ${
                                  isOptionActive
                                    ? 'bg-[#102D4F] text-white font-medium'
                                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                                }`}
                              >
                                <span className="line-clamp-1">{opt.label[language]}</span>
                                <span className="shrink-0 font-price font-bold text-[11px]">
                                  {opt.extraPrice > 0 ? `+฿${opt.extraPrice.toLocaleString()}` : (language === 'th' ? 'รวมในเซต' : 'Base')}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Action Button */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => toggleAddonService(addon.id)}
                    className={`w-full py-2 px-3 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-[#487F86] text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-[#102D4F]'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>{language === 'th' ? 'เพิ่มในทริปแล้ว' : 'Added to Charter'}</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>{language === 'th' ? 'เพิ่มในรายการจอง' : 'Add to Booking'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
