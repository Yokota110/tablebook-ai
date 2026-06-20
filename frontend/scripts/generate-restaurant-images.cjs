const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/restaurants');
const restaurants = [
  { slug: 'ginza-sora', name: 'Ginza Sora', sub: 'Japanese Kaiseki - Tokyo', tag: 'Seasonal Courses - Sake Pairing', c1: '#0a2540', c2: '#D97706' },
  { slug: 'orchard-lantern', name: 'Orchard Lantern', sub: 'Modern Singaporean - Singapore', tag: 'Laksa Risotto - Chili Crab Toast', c1: '#0F766E', c2: '#F97316' },
  { slug: 'shibuya-noodle-lab', name: 'Shibuya Noodle Lab', sub: 'Ramen and Izakaya - Tokyo', tag: 'Yuzu Shio - Late Night Plates', c1: '#7C2D12', c2: '#FACC15' },
  { slug: 'kyoto-garden-table', name: 'Kyoto Garden Table', sub: 'Seasonal Japanese - Kyoto', tag: 'Garden View - Tea Pairing', c1: '#14532D', c2: '#A7F3D0' },
  { slug: 'marina-bay-claypot', name: 'Marina Bay Claypot', sub: 'Singaporean Chinese - Singapore', tag: 'Claypot Rice - Wok Seafood', c1: '#1D4ED8', c2: '#38BDF8' },
  { slug: 'osaka-commons', name: 'Osaka Commons', sub: 'Casual Japanese - Osaka', tag: 'Okonomiyaki - Kushikatsu', c1: '#7F1D1D', c2: '#FCA5A5' },
];

const variants = [
  { x1: '0', y1: '0', x2: '1', y2: '1', op: 0.08 },
  { x1: '1', y1: '0', x2: '0', y2: '1', op: 0.1 },
  { x1: '0', y1: '1', x2: '1', y2: '0', op: 0.07 },
  { x1: '0.2', y1: '0', x2: '0.8', y2: '1', op: 0.09 },
];

for (const r of restaurants) {
  variants.forEach((v, i) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" role="img" aria-label="${r.name}">
  <defs><linearGradient id="bg" x1="${v.x1}" y1="${v.y1}" x2="${v.x2}" y2="${v.y2}"><stop offset="0%" stop-color="${r.c1}"/><stop offset="100%" stop-color="${r.c2}"/></linearGradient></defs>
  <rect width="1200" height="800" fill="url(#bg)"/>
  <circle cx="960" cy="170" r="170" fill="#ffffff" opacity="${v.op}"/>
  <circle cx="180" cy="660" r="240" fill="#ffffff" opacity="0.05"/>
  <text x="72" y="360" fill="#ffffff" font-size="58" font-weight="700" font-family="system-ui,Segoe UI,sans-serif">${r.name}</text>
  <text x="72" y="430" fill="#ffffff" opacity="0.85" font-size="30" font-family="system-ui,Segoe UI,sans-serif">${r.sub}</text>
  <text x="72" y="500" fill="#ffffff" opacity="0.65" font-size="24" font-family="system-ui,Segoe UI,sans-serif">${r.tag}</text>
</svg>`;
    fs.writeFileSync(path.join(dir, `${r.slug}-${i + 1}.svg`), svg);
  });
}

console.log('Created', restaurants.length * variants.length, 'images');
