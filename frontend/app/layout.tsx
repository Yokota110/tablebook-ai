import type { Metadata } from 'next';
import { Providers } from '@/components/providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'TableBook | Global Restaurant Reservation Platform',
  description: 'Discover and book tables across Japan and Singapore, from Tokyo counters to Singapore dining rooms.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#F9FAFB] font-sans text-slate-950">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
