import { Yacht, TourPackage, PremiumAddon, Promotion, MembershipTier, Customer, Booking, PaymentRecord } from '../types';

export const YACHTS: Yacht[] = [
  {
    id: 'yacht-01',
    name: 'Valérielle Royale',
    model: 'Benetti Delfino 95 Superyacht',
    lengthFeet: 95,
    capacityPax: 12,
    cabins: 5,
    crewCount: 6,
    speedKnots: 20,
    cruisingSpeed: 14,
    builder: 'Benetti Shipyards (Italy)',
    yearBuilt: 2024,
    image: '/src/assets/images/yacht_hero_ocean_1792168303051.jpg',
    tagline: {
      en: 'The crown jewel of private marine luxury with Jacuzzi sundeck and private chef galley.',
      th: 'เรือยอร์ชเรือธงระดับซูเปอร์ยอร์ช 95 ฟุต พร้อมอ่างจากุซซี่บนดาดฟ้า และกัปตันลูกเรือระดับสากล'
    },
    amenities: {
      en: ['Jacuzzi on Flybridge', 'Master Suite with Sea Terrace', 'Stabilizers at Anchor & Underway', 'Al-fresco Dining Salon', 'High-Speed Water Toys Tender', 'Bang & Olufsen Marine Sound System'],
      th: ['จากุซซี่บนดาดฟ้า Flybridge', 'ห้องมาสเตอร์สูทพร้อมระเบียงชมวิว', 'ระบบกันโคลงอัจฉริยะลดการเมาเรือ', 'ห้องรับประทานอาหารหรู Al-fresco', 'เรือดิงกี้และอุปกรณ์ของเล่นทางน้ำ', 'ระบบเครื่องเสียงไฮเอนด์ Bang & Olufsen']
    },
    description: {
      en: 'Crafted with Italian naval excellence, Valérielle Royale offers five opulent staterooms, panoramic teak decks, and an experienced white-glove crew dedicated to bespoke voyages.',
      th: 'เรือยอร์ชหรูระดับพรีเมียมที่รังสรรค์ด้วยงานออกแบบระดับโลกจากอิตาลี เพียบพร้อมด้วย 5 ห้องพักหรู ดาดฟ้าไม้สักแท้ และลูกเรือมืออาชีพคอยดูแลทุกช่วงเวลา'
    }
  },
  {
    id: 'yacht-02',
    name: 'Serenity Lagoon',
    model: 'Lagoon 620 Luxury Sailing Catamaran',
    lengthFeet: 62,
    capacityPax: 10,
    cabins: 4,
    crewCount: 4,
    speedKnots: 14,
    cruisingSpeed: 10,
    builder: 'Lagoon Luxury Multihulls (France)',
    yearBuilt: 2023,
    image: '/src/assets/images/yacht_family_island_1792168303630.jpg',
    tagline: {
      en: 'Unrivaled twin-hull stability, shallow reef access, and spacious trampolines for sunbathing.',
      th: 'เรือคาตามารัน 2 ท้องระดับพรีเมียม ให้ความนิ่งและเสถียรสูงสุด เหมาะสำหรับครอบครัวและเด็ก'
    },
    amenities: {
      en: ['Dual Forward Sun Trampolines', 'Hydraulic Swimming Platform', 'Sub-surface Underwater LED Lighting', 'Transparent Sea Kayaks & SUPs', 'Expansive Aft Cockpit Lounge', 'Freshwater Sea-Deck Showers'],
      th: ['ตาข่ายนอนเล่นรับลมด้านหน้าลำเรือ', 'แพลตฟอร์มว่ายน้ำระบบไฮดรอลิกลงน้ำสะดวก', 'ไฟใต้น้ำ LED สำหรับชมสิ่งมีชีวิตยามค่ำ', 'เรือคายัคใสและแพดเดิลบอร์ดส่วนตัว', 'เลานจ์พักผ่อนกว้างขวางท้ายเรือ', 'ฝักบัวน้ำจืดบนเดคสำหรับล้างตัว']
    },
    description: {
      en: 'Engineered for tranquil family island hopping and smooth shallow water anchoring, Serenity Lagoon merges vast livable space with effortless ocean access.',
      th: 'ออกแบบมาเพื่อการเดินทางพักผ่อนกับครอบครัวอย่างนุ่มนวล เข้าถึงหาดทรายขาวและแนวปะการังน้ำตื้นได้อย่างปลอดภัยโดยไม่โยกเยก'
    }
  },
  {
    id: 'yacht-03',
    name: 'Azure Breeze',
    model: 'Princess F55 Flybridge Yacht',
    lengthFeet: 55,
    capacityPax: 8,
    cabins: 3,
    crewCount: 3,
    speedKnots: 32,
    cruisingSpeed: 24,
    builder: 'Princess Yachts (UK)',
    yearBuilt: 2024,
    image: '/src/assets/images/yacht_sunset_romantic_1792168303007.jpg',
    tagline: {
      en: 'Sleek British performance yacht tailored for sunset champagne cruises and romantic celebrations.',
      th: 'เรือยอร์ชสปอร์ตฟลายบริดจ์สไตล์อังกฤษ คล่องตัว หรูหรา เหมาะสำหรับคู่รักและการชมพระอาทิตย์ตก'
    },
    amenities: {
      en: ['Sunset Viewing Upper Bridge', 'Romantic Evening LED Candle Ambience', 'Champagne Bar & Chiller', 'Bose Surround Sound', 'Teak Swim Deck', 'Full Climate Control Salon'],
      th: ['จุดชมพระอาทิตย์ตกบนฟลายบริดจ์ 360 องศา', 'การจัดไฟแอมเบียนซ์โรแมนติกยามค่ำคืน', 'แชมเปญบาร์และตู้แช่ไวน์ระดับพรีเมียม', 'ระบบเสียงรอบทิศทาง Bose', 'เดคไม้สักท้ายเรือ', 'ห้องโดยสารปรับอากาศเย็นสบาย']
    },
    description: {
      en: 'The quintessential yacht for couples and intimate escapes. Glides through coastal waves with graceful power, setting the scene for unforgettable romantic milestones.',
      th: 'ตัวแทนแห่งความโรแมนติกที่สมบูรณ์แบบ วิ่งบนเกลียวคลื่นอย่างนุ่มนวล พร้อมสร้างความทรงจำที่น่าประทับใจในวันครบรอบหรือช่วงเวลาพิเศษ'
    }
  },
  {
    id: 'yacht-04',
    name: 'Horizon Sovereign',
    model: 'Sunseeker Manhattan 68 VIP Edition',
    lengthFeet: 68,
    capacityPax: 12,
    cabins: 4,
    crewCount: 4,
    speedKnots: 28,
    cruisingSpeed: 20,
    builder: 'Sunseeker International (UK)',
    yearBuilt: 2023,
    image: '/src/assets/images/yacht_corporate_lifestyle_1792168303626.jpg',
    tagline: {
      en: 'Distinguished executive yacht with boardroom-level salon, audio-visual display, and social lounge.',
      th: 'เรือยอร์ชผู้บริหารระดับพรีเมียม รองรับการประชุมธุรกิจ งานเลี้ยงองค์กร และกลุ่มเพื่อนสนิท'
    },
    amenities: {
      en: ['Executive Presentation TV & Wi-Fi', 'Expansive Wet Bar & Barbecue Station', 'Submersible Beach Club Platform', 'Bespoke Corporate Flag Mounts', 'Multiple Social Zones', 'Seabob Underwater Jet Escorts'],
      th: ['จอพรีเซนต์ระดับผู้บริหารและ High-Speed Wi-Fi', 'เว็ทบาร์เครื่องดื่มและสเตชั่นบาร์บีคิว', 'บีชคลับท้ายเรือปรับระดับลงน้ำ', 'เสาติดธงและสัญลักษณ์องค์กรส่วนตัว', 'พื้นที่สังสรรค์แยกสัดส่วนชัดเจน', 'เครื่องเล่นเจ็ทสกีดำน้ำ Seabob']
    },
    description: {
      en: 'Favored by Fortune 500 executives and discerning event hosts, Horizon Sovereign provides an immaculate venue for networking, board retreats, and team milestones.',
      th: 'ตอบโจทย์ลูกค้าองค์กรและผู้บริหารที่ต้องการสร้างความสัมพันธ์ทางธุรกิจ หรือจัดงานเฉลิมฉลองความสำเร็จของทีมงานในบรรยากาศลักชัวรีกลางทะเล'
    }
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'pkg-01',
    title: {
      en: 'Azure Escape',
      th: 'Azure Escape'
    },
    subtitle: {
      en: 'HALF-DAY ISLAND EXPERIENCE',
      th: 'ประสบการณ์ล่องเรือครึ่งวันสู่เกาะสวรรค์'
    },
    audienceCategory: 'friends',
    audienceLabel: {
      en: 'General travelers, friends, limited time',
      th: 'นักท่องเที่ยวทั่วไป กลุ่มเพื่อน และผู้ที่มีเวลาจำกัด'
    },
    duration: {
      en: '4 Hours (Morning or Afternoon)',
      th: '4 ชั่วโมง (ช่วงเช้า 09:00 หรือช่วงบ่าย 14:00)'
    },
    durationHours: 4,
    maxPax: 6,
    startingPriceThb: 18900,
    image: '/src/assets/images/yacht_hero_ocean_1792168303051.jpg',
    recommendedYachtId: 'yacht-03',
    features: {
      en: [
        'Private 4-hour yacht charter with captain & dedicated crew',
        'Scenic cruising past secluded emerald lagoons and limestone cliffs',
        'Swimming and snorkeling in crystal-clear waters',
        'Complimentary chilled drinking water, seasonal fresh fruit platter & soft drinks',
        'Certified premium life vests and sanitized snorkeling gear included'
      ],
      th: [
        'เช่าเรือยอร์ชส่วนตัว 4 ชั่วโมง พร้อมกัปตันและลูกเรือดูแลอย่างใกล้ชิด',
        'ล่องเรือชมวิวทะเล เกาะแก่ง และเวิ้งอ่าวสีมรกต',
        'จุดแวะเล่นน้ำ ว่ายน้ำ และดำน้ำตื้นชมปะการัง',
        'น้ำดื่มเย็น ผลไม้สดตามฤดูกาล และเครื่องดื่มต้อนรับ',
        'เสื้อชูชีพมาตรฐานสากลและอุปกรณ์ดำน้ำตื้นครบครัน'
      ]
    },
    itinerary: [
      { time: '00:00', activity: { en: 'Welcome aboard at Private Marina Pier with cold scented towel & tropical elixir', th: 'ต้อนรับขึ้นเรือ ณ ท่าเรือส่วนตัว พร้อมผ้าเย็นและเวลคัมดริ้งก์' } },
      { time: '00:45', activity: { en: 'Cruise past scenic limestone islands, leisure cruising with ocean breezes', th: 'ล่องเรือชมทัศนียภาพเกาะหินปูนและอ่าวสีมรกต' } },
      { time: '01:30', activity: { en: 'Anchor at tranquil cove for snorkeling, paddleboarding & swimming', th: 'ทอดสมอ ณ อ่าวสงบ ดำน้ำชมปะการัง พายเรือคายัค และว่ายน้ำ' } },
      { time: '03:15', activity: { en: 'Chilled tropical fruit platter served on sundeck', th: 'เสิร์ฟชุดผลไม้สดริมดาดฟ้าพักผ่อน' } },
      { time: '04:00', activity: { en: 'Graceful return cruise to the marina berth', th: 'เดินทางกลับสู่ท่าเรืออย่างปลอดภัยและน่าประทับใจ' } }
    ],
    included: {
      en: ['Private Yacht & Fuel', 'Certified Captain & Crew', 'Snorkeling Equipment', 'Fresh Tropical Fruit Platter', 'Soft Drinks & Ice', 'Comprehensive Marine Passenger Insurance'],
      th: ['เรือยอร์ชส่วนตัวและน้ำมันตลอดเส้นทาง', 'กัปตันและลูกเรือมืออาชีพ', 'อุปกรณ์ดำน้ำตื้นคุณภาพสูง', 'ชุดผลไม้สดตามฤดูกาล', 'เครื่องดื่มซอฟต์ดริ้งก์และน้ำดื่ม', 'ประกันภัยอุบัติเหตุทางทะเลคุ้มครองผู้โดยสาร']
    }
  },
  {
    id: 'pkg-02',
    title: {
      en: 'Azure Romance',
      th: 'Azure Romance'
    },
    subtitle: {
      en: 'PRIVATE COUPLE & SUNSET CRUISE',
      th: 'ล่องเรือส่วนตัวชมพระอาทิตย์ตกสุดโรแมนติก'
    },
    audienceCategory: 'couples',
    audienceLabel: {
      en: 'Couples, Honeymooners, Anniversaries & Proposals',
      th: 'คู่รัก คู่ฮันนีมูน วันครบรอบ และเซอร์ไพรส์ขอแต่งงาน'
    },
    duration: {
      en: 'Approx. 5 Hours (Sunset Golden Hour)',
      th: 'ประมาณ 5 ชั่วโมง (ช่วงเวลาพระอาทิตย์ตก 15:30 - 20:30)'
    },
    durationHours: 5,
    maxPax: 2,
    startingPriceThb: 29900,
    image: '/src/assets/images/yacht_sunset_romantic_1792168303007.jpg',
    recommendedYachtId: 'yacht-03',
    features: {
      en: [
        'Exclusive private couple cruise for 5 blissful hours',
        'Intimate yacht styling with fresh floral arrangements and warm LED candle lanterns',
        'Private candlelit dinner for two on the aft deck with welcome sparkling elixir',
        'Prime positioning at prime sunset observation coordinates with music curation',
        'Optional secret proposal planning, floral arch, and professional portrait photographer'
      ],
      th: [
        'ล่องเรือส่วนตัวประมาณ 5 ชั่วโมง ออกแบบเพื่อสองท่านโดยเฉพาะ',
        'ตกแต่งเรือด้วยช่อดอกไม้สด ไฟประดับ และเทียน LED บรรยากาศสุดโรแมนติก',
        'ดินเนอร์ใต้แสงดาวสำหรับสองท่าน พร้อมเครื่องดื่มต้อนรับสุดหรู',
        'ลอยลำชมพระอาทิตย์ตกดิน ณ จุดชมวิวที่ดีที่สุดบนท้องทะเล',
        'สามารถเพิ่มบริการเซอร์ไพรส์ขอแต่งงาน ดอกไม้พิเศษ หรือช่างภาพมืออาชีพได้'
      ]
    },
    itinerary: [
      { time: '15:30', activity: { en: 'VIP Marina welcome with chilled sparkling vintage and rose petal deck entry', th: 'ต้อนรับขึ้นเรือพร้อมเครื่องดื่มสปาร์คกลิ้งและทางเดินกลีบกุหลาบ' } },
      { time: '16:30', activity: { en: 'Scenic romantic coastal voyage along turquoise cape waters', th: 'ล่องเรือชมทัศนียภาพชายฝั่งอันงดงามและแหลมวิวทะเล' } },
      { time: '17:45', activity: { en: 'Sunset positioning; golden hour couple toast as the sun dips below horizon', th: 'ทอดสมอ ณ จุดชมพระอาทิตย์ตกดิน ถ่ายภาพคู่และชนแก้วฉลอง' } },
      { time: '18:45', activity: { en: 'Three-course romantic candlelit dinner served under starlight on aft deck', th: 'เสิร์ฟมื้อค่ำ 3 คอร์สใต้แสงดาวและเทียนอันอบอุ่นท้ายเรือ' } },
      { time: '20:30', activity: { en: 'Gentle night cruise under the moonlit sky back to the pier', th: 'ล่องเรือกลับสู่ท่าเทียบเรืออย่างผ่อนคลาย' } }
    ],
    included: {
      en: ['5-Hour Private Yacht & Fuel', 'Floral & Romantic LED Styling', '3-Course Sunset Dinner for Two', 'Welcome Chilled Sparkling Beverage', 'Private Crew & Host', 'Romantic Music Sound System', 'Marine Insurance'],
      th: ['เรือยอร์ชส่วนตัว 5 ชม. พร้อมน้ำมัน', 'การตกแต่งดอกไม้สดและเทียน LED โรแมนติก', 'ดินเนอร์มื้อค่ำ 3 คอร์สสำหรับ 2 ท่าน', 'เครื่องดื่มต้อนรับระดับพรีเมียม', 'กัปตันและลูกเรือผู้ดูแลส่วนตัว', 'ระบบเครื่องเสียงเปิดเพลงโรแมนติก', 'ประกันภัยทางทะเล']
    }
  },
  {
    id: 'pkg-03',
    title: {
      en: 'Valérielle Family Voyage',
      th: 'Valérielle Family Voyage'
    },
    subtitle: {
      en: 'FAMILY ISLAND ADVENTURE',
      th: 'การผจญภัยทางทะเลแสนอบอุ่นสำหรับครอบครัว'
    },
    audienceCategory: 'families',
    audienceLabel: {
      en: 'Families with children, multi-generation groups',
      th: 'ครอบครัวที่มีเด็ก ผู้ปกครอง และครอบครัวหลายช่วงวัย'
    },
    duration: {
      en: '6–8 Hours (Flexible Full Day)',
      th: '6–8 ชั่วโมง (เลือกปรับเวลาได้ตามความสะดวกของครอบครัว)'
    },
    durationHours: 7,
    maxPax: 8,
    startingPriceThb: 39900,
    image: '/src/assets/images/yacht_family_island_1792168303630.jpg',
    recommendedYachtId: 'yacht-02',
    features: {
      en: [
        'Generous 6–8 hour family island escape aboard high-stability luxury catamaran',
        'Custom age-appropriate water activities (transparent kayak, paddleboard, floaties)',
        'Full gourmet family lunch banquet, kid-friendly treats, and seasonal fruit',
        'Certified multi-size life vests tailored for children and seniors with lifeguard trained crew',
        'Spacious indoor air-conditioned salon for infant/senior rest between stops'
      ],
      th: [
        'ทริปเรือยอร์ช 6–8 ชั่วโมง บนเรือคาตามารันความเสถียรสูง ไม่โยกเยก',
        'กิจกรรมทางน้ำที่ปลอดภัยสำหรับเด็ก (เรือคายัคใส แพดเดิลบอร์ด ห่วงยางแฟนซี)',
        'อาหารกลางวันสำหรับครอบครัว ขนมสำหรับเด็ก และผลไม้สดไม่อั้น',
        'เสื้อชูชีพครบทุกขนาดทั้งเด็กเล็ก เด็กโต และผู้สูงอายุ พร้อมลูกเรือดูแลความปลอดภัย',
        'ห้องซาลอนปรับอากาศเย็นสบายสำหรับพักผ่อนระหว่างวัน'
      ]
    },
    itinerary: [
      { time: '09:30', activity: { en: 'Warm marina welcome with family briefing and safety orientation', th: 'ต้อนรับครอบครัวและแนะนำระบบความปลอดภัยอย่างอบอุ่น' } },
      { time: '10:30', activity: { en: 'Arrival at calm shallow sandbar; paddleboarding and transparent kayaking', th: 'แวะอ่าวทรายขาวน้ำตื้น เด็กๆ พายเรือคายัคใสและเล่นน้ำอย่างปลอดภัย' } },
      { time: '12:30', activity: { en: 'Sumptuous family seafood and international lunch buffet onboard', th: 'รับประทานอาหารกลางวันบุฟเฟต์ซีฟู้ดและเมนูเด็กบนเรือ' } },
      { time: '14:00', activity: { en: 'Guided coral reef snorkeling with kid-friendly marine life guide', th: 'ดำน้ำตื้นชมฝูงปลาและปะการังพร้อมไกด์ดูแลใกล้ชิด' } },
      { time: '16:30', activity: { en: 'Relaxing return sail with sunset afternoon refreshments', th: 'ล่องเรือกลับพร้อมของว่างยามบ่ายและภาพถ่ายครอบครัว' } }
    ],
    included: {
      en: ['6–8 Hours Catamaran Charter', 'Full Family Lunch & Afternoon Snacks', 'Child & Adult Snorkeling Gear', 'Transparent Kayaks & SUP Boards', 'Inflatable Water Loungers', 'First Aid & Certified Lifeguard Crew'],
      th: ['เรือคาตามารัน 6–8 ชม. พร้อมน้ำมัน', 'อาหารกลางวันครอบครัวและขนมของว่าง', 'อุปกรณ์ดำน้ำตื้นสำหรับเด็กและผู้ใหญ่', 'เรือคายัคใสและแพดเดิลบอร์ด', 'ห่วงยางและเบาะลอยน้ำ', 'ลูกเรือผ่านการอบรมกู้ภัยทางน้ำและปฐมพยาบาล']
    }
  },
  {
    id: 'pkg-04',
    title: {
      en: 'Prestige Island Retreat',
      th: 'Prestige Island Retreat'
    },
    subtitle: {
      en: 'FULL-DAY LUXURY EXPERIENCE',
      th: 'ทริปพักผ่อนทางทะเลระดับอัลตร้าลักชัวรีเต็มวัน'
    },
    audienceCategory: 'vip',
    audienceLabel: {
      en: 'VIP & Luxury Travelers, Executives, High Privacy',
      th: 'นักท่องเที่ยวระดับพรีเมียม ผู้บริหาร และลูกค้าที่ต้องการความเป็นส่วนตัวสูง'
    },
    duration: {
      en: '8 Hours Full Day VIP',
      th: '8 ชั่วโมงเต็มวัน ระดับ VIP Exclusive'
    },
    durationHours: 8,
    maxPax: 8,
    startingPriceThb: 69900,
    image: '/src/assets/images/yacht_hero_ocean_1792168303051.jpg',
    recommendedYachtId: 'yacht-01',
    features: {
      en: [
        'Comprehensive 8-hour bespoke superyacht charter with captain and 6 dedicated crew',
        'Personal VIP Travel Concierge handling route customization and island permits',
        'Curated pre-selected fine dining luncheon with sommelier beverage pairings',
        'Tailored route selection with private island anchorage and beach club tender drops',
        'Complimentary luxury private hotel transfers (Mercedes / Alphard) and drone capture'
      ],
      th: [
        'เช่าเรือซูเปอร์ยอร์ชส่วนตัว 8 ชั่วโมง พร้อมกัปตันและลูกเรือดูแล 6 ท่าน',
        'บริการผู้ประสานงานการเดินทางส่วนบุคคล (VIP Concierge) วางแผนเส้นทางเฉพาะตัว',
        'อาหารพรีเมียมและเมนูไฟน์ไดนิ่งที่คัดสรรล่วงหน้า พร้อมเครื่องดื่มชั้นดี',
        'เลือกจุดแวะพัก เกาะส่วนตัว และกิจกรรมตามความต้องการของลูกค้า',
        'รวมบริการรถตู้หรูรับส่งจากโรงแรม (Alphard / Mercedes) และการบันทึกภาพ'
      ]
    },
    itinerary: [
      { time: '09:00', activity: { en: 'Luxury Alphard transfer picks you up from private villa/hotel lobby', th: 'รถลีมูซีนหรูรับจากที่พักสู่ท่าเทียบเรือส่วนตัว' } },
      { time: '09:45', activity: { en: 'Red carpet boarding with vintage champagne greeting & concierge introduction', th: 'ต้อนรับขึ้นเรือด้วยแชมเปญชั้นเลิศและผู้ประสานงานส่วนตัว' } },
      { time: '11:15', activity: { en: 'Exclusive private island bay arrival; tender transfer to secluded pristine beach', th: 'เดินทางถึงอ่าวส่วนตัว นั่งเรือดิงกี้ขึ้นหาดทรายขาวบริสุทธิ์' } },
      { time: '13:00', activity: { en: 'Chef-prepared 5-course lobster & Wagyu fine dining in the air-conditioned salon', th: 'เสิร์ฟมื้อกลางวัน 5 คอร์ส ล็อบสเตอร์และเนื้อวากิวโดยเชฟส่วนตัว' } },
      { time: '15:00', activity: { en: 'Seabob underwater scooter exploration & sundeck Jacuzzi relaxation', th: 'เพลิดเพลินกับสกู๊ตเตอร์ดำน้ำ Seabob และอ่างจากุซซี่บนดาดฟ้า' } },
      { time: '17:00', activity: { en: 'Golden sunset cruise return to marina and chauffeured hotel drop-off', th: 'ล่องเรือกลับพร้อมชมพระอาทิตย์ตก รถลีมูซีนส่งกลับที่พัก' } }
    ],
    included: {
      en: ['8-Hour Superyacht Charter', 'Personal Concierge Officer', '5-Course Fine Dining Menu', 'Private Alphard Pier Transfers', 'Full Water Toy Suite & Seabob', 'Complimentary Drone Highlights Video'],
      th: ['เช่าเรือซูเปอร์ยอร์ช 8 ชม. พร้อมน้ำมัน', 'ผู้ประสานงานส่วนตัวประจำทริป', 'อาหารไฟน์ไดนิ่ง 5 คอร์สปรุงสด', 'รถรับส่งโรงแรมระดับ VIP', 'อุปกรณ์ของเล่นทางน้ำและ Seabob', 'วิดีโอไฮไลท์ทริปบันทึกด้วยโดรน']
    }
  },
  {
    id: 'pkg-05',
    title: {
      en: 'Blue Horizon Corporate',
      th: 'Blue Horizon Corporate'
    },
    subtitle: {
      en: 'CORPORATE & TEAM EXPERIENCE',
      th: 'กิจกรรมล่องเรือระดับองค์กรและการสร้างสัมพันธ์ทีม'
    },
    audienceCategory: 'corporate',
    audienceLabel: {
      en: 'Companies, Executive retreats, Client entertainment',
      th: 'บริษัท องค์กร ทีมงาน และธุรกิจที่ต้องการสร้างความสัมพันธ์กับลูกค้า'
    },
    duration: {
      en: 'Full Day Charter (up to 8 Hours)',
      th: 'เต็มวัน (สูงสุด 8 ชั่วโมง ปรับตามกำหนดการบริษัท)'
    },
    durationHours: 8,
    maxPax: 12,
    startingPriceThb: 59900,
    image: '/src/assets/images/yacht_corporate_lifestyle_1792168303626.jpg',
    recommendedYachtId: 'yacht-04',
    features: {
      en: [
        'Full private charter configured for corporate executive retreats and client engagement',
        'Facilitated coastal team building or relaxed executive networking lounge setup',
        'Gourmet lunch buffet, continuous artisanal coffee, and signature sunset cocktail hour',
        'Custom corporate branding options (corporate pennant, branded napkins, photo backdrop)',
        'Professional photographer included for PR, social media, and internal communications'
      ],
      th: [
        'เช่าเรือสำหรับกิจกรรมบริษัท ทริปพนักงาน หรือรับรองลูกค้าคนสำคัญ',
        'จัดกิจกรรม Team Building หรือพื้นที่ประชุมสัมมนานอกสถานที่แบบผ่อนคลาย',
        'อาหารกลางวันบุฟเฟต์ เครื่องดื่มต้อนรับ และค็อกเทลช่วงพระอาทิตย์ตก',
        'ตกแต่งเรือด้วยสีและโลโก้องค์กรตามข้อตกลง (ป้ายต้อนรับ ธง และแบ็คดรอป)',
        'บริการถ่ายภาพและบันทึกวิดีโอตลอดงานสำหรับใช้ในงานประชาสัมพันธ์'
      ]
    },
    itinerary: [
      { time: '09:00', activity: { en: 'Executive group arrival, branded welcome banner and fresh barista coffee', th: 'ต้อนรับคณะผู้บริหาร พร้อมป้ายต้อนรับแบรนด์องค์กรและกาแฟสด' } },
      { time: '10:00', activity: { en: 'Morning team synergy workshop / executive strategy session in main salon', th: 'การบรรยายกลยุทธ์หรือเวิร์กช็อปผู้บริหารในห้องซาลอนปรับอากาศ' } },
      { time: '12:30', activity: { en: 'Al-fresco gourmet luncheon anchored off picturesque emerald archipelago', th: 'รับประทานอาหารกลางวัน Al-fresco ชมวิวหมู่เกาะ' } },
      { time: '14:30', activity: { en: 'Friendly team water rally (kayak races, paddleboard challenge, swimming)', th: 'กิจกรรมกระชับมิตรทางน้ำ พายเรือคายัค และว่ายน้ำผ่อนคลาย' } },
      { time: '16:30', activity: { en: 'Executive sunset toast, signature cocktails, and group milestone celebration', th: 'ฉลองความสำเร็จของทีมงานพร้อมค็อกเทลและชมวิวพระอาทิตย์ตก' } },
      { time: '17:30', activity: { en: 'Docking and corporate photo delivery transfer', th: 'เดินทางกลับสู่ท่าเรือพร้อมส่งมอบไฟล์ภาพกิจกรรม' } }
    ],
    included: {
      en: ['Full Day Yacht Charter', 'Gourmet Executive Lunch Buffet', 'Sunset Cocktails & Canapés', 'Custom Corporate Logo Displays', 'Onboard AV Presentation Gear', 'Corporate Event Photographer & Video'],
      th: ['เช่าเรือยอร์ชเต็มวันพร้อมน้ำมัน', 'บุฟเฟต์อาหารกลางวันระดับผู้บริหาร', 'ค็อกเทลและคานาเป้ช่วงพระอาทิตย์ตก', 'ตกแต่งจุดวางโลโก้และป้ายองค์กร', 'อุปกรณ์โปรเจ็กเตอร์และเครื่องเสียงจัดประชุม', 'ช่างภาพมืออาชีพตลอดงาน']
    }
  }
];

