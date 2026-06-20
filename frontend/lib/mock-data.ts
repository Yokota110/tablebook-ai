import {
  AiInsight,
  DashboardOverview,
  Reservation,
  Restaurant,
  RestaurantPerformance,
  TimeSlotAvailability,
} from '@/types/tablebook';
import { restaurantGallery, restaurantImage } from '@/lib/restaurant-images';

export const restaurants: Restaurant[] = [
  {
    id: 'r1',
    name: 'Ginza Sora',
    slug: 'ginza-sora',
    cuisine: 'Japanese Kaiseki',
    city: 'Tokyo',
    address: '6-4-12 Ginza, Chuo City, Tokyo 104-0061, Japan',
    heroImageUrl: restaurantImage('ginza-sora'),
    gallery: restaurantGallery('ginza-sora'),
    priceRange: 'PREMIUM',
    rating: 4.9,
    reviewCount: 684,
    openingTime: '17:30',
    closingTime: '23:00',
    averageSpend: 95,
    featured: true,
    trending: true,
    popularityScore: 97,
    amenities: ['Chef counter', 'Seasonal tasting menu', 'Sake pairing', 'Private dining'],
    dressCode: 'Smart casual',
    parking: 'Ginza public parking and nearby hotel valet',
    phone: '+81 3-3572-8842',
    email: 'reserve@ginzasora.jp',
    description:
      'A polished Ginza dining room serving seasonal kaiseki courses, sake pairings, and counter seats for guests who want a close view of the kitchen.',
    tables: [
      { id: 't1', restaurantId: 'r1', label: 'G1', capacity: 2, isActive: true },
      { id: 't2', restaurantId: 'r1', label: 'G2', capacity: 4, isActive: true },
      { id: 't3', restaurantId: 'r1', label: 'G3', capacity: 6, isActive: true },
    ],
    reviews: [
      { id: 'rv1', author: 'Aiko Tanaka', rating: 5, date: '2026-05-12', comment: 'The spring menu was precise and calm. Service handled our overseas guests beautifully.' },
      { id: 'rv2', author: 'Marcus Lee', rating: 5, date: '2026-05-08', comment: 'Excellent sake pairing and a smooth reservation flow for a client dinner.' },
      { id: 'rv3', author: 'Hana Wilson', rating: 4, date: '2026-04-29', comment: 'Counter seats are worth requesting. The seafood course was the highlight.' },
    ],
  },
  {
    id: 'r2',
    name: 'Orchard Lantern',
    slug: 'orchard-lantern',
    cuisine: 'Modern Singaporean',
    city: 'Singapore',
    address: '290 Orchard Road, #04-18, Singapore 238859',
    heroImageUrl: restaurantImage('orchard-lantern'),
    gallery: restaurantGallery('orchard-lantern'),
    priceRange: 'PREMIUM',
    rating: 4.8,
    reviewCount: 536,
    openingTime: '11:30',
    closingTime: '22:30',
    averageSpend: 72,
    featured: true,
    trending: false,
    popularityScore: 90,
    amenities: ['Private rooms', 'Halal-friendly options', 'Wine list', 'Wheelchair access'],
    dressCode: 'Smart casual',
    parking: 'Mall parking via Orchard Road entrance',
    phone: '+65 6732 3310',
    email: 'hello@orchardlantern.sg',
    description:
      'A contemporary Singaporean restaurant near Orchard serving laksa risotto, chili crab toast, and polished group dining for local and international guests.',
    tables: [
      { id: 't4', restaurantId: 'r2', label: 'O1', capacity: 2, isActive: true },
      { id: 't5', restaurantId: 'r2', label: 'O2', capacity: 4, isActive: true },
      { id: 't6', restaurantId: 'r2', label: 'O3', capacity: 8, isActive: true },
    ],
    reviews: [
      { id: 'rv4', author: 'Mei Lin Wong', rating: 5, date: '2026-05-15', comment: 'Great for mixed dietary needs. The team confirmed every note before we arrived.' },
      { id: 'rv5', author: 'Daniel Kim', rating: 5, date: '2026-05-02', comment: 'Reliable service for a regional team dinner. The chili crab toast was gone in minutes.' },
    ],
  },
  {
    id: 'r3',
    name: 'Shibuya Noodle Lab',
    slug: 'shibuya-noodle-lab',
    cuisine: 'Ramen and Izakaya',
    city: 'Tokyo',
    address: '1-22-8 Jinnan, Shibuya City, Tokyo 150-0041, Japan',
    heroImageUrl: restaurantImage('shibuya-noodle-lab'),
    gallery: restaurantGallery('shibuya-noodle-lab'),
    priceRange: 'BUDGET',
    rating: 4.7,
    reviewCount: 812,
    openingTime: '11:00',
    closingTime: '01:00',
    averageSpend: 34,
    trending: true,
    popularityScore: 92,
    amenities: ['Late-night dining', 'Counter seats', 'Vegetarian broth', 'QR ordering'],
    dressCode: 'Casual',
    parking: 'Coin parking near Jinnan crossing',
    phone: '+81 3-6427-7741',
    email: 'tables@noodlelab.jp',
    description:
      'A fast-moving Shibuya ramen and izakaya spot with chicken paitan, yuzu shio broth, and late-night small plates for after-work crowds.',
    tables: [{ id: 't7', restaurantId: 'r3', label: 'S1', capacity: 4, isActive: true }],
    reviews: [
      { id: 'rv6', author: 'Kenji Sato', rating: 5, date: '2026-05-10', comment: 'Easy booking for a busy ramen shop. The yuzu shio bowl is clean and bright.' },
    ],
  },
  {
    id: 'r4',
    name: 'Kyoto Garden Table',
    slug: 'kyoto-garden-table',
    cuisine: 'Seasonal Japanese',
    city: 'Kyoto',
    address: '331 Gionmachi Kitagawa, Higashiyama Ward, Kyoto 605-0073, Japan',
    heroImageUrl: restaurantImage('kyoto-garden-table'),
    gallery: restaurantGallery('kyoto-garden-table'),
    priceRange: 'LUXURY',
    rating: 4.9,
    reviewCount: 398,
    openingTime: '12:00',
    closingTime: '22:00',
    averageSpend: 118,
    featured: false,
    trending: true,
    popularityScore: 94,
    amenities: ['Garden view', 'Tea pairing', 'Anniversary service', 'Private tatami room'],
    dressCode: 'Smart casual',
    parking: 'Partner parking near Gion-Shijo station',
    phone: '+81 75-561-9035',
    email: 'dine@kyotogardentable.jp',
    description:
      'A Kyoto dining room pairing seasonal Japanese courses with garden views, tea service, and quiet private rooms for anniversaries and small groups.',
    tables: [
      { id: 't8', restaurantId: 'r4', label: 'K1', capacity: 2, isActive: true },
      { id: 't9', restaurantId: 'r4', label: 'K2', capacity: 4, isActive: true },
    ],
    reviews: [
      { id: 'rv7', author: 'Sofia Martins', rating: 5, date: '2026-05-18', comment: 'Peaceful room, thoughtful pacing, and the tea pairing made the dinner memorable.' },
    ],
  },
  {
    id: 'r5',
    name: 'Marina Bay Claypot',
    slug: 'marina-bay-claypot',
    cuisine: 'Singaporean Chinese',
    city: 'Singapore',
    address: '8 Marina Boulevard, #02-05, Singapore 018981',
    heroImageUrl: restaurantImage('marina-bay-claypot'),
    gallery: restaurantGallery('marina-bay-claypot'),
    priceRange: 'MODERATE',
    rating: 4.8,
    reviewCount: 477,
    openingTime: '11:00',
    closingTime: '23:00',
    averageSpend: 58,
    featured: true,
    popularityScore: 91,
    amenities: ['Waterfront view', 'Group tables', 'Corporate receipts', 'Weekend brunch'],
    dressCode: 'Casual smart',
    parking: 'Marina Bay Link Mall parking',
    phone: '+65 6334 2290',
    email: 'book@marinabayclaypot.sg',
    description:
      'A Marina Bay favorite for claypot rice, wok-fired seafood, and business-friendly group tables with a skyline view.',
    tables: [
      { id: 't10', restaurantId: 'r5', label: 'M1', capacity: 2, isActive: true },
      { id: 't11', restaurantId: 'r5', label: 'M2', capacity: 6, isActive: true },
    ],
    reviews: [
      { id: 'rv8', author: 'Wei Jie Lim', rating: 5, date: '2026-05-20', comment: 'Fast approval for a client lunch. Claypot rice and sambal prawns were both excellent.' },
    ],
  },
  {
    id: 'r6',
    name: 'Osaka Commons',
    slug: 'osaka-commons',
    cuisine: 'Casual Japanese',
    city: 'Osaka',
    address: '1-6-12 Dotonbori, Chuo Ward, Osaka 542-0071, Japan',
    heroImageUrl: restaurantImage('osaka-commons'),
    gallery: restaurantGallery('osaka-commons'),
    priceRange: 'MODERATE',
    rating: 4.6,
    reviewCount: 332,
    openingTime: '12:00',
    closingTime: '23:30',
    averageSpend: 42,
    popularityScore: 82,
    amenities: ['Okonomiyaki counter', 'Family seating', 'English menu', 'Takeaway'],
    dressCode: 'Casual',
    parking: 'Namba public parking within 5 minutes',
    phone: '+81 6-6213-5520',
    email: 'hello@osakacommons.jp',
    description:
      'A relaxed Dotonbori restaurant serving okonomiyaki, kushikatsu, and Osaka comfort dishes with quick table turns and multilingual service.',
    tables: [{ id: 't12', restaurantId: 'r6', label: 'C1', capacity: 4, isActive: true }],
    reviews: [
      { id: 'rv9', author: 'Mina Park', rating: 4, date: '2026-05-05', comment: 'Great casual dinner after sightseeing. Booking ahead saved us a long wait.' },
    ],
  },
];

