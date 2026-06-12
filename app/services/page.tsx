import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import { serviceCategories } from '@/data/services';

export const metadata: Metadata = {
  title: 'Услуги — ИП Мешанихина Е.В.',
  description: 'Перечень косметологических услуг: уходы, пилинги, инъекции, контурная пластика. Цены по прейскуранту.',
};

export default function ServicesPage() {
  return (
    <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16">

      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-2">Услуги</h1>
        <p className="text-ink-muted mb-10 max-w-xl">
          Все процедуры проводятся врачом-косметологом по медицинским протоколам.
          Названия услуг соответствуют Номенклатуре медицинских услуг № 804н.
        </p>
      </FadeIn>

      {/* ── Прейскурант ── */}
      <FadeIn delay={0.04}>
        <a
          href="/docs/ПРЕЙСКУРАНТ НА МЕДИЦИНСКИЕ УСЛУГИ.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 mb-12 px-5 py-3.5 rounded-xl border border-line bg-cream text-sm text-ink hover:border-coral hover:text-coral transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
            <path d="M3 1.5h6.5L13 5v9.5H3V1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
            <path d="M9.5 1.5V5H13" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
            <path d="M5.5 8.5h5M5.5 11h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <span>Прейскурант на медицинские услуги</span>
          <span className="text-xs text-ink-muted ml-1">PDF ↗</span>
        </a>
      </FadeIn>

      {/* ── Категории услуг ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {serviceCategories.map((cat, i) => (
          <FadeIn key={cat.title} delay={0.06 * i}>
            <div className="rounded-2xl border border-line p-6 h-full flex flex-col">
              <h2 className="font-semibold text-ink text-lg mb-2">{cat.title}</h2>
              <p className="text-sm text-ink-muted mb-5">{cat.description}</p>
              <ul className="space-y-2 mt-auto">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-ink-muted flex items-start gap-2">
                    <span className="text-sage shrink-0 mt-0.5" aria-hidden="true">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* ── Дисклеймер ── */}
      <FadeIn delay={0.2}>
        <p className="mt-12 text-xs text-ink-muted max-w-2xl leading-relaxed">
          Указанные услуги являются платными медицинскими услугами и не входят в программу государственных гарантий
          бесплатного оказания гражданам медицинской помощи. Цены и перечень услуг могут быть изменены.
          Актуальный прейскурант доступен на сайте и в кабинете врача.
        </p>
      </FadeIn>

    </section>
  );
}
