import { PrismaClient, PriceRange, UserRole } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { buildAnalyticsReservations } from './seed-analytics';

const prisma = new PrismaClient();

const restaurants = [
  {
    name: 'Ginza Sora',
    slug: 'ginza-sora',
    cuisine: 'Japanese Kaiseki',
    city: 'Tokyo',
    address: '6-4-12 Ginza, Chuo City, Tokyo 104-0061, Japan',
    heroImageUrl: '/images/restaurants/ginza-sora-1.jpg',
    priceRange: PriceRange.PREMIUM,
    rating: 4.9,
    reviewCount: 684,
    openingTime: '17:30',
    closingTime: '23:00',
    averageSpend: 95,
    popularity: 1.22,
    description:
      'A polished Ginza dining room serving seasonal kaiseki courses, sake pairings, and counter seats.',
  },
  {
    name: 'Orchard Lantern',
    slug: 'orchard-lantern',
    cuisine: 'Modern Singaporean',
    city: 'Singapore',
    address: '290 Orchard Road, #04-18, Singapore 238859',
    heroImageUrl: '/images/restaurants/orchard-lantern-1.jpg',
    priceRange: PriceRange.PREMIUM,
    rating: 4.8,
    reviewCount: 536,
    openingTime: '11:30',
    closingTime: '22:30',
    averageSpend: 72,
    popularity: 1.08,
    description:
      'A contemporary Singaporean restaurant near Orchard with polished group dining for local and international guests.',
  },
  {
    name: 'Shibuya Noodle Lab',
    slug: 'shibuya-noodle-lab',
    cuisine: 'Ramen and Izakaya',
    city: 'Tokyo',
    address: '1-22-8 Jinnan, Shibuya City, Tokyo 150-0041, Japan',
    heroImageUrl: '/images/restaurants/shibuya-noodle-lab-1.jpg',
    priceRange: PriceRange.BUDGET,
    rating: 4.7,
    reviewCount: 812,
    openingTime: '11:00',
    closingTime: '01:00',
    averageSpend: 34,
    popularity: 0.98,
    description:
      'A fast-moving Shibuya ramen and izakaya spot with late-night small plates for after-work crowds.',
  },
  {
    name: 'Kyoto Garden Table',
    slug: 'kyoto-garden-table',
    cuisine: 'Seasonal Japanese',
    city: 'Kyoto',
    address: '331 Gionmachi Kitagawa, Higashiyama Ward, Kyoto 605-0073, Japan',
    heroImageUrl: '/images/restaurants/kyoto-garden-table-1.jpg',
    priceRange: PriceRange.LUXURY,
    rating: 4.9,
    reviewCount: 398,
    openingTime: '12:00',
    closingTime: '22:00',
    averageSpend: 118,
    popularity: 1.18,
    description:
      'A Kyoto dining room pairing seasonal Japanese courses with garden views and quiet private rooms.',
  },
  {
    name: 'Marina Bay Claypot',
    slug: 'marina-bay-claypot',
    cuisine: 'Singaporean Chinese',
    city: 'Singapore',
    address: '8 Marina Boulevard, #02-05, Singapore 018981',
    heroImageUrl: '/images/restaurants/marina-bay-claypot-1.jpg',
    priceRange: PriceRange.MODERATE,
    rating: 4.8,
    reviewCount: 477,
    openingTime: '11:00',
    closingTime: '23:00',
    averageSpend: 58,
    popularity: 1.06,
    description:
      'A Marina Bay favorite for claypot rice, wok-fired seafood, and business-friendly group tables.',
  },
  {
    name: 'Osaka Commons',
    slug: 'osaka-commons',
    cuisine: 'Casual Japanese',
    city: 'Osaka',
    address: '1-6-12 Dotonbori, Chuo Ward, Osaka 542-0071, Japan',
    heroImageUrl: '/images/restaurants/osaka-commons-1.jpg',
    priceRange: PriceRange.MODERATE,
    rating: 4.6,
    reviewCount: 332,
    openingTime: '12:00',
    closingTime: '23:30',
    averageSpend: 42,
    popularity: 0.84,
    description:
      'A relaxed Dotonbori restaurant serving okonomiyaki, kushikatsu, and Osaka comfort dishes.',
  },
];

const demoUsers = [
  { name: 'Aiko Tanaka', email: 'admin@tablebook.dev', role: UserRole.ADMIN },
  { name: 'Marcus Lee', email: 'guest@tablebook.dev', role: UserRole.CUSTOMER },
  { name: 'Mei Lin Wong', email: 'mei.lin@example.com', role: UserRole.CUSTOMER },
  { name: 'Daniel Kim', email: 'daniel@example.com', role: UserRole.CUSTOMER },
  { name: 'Hana Wilson', email: 'hana.wilson@example.com', role: UserRole.CUSTOMER },
  { name: 'Kenji Sato', email: 'kenji.sato@example.com', role: UserRole.CUSTOMER },
  { name: 'Sofia Martins', email: 'sofia@example.com', role: UserRole.CUSTOMER },
  { name: 'Mina Park', email: 'mina.park@example.com', role: UserRole.CUSTOMER },
];

async function main() {
  const passwordHash = await bcrypt.hash('TableBook123!', 12);

  const users = [];
  for (const user of demoUsers) {
    const created = await prisma.user.upsert({
      where: { email: user.email },
      update: { name: user.name, role: user.role },
      create: {
        name: user.name,
        email: user.email,
        passwordHash,
        role: user.role,
      },
    });
    users.push(created);
  }

  await prisma.reservation.deleteMany();

  const createdRestaurants = [];
  const tablesByRestaurant = new Map<string, { id: string; label: string; capacity: number }[]>();

  for (const restaurant of restaurants) {
    const { popularity, ...restaurantData } = restaurant;
    const created = await prisma.restaurant.upsert({
      where: { slug: restaurant.slug },
      update: restaurantData,
      create: restaurantData,
    });

    createdRestaurants.push({ id: created.id, averageSpend: created.averageSpend, popularity });
    const tables = [];

    for (const [index, capacity] of [2, 2, 4, 4, 6, 8].entries()) {
      const table = await prisma.table.upsert({
        where: {
          restaurantId_label: {
            restaurantId: created.id,
            label: `T${index + 1}`,
          },
        },
        update: { capacity, isActive: true },
        create: {
          restaurantId: created.id,
          label: `T${index + 1}`,
          capacity,
        },
      });
      tables.push(table);
    }

    tablesByRestaurant.set(created.id, tables);
  }

  const activeSlugs = restaurants.map((restaurant) => restaurant.slug);
  await prisma.restaurant.updateMany({
    where: { slug: { notIn: activeSlugs } },
    data: { isActive: false },
  });

  const reservationData = buildAnalyticsReservations({
    restaurants: createdRestaurants,
    tablesByRestaurant,
    users,
  });

  const batchSize = 250;
  for (let index = 0; index < reservationData.length; index += batchSize) {
    await prisma.reservation.createMany({
      data: reservationData.slice(index, index + batchSize),
    });
  }

  console.log(
    `Seeded TableBook global demo with ${reservationData.length} reservations across ${createdRestaurants.length} Japan and Singapore venues.`,
  );
  console.log('Demo accounts: admin@tablebook.dev / guest@tablebook.dev (password: TableBook123!)');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