export const PREMIUM_ADDONS: PremiumAddon[] = [
  {
    id: 'addon-01',
    name: {
      en: 'Ocean Adventure Suite',
      th: 'กิจกรรมผจญภัยทางทะเล (Ocean Adventure)'
    },
    category: 'activities',
    priceMinThb: 1500,
    priceMaxThb: 5000,
    defaultPriceThb: 2500,
    unit: {
      en: 'per package / trip',
      th: 'ต่อทริป'
    },
    icon: 'Waves',
    description: {
      en: 'Crystal-clear transparent kayaks, premium paddleboards, underwater sea-scooters, and inflatable water loungers for maximum fun.',
      th: 'เรือคายัคใสถ่ายรูปสวย แพดเดิลบอร์ด สกู๊ตเตอร์ดำน้ำ และอุปกรณ์เล่นน้ำครบชุด เหมาะสำหรับครอบครัวและกลุ่มเพื่อน'
    },
    options: [
      { id: 'opt-sup-kayak', label: { en: '2x Transparent Kayaks + 2x SUP Paddleboards', th: 'เรือคายัคใส 2 ลำ + ซับบอร์ด 2 แผ่น' }, extraPrice: 0 },
      { id: 'opt-seabob', label: { en: 'Add Seabob Underwater Jet Scooter (1 unit)', th: 'เพิ่มเจ็ทสกู๊ตเตอร์ดำน้ำ Seabob 1 เครื่อง' }, extraPrice: 2500 },
      { id: 'opt-full-toys', label: { en: 'Complete Water Park (Kayaks, SUP, Seabob & Floating Lounge)', th: 'ชุดเต็มพิกัด: คายัคใส ซับบอร์ด ซีบ็อบ และเบาะลอยน้ำยักษ์' }, extraPrice: 4500 }
    ]
  },
  {
    id: 'addon-02',
    name: {
      en: 'Private Chef & Fine Dining',
      th: 'เชฟส่วนตัวและไฟน์ไดนิ่ง (Private Chef & Fine Dining)'
    },
    category: 'dining',
    priceMinThb: 4500,
    priceMaxThb: 12000,
    defaultPriceThb: 6500,
    unit: {
      en: 'per group',
      th: 'ต่อกลุ่ม'
    },
    icon: 'UtensilsCrossed',
    description: {
      en: 'Dedicated onboard private chef preparing live Andaman seafood BBQ, fresh rock lobsters, Wagyu steaks, or customized dietary tasting menus.',
      th: 'เชฟส่วนตัวปรุงสดบนเรือ เสิร์ฟซีฟู้ดบาร์บีคิว กุ้งมังกร สเต็กวากิว หรืออาหารมังสวิรัติที่ออกแบบตามใจคุณ'
    },
    options: [
      { id: 'opt-seafood-bbq', label: { en: 'Andaman Seafood Feast (Rock Lobster, Prawns, Sea Bass)', th: 'เซตซีฟู้ดบาร์บีคิวอันดามัน (กุ้งมังกร กุ้งลายเสือ ปลากะพงสด)' }, extraPrice: 0 },
      { id: 'opt-surf-turf', label: { en: 'Surf & Turf Deluxe (Wagyu Ribeye & Andaman Lobster)', th: 'เซตดีลักซ์ วากิวริบอายคู่กับกุ้งมังกรอันดามัน' }, extraPrice: 3000 },
      { id: 'opt-michelin-tasting', label: { en: '5-Course Degustation Menu with Wine/Champagne Pairing', th: 'คอร์สไฟน์ไดนิ่ง 5 คอร์ส พร้อมไวน์และแชมเปญแพริ่ง' }, extraPrice: 5500 }
    ]
  },
  {
    id: 'addon-03',
    name: {
      en: 'Luxury Photo & Drone Video',
      th: 'ช่างภาพมืออาชีพและโดรน (Luxury Photo & Video)'
    },
    category: 'media',
    priceMinThb: 3500,
    priceMaxThb: 9000,
    defaultPriceThb: 4500,
    unit: {
      en: 'per session',
      th: 'ต่อครั้ง'
    },
    icon: 'Camera',
    description: {
      en: 'Professional nautical photographer with 4K drone cinematography. Includes color-graded digital gallery and short reels for social media.',
      th: 'ช่างภาพมืออาชีพพร้อมโดรน 4K เก็บทุกมุมสวยบนเรือยอร์ชและกลางทะเล ได้ไฟล์ภาพแต่งสีพรีเมียมและคลิปสั้นลงโซเชียลมีเดีย'
    },
    options: [
      { id: 'opt-photo-drone-std', label: { en: '30 Edited Photos + Drone Highlights (Full Trip)', th: 'ภาพถ่ายแต่งสี 30 ภาพ + วิดีโอไฮไลต์โดรนตลอดทริป' }, extraPrice: 0 },
      { id: 'opt-photo-drone-vip', label: { en: '60+ Edited Photos, 4K Drone Reel + Instagram Edits', th: 'ภาพถ่าย 60+ ภาพ วิดีโอ 4K และตัดต่อคลิป Reels/TikTok พร้อมโพสต์' }, extraPrice: 4000 }
    ]
  },
  {
    id: 'addon-04',
    name: {
      en: 'Celebration Styling & Flowers',
      th: 'ตกแต่งเรือสำหรับโอกาสพิเศษ (Celebration Styling)'
    },
    category: 'styling',
    priceMinThb: 2500,
    priceMaxThb: 10000,
    defaultPriceThb: 3500,
    unit: {
      en: 'per event',
      th: 'ต่องาน'
    },
    icon: 'Sparkles',
    description: {
      en: 'Custom floral archways, personalized marquee signs, handcrafted celebration cake, romantic LED candles, and champagne ice buckets.',
      th: 'จัดซุ้มดอกไม้ ป้ายข้อความสั่งทำ เค้กวันเกิด เทียน LED โรแมนติก เหมาะสำหรับวันเกิด วันครบรอบ หรือขอแต่งงาน'
    },
    options: [
      { id: 'opt-birthday-anniv', label: { en: 'Birthday / Anniversary Floral & Custom Cake Styling', th: 'ตกแต่งวันเกิด/วันครบรอบ ซุ้มดอกไม้และเค้กพิเศษ' }, extraPrice: 0 },
      { id: 'opt-proposal-grand', label: { en: 'Grand Marriage Proposal Arch, 99 Roses & Red Carpet Deck', th: 'จัดเต็มเซอร์ไพรส์ขอแต่งงาน ซุ้มดอกไม้อลังการ กุหลาบ 99 ดอก' }, extraPrice: 5000 }
    ]
  },
  {
    id: 'addon-05',
    name: {
      en: 'VIP Transfer & Butler Concierge',
      th: 'รถลีมูซีนรับส่งและบัตเลอร์ (VIP Transfer & Concierge)'
    },
    category: 'logistics',
    priceMinThb: 2000,
    priceMaxThb: 8000,
    defaultPriceThb: 2800,
    unit: {
      en: 'per vehicle / round-trip',
      th: 'ต่อคัน / ไป-กลับ'
    },
    icon: 'Car',
    description: {
      en: 'Door-to-marina chauffeured luxury transfer (Toyota Alphard VIP or Mercedes-Benz) and dedicated English/Thai speaking dock concierge.',
      th: 'รถรับส่งจากโรงแรมถึงท่าเทียบเรือ (Toyota Alphard หรือ Mercedes-Benz) พร้อมเจ้าหน้าที่อำนวยความสะดวกระดับ VIP'
    },
    options: [
      { id: 'opt-transfer-alphard', label: { en: 'Luxury Toyota Alphard Round-Trip Transfer', th: 'รถตู้หรู Toyota Alphard VIP ไป-กลับ ท่าเรือ' }, extraPrice: 0 },
      { id: 'opt-transfer-mercedes', label: { en: 'Mercedes-Benz S-Class Sedan Round-Trip Transfer', th: 'รถเก๋งหรู Mercedes-Benz S-Class ไป-กลับ ท่าเรือ' }, extraPrice: 2000 },
      { id: 'opt-transfer-concierge-combo', label: { en: 'Alphard + Dedicated Island Butler Host for the Day', th: 'Alphard ไป-กลับ พร้อมบัตเลอร์ส่วนตัวดูแลตลอดทั้งวัน' }, extraPrice: 4500 }
    ]
  }
];

