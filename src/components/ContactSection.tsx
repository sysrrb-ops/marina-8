import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldCheck, HelpCircle, ChevronDown, Compass } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { language } = useApp();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guestCount: '2-4 guests',
    desiredDate: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        guestCount: '2-4 guests',
        desiredDate: '',
        message: ''
      });
    }, 5000);
  };

  const faqs = [
    {
      q: {
        en: 'What is included in the charter fee?',
        th: 'ค่าบริการเช่าเรือยอร์ชรวมอะไรบ้าง?'
      },
      a: {
        en: 'All Marina Valérielle charters include the private vessel, certified captain and maritime crew, onboard fuel, safety equipment, fresh tropical fruits, cold drinking water, soft drinks, and comprehensive marine passenger accident insurance.',
        th: 'ราคาทุกแพ็กเกจรวมเรือยอร์ชส่วนตัว กัปตันและลูกเรือมืออาชีพ น้ำมันเรือ อุปกรณ์ความปลอดภัยครบชุด ผลไม้สดตามฤดูกาล น้ำดื่ม เครื่องดื่มซอฟต์ดริ้งก์ และประกันภัยอุบัติเหตุทางทะเลคุ้มครองผู้โดยสาร'
      }
    },
    {
      q: {
        en: 'What happens in case of adverse weather or sea conditions?',
        th: 'หากสภาพอากาศหรือคลื่นลมไม่เอื้ออำนวย มีนโยบายอย่างไร?'
      },
      a: {
        en: 'Guest safety is our paramount priority. If the Marine Department or captain issues weather/swell warnings, we provide complimentary date rescheduling or full charter credit transfer without any penalty.',
        th: 'ความปลอดภัยของผู้โดยสารสำคัญที่สุด หากกรมเจ้าท่าหรือกัปตันประเมินว่ามีคลื่นลมแรง ท่านสามารถเลื่อนวันเดินทางได้ฟรีโดยไม่มีค่าธรรมเนียม หรือรับเป็นเครดิตทริปเต็มจำนวน'
      }
    },
    {
      q: {
        en: 'Can we customize the island route and destination stops?',
        th: 'สามารถปรับแต่งเส้นทางและจุดแวะพักตามต้องการได้หรือไม่?'
      },
      a: {
        en: 'Yes. Our personal charter concierge and captain will review your preferred island anchorages (e.g., Phi Phi, Phang Nga Bay, Coral Island, Racha Islands) and tailor the voyage within safe cruising nautical limits.',
        th: 'สามารถปรับแต่งได้ตามความต้องการ โดยผู้ประสานงานและกัปตันจะช่วยแนะนำจุดแวะพักที่สวยงามและปลอดภัย เช่น อ่าวพังงา เกาะราชา เกาะเฮ หรือเกาะพีพี ภายใต้ระยะเวลาที่กำหนด'
      }
    },
    {
      q: {
        en: 'Are the yachts suitable for young children and elderly passengers?',
        th: 'เรือยอร์ชเหมาะสำหรับเด็กเล็กและผู้สูงอายุหรือไม่?'
      },
      a: {
        en: 'Extremely suitable. Our vessels, especially our twin-hull catamarans and stabilized yachts, feature expansive air-conditioned salons, shaded sundecks, and custom-sized life vests for infants, kids, and seniors.',
        th: 'เหมาะเป็นอย่างยิ่ง โดยเฉพาะเรือคาตามารัน 2 ท้อง ที่มีความนิ่งสูง ไม่โคลงเคลง มีห้องปรับอากาศเย็นสบาย และมีเสื้อชูชีพเฉพาะสำหรับเด็กทุกวัย พร้อมลูกเรือคอยดูแลตลอดการขึ้นลงเรือ'
      }
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#F0ECDA] border-t border-[#134C65]/15">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B69A5A] mb-2">
            <Compass className="w-3.5 h-3.5 text-[#B69A5A]" />
            <span>{language === 'th' ? 'ติดต่อฝ่ายบริการลูกค้าและท่าเรือ' : 'CONCIERGE & MARINA INQUIRIES'}</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#102D4F]">
            {language === 'th' ? 'เริ่มต้นวางแผนทริปในฝันของคุณ' : 'Connect with Our Private Marine Concierge'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans-body">
            {language === 'th'
              ? 'ทีมงานฝ่ายบริการลูกค้าพร้อมให้คำปรึกษา แนะนำเส้นทางเกาะส่วนตัว และจัดเตรียมแพ็กเกจพิเศษสำหรับทุกโอกาส'
              : 'Our dedicated charter officers are on call to arrange bespoke private island anchorages, helicopter rendezvous, and private events.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 rounded-xl p-6 sm:p-8 shadow-xs">
            <h3 className="font-serif-luxury text-xl font-semibold text-[#102D4F] mb-1">
              {language === 'th' ? 'แบบฟอร์มขอรับคำปรึกษาและใบเสนอราคา' : 'Private Charter Consultation Request'}
            </h3>
            <p className="text-xs text-slate-500 mb-6 font-sans-body">
              {language === 'th'
                ? 'กรอกข้อมูลเพื่อให้ผู้ประสานงานส่วนตัวติดต่อกลับภายใน 2 ชั่วโมง'
                : 'Receive a tailored route proposition and formal yacht availability itinerary'}
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2 animate-fade-in">
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-serif-luxury text-lg font-semibold text-emerald-900">
                  {language === 'th' ? 'ได้รับข้อความของคุณเรียบร้อยแล้ว' : 'Inquiry Received with Distinction'}
                </h4>
                <p className="text-xs text-emerald-700">
                  {language === 'th'
                    ? 'เจ้าหน้าที่ Concierge ประจำท่าเรือจะติดต่อกลับทางอีเมลหรือ WhatsApp โดยเร็วที่สุด'
                    : 'A dedicated Marine Concierge officer will review vessel availability and contact you shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      {language === 'th' ? 'ชื่อ-นามสกุล' : 'Full Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Lady Charlotte / คุณกิตติศักดิ์"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#102D4F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      {language === 'th' ? 'อีเมลติดต่อ' : 'Email Address'} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@domain.com"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#102D4F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      {language === 'th' ? 'เบอร์โทรศัพท์ / WhatsApp' : 'Phone / WhatsApp'}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+66 81 234 5678"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#102D4F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      {language === 'th' ? 'วันที่คาดว่าจะเดินทาง' : 'Target Voyage Date'}
                    </label>
                    <input
                      type="date"
                      value={formData.desiredDate}
                      onChange={(e) => setFormData({ ...formData, desiredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#102D4F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    {language === 'th' ? 'รายละเอียดหรือข้อกำหนดพิเศษ' : 'Custom Preferences or Occasion Requirements'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      language === 'th'
                        ? 'เช่น ต้องการจัดงานขอแต่งงาน, จองสำหรับกลุ่มผู้บริหาร 10 ท่าน, สนใจเส้นทางเกาะราชา...'
                        : 'e.g. Seeking sunset cruise for 10-year anniversary with private chef and drone videographer...'
                    }
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#102D4F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#102D4F] hover:bg-[#134C65] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 text-[#B69A5A]" />
                  <span>{language === 'th' ? 'ส่งคำขอข้อมูลทริป' : 'Submit Consultation Request'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Marina Locations & Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
              <h3 className="font-serif-luxury text-lg font-semibold text-[#102D4F]">
                {language === 'th' ? 'ช่องทางติดต่อส่วนกลาง' : 'Direct Concierge Channels'}
              </h3>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-[#D8F0F5]/50 flex items-center justify-center shrink-0 text-[#134C65]">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold block">{language === 'th' ? 'สายด่วนผู้ประสานงาน VIP' : '24/7 VIP Concierge Hotline'}</span>
                    <span className="text-slate-500 font-mono">+66 (0) 76 890 123 / +66 (0) 2 456 7890</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-[#D8F0F5]/50 flex items-center justify-center shrink-0 text-[#134C65]">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold block">{language === 'th' ? 'อีเมลฝ่ายบริการ' : 'Official Electronic Inquiries'}</span>
                    <span className="text-slate-500 font-mono">concierge@marinavalerielle.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Marina Pier Slips */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-3 text-xs">
              <h4 className="font-serif-luxury text-base font-semibold text-[#102D4F]">
                {language === 'th' ? 'ท่าเทียบเรือประจำการ (Home Ports)' : 'Home Ports & Private Marina Berths'}
              </h4>

              <div className="space-y-2.5 text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B69A5A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Royal Phuket Marina (Andaman Base)</span>
                    <span className="text-[11px] text-slate-500">Berth A1–A4, The Boardwalk, Koh Kaew, Phuket</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B69A5A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Ocean Marina Yacht Club (Gulf Base)</span>
                    <span className="text-[11px] text-slate-500">Sukhumvit Rd, Na Chom Thian, Sattahip, Chonburi</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B69A5A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Bangrak Private Pier (Samui Base)</span>
                    <span className="text-[11px] text-slate-500">Bo Phut, Koh Samui, Surat Thani</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-16 pt-12 border-t border-slate-200 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-serif-luxury text-2xl font-semibold text-[#102D4F]">
              {language === 'th' ? 'คำถามที่พบบ่อย (FAQ)' : 'Frequently Answered Inquiries'}
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-4 text-left text-xs sm:text-sm font-semibold text-slate-800 hover:text-[#102D4F] flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{faq.q[language]}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed font-sans-body border-t border-slate-100 pt-3">
                      {faq.a[language]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
