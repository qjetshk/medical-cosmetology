import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Правовые документы',
  description: 'Политика конфиденциальности, согласие на обработку ПД, прайс-лист, правила платных услуг.',
};

export default function LegalPage() {
  return (
    <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16 space-y-16">

      {/* Прайс-лист и платные услуги */}
      <div id="price">
        <h1 className="text-4xl font-bold text-ink mb-2">Платные услуги и цены</h1>
        <p className="text-ink-muted mb-8">
          Правила предоставления платных медицинских услуг (ПП РФ №736). Перечень услуг и цены.
        </p>
        {/* TODO: перечень услуг и InfoTable с ценами */}
        <ul className="space-y-3 text-sm">
          <li>
            <a
              href="/docs/price-list.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-coral hover:underline"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 2h7l3 3v9H3V2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                <path d="M8 6v5M5.5 9l2.5 2 2.5-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Прайс-лист (PDF)
            </a>
          </li>
        </ul>
      </div>

      {/* Правовые документы */}
      <div id="docs">
        <h2 className="text-2xl font-bold text-ink mb-6">Правовые документы</h2>
        <ul className="space-y-3 text-sm text-ink-muted">
          <li>
            <a href="/docs/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">
              Политика обработки персональных данных
            </a>
          </li>
          <li>
            <a href="/docs/consent-pd.pdf" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">
              Согласие на обработку персональных данных
            </a>
          </li>
          <li>
            <a href="/docs/consent-newsletter.pdf" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">
              Согласие на получение рассылок
            </a>
          </li>
          <li>
            <a href="/docs/cookie-policy.pdf" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">
              Политика использования cookie
            </a>
          </li>
          <li>
            <a href="/docs/terms.pdf" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">
              Пользовательское соглашение
            </a>
          </li>
        </ul>
      </div>

    </section>
  );
}
