import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Instagram, MessageCircle } from 'lucide-react';
import { BsWhatsapp } from "react-icons/bs";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MyRasa - Premium Scents',
  description: 'Luxury-inspired perfumes at affordable prices',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-20 min-h-screen">{children}</main>
        {/* Sticky Icon Container */}
        <div className="fixed bottom-5 left-5 flex flex-col gap-4 z-50">
          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/8424889694?text=Hi,%20I'm%20looking%20for%20the%20perfumes."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-3 rounded-full shadow-md hover:scale-110 transition"
          >
            <BsWhatsapp className="text-white" size={24} />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/myrasa.co?igsh=czQ0ZDZ1czFlcHV2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 p-3 rounded-full shadow-md hover:scale-110 transition"
          >
            <Instagram className="text-white" size={24} />
          </a>
        </div>
        <Footer />
      </body>
    </html>
  );
}
