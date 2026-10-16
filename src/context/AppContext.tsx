import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Language,
  Yacht,
  TourPackage,
  PremiumAddon,
  Promotion,
  MembershipTier,
  Customer,
  Booking,
  PaymentRecord,
  BookingServiceSelection
} from '../types';
import {
  YACHTS,
  TOUR_PACKAGES,
  PREMIUM_ADDONS,
  PROMOTIONS,
  MEMBERSHIP_TIERS,
  INITIAL_CUSTOMERS,
  INITIAL_BOOKINGS,
  INITIAL_PAYMENTS
} from '../data/mockData';

interface BookingDraft {
  packageId: string;
  yachtId: string;
  departureDate: string;
  timeSlot: 'morning' | 'sunset' | 'fullday';
  guestCount: number;
  selectedServices: BookingServiceSelection[];
  specialRequests: string;
  appliedPromoCode: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  
  // Member simulator
  activeCustomer: Customer | null;
  setActiveCustomer: (customer: Customer | null) => void;
  
  // Catalog
  yachts: Yacht[];
  packages: TourPackage[];
  addons: PremiumAddon[];
  promotions: Promotion[];
  membershipTiers: MembershipTier[];
  
  // Database Tables
  customers: Customer[];
  bookings: Booking[];
  payments: PaymentRecord[];
  
  // Booking engine
  bookingDraft: BookingDraft;
  updateBookingDraft: (patch: Partial<BookingDraft>) => void;
  selectPackageForBooking: (pkgId: string) => void;
  selectYachtForBooking: (yachtId: string) => void;
  toggleAddonService: (serviceId: string, optionId?: string) => void;
  applyPromoCodeToDraft: (code: string) => { success: boolean; message: string; discountPercent?: number };
  calculateBookingTotals: () => {
    basePrice: number;
    servicesTotal: number;
    discountAmount: number;
    subtotal: number;
    taxAmount: number;
    grandTotal: number;
    membershipDiscountPercent: number;
    promoDiscountPercent: number;
  };
  confirmBooking: () => Promise<Booking>;
  
  // Modals & UI Triggers
  previewYacht: Yacht | null;
  setPreviewYacht: (yacht: Yacht | null) => void;
  previewPackage: TourPackage | null;
  setPreviewPackage: (pkg: TourPackage | null) => void;
  confirmedVoucherBooking: Booking | null;
  setConfirmedVoucherBooking: (b: Booking | null) => void;
  isDatabaseDrawerOpen: boolean;
  setIsDatabaseDrawerOpen: (open: boolean) => void;
  
  // Database admin actions
  updateBookingStatus: (bookingId: string, status: Booking['status']) => void;
  resetDatabase: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<string>('home');
  
  // Persistent DB collections
  const [customers, setCustomers] = useState<Customer[]>(() => {
    const saved = localStorage.getItem('mv_db_customers');
    return saved ? JSON.parse(saved) : INITIAL_CUSTOMERS;
  });

  const [bookings, setBookings] = useState<Booking[]>(() => {
    const saved = localStorage.getItem('mv_db_bookings');
    return saved ? JSON.parse(saved) : INITIAL_BOOKINGS;
  });

  const [payments, setPayments] = useState<PaymentRecord[]>(() => {
    const saved = localStorage.getItem('mv_db_payments');
    return saved ? JSON.parse(saved) : INITIAL_PAYMENTS;
  });

  const [activeCustomer, setActiveCustomer] = useState<Customer | null>(INITIAL_CUSTOMERS[0]); // Lady Charlotte Montague by default

  // Modals
  const [previewYacht, setPreviewYacht] = useState<Yacht | null>(null);
  const [previewPackage, setPreviewPackage] = useState<TourPackage | null>(null);
  const [confirmedVoucherBooking, setConfirmedVoucherBooking] = useState<Booking | null>(null);
  const [isDatabaseDrawerOpen, setIsDatabaseDrawerOpen] = useState<boolean>(false);