export const PROMOTIONS: Promotion[] = [
  {
    id: 'promo-01',
    code: 'ROMANTIC10',
    title: {
      en: 'Romantic Escape',
      th: 'Romantic Escape — ส่วนลดคู่รัก'
    },
    discountLabel: {
      en: '10% OFF',
      th: 'ลด 10%'
    },
    discountPercent: 10,
    targetAudience: 'couples',
    targetAudienceName: {
      en: 'Couples & Honeymooners',
      th: 'คู่รักและคู่ฮันนีมูน'
    },
    description: {
      en: 'Book Azure Romance and receive 10% discount on total charter plus complimentary floral deck enhancements.',
      th: 'จองแพ็กเกจ Azure Romance รับส่วนลดค่าเช่าเรือ 10% พร้อมรับการตกแต่งดอกไม้สดหรือภาพถ่ายดิจิทัล 5 ภาพฟรี'
    },
    perks: {
      en: ['10% discount on Azure Romance charter', 'Complimentary fresh flower arrangement', '5 High-resolution sunset couple digital portraits'],
      th: ['ส่วนลด 10% สำหรับแพ็กเกจ Azure Romance', 'ฟรี การจัดดอกไม้สดตกแต่งเรือ', 'ฟรี ภาพถ่ายดิจิทัลที่ระลึก 5 ภาพ']
    },
    validUntil: '2026-12-31',
    applicablePackageIds: ['pkg-02']
  },
  {
    id: 'promo-02',
    code: 'FAMILYVOYAGE',
    title: {
      en: 'Family Ocean Rewards',
      th: 'Family Ocean Rewards — สิทธิพิเศษครอบครัว'
    },
    discountLabel: {
      en: 'SPECIAL PERKS',
      th: 'รับสิทธิพิเศษ'
    },
    discountPercent: 5,
    targetAudience: 'families',
    targetAudienceName: {
      en: 'Families with Children',
      th: 'ครอบครัวและเด็ก'
    },
    description: {
      en: 'Complimentary deluxe family fruit tower and 5% off the total charter booking with free water toys.',
      th: 'รับชุดผลไม้และของว่างสำหรับครอบครัว พร้อมส่วนลด 5% และอุปกรณ์ของเล่นทางน้ำสำหรับเด็กฟรี'
    },
    perks: {
      en: ['5% overall charter discount', 'Complimentary organic fruit tower & artisan fruit juice', 'Free snorkel gear and inflatable water toys for kids'],
      th: ['ส่วนลด 5% สำหรับแพ็กเกจครอบครัว', 'ชุดผลไม้และน้ำผลไม้สดพรีเมียม', 'อุปกรณ์ดำน้ำและของเล่นทางน้ำสำหรับเด็กฟรี']
    },
    validUntil: '2026-12-31',
    applicablePackageIds: ['pkg-03']
  },
  {
    id: 'promo-03',
    code: 'SAILWITHFRIENDS',
    title: {
      en: 'Sail Together',
      th: 'Sail Together — ทริปกลุ่มเพื่อน'
    },
    discountLabel: {
      en: '8% OFF',
      th: 'ลด 8%'
    },
    discountPercent: 8,
    targetAudience: 'friends',
    targetAudienceName: {
      en: 'Friends & Groups',
      th: 'กลุ่มเพื่อนและสังสรรค์'
    },
    description: {
      en: 'Enjoy 8% discount for groups of 6 or more guests, or receive group photography package perks.',
      th: 'สำหรับการจองตั้งแต่ 6 คนขึ้นไป รับส่วนลดทันที 8% พร้อมสิทธิ์ซื้อแพ็กเกจถ่ายภาพกลุ่มในราคาพิเศษ'
    },
    perks: {
      en: ['8% discount on total charter', 'Complimentary welcome snack platter', 'Discounted professional group photoshoot'],
      th: ['ส่วนลด 8% เมื่อมีผู้โดยสารตั้งแต่ 6 คนขึ้นไป', 'ฟรี ชุดสแน็คของว่างต้อนรับกลุ่มเพื่อน', 'ส่วนลดพิเศษสำหรับบริการช่างภาพ']
    },
    validUntil: '2026-12-31',
    minPax: 6
  },
  {
    id: 'promo-04',
    code: 'CORP10',
    title: {
      en: 'Corporate Privilege',
      th: 'Corporate Privilege — ข้อเสนอเฉพาะองค์กร'
    },
    discountLabel: {
      en: '10% CORPORATE',
      th: 'ข้อเสนอองค์กร'
    },
    discountPercent: 10,
    targetAudience: 'corporate',
    targetAudienceName: {
      en: 'Corporate & Businesses',
      th: 'องค์กรและธุรกิจ'
    },
    description: {
      en: '10% privilege discount for corporate bookings of 2 or more voyages, with complimentary brand customization.',
      th: 'รับส่วนลด 10% เมื่อจองตั้งแต่ 2 ทริปขึ้นไป หรือรับบริการจัดตารางกิจกรรมและตกแต่งเรือตามธีมองค์กรฟรี'
    },
    perks: {
      en: ['10% corporate charter reduction', 'Complimentary custom corporate banner & flag mounting', 'Dedicated event coordinator & AV setup'],
      th: ['ส่วนลดองค์กร 10%', 'ฟรี บริการติดตั้งธงและป้ายสัญลักษณ์บริษัท', 'ผู้ประสานงานกิจกรรมและอุปกรณ์จัดประชุม']
    },
    validUntil: '2026-12-31',
    applicablePackageIds: ['pkg-05']
  },
  {
    id: 'promo-05',
    code: 'EARLYBIRD5',
    title: {
      en: 'Global Explorer Early Bird',
      th: 'Global Explorer — จองล่วงหน้านานาชาติ'
    },
    discountLabel: {
      en: '5% EARLY BIRD',
      th: 'Early Bird ลด 5%'
    },
    discountPercent: 5,
    targetAudience: 'international',
    targetAudienceName: {
      en: 'International Travelers',
      th: 'นักท่องเที่ยวต่างชาติ'
    },
    description: {
      en: 'Book 30+ days in advance to receive 5% early bird privilege and complimentary English itinerary concierge.',
      th: 'รับส่วนลด 5% เมื่อจองล่วงหน้าอย่างน้อย 30 วัน พร้อมข้อมูลท่องเที่ยวภาษาอังกฤษและบริการช่วยประสานงานก่อนเดินทาง'
    },
    perks: {
      en: ['5% advance reservation saving', 'Bilingual English/Thai private island guide', 'Complimentary airport pickup coordination'],
      th: ['ส่วนลด 5% เมื่อจองล่วงหน้า 30 วันขึ้นไป', 'ไกด์และกัปตันสื่อสารภาษาอังกฤษคล่องแคล่ว', 'บริการช่วยประสานงานรับส่งสนามบิน']
    },
    validUntil: '2026-12-31'
  }
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    name: 'Pearl',
    condition: {
      en: 'Complimentary sign-up upon initial inquiry or first booking',
      th: 'สมัครสมาชิกฟรี รับสิทธิประโยชน์ทันทีตั้งแต่ครั้งแรก'
    },
    benefits: {
      en: ['Exclusive charter newsletter & seasonal island guides', 'Early access to seasonal yacht charter promotions', 'Priority customer support concierge desk'],
      th: ['รับข่าวสารและโปรโมชั่นพิเศษก่อนใคร', 'สิทธิ์รับข้อมูลเกาะเปิดใหม่และตารางน้ำขึ้น-น้ำลง', 'ฝ่ายบริการลูกค้าพิเศษทาง Line & WhatsApp']
    },
    addonDiscountPercent: 0,
    badgeColor: 'border-slate-300 text-slate-700 bg-slate-50',
    cardGradient: 'from-slate-100 via-white to-slate-200 text-slate-800'
  },
  {
    name: 'Sapphire',
    condition: {
      en: 'Achieved after completing 3 verified yacht charters',
      th: 'เมื่อจองและใช้บริการครบ 3 ครั้ง'
    },
    benefits: {
      en: ['5% discount on all premium onboard add-ons and private chef', 'Complimentary premium welcome champagne bottle onboard', 'Flexible rescheduling policy up to 48 hours prior'],
      th: ['ส่วนลดบริการเสริมและเชฟส่วนตัว 5%', 'รับฟรี แชมเปญต้อนรับ 1 ขวดทุกทริป', 'สิทธิ์เลื่อนวันเดินทางฟรีสูงสุด 48 ชั่วโมงก่อนออกเรือ']
    },
    addonDiscountPercent: 5,
    badgeColor: 'border-[#134C65] text-[#134C65] bg-[#134C65]/10',
    cardGradient: 'from-[#134C65] via-[#1A6282] to-[#152740] text-white'
  },
  {
    name: 'Royal Blue',
    condition: {
      en: 'Achieved after completing 5 verified yacht charters',
      th: 'เมื่อจองและใช้บริการครบ 5 ครั้ง'
    },
    benefits: {
      en: ['10% discount on all premium add-ons and water activities', 'Priority peak-season booking guarantee (New Year / Holidays)', 'Complimentary luxury pier transfer for up to 6 guests'],
      th: ['ส่วนลดบริการเสริมและกิจกรรมทางทะเล 10%', 'สิทธิ์สำรองเรือล่วงหน้าช่วงไฮซีซั่นก่อนใคร', 'ฟรี รถลีมูซีนรับส่งท่าเรือสำหรับผู้โดยสารสูงสุด 6 ท่าน']
    },
    addonDiscountPercent: 10,
    badgeColor: 'border-[#102D4F] text-[#102D4F] bg-[#102D4F]/10',
    cardGradient: 'from-[#102D4F] via-[#152740] to-[#0D1B2A] text-white'
  },
  {
    name: 'Gold Privilege',
    condition: {
      en: 'VIP invitation & Corporate client tier ($15,000+ USD / ฿500,000+ spend)',
      th: 'ลูกค้า VIP หรือองค์กรตามเกณฑ์ยอดสะสม ฿500,000 ขึ้นไป'
    },
    benefits: {
      en: ['Dedicated 24/7 Butler & Personal Marine Concierge Officer', '15% privilege savings on all add-on services and fine dining', 'Bespoke custom uncharted island route approvals', 'Exclusive invitation to annual Monaco & Singapore Yacht Show events'],
      th: ['ผู้ประสานงานส่วนตัว 24/7 ดูแลทุกการเดินทาง', 'ส่วนลดบริการเสริมและอาหารพรีเมียม 15%', 'ขออนุมัติเส้นทางท่องเที่ยวพิเศษและเกาะส่วนตัวแบบ Unseen', 'สิทธิ์เข้าร่วมงาน Private Yachting Gala ประจำปี']
    },
    addonDiscountPercent: 15,
    badgeColor: 'border-[#B69A5A] text-[#B69A5A] bg-[#B69A5A]/10',
    cardGradient: 'from-[#2B2313] via-[#43371E] to-[#152740] text-[#F3E5AB]'
  }
];