export const reservations: Reservation[] = [
  {
    id: 'res1',
    date: new Date().toISOString(),
    timeSlot: '19:00',
    guestCount: 4,
    status: 'APPROVED',
    user: { name: 'Aiko Tanaka', email: 'guest@tablebook.dev' },
    restaurant: { id: 'r1', name: 'Ginza Sora', slug: 'ginza-sora', city: 'Tokyo', averageSpend: 95 },
    table: { id: 't2', label: 'G2', capacity: 4 },
  },
  {
    id: 'res2',
    date: new Date(Date.now() + 86400000).toISOString(),
    timeSlot: '12:30',
    guestCount: 2,
    status: 'PENDING',
    user: { name: 'Mei Lin Wong', email: 'mei.lin@example.com' },
    restaurant: { id: 'r2', name: 'Orchard Lantern', slug: 'orchard-lantern', city: 'Singapore', averageSpend: 72 },
    table: { id: 't4', label: 'O1', capacity: 2 },
  },
  {
    id: 'res3',
    date: new Date().toISOString(),
    timeSlot: '20:30',
    guestCount: 6,
    status: 'APPROVED',
    user: { name: 'Daniel Kim', email: 'daniel@example.com' },
    restaurant: { id: 'r5', name: 'Marina Bay Claypot', slug: 'marina-bay-claypot', city: 'Singapore', averageSpend: 58 },
    table: { id: 't11', label: 'M2', capacity: 6 },
  },
];

