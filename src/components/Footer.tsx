import React from 'react';
import { useApp } from '../context/AppContext';
import { Anchor, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setIsDatabaseDrawerOpen } = useApp();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#102D4F] text-slate-300 border-t border-[#134C65]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#B69A5A] text-[#102D4F] flex items-center justify-center font-bold">
                <Anchor className="w-4 h-4" />
              </div>
              <span className="font-serif-luxury text-xl font-bold tracking-wider text-white">
                MARINA VALÉRIELLE
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans-body max-w-sm">
              {language === 'th'
                ? 'Marina Valérielle — ธุรกิจบริการท่องเที่ยวและเช่าเรือยอร์ชส่วนตัวระดับพรีเมียม ภายใต้แนวคิด "Your Ocean, Your Moment" มุ่งมั่นส่งเสริมการท่องเที่ยวทางทะเลอย่างรับผิดชอบต่อระบบนิเวศ'
                : 'Marina Valérielle provides bespoke luxury marine charters and private island excursions under the ethos "Your Ocean, Your Moment" dedicated to nautical elegance and marine ecosystem stewardship.'}
            </p>

            <div className="flex items-center gap-3 pt-2 text-[11px] text-[#F0ECDA]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B69A5A]" />
                <span>SOLAS Certified</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-[#B69A5A]" />
                <span>Coral Reef Protection Pledge</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              {language === 'th' ? 'การนำทาง' : 'Navigation'}
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-slate-300">
              <button onClick={() => scrollTo('fleet')} className="text-left hover:text-[#B69A5A] transition-colors cursor-pointer">
                {language === 'th' ? 'กองเรือยอร์ช' : 'The Fleet'}
              </button>
              <button onClick={() => scrollTo('packages')} className="text-left hover:text-[#B69A5A] transition-colors cursor-pointer">
                {language === 'th' ? 'แพ็กเกจท่องเที่ยว' : 'Charter Packages'}
              </button>
              <button onClick={() => scrollTo('experiences')} className="text-left hover:text-[#B69A5A] transition-colors cursor-pointer">
                {language === 'th' ? 'ประสบการณ์ & บริการเสริม' : 'Experiences & Add-ons'}
              </button>
              <button onClick={() => scrollTo('promotions')} className="text-left hover:text-[#B69A5A] transition-colors cursor-pointer">
                {language === 'th' ? 'โปรโมชั่นพิเศษ' : 'Exclusive Offers'}
              </button>
              <button onClick={() => scrollTo('membership')} className="text-left hover:text-[#B69A5A] transition-colors cursor-pointer">
                {language === 'th' ? 'ระบบสมาชิก Privilege' : 'Privilege Club'}
              </button>
            </div>
          </div>

          {/* Fleet Bases */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              {language === 'th' ? 'ท่าเทียบเรือประจำการ' : 'Home Berths'}
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p>• Royal Phuket Marina (Andaman Base)</p>
              <p>• Ocean Marina Yacht Club (Pattaya Base)</p>
              <p>• Bangrak Private Pier (Samui Base)</p>
              <p>• Partner Slips: Monaco & Miami Harbor</p>
            </div>
          </div>

          {/* Technical & Database Link */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              {language === 'th' ? 'การบริหารจัดการ' : 'Fleet Console'}
            </h4>
            <div className="space-y-2 text-xs">
              <button
                onClick={() => setIsDatabaseDrawerOpen(true)}
                className="text-left text-[#F0ECDA] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>{language === 'th' ? 'ฐานข้อมูล CRM & การจอง' : 'Relational Database CRM'}</span>
              </button>
              <button
                onClick={() => scrollTo('booking')}
                className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {language === 'th' ? 'ระบบจองเรือยอร์ช' : 'Booking Engine'}
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {language === 'th' ? 'ติดต่อผู้ประสานงาน' : 'Concierge Desk'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} Marina Valérielle Luxury Yacht Charters. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Maritime License No. TAT 11/08922</span>
            <span>·</span>
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Charter Terms & Safety Rules</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