export const INITIAL_CUSTOMERS: Customer[] = [
  {
    id: 'cust-01',
    fullName: 'Lady Charlotte Montague',
    email: 'charlotte.montague@mayfair-estates.co.uk',
    phone: '+44 7700 900142',
    country: 'United Kingdom',
    membershipTier: 'Gold Privilege',
    totalBookings: 6,
    totalSpentThb: 620000
  },
  {
    id: 'cust-02',
    fullName: 'คุณธนินท์ กิตติโสภณ (Tanin Kittisophon)',
    email: 'tanin.k@apexcorp.co.th',
    phone: '+66 81 888 7722',
    country: 'Thailand',
    membershipTier: 'Royal Blue',
    totalBookings: 5,
    totalSpentThb: 398000
  },
  {
    id: 'cust-03',
    fullName: 'Alexander & Sophia Vance',
    email: 'alex.vance@vancetech.sg',
    phone: '+65 9123 4567',
    country: 'Singapore',
    membershipTier: 'Sapphire',
    totalBookings: 3,
    totalSpentThb: 119700
  },
  {
    id: 'cust-04',
    fullName: 'คุณพัชริดา วัฒนกุล (Patcharida Wattanakul)',
    email: 'patcharida.w@gmail.com',
    phone: '+66 89 456 1234',
    country: 'Thailand',
    membershipTier: 'Pearl',
    totalBookings: 1,
    totalSpentThb: 29900
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'bk-1001',
    bookingRef: 'MV-2026-8812',
    customerId: 'cust-01',
    customerName: 'Lady Charlotte Montague',
    customerEmail: 'charlotte.montague@mayfair-estates.co.uk',
    customerPhone: '+44 7700 900142',
    packageId: 'pkg-04',
    yachtId: 'yacht-01',
    departureDate: '2026-10-24',
    timeSlot: 'fullday',
    guestCount: 6,
    selectedServices: [
      { serviceId: 'addon-02', serviceName: 'Private Chef & Fine Dining', priceThb: 6500 },
      { serviceId: 'addon-03', serviceName: 'Luxury Photo & Drone Video', priceThb: 4500 }
    ],
    specialRequests: 'Dom Pérignon vintage on ice; guest has mild shellfish allergy, tender transfer to private sandbank required.',
    promoCodeApplied: 'EARLYBIRD5',
    basePriceThb: 69900,
    servicesTotalThb: 11000,
    discountThb: 4045,
    taxThb: 5380,
    totalThb: 82235,
    status: 'confirmed',
    paymentStatus: 'paid',
    paymentMethod: 'card',
    createdAt: '2026-10-12T14:22:00Z'
  },
  {
    id: 'bk-1002',
    bookingRef: 'MV-2026-8815',
    customerId: 'cust-02',
    customerName: 'คุณธนินท์ กิตติโสภณ',
    customerEmail: 'tanin.k@apexcorp.co.th',
    customerPhone: '+66 81 888 7722',
    packageId: 'pkg-05',
    yachtId: 'yacht-04',
    departureDate: '2026-11-05',
    timeSlot: 'fullday',
    guestCount: 12,
    selectedServices: [
      { serviceId: 'addon-02', serviceName: 'Private Chef & Fine Dining', priceThb: 6500 },
      { serviceId: 'addon-05', serviceName: 'VIP Transfer & Butler Concierge', priceThb: 2800 }
    ],
    specialRequests: 'Corporate board retreat. Mount company pennant on bow. Projector test required at 08:30 before board boards.',
    promoCodeApplied: 'CORP10',
    basePriceThb: 59900,
    servicesTotalThb: 9300,
    discountThb: 6920,
    taxThb: 4359,
    totalThb: 66639,
    status: 'confirmed',
    paymentStatus: 'deposit_paid',
    paymentMethod: 'bank_transfer',
    createdAt: '2026-10-14T08:15:00Z'
  },
  {
    id: 'bk-1003',
    bookingRef: 'MV-2026-8819',
    customerId: 'cust-04',
    customerName: 'คุณพัชริดา วัฒนกุล',
    customerEmail: 'patcharida.w@gmail.com',
    customerPhone: '+66 89 456 1234',
    packageId: 'pkg-02',
    yachtId: 'yacht-03',
    departureDate: '2026-10-28',
    timeSlot: 'sunset',
    guestCount: 2,
    selectedServices: [
      { serviceId: 'addon-04', serviceName: 'Celebration Styling & Flowers', priceThb: 3500 },
      { serviceId: 'addon-03', serviceName: 'Luxury Photo & Drone Video', priceThb: 4500 }
    ],
    specialRequests: 'Secret 5th Wedding Anniversary surprise. Cake message: "Forever Yours, 2021-2026". Soft acoustic playlist.',
    promoCodeApplied: 'ROMANTIC10',
    basePriceThb: 29900,
    servicesTotalThb: 8000,
    discountThb: 3790,
    taxThb: 2387,
    totalThb: 36497,
    status: 'confirmed',
    paymentStatus: 'paid',
    paymentMethod: 'card',
    createdAt: '2026-10-15T11:40:00Z'
  }
];

export const INITIAL_PAYMENTS: PaymentRecord[] = [
  {
    id: 'pay-701',
    bookingId: 'bk-1001',
    bookingRef: 'MV-2026-8812',
    amountThb: 82235,
    method: 'Credit Card (Amex Centurion)',
    status: 'completed',
    transactionRef: 'TXN-AMX-994120',
    createdAt: '2026-10-12T14:25:00Z'
  },
  {
    id: 'pay-702',
    bookingId: 'bk-1002',
    bookingRef: 'MV-2026-8815',
    amountThb: 33320,
    method: 'Wire Transfer (SCB Corporate)',
    status: 'completed',
    transactionRef: 'TXN-SCB-440188',
    createdAt: '2026-10-14T09:00:00Z'
  },
  {
    id: 'pay-703',
    bookingId: 'bk-1003',
    bookingRef: 'MV-2026-8819',
    amountThb: 36497,
    method: 'Credit Card (Visa Signature)',
    status: 'completed',
    transactionRef: 'TXN-VIS-108291',
    createdAt: '2026-10-15T11:45:00Z'
  }
];
