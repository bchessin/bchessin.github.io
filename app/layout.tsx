import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bradford Chessin — HIIT + Zumba Training',
  description: 'In-person HIIT at F45 Training, online Zumba through Google Meet, and private fitness coaching with Bradford Chessin.',
  openGraph: {
    title: 'Bradford Chessin — HIIT + Zumba Training',
    description: 'Build strength. Find your rhythm. In-person HIIT at F45 and online Zumba through Google Meet.',
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
