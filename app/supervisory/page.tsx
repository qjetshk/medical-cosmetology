import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контрольные органы',
  description: 'Контакты территориальных органов Росздравнадзора и Роспотребнадзора.',
};

export default function SupervisoryPage() {
  return (
    <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16">
      {/* TODO: InfoTable — территориальный Росздравнадзор и Роспотребнадзор (адрес, тел, email) */}
      {/* ⚠️ Региональный Минздрав НЕ указывать */}
      <h1 className="text-4xl font-bold text-ink mb-4">Контрольные органы</h1>
      <p className="text-ink-muted">Наполнение — следующий шаг.</p>
    </section>
  );
}
