import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import PageTransition from '@/components/PageTransition';
import RouteAnnouncer from '@/components/RouteAnnouncer';
import { owner } from '@/data/owner';
import { homeTitle, siteUrl } from '@/data/site';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: `%s | ${owner.shortName}`,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION?.trim() || undefined,
    yandex: process.env.YANDEX_SITE_VERIFICATION?.trim() || undefined,
  },
};

const configuredCounterId = Number(process.env.YANDEX_METRIKA_ID);
const counterId = Number.isSafeInteger(configuredCounterId) && configuredCounterId > 0
  ? configuredCounterId
  : undefined;

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
        <CookieBanner counterId={counterId} />
      </body>
    </html>
  );
}
