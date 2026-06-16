import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import ServiceCategoryGrid from '@/components/ServiceCategoryGrid';

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
          Коды услуг присвоены в соответствии с Номенклатурой медицинских услуг № 804н.
        </p>
      </FadeIn>

      {/* ── Прейскурант ── */}
      <FadeIn delay={0.04}>
        <a
          href="/docs/Прейскурант на медицинские услуги.pdf"
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
      <ServiceCategoryGrid headingAs="h2" />

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