  // Booking Draft
  const getDefaultDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().split('T')[0];
  };

  const [bookingDraft, setBookingDraft] = useState<BookingDraft>({
    packageId: 'pkg-02',
    yachtId: 'yacht-03',
    departureDate: getDefaultDate(),
    timeSlot: 'sunset',
    guestCount: 2,
    selectedServices: [
      { serviceId: 'addon-04', serviceName: 'Celebration Styling & Flowers', priceThb: 3500 }
    ],
    specialRequests: '',
    appliedPromoCode: 'ROMANTIC10',
    customerName: 'Lady Charlotte Montague',
    customerEmail: 'charlotte.montague@mayfair-estates.co.uk',
    customerPhone: '+44 7700 900142'
  });

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem('mv_db_customers', JSON.stringify(customers));
  }, [customers]);

  useEffect(() => {
    localStorage.setItem('mv_db_bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem('mv_db_payments', JSON.stringify(payments));
  }, [payments]);

  // When activeCustomer changes, sync fields to booking draft
  useEffect(() => {
    if (activeCustomer) {
      setBookingDraft(prev => ({
        ...prev,
        customerName: activeCustomer.fullName,
        customerEmail: activeCustomer.email,
        customerPhone: activeCustomer.phone
      }));
    }
  }, [activeCustomer]);

  const updateBookingDraft = (patch: Partial<BookingDraft>) => {
    setBookingDraft(prev => ({ ...prev, ...patch }));
  };

  const selectPackageForBooking = (pkgId: string) => {
    const pkg = TOUR_PACKAGES.find(p => p.id === pkgId);
    if (!pkg) return;
    setBookingDraft(prev => ({
      ...prev,
      packageId: pkgId,
      yachtId: pkg.recommendedYachtId,
      guestCount: Math.min(prev.guestCount, pkg.maxPax)
    }));
    setActiveSection('booking');
  };

  const selectYachtForBooking = (yachtId: string) => {
    setBookingDraft(prev => ({ ...prev, yachtId }));
    setActiveSection('booking');
  };

  const toggleAddonService = (serviceId: string, optionId?: string) => {
    const addon = PREMIUM_ADDONS.find(a => a.id === serviceId);
    if (!addon) return;

    setBookingDraft(prev => {
      const existsIndex = prev.selectedServices.findIndex(s => s.serviceId === serviceId);
      if (existsIndex >= 0) {
        // If same option clicked, remove it. If different option clicked, update option
        const currentSelection = prev.selectedServices[existsIndex];
        if (optionId && currentSelection.selectedOptionId !== optionId) {
          const opt = addon.options?.find(o => o.id === optionId);
          const newPrice = addon.defaultPriceThb + (opt?.extraPrice || 0);
          const updated = [...prev.selectedServices];
          updated[existsIndex] = {
            serviceId,
            serviceName: addon.name.en,
            selectedOptionId: optionId,
            priceThb: newPrice
          };
          return { ...prev, selectedServices: updated };
        } else {
          // Remove
          return {
            ...prev,
            selectedServices: prev.selectedServices.filter(s => s.serviceId !== serviceId)
          };
        }
      } else {
        // Add new
        const opt = addon.options?.find(o => o.id === optionId);
        const price = addon.defaultPriceThb + (opt?.extraPrice || 0);
        return {
          ...prev,
          selectedServices: [
            ...prev.selectedServices,
            {
              serviceId,
              serviceName: addon.name.en,
              selectedOptionId: optionId,
              priceThb: price
            }
          ]
        };
      }
    });
  };

  const applyPromoCodeToDraft = (code: string) => {
    const trimmed = code.trim().toUpperCase();
    if (!trimmed) {
      setBookingDraft(prev => ({ ...prev, appliedPromoCode: '' }));
      return { success: false, message: language === 'th' ? 'กรุณากรอกรหัสโปรโมชั่น' : 'Please enter a promo code' };
    }

    const promo = PROMOTIONS.find(p => p.code.toUpperCase() === trimmed);
    if (!promo) {
      return {
        success: false,
        message: language === 'th' ? 'รหัสโปรโมชั่นไม่ถูกต้องหรือหมดอายุ' : 'Invalid or expired promotional code'
      };
    }

    // Check applicable package constraint
    if (promo.applicablePackageIds && !promo.applicablePackageIds.includes(bookingDraft.packageId)) {
      const targetPkg = TOUR_PACKAGES.find(p => promo.applicablePackageIds?.includes(p.id));
      return {
        success: false,
        message: language === 'th'
          ? `รหัสนี้ใช้ได้เฉพาะกับแพ็กเกจ ${targetPkg?.title[language] || ''}`
          : `This code is valid only for ${targetPkg?.title.en || 'specific package'}`
      };
    }

    // Check min pax constraint
    if (promo.minPax && bookingDraft.guestCount < promo.minPax) {
      return {
        success: false,
        message: language === 'th'
          ? `รหัสนี้ต้องการผู้โดยสารอย่างน้อย ${promo.minPax} ท่าน`
          : `This code requires a minimum of ${promo.minPax} guests`
      };
    }

    setBookingDraft(prev => ({ ...prev, appliedPromoCode: trimmed }));
    return {
      success: true,
      message: language === 'th'
        ? `ใช้โค้ด ${promo.title.th} สำเร็จ!`
        : `Successfully applied: ${promo.title.en}!`,
      discountPercent: promo.discountPercent
    };
  };

  const calculateBookingTotals = () => {
    const pkg = TOUR_PACKAGES.find(p => p.id === bookingDraft.packageId);
    const basePrice = pkg ? pkg.startingPriceThb : 18900;

    // Membership discount applies to add-on services
    let membershipDiscountPercent = 0;
    if (activeCustomer) {
      const tier = MEMBERSHIP_TIERS.find(t => t.name === activeCustomer.membershipTier);
      if (tier) {
        membershipDiscountPercent = tier.addonDiscountPercent;
      }
    }

    const rawServicesTotal = bookingDraft.selectedServices.reduce((sum, item) => sum + item.priceThb, 0);
    const servicesTotal = rawServicesTotal * (1 - membershipDiscountPercent / 100);

    // Promotion discount applies to base charter or total
    let promoDiscountPercent = 0;
    if (bookingDraft.appliedPromoCode) {
      const promo = PROMOTIONS.find(p => p.code.toUpperCase() === bookingDraft.appliedPromoCode.toUpperCase());
      if (promo) {
        promoDiscountPercent = promo.discountPercent;
      }
    }

    const promoDiscountAmount = (basePrice * promoDiscountPercent) / 100;
    const membershipDiscountAmount = (rawServicesTotal * membershipDiscountPercent) / 100;
    const discountAmount = Math.round(promoDiscountAmount + membershipDiscountAmount);

    const subtotal = Math.max(0, basePrice + rawServicesTotal - discountAmount);
    // 7% VAT (standard Thailand luxury hospitality tax)
    const taxAmount = Math.round(subtotal * 0.07);
    const grandTotal = subtotal + taxAmount;

    return {
      basePrice,
      servicesTotal: Math.round(servicesTotal),
      discountAmount,
      subtotal,
      taxAmount,
      grandTotal,
      membershipDiscountPercent,
      promoDiscountPercent
    };
  };

  const confirmBooking = async (): Promise<Booking> => {
    const totals = calculateBookingTotals();
    const newBookingRef = `MV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBookingId = `bk-${Date.now().toString().slice(-6)}`;

    // If customer doesn't exist, create customer
    let custId = activeCustomer ? activeCustomer.id : `cust-${Date.now().toString().slice(-4)}`;
    if (!activeCustomer) {
      const newCust: Customer = {
        id: custId,
        fullName: bookingDraft.customerName,
        email: bookingDraft.customerEmail,
        phone: bookingDraft.customerPhone,
        country: 'International',
        membershipTier: 'Pearl',
        totalBookings: 1,
        totalSpentThb: totals.grandTotal
      };
      setCustomers(prev => [newCust, ...prev]);
    } else {
      setCustomers(prev =>
        prev.map(c =>
          c.id === activeCustomer.id
            ? { ...c, totalBookings: c.totalBookings + 1, totalSpentThb: c.totalSpentThb + totals.grandTotal }
            : c
        )
      );
    }

    const newBooking: Booking = {
      id: newBookingId,
      bookingRef: newBookingRef,
      customerId: custId,
      customerName: bookingDraft.customerName,
      customerEmail: bookingDraft.customerEmail,
      customerPhone: bookingDraft.customerPhone,
      packageId: bookingDraft.packageId,
      yachtId: bookingDraft.yachtId,
      departureDate: bookingDraft.departureDate,
      timeSlot: bookingDraft.timeSlot,
      guestCount: bookingDraft.guestCount,
      selectedServices: bookingDraft.selectedServices,
      specialRequests: bookingDraft.specialRequests,
      promoCodeApplied: bookingDraft.appliedPromoCode || undefined,
      basePriceThb: totals.basePrice,
      servicesTotalThb: totals.servicesTotal,
      discountThb: totals.discountAmount,
      taxThb: totals.taxAmount,
      totalThb: totals.grandTotal,
      status: 'confirmed',
      paymentStatus: 'paid',
      paymentMethod: 'card',
      createdAt: new Date().toISOString()
    };

    const newPayment: PaymentRecord = {
      id: `pay-${Date.now().toString().slice(-6)}`,
      bookingId: newBookingId,
      bookingRef: newBookingRef,
      amountThb: totals.grandTotal,
      method: 'Online Payment (Authorized)',
      status: 'completed',
      transactionRef: `TXN-MV-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toISOString()
    };

    setBookings(prev => [newBooking, ...prev]);
    setPayments(prev => [newPayment, ...prev]);
    setConfirmedVoucherBooking(newBooking);

    return newBooking;
  };

  const updateBookingStatus = (bookingId: string, status: Booking['status']) => {
    setBookings(prev => prev.map(b => (b.id === bookingId ? { ...b, status } : b)));
  };

  const resetDatabase = () => {
    setCustomers(INITIAL_CUSTOMERS);
    setBookings(INITIAL_BOOKINGS);
    setPayments(INITIAL_PAYMENTS);
    localStorage.removeItem('mv_db_customers');
    localStorage.removeItem('mv_db_bookings');
    localStorage.removeItem('mv_db_payments');
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        activeSection,
        setActiveSection,
        activeCustomer,
        setActiveCustomer,
        yachts: YACHTS,
        packages: TOUR_PACKAGES,
        addons: PREMIUM_ADDONS,
        promotions: PROMOTIONS,
        membershipTiers: MEMBERSHIP_TIERS,
        customers,
        bookings,
        payments,
        bookingDraft,
        updateBookingDraft,
        selectPackageForBooking,
        selectYachtForBooking,
        toggleAddonService,
        applyPromoCodeToDraft,
        calculateBookingTotals,
        confirmBooking,
        previewYacht,
        setPreviewYacht,
        previewPackage,
        setPreviewPackage,
        confirmedVoucherBooking,
        setConfirmedVoucherBooking,
        isDatabaseDrawerOpen,
        setIsDatabaseDrawerOpen,
        updateBookingStatus,
        resetDatabase
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
