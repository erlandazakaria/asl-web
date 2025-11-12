import type { Metadata } from 'next';
import './globals.css';
import { ToastProvider } from '@/contexts/Toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyright from '@/components/Copyright';
import Toast from '@/components/Toast';

export const metadata: Metadata = {
  title: 'PT Angkasa Segara Logistik - International Freight Forwarding & Logistics',
  description:
    'PT Angkasa Segara Logistik provides comprehensive logistics services including international sea and air freight forwarding, customs clearance, warehousing, and distribution in Indonesia.',
  keywords:
    'logistics Indonesia, freight forwarding, sea freight, air freight, customs clearance, warehousing, distribution, PT ASL, Angkasa Segara Logistik, Sidoarjo logistics',
  openGraph: {
    title: 'PT Angkasa Segara Logistik',
    description: 'Your trusted partner in international logistics and freight forwarding',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <div className="w-full h-[130px] border-b-4 border-asl-blue bg-asl-light-blue">
            <Header />
          </div>

          <main>{children}</main>

          <div className="w-full bg-asl-gray overflow-hidden">
            <Footer />
          </div>
          <div className="w-full bg-asl-red overflow-hidden">
            <Copyright />
          </div>
          <Toast />
        </ToastProvider>
      </body>
    </html>
  );
}
