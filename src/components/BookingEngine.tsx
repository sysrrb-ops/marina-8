import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Calendar, Users, Clock, Anchor, Compass, Check, Tag, ShieldCheck, CreditCard, Sparkles, ChevronRight, AlertCircle } from 'lucide-react';

export const BookingEngine: React.FC = () => {
  const {
    language,
    packages,
    yachts,
    addons,
    bookingDraft,
    updateBookingDraft,
    toggleAddonService,
    applyPromoCodeToDraft,
    calculateBookingTotals,
    confirmBooking,
    activeCustomer
  } = useApp();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [promoInput, setPromoInput] = useState<string>(bookingDraft.appliedPromoCode || '');
  const [promoMessage, setPromoMessage] = useState<{ text: string; success: boolean } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const selectedPackage = packages.find(p => p.id === bookingDraft.packageId) || packages[0];
  const selectedYacht = yachts.find(y => y.id === bookingDraft.yachtId) || yachts[0];
  const totals = calculateBookingTotals();

  const handleApplyPromo = () => {
    const res = applyPromoCodeToDraft(promoInput);
    setPromoMessage({ text: res.message, success: res.success });
  };

  const validateStep = (step: number): boolean => {
    setValidationError(null);
    if (step === 1) {
      if (!bookingDraft.packageId) {
        setValidationError(language === 'th' ? 'กรุณาเลือกแพ็กเกจท่องเที่ยว' : 'Please select a charter package');
        return false;
      }
      if (!bookingDraft.yachtId) {
        setValidationError(language === 'th' ? 'กรุณาเลือกเรือยอร์ช' : 'Please select a yacht');
        return false;
      }
      return true;
    }
    if (step === 2) {
      if (!bookingDraft.departureDate) {
        setValidationError(language === 'th' ? 'กรุณาเลือกวันเดินทาง' : 'Please select a departure date');
        return false;
      }
      if (bookingDraft.guestCount < 1 || bookingDraft.guestCount > selectedPackage.maxPax) {
        setValidationError(
          language === 'th'
            ? `จำนวนผู้โดยสารต้องอยู่ระหว่าง 1 ถึง ${selectedPackage.maxPax} ท่านสำหรับแพ็กเกจนี้`
            : `Passenger count must be between 1 and ${selectedPackage.maxPax} for this package`
        );
        return false;
      }
      return true;
    }
    if (step === 4) {
      if (!bookingDraft.customerName.trim() || !bookingDraft.customerEmail.trim() || !bookingDraft.customerPhone.trim()) {
        setValidationError(language === 'th' ? 'กรุณากรอกข้อมูลติดต่อให้ครบถ้วน' : 'Please fill in all contact details');
        return false;
      }
      return true;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
      const el = document.getElementById('booking-card');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setValidationError(null);
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleFinalSubmit = async () => {
    if (!validateStep(4)) {
      setCurrentStep(4);
      return;
    }
    setIsSubmitting(true);
    try {
      await confirmBooking();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-[#F0ECDA] border-t border-[#134C65]/15">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B69A5A] mb-2">
            <Anchor className="w-3.5 h-3.5 text-[#B69A5A]" />
            <span>{language === 'th' ? 'ระบบสำรองเรือยอร์ชส่วนตัว' : 'PRIVATE CHARTER RESERVATIONS'}</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#102D4F]">
            {language === 'th' ? 'กำหนดทริปในแบบของคุณ' : 'Configure Your Yacht Charter'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans-body">
            {language === 'th'
              ? 'ระบบคำนวณราคาโปร่งใส ตรวจสอบความพร้อมของเรือและลูกเรือแบบเรียลไทม์ พร้อมการรับรองมาตรฐานสากล'
              : 'Seamlessly customize package itineraries, vessel choice, bespoke culinary services, and receive official reservation confirmation.'}
          </p>
        </div>

        {/* Step Progression Bar (Clean Unboxed State Tabs) */}
        <div id="booking-card" className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-5 p-1 bg-slate-100 rounded-lg text-center text-xs font-medium">
            <button
              onClick={() => setCurrentStep(1)}
              className={`py-2 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                currentStep === 1
                  ? 'bg-white text-[#102D4F] font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1. {language === 'th' ? 'แพ็กเกจ & เรือ' : 'Package & Yacht'}
            </button>
            <button
              onClick={() => validateStep(1) && setCurrentStep(2)}
              className={`py-2 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                currentStep === 2
                  ? 'bg-white text-[#102D4F] font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2. {language === 'th' ? 'วัน & เวลา' : 'Schedule'}
            </button>
            <button
              onClick={() => validateStep(1) && validateStep(2) && setCurrentStep(3)}
              className={`py-2 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                currentStep === 3
                  ? 'bg-white text-[#102D4F] font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              3. {language === 'th' ? 'บริการเสริม' : 'Add-ons'}
            </button>
            <button
              onClick={() => validateStep(1) && validateStep(2) && setCurrentStep(4)}
              className={`py-2 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                currentStep === 4
                  ? 'bg-white text-[#102D4F] font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              4. {language === 'th' ? 'ข้อมูลผู้จอง' : 'Guest Details'}
            </button>
            <button
              onClick={() => validateStep(1) && validateStep(2) && validateStep(4) && setCurrentStep(5)}
              className={`py-2 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                currentStep === 5
                  ? 'bg-white text-[#102D4F] font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              5. {language === 'th' ? 'ยืนยัน & บัตรจอง' : 'Summary'}
            </button>
          </div>
        </div>

        {/* Validation Warning Notice */}
        {validationError && (
          <div className="max-w-4xl mx-auto mb-6 p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Main Booking Container */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Active Step Form */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
            {/* STEP 1: Package & Yacht Selection */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif-luxury text-xl font-semibold text-[#102D4F]">
                    {language === 'th' ? '1. เลือกแพ็กเกจท่องเที่ยว (Select Package)' : '1. Select Charter Package'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {language === 'th' ? 'เลือกรูปแบบการเดินทางที่ตรงกับความต้องการของคุณ' : 'Choose your desired itinerary and experience type'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {packages.map((pkg) => {
                    const isSelected = bookingDraft.packageId === pkg.id;
                    return (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => updateBookingDraft({
                          packageId: pkg.id,
                          yachtId: pkg.recommendedYachtId,
                          guestCount: Math.min(bookingDraft.guestCount, pkg.maxPax)
                        })}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#102D4F] bg-[#D8F0F5]/20 ring-1 ring-[#102D4F] shadow-xs'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="font-semibold text-slate-900">{pkg.title[language]}</span>
                            <span className="font-price font-bold text-[#102D4F]">
                              ฿{pkg.startingPriceThb.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#134C65] font-medium">{pkg.subtitle[language]}</p>
                          <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{pkg.audienceLabel[language]}</p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                          <span>{pkg.duration[language]}</span>
                          <span>Max {pkg.maxPax} {language === 'th' ? 'คน' : 'pax'}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-serif-luxury text-lg font-semibold text-[#102D4F] mb-1">
                    {language === 'th' ? 'เลือกเรือยอร์ชประจำทริป (Select Yacht)' : 'Select Assigned Yacht'}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    {language === 'th' ? 'เราจัดเรือยอร์ชที่เหมาะสมที่สุดให้เป็นค่าเริ่มต้น สามารถเปลี่ยนได้ตามความต้องการ' : 'Tailor the specific vessel for this excursion'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {yachts.map((yacht) => {
                      const isSelected = bookingDraft.yachtId === yacht.id;
                      return (
                        <button
                          key={yacht.id}
                          type="button"
                          onClick={() => updateBookingDraft({ yachtId: yacht.id })}
                          className={`p-3 rounded-lg border text-left transition-all cursor-pointer flex items-center gap-3 ${
                            isSelected
                              ? 'border-[#102D4F] bg-[#102D4F] text-white shadow-xs'
                              : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
                          }`}
                        >
                          <img
                            src={yacht.image}
                            alt={yacht.name}
                            className="w-14 h-14 rounded-md object-cover shrink-0"
                          />
                          <div className="min-w-0 flex-1">
                            <span className="font-semibold text-xs truncate block">{yacht.name}</span>
                            <span className={`text-[11px] block truncate ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                              {yacht.model}
                            </span>
                            <span className={`text-[10px] block mt-0.5 ${isSelected ? 'text-[#F0ECDA]' : 'text-[#134C65]'}`}>
                              {yacht.lengthFeet}ft · Max {yacht.capacityPax} Guests · {yacht.crewCount} Crew
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Date, Time Slot & Guests */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif-luxury text-xl font-semibold text-[#102D4F]">
                    {language === 'th' ? '2. วันและเวลาออกเดินทาง (Schedule & Guests)' : '2. Date, Time Slot & Guest Count'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {language === 'th' ? 'กำหนดวันและช่วงเวลาล่องเรือ พร้อมระบุจำนวนผู้โดยสาร' : 'Specify your departure schedule and party size'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Date Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      {language === 'th' ? 'วันที่ออกเดินทาง' : 'Departure Date'}
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={bookingDraft.departureDate}
                        onChange={(e) => updateBookingDraft({ departureDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#102D4F] focus:ring-1 focus:ring-[#102D4F]"
                      />
                    </div>
                  </div>

                  {/* Guest Count */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      {language === 'th' ? `จำนวนผู้โดยสาร (สูงสุด ${selectedPackage.maxPax} ท่าน)` : `Guest Count (Max ${selectedPackage.maxPax})`}
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => updateBookingDraft({ guestCount: Math.max(1, bookingDraft.guestCount - 1) })}
                        className="w-10 h-10 rounded-lg border border-slate-300 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="font-serif-luxury text-xl font-bold text-[#102D4F] w-12 text-center tabular-nums">
                        {bookingDraft.guestCount}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateBookingDraft({ guestCount: Math.min(selectedPackage.maxPax, bookingDraft.guestCount + 1) })}
                        className="w-10 h-10 rounded-lg border border-slate-300 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Departure Time Slots */}
                <div className="pt-4 border-t border-slate-100">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
                    {language === 'th' ? 'เลือกช่วงเวลาออกเรือ' : 'Select Departure Time Slot'}
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => updateBookingDraft({ timeSlot: 'morning' })}
                      className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                        bookingDraft.timeSlot === 'morning'
                          ? 'border-[#102D4F] bg-[#102D4F] text-white shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-[#B69A5A]" />
                        <span className="font-semibold text-xs">
                          {language === 'th' ? 'รอบเช้า (Morning)' : 'Morning Cruise'}
                        </span>
                      </div>
                      <span className="text-[11px] block opacity-85">09:00 – 13:00</span>
                      <span className="text-[10px] block opacity-70 mt-1">
                        {language === 'th' ? 'แดดสดใส ทะเลสงบ เหมาะดำน้ำ' : 'Crisp morning sun & calm reefs'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => updateBookingDraft({ timeSlot: 'sunset' })}
                      className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                        bookingDraft.timeSlot === 'sunset'
                          ? 'border-[#102D4F] bg-[#102D4F] text-white shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="w-4 h-4 text-[#B69A5A]" />
                        <span className="font-semibold text-xs">
                          {language === 'th' ? 'รอบพระอาทิตย์ตก' : 'Sunset Golden Hour'}
                        </span>
                      </div>
                      <span className="text-[11px] block opacity-85">15:30 – 20:30</span>
                      <span className="text-[10px] block opacity-70 mt-1">
                        {language === 'th' ? 'ช่วงเวลาโรแมนติก ดินเนอร์ค่ำ' : 'Romantic evening & twilight'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => updateBookingDraft({ timeSlot: 'fullday' })}
                      className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                        bookingDraft.timeSlot === 'fullday'
                          ? 'border-[#102D4F] bg-[#102D4F] text-white shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Compass className="w-4 h-4 text-[#B69A5A]" />
                        <span className="font-semibold text-xs">
                          {language === 'th' ? 'เต็มวัน (Full Day)' : 'Full Day Odyssey'}
                        </span>
                      </div>
                      <span className="text-[11px] block opacity-85">09:00 – 17:00</span>
                      <span className="text-[10px] block opacity-70 mt-1">
                        {language === 'th' ? 'สำรวจหลายเกาะ พักผ่อนเต็มอิ่ม' : 'Multiple island stops & leisure'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Add-on Services Selection */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif-luxury text-xl font-semibold text-[#102D4F]">
                      {language === 'th' ? '3. เลือกบริการเสริมพิเศษ (Premium Add-ons)' : '3. Customize Onboard Services'}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {language === 'th' ? 'เลือกกิจกรรมและบริการเพื่อเติมเต็มความสมบูรณ์แบบ' : 'Select optional culinary, entertainment, and concierge upgrades'}
                    </p>
                  </div>
                  {activeCustomer && (
                    <span className="text-xs px-2.5 py-1 rounded bg-[#D8F0F5] text-[#102D4F] font-semibold">
                      {activeCustomer.membershipTier}: {totals.membershipDiscountPercent}% OFF Add-ons
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  {addons.map((addon) => {
                    const isSelected = bookingDraft.selectedServices.some(s => s.serviceId === addon.id);
                    return (
                      <div
                        key={addon.id}
                        className={`p-4 rounded-xl border transition-all ${
                          isSelected
                            ? 'border-[#134C65] bg-[#D8F0F5]/20 shadow-xs'
                            : 'border-slate-200 bg-white'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-serif-luxury font-semibold text-slate-900 text-base">
                                {addon.name[language]}
                              </h4>
                              <span className="font-price font-bold text-[#102D4F] text-xs">
                                +฿{addon.defaultPriceThb.toLocaleString()}
                              </span>
                            </div>
                            <p className="text-xs text-slate-600 font-sans-body">
                              {addon.description[language]}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => toggleAddonService(addon.id)}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer shrink-0 ${
                              isSelected
                                ? 'bg-[#487F86] text-white'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                            }`}
                          >
                            {isSelected
                              ? (language === 'th' ? 'เลือกแล้ว ✓' : 'Selected ✓')
                              : (language === 'th' ? '+ เพิ่ม' : '+ Add')}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: Passenger Information & Promo Code */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif-luxury text-xl font-semibold text-[#102D4F]">
                    {language === 'th' ? '4. ข้อมูลติดต่อและข้อกำหนดพิเศษ (Contact & Details)' : '4. Guest Details & Preferences'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {language === 'th' ? 'ข้อมูลสำหรับออกเอกสารสัญญาเช่าเรือและตั๋วเดินทาง (Voucher)' : 'Details for charter agreement, marine manifest, and official voucher'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      {language === 'th' ? 'ชื่อ-นามสกุล ผู้โดยสารหลัก' : 'Full Name (Lead Passenger)'}
                    </label>
                    <input
                      type="text"
                      value={bookingDraft.customerName}
                      onChange={(e) => updateBookingDraft({ customerName: e.target.value })}
                      placeholder="e.g. Lady Charlotte Montague / คุณสมชาย ใจดี"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#102D4F] focus:ring-1 focus:ring-[#102D4F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      {language === 'th' ? 'อีเมล' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      value={bookingDraft.customerEmail}
                      onChange={(e) => updateBookingDraft({ customerEmail: e.target.value })}
                      placeholder="e.g. client@domain.com"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#102D4F] focus:ring-1 focus:ring-[#102D4F]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      {language === 'th' ? 'หมายเลขโทรศัพท์ / WhatsApp' : 'Phone / WhatsApp Contact'}
                    </label>
                    <input
                      type="tel"
                      value={bookingDraft.customerPhone}
                      onChange={(e) => updateBookingDraft({ customerPhone: e.target.value })}
                      placeholder="e.g. +66 81 234 5678"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#102D4F] focus:ring-1 focus:ring-[#102D4F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    {language === 'th' ? 'ความต้องการพิเศษ / วันสำคัญ / อาหารที่แพ้' : 'Special Occasion, Dietary, or Route Wishes'}
                  </label>
                  <textarea
                    rows={3}
                    value={bookingDraft.specialRequests}
                    onChange={(e) => updateBookingDraft({ specialRequests: e.target.value })}
                    placeholder={
                      language === 'th'
                        ? 'เช่น วันเกิด, ขอแต่งงานเซอร์ไพรส์, ไม่รับประทานเนื้อวัว, ต้องการแชมเปญบนน้ำแข็ง'
                        : 'e.g. Secret proposal setup, Anniversary cake message, Gluten allergy, Champagne preferences...'
                    }
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#102D4F] focus:ring-1 focus:ring-[#102D4F]"
                  />
                </div>

                {/* Promo Code Input Box */}
                <div className="pt-4 border-t border-slate-100">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    {language === 'th' ? 'รหัสโปรโมชั่น (Promotion Code)' : 'Promotional Code'}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                      placeholder="e.g. ROMANTIC10, FAMILYVOYAGE, EARLYBIRD5"
                      className="flex-1 px-3.5 py-2 text-sm uppercase font-mono rounded-lg border border-slate-300 focus:outline-none focus:border-[#102D4F]"
                    />
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#102D4F] hover:bg-[#134C65] text-white rounded-lg cursor-pointer"
                    >
                      {language === 'th' ? 'ใช้โค้ด' : 'Apply Code'}
                    </button>
                  </div>
                  {promoMessage && (
                    <p className={`text-xs mt-2 font-medium ${promoMessage.success ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {promoMessage.text}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* STEP 5: Final Review & Confirmation */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif-luxury text-xl font-semibold text-[#102D4F]">
                    {language === 'th' ? '5. ตรวจสอบข้อมูลและยืนยันการจอง' : '5. Review Charter & Finalize'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {language === 'th' ? 'โปรดตรวจสอบรายละเอียดการเดินทางก่อนออกเอกสารรับรอง' : 'Please review itinerary specifications and authorize reservation'}
                  </p>
                </div>

                {/* Itinerary Summary Strip */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-3 text-xs text-slate-700">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="font-semibold text-slate-900">{selectedPackage.title[language]}</span>
                    <span className="text-[#134C65] font-medium">{selectedYacht.name}</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">{language === 'th' ? 'วันเดินทาง' : 'Date'}</span>
                      <span className="font-semibold">{bookingDraft.departureDate}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">{language === 'th' ? 'รอบเวลา' : 'Time Slot'}</span>
                      <span className="font-semibold capitalize">{bookingDraft.timeSlot}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">{language === 'th' ? 'ผู้โดยสาร' : 'Guests'}</span>
                      <span className="font-semibold">{bookingDraft.guestCount} {language === 'th' ? 'ท่าน' : 'Guests'}</span>
                    </div>
                  </div>
                  {bookingDraft.selectedServices.length > 0 && (
                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-slate-400 block text-[10px] uppercase mb-1">
                        {language === 'th' ? 'บริการเสริมที่เลือก' : 'Selected Add-ons'}
                      </span>
                      <div className="space-y-1">
                        {bookingDraft.selectedServices.map(s => (
                          <div key={s.serviceId} className="flex justify-between">
                            <span>{s.serviceName}</span>
                            <span className="font-price font-bold text-slate-800">+฿{s.priceThb.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Simulated Payment Method Selection */}
                <div className="space-y-2">
                  <span className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    {language === 'th' ? 'วิธีการชำระเงินจำลอง' : 'Payment Method Guarantee'}
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg border border-[#102D4F] bg-[#D8F0F5]/20 text-xs font-semibold text-[#102D4F] flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-[#102D4F]" />
                      <span>Credit Card</span>
                    </div>
                    <div className="p-3 rounded-lg border border-slate-200 bg-white text-xs text-slate-500 flex items-center gap-2 opacity-60">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Bank Wire</span>
                    </div>
                    <div className="p-3 rounded-lg border border-slate-200 bg-white text-xs text-slate-500 flex items-center gap-2 opacity-60">
                      <Sparkles className="w-4 h-4" />
                      <span>Crypto VIP</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#F0ECDA]/40 border border-[#B69A5A]/30 text-xs text-slate-700 space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-[#102D4F]">
                    <ShieldCheck className="w-4 h-4 text-[#B69A5A]" />
                    <span>{language === 'th' ? 'การรับประกันมาตรฐานความปลอดภัย' : 'Marina Valérielle Charter Assurance'}</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    {language === 'th'
                      ? 'ระบบจะออกตั๋ว Voucher อิเล็กทรอนิกส์ พร้อมบันทึกข้อมูลเข้าสู่ฐานข้อมูลลูกค้าสัมพันธ์ (Relational CRM Database) ทันที'
                      : 'Instant official boarding voucher generation with automated sync to the relational customer booking database.'}
                  </p>
                </div>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 rounded-md cursor-pointer"
                >
                  {language === 'th' ? '← ย้อนกลับ' : '← Back'}
                </button>
              ) : <div />}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#102D4F] hover:bg-[#134C65] rounded-md transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>{language === 'th' ? 'ขั้นตอนถัดไป' : 'Next Step'}</span>
                  <ChevronRight className="w-4 h-4 text-[#B69A5A]" />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleFinalSubmit}
                  className="px-8 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#102D4F] hover:bg-[#134C65] rounded-md transition-all flex items-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                >
                  <Anchor className="w-4 h-4 text-[#B69A5A]" />
                  <span>
                    {isSubmitting
                      ? (language === 'th' ? 'กำลังออกบัตรจอง...' : 'Issuing Voucher...')
                      : (language === 'th' ? 'ยืนยันการจองและออก Voucher' : 'Confirm Charter & Issue Voucher')}
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Live Price Calculator & Invoice Ledger */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-6 sticky top-24 shadow-xs">
            <h4 className="font-serif-luxury text-lg font-semibold text-[#102D4F] pb-3 border-b border-slate-200">
              {language === 'th' ? 'สรุปรายการคำนวณราคา' : 'Charter Ledger Summary'}
            </h4>

            <div className="py-4 space-y-2.5 text-xs text-slate-600 border-b border-slate-200">
              <div className="flex justify-between">
                <span>{selectedPackage.title[language]}</span>
                <span className="font-price font-bold text-slate-900">฿{totals.basePrice.toLocaleString()}</span>
              </div>

              {totals.servicesTotal > 0 && (
                <div className="flex justify-between">
                  <span>
                    {language === 'th' ? 'บริการเสริม' : 'Add-on Services'} ({bookingDraft.selectedServices.length})
                  </span>
                  <span className="font-price font-bold text-slate-900">฿{totals.servicesTotal.toLocaleString()}</span>
                </div>
              )}

              {totals.discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>
                    {language === 'th' ? 'ส่วนลดพิเศษ' : 'Total Privileges & Discounts'}
                  </span>
                  <span className="font-price font-bold">-฿{totals.discountAmount.toLocaleString()}</span>
                </div>
              )}

              <div className="flex justify-between pt-2 border-t border-slate-200/60">
                <span>{language === 'th' ? 'ภาษีมูลค่าเพิ่ม VAT (7%)' : 'Hospitality Tax (VAT 7%)'}</span>
                <span className="font-price font-bold text-slate-700">฿{totals.taxAmount.toLocaleString()}</span>
              </div>
            </div>

            {/* Grand Total */}
            <div className="pt-4 space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {language === 'th' ? 'ยอดรวมสุทธิ' : 'Grand Total'}
                </span>
                <span className="font-price text-2xl font-bold text-[#102D4F]">
                  ฿{totals.grandTotal.toLocaleString()}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 text-right">
                ≈ ${(totals.grandTotal / 35.5).toFixed(0)} USD
              </p>
            </div>

            {/* Active Guarantee Details */}
            <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500 space-y-1.5">
              <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#487F86]" />
                <span>{language === 'th' ? 'ราคารวมกัปตัน ลูกเรือ และน้ำมันแล้ว' : 'Captain, Full Crew & Fuel Included'}</span>
              </div>
              <p>
                {language === 'th'
                  ? 'ไม่มีค่าใช้จ่ายแอบแฝง อุ่นใจด้วยประกันภัยคุ้มครองผู้โดยสารเต็มวงเงิน'
                  : 'Transparent billing with zero hidden dock fees. Comprehensive marine liability included.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
