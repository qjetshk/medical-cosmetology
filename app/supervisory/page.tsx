import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Контрольные органы — ИП Мешанихина Е.В.',
  description:
    'Контакты территориальных органов Росздравнадзора и Роспотребнадзора по Челябинской области.',
};

const bodies = [
  {
    name: 'Росздравнадзор',
    full: 'Территориальный орган Федеральной службы по надзору в сфере здравоохранения по Челябинской области',
    scope: 'Контроль качества и безопасности медицинской деятельности, соблюдения лицензионных требований',
    address: '454091, г. Челябинск, пл. МОПРа, 8а',
    phone: '8 (351) 263-21-22',
    email: 'info@reg74.roszdravnadzor.gov.ru',
    site: 'https://74reg.roszdravnadzor.gov.ru',
    siteLabel: '74reg.roszdravnadzor.gov.ru',
    color: 'coral' as const,
  },
  {
    name: 'Роспотребнадзор',
    full: 'Управление Федеральной службы по надзору в сфере защиты прав потребителей и благополучия человека по Челябинской области',
    scope: 'Защита прав потребителей, санитарно-эпидемиологический надзор',
    address: '454092, г. Челябинск, ул. Елькина, 73',
    phone: '8 (351) 263-64-90',
    email: null,
    site: 'https://74.rospotrebnadzor.ru',
    siteLabel: '74.rospotrebnadzor.ru',
    color: 'sage' as const,
  },
];

function ExtIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M4.5 1.5H1.5v9h9V7.5M7.5 1.5H10.5M10.5 1.5V4.5M10.5 1.5L5 7"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function SupervisoryPage() {
  return (
    <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16">

      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-2">Контрольные органы</h1>
        <p className="text-ink-muted mb-12 max-w-xl">
          Территориальные органы государственного контроля в сфере здравоохранения
          по Челябинской области. Публикуется в соответствии с Приказом Минздрава России № 118н от 13.03.2025.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {bodies.map((b, i) => (
          <FadeIn key={b.name} delay={0.06 * i}>
            <div className="rounded-2xl border border-line p-6 h-full flex flex-col">

              <div className="mb-5">
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 ${
                  b.color === 'coral'
                    ? 'bg-coral-light text-coral'
                    : 'bg-sage-light text-sage-dark'
                }`}>
                  {b.name}
                </span>
                <p className="text-sm text-ink leading-snug font-medium">{b.full}</p>
              </div>

              <p className="text-xs text-ink-muted leading-relaxed mb-5 pb-5 border-b border-line">
                {b.scope}
              </p>

              <dl className="space-y-3 mt-auto">
                <div className="flex items-start gap-2">
                  <dt className="text-xs text-ink-muted w-16 shrink-0 pt-0.5">Адрес</dt>
                  <dd className="text-sm text-ink">{b.address}</dd>
                </div>
                <div className="flex items-start gap-2">
                  <dt className="text-xs text-ink-muted w-16 shrink-0 pt-0.5">Телефон</dt>
                  <dd>
                    <a href={`tel:${b.phone.replace(/\D/g, '')}`}
                      className="text-sm text-ink hover:text-coral transition-colors">
                      {b.phone}
                    </a>
                  </dd>
                </div>
                {b.email && (
                  <div className="flex items-start gap-2">
                    <dt className="text-xs text-ink-muted w-16 shrink-0 pt-0.5">Email</dt>
                    <dd>
                      <a href={`mailto:${b.email}`}
                        className="text-sm text-ink hover:text-coral transition-colors break-all">
                        {b.email}
                      </a>
                    </dd>
                  </div>
                )}
                <div className="flex items-start gap-2">
                  <dt className="text-xs text-ink-muted w-16 shrink-0 pt-0.5">Сайт</dt>
                  <dd>
                    <a href={b.site} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-coral hover:opacity-80 transition-opacity inline-flex items-center gap-1">
                      {b.siteLabel}
                      <ExtIcon />
                    </a>
                  </dd>
                </div>
              </dl>

            </div>
          </FadeIn>
        ))}
      </div>

      {/* ── Порядок обжалования ── */}
      <FadeIn delay={0.12}>
        <div className="rounded-2xl border border-line bg-sage-light/20 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-ink mb-1">Порядок обжалования действий персонала</p>
            <p className="text-sm text-ink-muted">
              Документ с описанием порядка обращения и обжалования — в разделе документов
            </p>
          </div>
          <a
            href="/legal#supervisory"
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-coral hover:opacity-80 transition-opacity"
          >
            Перейти к документам
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </FadeIn>

    </section>
  );
}
