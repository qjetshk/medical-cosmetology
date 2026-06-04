import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import YandexMetrika from '@/components/YandexMetrika';
import PageTransition from '@/components/PageTransition';
import RouteAnnouncer from '@/components/RouteAnnouncer';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Косметолог — ИП Мешанихина Е.В.',
    template: '%s | ИП Мешанихина Е.В.',
  },
  description:
    'Профессиональная косметология в Копейске. Платные медицинские услуги по лицензии. ИП Мешанихина Елена Владимировна.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body className="font-sans bg-cream text-ink antialiased min-h-screen flex flex-col">
        {/* Skip-link — первое в DOM, виден только при фокусе с клавиатуры */}
        <a href="#main-content" className="skip-link">
          Перейти к основному содержанию
        </a>

        <RouteAnnouncer />
        <Header />
        <PageTransition />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <YandexMetrika />
      </body>
    </html>
  );
}