export const overview: DashboardOverview = {
  totalReservations: 3184,
  todaysReservations: 46,
  activeRestaurants: 6,
  revenue: 214680,
  conversionRate: 76,
  occupancyRate: 84,
  avgPartySize: 3.7,
};

function buildMockTrends() {
  const dayWeights = [0.72, 0.7, 0.76, 0.84, 1.1, 1.3, 1.2];
  const seasonal = [1.04, 1.08, 1.18, 1.2, 1.05, 1.1, 0.96, 1.12, 1.0, 1.06, 1.14, 1.22];
  const anchor = new Date();

  return Array.from({ length: 30 }).map((_, index) => {
    const date = new Date(anchor);
    date.setDate(anchor.getDate() - (29 - index));
    const dayWeight = dayWeights[(date.getDay() + 6) % 7];
    const monthWeight = seasonal[date.getMonth()];
    const wave = 0.9 + Math.sin(index / 4.5) * 0.1 + Math.cos(index / 11) * 0.06;
    const reservations = Math.round(28 * dayWeight * monthWeight * wave);
    const revenue = Math.round(
      reservations * (72 + Math.sin(index / 3.2) * 12 + (date.getDay() >= 5 ? 18 : 0)),
    );
    const occupancy = Math.min(
      96,
      Math.round(54 + dayWeight * 18 + Math.sin(index / 2.8) * 7 + (date.getDay() >= 5 ? 8 : 0)),
    );

    return {
      date: date.toLocaleDateString('en-SG', { month: 'short', day: 'numeric' }),
      reservations,
      revenue,
      occupancy,
    };
  });
}

