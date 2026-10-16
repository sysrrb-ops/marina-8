export type Language = 'th' | 'en';

export type AudienceCategory = 'couples' | 'families' | 'friends' | 'vip' | 'corporate' | 'international';

export interface Yacht {
  id: string;
  name: string;
  model: string;
  lengthFeet: number;
  capacityPax: number;
  cabins: number;
  crewCount: number;
  speedKnots: number;
  cruisingSpeed: number;
  builder: string;
  yearBuilt: number;
  amenities: {
    en: string[];
    th: string[];
  };
  description: {
    en: string;
    th: string;
  };
  image: string;
  tagline: {
    en: string;
    th: string;
  };
}

export interface TourPackage {
  id: string;
  title: {
    en: string;
    th: string;
  };
  subtitle: {
    en: string;
    th: string;
  };
  audienceCategory: AudienceCategory;
  audienceLabel: {
    en: string;
    th: string;
  };
  duration: {
    en: string;
    th: string;
  };
  durationHours: number;
  maxPax: number;
  startingPriceThb: number;
  features: {
    en: string[];
    th: string[];
  };
  itinerary: {
    time: string;
    activity: { en: string; th: string };
  }[];
  included: {
    en: string[];
    th: string[];
  };
  image: string;
  recommendedYachtId: string;
}

export interface PremiumAddon {
  id: string;
  name: {
    en: string;
    th: string;
  };
  category: string;
  priceMinThb: number;
  priceMaxThb: number;
  defaultPriceThb: number;
  unit: {
    en: string;
    th: string;
  };
  description: {
    en: string;
    th: string;
  };
  options?: {
    id: string;
    label: { en: string; th: string };
    extraPrice: number;
  }[];
  icon: string;
}

export interface Promotion {
  id: string;
  code: string;
  title: {
    en: string;
    th: string;
  };
  discountLabel: {
    en: string;
    th: string;
  };
  discountPercent: number;
  targetAudience: AudienceCategory;
  targetAudienceName: {
    en: string;
    th: string;
  };
  description: {
    en: string;
    th: string;
  };
  perks: {
    en: string[];
    th: string[];
  };
  validUntil: string;
  applicablePackageIds?: string[];
  minPax?: number;
}

export type MembershipTierName = 'Pearl' | 'Sapphire' | 'Royal Blue' | 'Gold Privilege';

export interface MembershipTier {
  name: MembershipTierName;
  condition: {
    en: string;
    th: string;
  };
  benefits: {
    en: string[];
    th: string[];
  };
  addonDiscountPercent: number;
  badgeColor: string;
  cardGradient: string;
}

export interface Customer {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  membershipTier: MembershipTierName;
  totalBookings: number;
  totalSpentThb: number;
}

export interface BookingServiceSelection {
  serviceId: string;
  serviceName: string;
  selectedOptionId?: string;
  priceThb: number;
}

export interface Booking {
  id: string;
  bookingRef: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  packageId: string;
  yachtId: string;
  departureDate: string;
  timeSlot: 'morning' | 'sunset' | 'fullday';
  guestCount: number;
  selectedServices: BookingServiceSelection[];
  specialRequests: string;
  promoCodeApplied?: string;
  basePriceThb: number;
  servicesTotalThb: number;
  discountThb: number;
  taxThb: number;
  totalThb: number;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  paymentStatus: 'paid' | 'deposit_paid' | 'pending';
  paymentMethod: 'card' | 'bank_transfer' | 'crypto';
  createdAt: string;
}

export interface PaymentRecord {
  id: string;
  bookingId: string;
  bookingRef: string;
  amountThb: number;
  method: string;
  status: 'completed' | 'pending' | 'refunded';
  transactionRef: string;
  createdAt: string;
}
