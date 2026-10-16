import React from 'react';
import { useApp } from '../context/AppContext';
import { Crown, Check, Shield, Award, Sparkles, UserCheck, ArrowRight } from 'lucide-react';
import { MembershipTierName } from '../types';

export const MembershipSection: React.FC = () => {
  const { language, membershipTiers, activeCustomer, setActiveCustomer, customers } = useApp();

  return (
    <section id="membership" className="py-20 bg-[#EAE4D0]/40 border-t border-[#134C65]/15">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B69A5A] mb-2">
            <Crown className="w-3.5 h-3.5 text-[#B69A5A]" />
            <span>{language === 'th' ? 'โปรแกรมสมาชิก' : 'MARINA VALÉRIELLE PRIVILEGE'}</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#102D4F]">
            {language === 'th' ? 'สิทธิประโยชน์เหนือระดับสำหรับสมาชิก' : 'The Privilege Loyalty Circle'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans-body">
            {language === 'th'
              ? 'ระบบสมาชิกเพื่อมอบประสบการณ์การเดินทางที่พิเศษยิ่งขึ้น ทุกการจองสะสมจำนวนครั้งเพื่อเลื่อนระดับและรับส่วนลดบริการเสริม พร้อมผู้ประสานงานส่วนตัว'
              : 'Our tiered club recognizes loyalty with cascading privileges, private concierge allocation, and exclusive rates across our global charter network.'}
          </p>
        </div>

        {/* Member Profile Simulator & Active VIP Card */}
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Virtual Digital Card */}
          <div className="lg:col-span-6">
            <div className={`p-7 rounded-2xl shadow-xl bg-gradient-to-br ${
              activeCustomer?.membershipTier === 'Gold Privilege'
                ? 'from-[#1A160F] via-[#332A15] to-[#102D4F] text-[#F0ECDA] border border-[#B69A5A]/50'
                : activeCustomer?.membershipTier === 'Royal Blue'
                ? 'from-[#0D1B2A] via-[#102D4F] to-[#134C65] text-white border border-[#487F86]/40'
                : activeCustomer?.membershipTier === 'Sapphire'
                ? 'from-[#134C65] via-[#1D6080] to-[#102D4F] text-white border border-cyan-400/30'
                : 'from-slate-800 via-slate-900 to-slate-950 text-white border border-slate-700'
            } transition-all duration-300 relative overflow-hidden`}>
              {/* Subtle Nautical Watermark Background */}
              <div className="absolute -right-12 -bottom-12 opacity-10 pointer-events-none">
                <Crown className="w-64 h-64" />
              </div>

              <div className="flex items-start justify-between mb-8">
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-[#B69A5A] block">
                    MARINA VALÉRIELLE
                  </span>
                  <span className="font-serif-luxury text-xl tracking-wider">
                    PRIVILEGE CLUB
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-xs border border-white/20">
                  {activeCustomer ? activeCustomer.membershipTier : 'Pearl Member'}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-300 block">
                    {language === 'th' ? 'ชื่อสมาชิกผู้ทรงเกียรติ' : 'Privilege Member'}
                  </span>
                  <p className="font-serif-luxury text-xl font-medium tracking-wide">
                    {activeCustomer ? activeCustomer.fullName : 'Valued Guest'}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-slate-300 block">
                      {language === 'th' ? 'ทริปสะสม' : 'Charters'}
                    </span>
                    <span className="font-semibold tabular-nums">
                      {activeCustomer ? `${activeCustomer.totalBookings} Completed` : '0 Trips'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-slate-300 block">
                      {language === 'th' ? 'ส่วนลดบริการเสริม' : 'Add-on Perk'}
                    </span>
                    <span className="font-semibold text-[#B69A5A] tabular-nums">
                      {activeCustomer?.membershipTier === 'Gold Privilege' ? '15% OFF' :
                       activeCustomer?.membershipTier === 'Royal Blue' ? '10% OFF' :
                       activeCustomer?.membershipTier === 'Sapphire' ? '5% OFF' : 'Standard'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-slate-300 block">
                      {language === 'th' ? 'สถานะบัตร' : 'Status'}
                    </span>
                    <span className="font-semibold text-emerald-400">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Member Profile Switcher (Simulates login / loyalty experience) */}
          <div className="lg:col-span-6 bg-white p-6 rounded-xl border border-slate-200 space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#102D4F]">
              <UserCheck className="w-4 h-4 text-[#B69A5A]" />
              <span>{language === 'th' ? 'ทดสอบเข้าสู่ระบบสมาชิกจำลอง' : 'Simulated Member Account Login'}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-sans-body">
              {language === 'th'
                ? 'เลือกสลับบัญชีเพื่อทดสอบระบบ: ส่วนลดบริการเสริม (5% - 15%) และสิทธิประโยชน์ของระดับสมาชิกจะถูกนำไปคำนวณในระบบจองโดยอัตโนมัติ'
                : 'Switch member accounts below to see tier privileges, personalized greetings, and dynamic service discounts reflected in the booking engine.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {customers.map((c) => {
                const isActive = activeCustomer?.id === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCustomer(c)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      isActive
                        ? 'border-[#102D4F] bg-[#102D4F] text-white shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold truncate">{c.fullName.split('(')[0]}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                        isActive ? 'bg-[#B69A5A] text-[#102D4F]' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {c.membershipTier}
                      </span>
                    </div>
                    <span className={`text-[11px] block ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                      {c.country} · {c.totalBookings} {language === 'th' ? 'ทริป' : 'Trips'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4 Membership Tiers Comparison Table / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {membershipTiers.map((tier) => {
            const isCurrentTier = activeCustomer?.membershipTier === tier.name;

            return (
              <div
                key={tier.name}
                className={`bg-white rounded-xl border p-6 flex flex-col justify-between transition-all ${
                  isCurrentTier
                    ? 'border-[#B69A5A] ring-1 ring-[#B69A5A]/30 shadow-sm'
                    : 'border-slate-200 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded text-xs font-semibold ${tier.badgeColor}`}>
                      {tier.name}
                    </span>
                    {tier.addonDiscountPercent > 0 && (
                      <span className="text-xs font-semibold text-[#102D4F] tabular-nums">
                        {tier.addonDiscountPercent}% OFF Add-ons
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 font-medium pb-3 border-b border-slate-100 min-h-[38px]">
                    {tier.condition[language]}
                  </p>

                  <div className="mt-4 space-y-2">
                    {tier.benefits[language].map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#487F86] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-[11px] text-slate-400 block text-center">
                    {isCurrentTier
                      ? (language === 'th' ? 'สถานะปัจจุบันของคุณ' : 'Your Current Tier')
                      : (language === 'th' ? 'เงื่อนไขปรับอัตโนมัติ' : 'Auto-Tier Progression')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
