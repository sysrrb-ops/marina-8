import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Booking } from '../types';
import { Database, Table, X, RefreshCw, Key, Link2, Search, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export const DatabaseConsole: React.FC = () => {
  const {
    language,
    isDatabaseDrawerOpen,
    setIsDatabaseDrawerOpen,
    customers,
    yachts,
    packages,
    bookings,
    addons,
    promotions,
    membershipTiers,
    payments,
    updateBookingStatus,
    resetDatabase
  } = useApp();

  const [activeTable, setActiveTable] = useState<string>('bookings');
  const [searchTerm, setSearchTerm] = useState<string>('');

  if (!isDatabaseDrawerOpen) return null;

  const tables = [
    { id: 'bookings', label: 'bookings', count: bookings.length, pk: 'id', desc: 'รายการจองทั้งหมด / Active Charters' },
    { id: 'customers', label: 'customers', count: customers.length, pk: 'id', desc: 'ข้อมูลลูกค้า & สมาชิก / Registered Guests' },
    { id: 'yachts', label: 'yachts', count: yachts.length, pk: 'id', desc: 'ข้อมูลเรือยอร์ช & สเปก / Fleet Inventory' },
    { id: 'packages', label: 'packages', count: packages.length, pk: 'id', desc: 'แพ็กเกจท่องเที่ยว / Tour Catalog' },
    { id: 'services', label: 'services', count: addons.length, pk: 'id', desc: 'บริการเสริม / Premium Add-ons' },
    { id: 'promotions', label: 'promotions', count: promotions.length, pk: 'id', desc: 'โปรโมชั่น & ส่วนลด / Coupons' },
    { id: 'memberships', label: 'memberships', count: membershipTiers.length, pk: 'name', desc: 'ระดับสมาชิก / Privilege Tiers' },
    { id: 'payments', label: 'payments', count: payments.length, pk: 'id', desc: 'บันทึกการชำระเงิน / Payment Ledger' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-6xl h-[85vh] flex flex-col border border-slate-200 shadow-2xl overflow-hidden">
        {/* Console Header */}
        <div className="bg-[#102D4F] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#B69A5A] text-[#102D4F] flex items-center justify-center">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif-luxury text-xl font-semibold tracking-wide">
                  Marina Valérielle — Relational Database Management
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                  Schema: Section 9 Architecture
                </span>
              </div>
              <p className="text-xs text-slate-300">
                {language === 'th'
                  ? 'ตรวจสอบและจัดการตารางฐานข้อมูลเชิงสัมพันธ์ 9 ตาราง (MySQL / PostgreSQL Architecture)'
                  : 'Relational Database Schema & Live Entity Inspector (Section 9 Specification)'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={resetDatabase}
              className="px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Reset Demo Data"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{language === 'th' ? 'คืนค่าเริ่มต้น' : 'Reset Database'}</span>
            </button>
            <button
              onClick={() => setIsDatabaseDrawerOpen(false)}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Console Body: Table Switcher & Record Grid */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left Sidebar: Tables List */}
          <div className="w-full md:w-64 bg-slate-50 border-r border-slate-200 p-4 space-y-1.5 overflow-y-auto shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 block mb-2">
              Database Tables ({tables.length})
            </span>
            {tables.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setActiveTable(t.id);
                  setSearchTerm('');
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                  activeTable === t.id
                    ? 'bg-[#102D4F] text-white shadow-xs font-semibold'
                    : 'text-slate-700 hover:bg-slate-200/60'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <Table className="w-3.5 h-3.5 shrink-0 opacity-70" />
                  <span className="font-mono truncate">{t.label}</span>
                </div>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                  activeTable === t.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {t.count}
                </span>
              </button>
            ))}

            {/* Relational Mapping Legend */}
            <div className="pt-4 mt-4 border-t border-slate-200 text-[11px] text-slate-500 space-y-2 px-1">
              <span className="font-semibold text-slate-700 block uppercase text-[10px]">
                {language === 'th' ? 'ความสัมพันธ์ตาราง (Relations)' : 'Relational Foreign Keys'}
              </span>
              <div className="space-y-1 text-[10px] font-mono">
                <p>• bookings.customerId → customers.id</p>
                <p>• bookings.packageId → packages.id</p>
                <p>• bookings.yachtId → yachts.id</p>
                <p>• payments.bookingId → bookings.id</p>
              </div>
            </div>
          </div>

          {/* Right Main Panel: Table Data & Records */}
          <div className="flex-1 flex flex-col overflow-hidden bg-white">
            {/* Search and Table Subhead */}
            <div className="p-4 border-b border-slate-200 flex items-center justify-between gap-4 shrink-0 bg-white">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-[#102D4F]">
                  table: {activeTable}
                </span>
                <span className="text-xs text-slate-400">
                  ({tables.find(t => t.id === activeTable)?.desc})
                </span>
              </div>

              <div className="relative w-64">
                <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter table records..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#102D4F]"
                />
              </div>
            </div>

            {/* Records Content Area */}
            <div className="flex-1 overflow-auto p-4">
              {/* TABLE: BOOKINGS */}
              {activeTable === 'bookings' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold text-slate-600">
                        <th className="py-2.5 px-3 font-mono">bookingRef (PK)</th>
                        <th className="py-2.5 px-3">Customer (FK)</th>
                        <th className="py-2.5 px-3">Vessel & Package</th>
                        <th className="py-2.5 px-3">Date / Slot</th>
                        <th className="py-2.5 px-3">Guests</th>
                        <th className="py-2.5 px-3">Total (THB)</th>
                        <th className="py-2.5 px-3">Status</th>
                        <th className="py-2.5 px-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {bookings
                        .filter(b =>
                          b.bookingRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.customerName.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((b) => (
                          <tr key={b.id} className="hover:bg-slate-50/70">
                            <td className="py-2.5 px-3 font-mono font-bold text-[#102D4F] whitespace-nowrap">
                              {b.bookingRef}
                            </td>
                            <td className="py-2.5 px-3">
                              <span className="font-semibold block">{b.customerName}</span>
                              <span className="text-[10px] text-slate-400 block">{b.customerEmail}</span>
                            </td>
                            <td className="py-2.5 px-3">
                              <span className="font-medium block">{b.packageId}</span>
                              <span className="text-[10px] text-slate-500">{b.yachtId}</span>
                            </td>
                            <td className="py-2.5 px-3 whitespace-nowrap">
                              <span>{b.departureDate}</span>
                              <span className="block text-[10px] text-slate-400 capitalize">{b.timeSlot}</span>
                            </td>
                            <td className="py-2.5 px-3 tabular-nums">{b.guestCount} pax</td>
                            <td className="py-2.5 px-3 font-price font-bold text-[#102D4F] whitespace-nowrap">
                              ฿{b.totalThb.toLocaleString()}
                            </td>
                            <td className="py-2.5 px-3">
                              <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${
                                b.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' :
                                b.status === 'completed' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                              }`}>
                                {b.status}
                              </span>
                            </td>
                            <td className="py-2.5 px-3">
                              <select
                                value={b.status}
                                onChange={(e) => updateBookingStatus(b.id, e.target.value as Booking['status'])}
                                className="text-[11px] p-1 rounded border border-slate-200 bg-white cursor-pointer"
                              >
                                <option value="confirmed">Confirmed</option>
                                <option value="completed">Completed</option>
                                <option value="pending">Pending</option>
                                <option value="cancelled">Cancelled</option>
                              </select>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* TABLE: CUSTOMERS */}
              {activeTable === 'customers' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold text-slate-600">
                        <th className="py-2.5 px-3 font-mono">id (PK)</th>
                        <th className="py-2.5 px-3">Full Name</th>
                        <th className="py-2.5 px-3">Contact</th>
                        <th className="py-2.5 px-3">Tier</th>
                        <th className="py-2.5 px-3">Bookings</th>
                        <th className="py-2.5 px-3">Total Spend</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {customers
                        .filter(c =>
                          c.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.email.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((c) => (
                          <tr key={c.id} className="hover:bg-slate-50/70">
                            <td className="py-2.5 px-3 font-mono text-slate-500">{c.id}</td>
                            <td className="py-2.5 px-3 font-semibold text-slate-900">{c.fullName}</td>
                            <td className="py-2.5 px-3">
                              <span>{c.email}</span>
                              <span className="block text-[10px] text-slate-400">{c.phone}</span>
                            </td>
                            <td className="py-2.5 px-3">
                              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#D8F0F5] text-[#102D4F]">
                                {c.membershipTier}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 tabular-nums">{c.totalBookings}</td>
                            <td className="py-2.5 px-3 font-price font-bold text-[#102D4F]">
                              ฿{c.totalSpentThb.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* TABLE: YACHTS */}
              {activeTable === 'yachts' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold text-slate-600">
                        <th className="py-2.5 px-3 font-mono">id (PK)</th>
                        <th className="py-2.5 px-3">Name</th>
                        <th className="py-2.5 px-3">Model & Builder</th>
                        <th className="py-2.5 px-3">Length</th>
                        <th className="py-2.5 px-3">Capacity</th>
                        <th className="py-2.5 px-3">Cabins</th>
                        <th className="py-2.5 px-3">Crew</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {yachts.map((y) => (
                        <tr key={y.id} className="hover:bg-slate-50/70">
                          <td className="py-2.5 px-3 font-mono text-slate-500">{y.id}</td>
                          <td className="py-2.5 px-3 font-semibold text-[#102D4F]">{y.name}</td>
                          <td className="py-2.5 px-3">{y.model} ({y.builder})</td>
                          <td className="py-2.5 px-3 tabular-nums">{y.lengthFeet} ft</td>
                          <td className="py-2.5 px-3 tabular-nums">{y.capacityPax} guests</td>
                          <td className="py-2.5 px-3 tabular-nums">{y.cabins}</td>
                          <td className="py-2.5 px-3 tabular-nums">{y.crewCount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* TABLE: PACKAGES */}
              {activeTable === 'packages' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold text-slate-600">
                        <th className="py-2.5 px-3 font-mono">id (PK)</th>
                        <th className="py-2.5 px-3">Title</th>
                        <th className="py-2.5 px-3">Target Audience</th>
                        <th className="py-2.5 px-3">Duration</th>
                        <th className="py-2.5 px-3">Max Pax</th>
                        <th className="py-2.5 px-3">Base Price (THB)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {packages.map((p) => (
                        <tr key={p.id} className="hover:bg-slate-50/70">
                          <td className="py-2.5 px-3 font-mono text-slate-500">{p.id}</td>
                          <td className="py-2.5 px-3 font-semibold text-slate-900">{p.title.en}</td>
                          <td className="py-2.5 px-3 capitalize">{p.audienceCategory}</td>
                          <td className="py-2.5 px-3">{p.duration.en}</td>
                          <td className="py-2.5 px-3 tabular-nums">{p.maxPax}</td>
                          <td className="py-2.5 px-3 font-price font-bold text-[#102D4F]">
                            ฿{p.startingPriceThb.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* TABLE: PAYMENTS */}
              {activeTable === 'payments' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold text-slate-600">
                        <th className="py-2.5 px-3 font-mono">id (PK)</th>
                        <th className="py-2.5 px-3 font-mono">bookingRef (FK)</th>
                        <th className="py-2.5 px-3">Transaction Ref</th>
                        <th className="py-2.5 px-3">Method</th>
                        <th className="py-2.5 px-3">Amount (THB)</th>
                        <th className="py-2.5 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {payments.map((p) => (
                        <tr key={p.id} className="hover:bg-slate-50/70">
                          <td className="py-2.5 px-3 font-mono text-slate-500">{p.id}</td>
                          <td className="py-2.5 px-3 font-mono font-semibold text-[#102D4F]">{p.bookingRef}</td>
                          <td className="py-2.5 px-3 font-mono text-slate-600">{p.transactionRef}</td>
                          <td className="py-2.5 px-3">{p.method}</td>
                          <td className="py-2.5 px-3 font-price font-bold text-slate-800">฿{p.amountThb.toLocaleString()}</td>
                          <td className="py-2.5 px-3">
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                              {p.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* TABLE: PROMOTIONS */}
              {activeTable === 'promotions' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold text-slate-600">
                        <th className="py-2.5 px-3 font-mono">id (PK)</th>
                        <th className="py-2.5 px-3">Code</th>
                        <th className="py-2.5 px-3">Title</th>
                        <th className="py-2.5 px-3">Discount</th>
                        <th className="py-2.5 px-3">Audience</th>
                        <th className="py-2.5 px-3">Valid Until</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {promotions.map((pr) => (
                        <tr key={pr.id} className="hover:bg-slate-50/70">
                          <td className="py-2.5 px-3 font-mono text-slate-500">{pr.id}</td>
                          <td className="py-2.5 px-3 font-mono font-bold text-[#102D4F]">{pr.code}</td>
                          <td className="py-2.5 px-3 font-medium">{pr.title.en}</td>
                          <td className="py-2.5 px-3 font-semibold text-emerald-700 tabular-nums">{pr.discountPercent}%</td>
                          <td className="py-2.5 px-3 capitalize">{pr.targetAudience}</td>
                          <td className="py-2.5 px-3">{pr.validUntil}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* TABLE: SERVICES */}
              {activeTable === 'services' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold text-slate-600">
                        <th className="py-2.5 px-3 font-mono">id (PK)</th>
                        <th className="py-2.5 px-3">Service Name</th>
                        <th className="py-2.5 px-3">Category</th>
                        <th className="py-2.5 px-3">Min Price</th>
                        <th className="py-2.5 px-3">Max Price</th>
                        <th className="py-2.5 px-3">Unit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {addons.map((a) => (
                        <tr key={a.id} className="hover:bg-slate-50/70">
                          <td className="py-2.5 px-3 font-mono text-slate-500">{a.id}</td>
                          <td className="py-2.5 px-3 font-semibold text-slate-900">{a.name.en}</td>
                          <td className="py-2.5 px-3 capitalize">{a.category}</td>
                          <td className="py-2.5 px-3 font-price font-bold text-slate-800">฿{a.priceMinThb.toLocaleString()}</td>
                          <td className="py-2.5 px-3 font-price font-bold text-slate-800">฿{a.priceMaxThb.toLocaleString()}</td>
                          <td className="py-2.5 px-3">{a.unit.en}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* TABLE: MEMBERSHIPS */}
              {activeTable === 'memberships' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold text-slate-600">
                        <th className="py-2.5 px-3 font-mono">tierName (PK)</th>
                        <th className="py-2.5 px-3">Qualification Condition</th>
                        <th className="py-2.5 px-3">Add-on Discount</th>
                        <th className="py-2.5 px-3">Primary Benefits</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {membershipTiers.map((m) => (
                        <tr key={m.name} className="hover:bg-slate-50/70">
                          <td className="py-2.5 px-3 font-bold text-[#102D4F]">{m.name}</td>
                          <td className="py-2.5 px-3">{m.condition.en}</td>
                          <td className="py-2.5 px-3 font-semibold text-emerald-700 tabular-nums">
                            {m.addonDiscountPercent}%
                          </td>
                          <td className="py-2.5 px-3 text-[11px]">{m.benefits.en.join(' · ')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
