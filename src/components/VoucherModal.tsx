import React from 'react';
import { useApp } from '../context/AppContext';
import { X, CheckCircle, Printer, Download, Anchor, Compass, Calendar, Clock, Users, ShieldCheck, QrCode } from 'lucide-react';

export const VoucherModal: React.FC = () => {
  const { language, confirmedVoucherBooking, setConfirmedVoucherBooking, yachts, packages } = useApp();

  if (!confirmedVoucherBooking) return null;

  const yacht = yachts.find(y => y.id === confirmedVoucherBooking.yachtId) || yachts[0];
  const pkg = packages.find(p => p.id === confirmedVoucherBooking.packageId) || packages[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8">
        {/* Top Header */}
        <div className="bg-[#102D4F] text-white p-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#B69A5A] text-[#102D4F] flex items-center justify-center">
              <Anchor className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#F0ECDA] font-semibold block">
                MARINA VALÉRIELLE LUXURY CHARTERS
              </span>
              <h3 className="font-serif-luxury text-2xl font-semibold">
                {language === 'th' ? 'บัตรยืนยันการสำรองเรือยอร์ชส่วนตัว' : 'Official Boarding Pass & Voucher'}
              </h3>
            </div>
          </div>

          <button
            onClick={() => setConfirmedVoucherBooking(null)}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Voucher Pass Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Status Banner */}
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between text-xs text-emerald-800">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold">
                {language === 'th' ? 'การจองเสร็จสมบูรณ์ — บันทึกเข้าระบบแล้ว' : 'Reservation Confirmed & Synchronized with Fleet'}
              </span>
            </div>
            <span className="font-mono font-bold tracking-wider text-emerald-900">
              {confirmedVoucherBooking.bookingRef}
            </span>
          </div>

          {/* Core Voucher Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-slate-200 text-xs">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-0.5">
                {language === 'th' ? 'ผู้โดยสารหลัก' : 'Charter Guest'}
              </span>
              <p className="font-semibold text-slate-900 text-sm">{confirmedVoucherBooking.customerName}</p>
              <p className="text-slate-500">{confirmedVoucherBooking.customerEmail}</p>
              <p className="text-slate-500">{confirmedVoucherBooking.customerPhone}</p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-0.5">
                {language === 'th' ? 'เรือยอร์ชที่จัดสรร' : 'Assigned Vessel'}
              </span>
              <p className="font-semibold text-[#102D4F] text-sm">{yacht.name}</p>
              <p className="text-slate-500">{yacht.model} ({yacht.lengthFeet} ft)</p>
              <p className="text-[#134C65] font-medium">{yacht.crewCount} Certified Maritime Crew</p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-0.5">
                {language === 'th' ? 'แพ็กเกจการเดินทาง' : 'Charter Itinerary'}
              </span>
              <p className="font-semibold text-slate-900">{pkg.title[language]}</p>
              <p className="text-slate-500">{pkg.duration[language]}</p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-0.5">
                {language === 'th' ? 'วันและรอบเวลา' : 'Departure Schedule'}
              </span>
              <p className="font-semibold text-slate-900">{confirmedVoucherBooking.departureDate}</p>
              <p className="text-slate-500 capitalize">{confirmedVoucherBooking.timeSlot} Session · {confirmedVoucherBooking.guestCount} Guests</p>
            </div>
          </div>

          {/* Add-ons and Requests */}
          {confirmedVoucherBooking.selectedServices.length > 0 && (
            <div className="text-xs">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1.5">
                {language === 'th' ? 'บริการเสริมและสิ่งอำนวยความสะดวกพิเศษ' : 'Confirmed Inclusions & Add-ons'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {confirmedVoucherBooking.selectedServices.map(s => (
                  <span key={s.serviceId} className="px-2.5 py-1 bg-slate-100 rounded text-slate-700">
                    {s.serviceName}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Price & Dock Gate Verification */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white p-1 rounded-lg border border-slate-200 flex items-center justify-center">
                <QrCode className="w-10 h-10 text-[#102D4F]" />
              </div>
              <div className="text-xs">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                  {language === 'th' ? 'ท่าเทียบเรือรับรอง' : 'Pier Gate Clearance'}
                </span>
                <p className="font-semibold text-[#102D4F]">Pier Gate Berth #04</p>
                <p className="text-[10px] text-slate-500">Scan at marina dock concierge</p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                {language === 'th' ? 'ยอดชำระสุทธิ (PAID)' : 'Total Amount Paid'}
              </span>
              <p className="font-price text-2xl font-bold text-[#102D4F]">
                ฿{confirmedVoucherBooking.totalThb.toLocaleString()}
              </p>
              <span className="text-[10px] text-emerald-600 font-semibold uppercase">Authorized via Credit Card</span>
            </div>
          </div>
        </div>

        {/* Modal Action Controls */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {language === 'th' ? 'บันทึกในฐานข้อมูลการจองแล้ว' : 'Saved in Relational DB'}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{language === 'th' ? 'พิมพ์เอกสาร' : 'Print Pass'}</span>
            </button>
            <button
              onClick={() => setConfirmedVoucherBooking(null)}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#102D4F] hover:bg-[#134C65] rounded-lg cursor-pointer"
            >
              {language === 'th' ? 'เสร็จสิ้น' : 'Done'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