export const trends = buildMockTrends();

export const popularTimes = [
  { timeSlot: '19:00', reservations: 336 },
  { timeSlot: '20:00', reservations: 304 },
  { timeSlot: '19:30', reservations: 276 },
  { timeSlot: '12:30', reservations: 226 },
  { timeSlot: '20:30', reservations: 214 },
  { timeSlot: '13:00', reservations: 188 },
  { timeSlot: '18:30', reservations: 166 },
  { timeSlot: '12:00', reservations: 148 },
  { timeSlot: '21:00', reservations: 126 },
  { timeSlot: '13:30', reservations: 98 },
];

export const restaurantPerformance: RestaurantPerformance[] = [
  { name: 'Ginza Sora', reservations: 512, revenue: 48640, occupancy: 90, trend: 15.2 },
  { name: 'Orchard Lantern', reservations: 458, revenue: 32976, occupancy: 84, trend: 10.4 },
  { name: 'Kyoto Garden Table', reservations: 392, revenue: 46256, occupancy: 92, trend: 13.1 },
  { name: 'Marina Bay Claypot', reservations: 376, revenue: 21808, occupancy: 81, trend: 12.2 },
  { name: 'Shibuya Noodle Lab', reservations: 364, revenue: 12376, occupancy: 76, trend: 7.4 },
];

export const heatmapData = [
  { day: 'Mon', '12': 26, '14': 18, '18': 36, '19': 48, '20': 44, '21': 24 },
  { day: 'Tue', '12': 28, '14': 20, '18': 38, '19': 50, '20': 46, '21': 26 },
  { day: 'Wed', '12': 30, '14': 24, '18': 42, '19': 56, '20': 52, '21': 28 },
  { day: 'Thu', '12': 34, '14': 28, '18': 48, '19': 62, '20': 56, '21': 30 },
  { day: 'Fri', '12': 42, '14': 32, '18': 62, '19': 86, '20': 80, '21': 48 },
  { day: 'Sat', '12': 58, '14': 46, '18': 76, '19': 98, '20': 92, '21': 60 },
  { day: 'Sun', '12': 54, '14': 42, '18': 68, '19': 86, '20': 78, '21': 50 },
];

export const liveActivity = [
  { id: '1', text: 'Aiko Tanaka booked Ginza Sora for 4 guests at 19:00', time: '2m ago', type: 'booking' },
  { id: '2', text: 'Orchard Lantern - Table O2 approved for lunch', time: '5m ago', type: 'approval' },
  { id: '3', text: 'Kyoto Garden Table reached 91% occupancy for Saturday dinner', time: '12m ago', type: 'alert' },
  { id: '4', text: 'Mei Lin Wong requested a halal-friendly menu at Orchard Lantern', time: '18m ago', type: 'note' },
  { id: '5', text: 'Marina Bay Claypot trending +19% this week in Singapore', time: '32m ago', type: 'trend' },
];

