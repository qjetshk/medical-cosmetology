import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Услуги',
  description: 'Перечень косметологических услуг и процедур по номенклатуре №804н.',
};

export default function ServicesPage() {
  return (
    <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16">

      {/* Ссылка на прайс-лист */}
      <Link
        href="/legal#price"
        className="inline-flex items-center gap-2 mb-10 px-5 py-3 rounded-xl border border-line bg-white text-sm text-ink hover:border-coral hover:text-coral transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 2h7l3 3v9H3V2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
          <path d="M10 2v3h3M6 7h4M6 10h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
        Прайс-лист и правила оплаты
      </Link>

      <h1 className="text-4xl font-bold text-ink mb-4">Услуги</h1>
      {/* TODO: сетка ServiceCard по категориям процедур */}
      <p className="text-ink-muted">Наполнение — следующий шаг.</p>

    </section>
  );
}
