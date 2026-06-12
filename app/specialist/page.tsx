import type { Metadata } from 'next';
import InfoTable from '@/components/InfoTable';
import FadeIn from '@/components/FadeIn';
import { owner } from '@/data/owner';

export const metadata: Metadata = {
  title: 'Специалист — ИП Мешанихина Е.В.',
  description:
    'Мешанихина Елена Владимировна — врач-косметолог. Образование, аккредитация, график приёма.',
};

export default function SpecialistPage() {
  return (
    <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16">

      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-2">Специалист</h1>
        <p className="text-ink-muted mb-12 max-w-xl">
          Сведения о медицинском работнике в соответствии с требованиями Приказа Минздрава России № 118н.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

        {/* ── Левая колонка: имя + образование ── */}
        <div className="space-y-5">

          <FadeIn>
            <div className="rounded-2xl border border-line p-6">
              <p className="text-2xl font-bold text-ink mb-1">{owner.fullName}</p>
              <p className="text-sage font-medium mb-5">Врач-косметолог</p>
              <InfoTable
                rows={[
                  { label: 'Должность по номенклатуре', value: 'Врач-косметолог' },
                  { label: 'Статус', value: 'Индивидуальный предприниматель' },
                  { label: 'ОГРНИП', value: owner.ogrnip },
                  { label: 'ИНН', value: owner.inn },
                ]}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="rounded-2xl border border-line p-6">
              <h2 className="text-base font-bold text-ink mb-4">Образование</h2>
              <div className="space-y-5">

                <div>
                  <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mb-2">
                    Диплом о высшем образовании
                  </p>
                  <InfoTable
                    rows={[
                      { label: 'Уровень', value: 'Высшее — специалитет' },
                      { label: 'Серия и номер', value: 'АВС 0295385' },
                      { label: 'Организация', value: 'Челябинский государственный медицинский институт' },
                      { label: 'Год выдачи', value: '30 июня 1992 г.' },
                      { label: 'Специальность', value: '«Лечебное дело»' },
                    ]}
                  />
                </div>

                <div className="border-t border-line pt-5">
                  <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mb-2">
                    Клиническая интернатура
                  </p>
                  <InfoTable
                    rows={[
                      { label: 'Специальность', value: 'Дерматовенерология' },
                      { label: 'Серия и номер', value: 'АВС 0295385' },
                      { label: 'Организация', value: 'Челябинский государственный медицинский институт' },
                      { label: 'Дата окончания', value: '30.06.2010' },
                    ]}
                  />
                </div>

                <div className="border-t border-line pt-5">
                  <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mb-2">
                    Профессиональная переподготовка
                  </p>
                  <InfoTable
                    rows={[
                      { label: 'Специальность', value: 'Косметология' },
                      { label: 'Серия и номер', value: 'ПП-1 № 555879' },
                      { label: 'Организация', value: 'Челябинская государственная медицинская академия Росздрава' },
                      { label: 'Дата выдачи', value: '28 декабря 2010 г.' },
                    ]}
                  />
                </div>

              </div>
            </div>
          </FadeIn>

        </div>

        {/* ── Правая колонка: аккредитация + график + лицензия ── */}
        <div className="space-y-5">

          <FadeIn delay={0.07}>
            <div className="rounded-2xl border border-line p-6">
              <h2 className="text-base font-bold text-ink mb-4">Аккредитация</h2>
              <InfoTable
                rows={[
                  { label: 'Специальность', value: '«Косметология»' },
                  { label: 'Срок действия', value: 'до 21.10.2030' },
                ]}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-line p-6">
              <h2 className="text-base font-bold text-ink mb-4">График работы и приёма</h2>
              <InfoTable
                rows={[
                  { label: 'График работы', value: owner.workingHours },
                  { label: 'Часы приёма', value: owner.appointmentSchedule },
                  { label: 'Запись', value: owner.phone },
                ]}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.13}>
            <div className="rounded-2xl border border-line p-6">
              <h2 className="text-base font-bold text-ink mb-4">Лицензия</h2>
              <InfoTable
                rows={[
                  { label: 'Номер', value: owner.licenses[0].number },
                  { label: 'Дата выдачи', value: owner.licenses[0].issuedAt },
                  { label: 'Орган', value: owner.licenses[0].issuedBy },
                  { label: 'Срок действия', value: owner.licenses[0].validUntil },
                ]}
              />
              <a
                href="/license"
                className="inline-flex items-center gap-1.5 mt-4 text-sm text-coral hover:opacity-80 transition-opacity"
              >
                Выписка из реестра лицензий
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 6h7M7 3.5l2.5 2.5L7 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