export const trustLogos = ['Stripe', 'Vercel', 'Google Maps', 'LINE', 'Grab', 'PayNow'];

export const aiInsights: AiInsight[] = [
  {
    id: 'ai1',
    category: 'peak-times',
    title: 'Friday 7-8 PM is your highest-conversion window',
    summary: '74% of approved reservations cluster between 19:00-20:00 on Fridays across Tokyo and Singapore venues.',
    detail: 'Friday dinner service drives 38% of weekly revenue. Ginza Sora and Marina Bay Claypot show the strongest conversion during this window. Consider table holds and automated reminders for peak slots before long weekends.',
    confidence: 92,
    impact: 'high',
  },
  {
    id: 'ai2',
    category: 'behavior',
    title: 'Guests booking 3+ days ahead spend 22% more',
    summary: 'Advance planners select premium tables and add occasion notes more often.',
    detail: 'Party sizes average 4.0 for advance bookings vs 2.7 for same-day bookings. These guests prefer private rooms, counter seats, and dietary confirmations. Target them with email or LINE confirmation before arrival.',
    confidence: 87,
    impact: 'medium',
  },
  {
    id: 'ai3',
    category: 'performance',
    title: 'Kyoto Garden Table leads revenue per seat',
    summary: 'US$118 average spend with 90% occupancy - top performer this month.',
    detail: 'Kyoto Garden Table converts 14% more reservations than the portfolio average. Ginza Sora leads on total covers, while Shibuya Noodle Lab shows strong late-night demand in Tokyo.',
    confidence: 94,
    impact: 'high',
  },
  {
    id: 'ai4',
    category: 'prediction',
    title: 'Saturday demand projected at 93% capacity',
    summary: 'Based on 4-week trends, expect near-sellout across premium venues before the weekend dinner rush.',
    detail: 'Tokyo and Singapore venues are pacing 17% above last month. Recommend opening overflow seating at Orchard Lantern and pre-staffing Ginza Sora for the 19:00-20:30 dinner rush.',
    confidence: 82,
    impact: 'high',
  },
  {
    id: 'ai5',
    category: 'recommendation',
    title: 'Enable waitlist for Osaka Commons weekend lunch',
    summary: 'Weekend 12:00-13:30 slots fill 2.6x faster than weekday lunches.',
    detail: 'Casual Osaka lunch slots reach 92% fill rate within 48 hours of release. A waitlist with SMS or email notifications could recover an estimated 12-16 covers per weekend.',
    confidence: 79,
    impact: 'medium',
  },
];

export function getAvailability(slug: string): TimeSlotAvailability[] {
  const slots = [
    '11:00', '11:30', '12:00', '12:30', '13:00',
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00',
  ];

  const seed = slug.split('').reduce((a, c) => a + c.charCodeAt(0), 0);

  return slots.map((time, i) => {
    const busy = (seed + i * 7) % 10;
    const popularity = busy > 7 ? 'peak' : busy > 5 ? 'high' : busy > 3 ? 'medium' : 'low';
    const available = busy < 8;
    return { time, available, popularity, tablesLeft: available ? Math.max(1, 6 - (busy % 5)) : 0 };
  });
}

export function enrichRestaurant(restaurant: Restaurant): Restaurant {
  const full = restaurants.find((r) => r.slug === restaurant.slug);

  return full
    ? {
        ...restaurant,
        ...full,
        heroImageUrl: full.heroImageUrl,
        gallery: full.gallery,
        reviews: full.reviews,
        amenities: full.amenities,
        dressCode: full.dressCode,
        parking: full.parking,
        phone: full.phone,
        email: full.email,
        tables: full.tables ?? restaurant.tables,
      }
    : restaurant;
}
