import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bradford Chessin — HIIT + Zumba Training',
  description: 'HIIT, Zumba, and private training with Bradford Chessin. In person at F45 Training and online through Google Meet.',
  openGraph: {
    title: 'Bradford Chessin — HIIT + Zumba Training',
    description: 'Build strength. Find your rhythm. Group fitness in person at F45 and online through Google Meet.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
