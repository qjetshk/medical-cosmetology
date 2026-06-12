import type { Metadata } from 'next';
import InfoTable from '@/components/InfoTable';
import { owner } from '@/data/owner';

export const metadata: Metadata = {
  title: 'Лицензия',
  description: 'Медицинская лицензия: номер, дата выдачи, орган выдачи. ИП Мешанихина Е.В.',
};

export default function LicensePage() {
  return (
    <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16">
      <h1 className="text-4xl font-bold text-ink mb-10">Лицензия</h1>

      <div className="space-y-8">
        {owner.licenses.map((lic, i) => (
          <div key={i} className="rounded-2xl border border-line p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sage-light text-sage-dark">
                {lic.status}
              </span>
              <h2 className="text-lg font-semibold text-ink">{lic.number}</h2>
            </div>
            <InfoTable
              rows={[
                { label: 'Регистрационный номер', value: lic.number },
                { label: 'Дата выдачи', value: lic.issuedAt },
                { label: 'Дата начала действия', value: lic.effectiveFrom },
                { label: 'Лицензирующий орган', value: lic.issuedBy },
                { label: 'Вид деятельности', value: lic.activity },
                { label: 'Срок действия', value: lic.validUntil },
                { label: 'Источник', value: lic.source },
              ]}
            />
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a
          href="/docs/Лицензия Л041-01024-74_00304952.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-line bg-cream px-5 py-3 text-sm text-ink hover:border-coral hover:text-coral transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
            <path d="M3 1.5h6.5L13 5v9.5H3V1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
            <path d="M9.5 1.5V5H13" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
            <path d="M5.5 8.5h5M5.5 11h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          Выписка из реестра лицензий (PDF)
        </a>
        <a
          href="https://roszdravnadzor.gov.ru/services/licenses"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm text-ink-muted hover:border-sage hover:text-sage transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0 opacity-60">
            <path d="M4.5 1.5H1.5v9h9V7.5M7.5 1.5H10.5M10.5 1.5V4.5M10.5 1.5L5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Реестр лицензий Росздравнадзора
        </a>
      </div>
    </section>
  );
}
