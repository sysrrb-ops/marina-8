import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Tag, Check, Copy, ArrowRight, Gift, Percent } from 'lucide-react';

export const PromotionsSection: React.FC = () => {
  const { language, promotions, applyPromoCodeToDraft, bookingDraft } = useApp();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [promoNotice, setPromoNotice] = useState<string | null>(null);

  const handleApplyPromo = (code: string) => {
    const result = applyPromoCodeToDraft(code);
    setPromoNotice(result.message);
    setTimeout(() => setPromoNotice(null), 4000);

    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="promotions" className="py-20 bg-[#F0ECDA] border-t border-[#134C65]/15">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B69A5A] mb-2">
            <Gift className="w-3.5 h-3.5 text-[#B69A5A]" />
            <span>{language === 'th' ? 'โปรโมชั่นพิเศษตามกลุ่มเป้าหมาย' : 'SEASONAL PRIVILEGES & OFFERS'}</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#102D4F]">
            {language === 'th' ? 'สิทธิพิเศษที่คัดสรรเพื่อคุณ' : 'Exclusive Charter Privileges'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans-body">
            {language === 'th'
              ? 'โปรโมชั่นและส่วนลดพิเศษสำหรับคู่รัก ครอบครัว กลุ่มเพื่อน องค์กร และนักท่องเที่ยวต่างชาติ ใช้โค้ดเพื่อรับสิทธิทันที'
              : 'Tailored incentives created for celebrations, multi-generation family gatherings, early-bird global explorers, and corporate retreats.'}
          </p>

          {promoNotice && (
            <div className="mt-4 inline-block px-4 py-2 bg-[#D8F0F5] text-[#102D4F] border border-[#134C65]/20 rounded-md text-xs font-semibold animate-fade-in">
              {promoNotice}
            </div>
          )}
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((promo) => {
            const isApplied = bookingDraft.appliedPromoCode?.toUpperCase() === promo.code.toUpperCase();

            return (
              <div
                key={promo.id}
                className={`rounded-xl border p-6 flex flex-col justify-between transition-all duration-200 ${
                  isApplied
                    ? 'border-[#B69A5A] bg-[#F0ECDA]/20 ring-1 ring-[#B69A5A]/30 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white shadow-xs'
                }`}
              >
                <div>
                  {/* Top Bar: Target Audience & Discount Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {promo.targetAudienceName[language]}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#102D4F] text-[#F0ECDA]">
                      {promo.discountLabel[language]}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-xl font-semibold text-[#102D4F]">
                    {promo.title[language]}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed font-sans-body">
                    {promo.description[language]}
                  </p>

                  {/* Perks Checklist */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {promo.perks[language].map((perk, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#487F86] shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Promo Code & Action Box */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5 text-[#134C65]" />
                      <code className="text-xs font-mono font-bold text-[#102D4F] tracking-wider">
                        {promo.code}
                      </code>
                    </div>
                    <button
                      onClick={() => copyCode(promo.code)}
                      className="text-[11px] text-slate-500 hover:text-slate-800 font-medium px-2 py-0.5 rounded hover:bg-slate-200/60 transition-colors cursor-pointer"
                    >
                      {copiedCode === promo.code
                        ? (language === 'th' ? 'คัดลอกแล้ว' : 'Copied')
                        : (language === 'th' ? 'คัดลอก' : 'Copy')}
                    </button>
                  </div>

                  <button
                    onClick={() => handleApplyPromo(promo.code)}
                    className={`w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isApplied
                        ? 'bg-[#B69A5A] text-[#102D4F]'
                        : 'bg-[#102D4F] hover:bg-[#134C65] text-white shadow-xs'
                    }`}
                  >
                    <span>
                      {isApplied
                        ? (language === 'th' ? 'กำลังใช้งานโค้ดนี้' : 'Active in Booking')
                        : (language === 'th' ? 'ใช้โค้ดกับแพ็กเกจ' : 'Apply to Booking')}
                    </span>
                    {!isApplied && <ArrowRight className="w-3.5 h-3.5 text-[#B69A5A]" />}
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
