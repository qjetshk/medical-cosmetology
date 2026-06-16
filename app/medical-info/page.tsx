import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import { owner } from '@/data/owner';

export const metadata: Metadata = {
  title: 'Информация для пациентов — ИП Мешанихина Е.В.',
  description:
    'Виды медицинской помощи, правила записи на приём, подготовка к процедурам, государственные гарантии.',
};

const appointmentSteps = [
  {
    label: 'По телефону',
    value: owner.phone,
    href: owner.phoneHref,
    note: owner.workingHours,
  },
  {
    label: 'По электронной почте',
    value: owner.email,
    href: `mailto:${owner.email}`,
    note: 'Ответ в рабочее время',
  },
  {
    label: 'Лично',
    value: owner.clinicAddress,
    href: null,
    note: owner.workingHours,
  },
];

const prepGroups = [
  {
    title: 'Первичная консультация',
    items: [
      'Прийти с чистой кожей лица — без макияжа, BB/CC-кремов и тонального средства.',
      'При наличии аллергий или хронических кожных заболеваний взять выписки или фотографии с предыдущих обращений.',
      'Снять контактные линзы при осмотре периорбитальной зоны.',
    ],
  },
  {
    title: 'Инъекционные процедуры',
    subtitle: 'Мезотерапия, биоревитализация',
    items: [
      'За 2–3 дня: исключить алкоголь, сауну, солярий.',
      'По согласованию с лечащим врачом: отменить антикоагулянты и НПВС (аспирин, ибупрофен).',
      'В день процедуры: чистая кожа без макияжа, паспорт при себе.',
      'Сообщить врачу обо всех принимаемых препаратах и БАД.',
      'Противопоказания для переноса: воспаление в зоне введения, ОРВИ, обострение хронических заболеваний, беременность, лактация.',
    ],
  },
  {
    title: 'Химические пилинги',
    items: [
      'За 1–2 недели: исключить восковую депиляцию в зоне пилинга.',
      'По согласованию с врачом: прекратить применение ретиноидов.',
      'В день процедуры: чистая кожа, не использовать кислотосодержащие средства самостоятельно.',
    ],
  },
  {
    title: 'Чистки и уходы',
    items: [
      'Прийти с чистой кожей без макияжа.',
      'Не наносить лосьоны, кремы с активными компонентами в день процедуры.',
      'Снять украшения с зоны обработки.',
    ],
  },
];

export default function MedicalInfoPage() {
  return (
    <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16">

      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-2">Информация для пациентов</h1>
        <p className="text-ink-muted mb-14 max-w-xl">
          Сведения о видах медицинской помощи, правилах записи и подготовки к процедурам
          в соответствии с Приказом Минздрава России № 118н от 13.03.2025.
        </p>
      </FadeIn>

      <div className="space-y-16">

        {/* ── 1. Виды помощи ── */}
        <FadeIn delay={0.04}>
          <h2 className="text-2xl font-bold text-ink mb-6">Виды медицинской помощи</h2>
          <div className="rounded-2xl border border-line p-6 md:p-8 space-y-4">
            <p className="text-sm text-ink-muted leading-relaxed">
              ИП Мешанихина Елена Владимировна в соответствии с лицензией{' '}
              <span className="text-ink font-medium">{owner.licenses[0].number}</span>{' '}
              от {owner.licenses[0].issuedAt} оказывает следующие виды медицинской помощи:
            </p>
            <ul className="space-y-3">
              {[
                'Первичная специализированная медико-санитарная помощь в амбулаторных условиях по косметологии.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-sage-light text-sage-dark flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-muted leading-relaxed pt-2 border-t border-line">
              Информация о методах оказания медицинской помощи, связанных с ними рисках и ожидаемых результатах
              содержится в информированном добровольном согласии на каждое вмешательство, которое подписывается
              пациентом перед процедурой.
            </p>
          </div>
        </FadeIn>

        {/* ── 2. Запись ── */}
        <FadeIn delay={0.06}>
          <h2 className="text-2xl font-bold text-ink mb-6">Правила записи на приём</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {appointmentSteps.map((step) => (
              <div key={step.label} className="rounded-xl border border-line p-5">
                <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mb-2">{step.label}</p>
                {step.href ? (
                  <a href={step.href} className="text-sm font-medium text-coral hover:opacity-80 transition-opacity block mb-1">
                    {step.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-ink mb-1">{step.value}</p>
                )}
                <p className="text-xs text-ink-muted">{step.note}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-ink-muted">
            В особых случаях, включая необходимость экстренной помощи, услуги предоставляются без предварительной записи.
          </p>
        </FadeIn>

        {/* ── 3. Подготовка ── */}
        <FadeIn delay={0.08}>
          <h2 className="text-2xl font-bold text-ink mb-6">Подготовка к процедурам</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {prepGroups.map((group) => (
              <div key={group.title} className="rounded-xl border border-line p-5">
                <p className="font-semibold text-ink mb-1">{group.title}</p>
                {group.subtitle && (
                  <p className="text-xs text-ink-muted mb-3">{group.subtitle}</p>
                )}
                <ul className="space-y-2 mt-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-muted leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-ink-muted">
            При возникновении нежелательных реакций после процедуры (отёк, гиперемия, высыпания) —
            незамедлительно свяжитесь с клиникой:{' '}
            <a href={owner.phoneHref} className="text-coral hover:opacity-80 transition-opacity">{owner.phone}</a>.
          </p>
        </FadeIn>

        {/* ── 4. Госгарантии ── */}
        <FadeIn delay={0.1}>
          <h2 className="text-2xl font-bold text-ink mb-6">Государственные гарантии</h2>
          <div className="rounded-2xl border border-coral/30 bg-coral-light/20 p-6 md:p-8 mb-5">
            <p className="font-semibold text-ink mb-3">
              Все услуги ИП Мешанихина Е.В. являются платными
            </p>
            <p className="text-sm text-ink-muted leading-relaxed">
              Медицинские услуги оказываются на платной основе в соответствии с ПП РФ № 736 от 11.05.2023.
              ИП Мешанихина Е.В. не участвует в программе государственных гарантий бесплатного оказания
              гражданам медицинской помощи и не работает по полисам ОМС. Отказ от платных услуг
              не влечёт уменьшения объёма помощи, гарантированной государством в других организациях.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.rosminzdrav.ru/poleznye-resursy/programma-gosgarantiy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm text-ink-muted hover:border-sage hover:text-sage transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0 opacity-60">
                <path d="M4.5 1.5H1.5v9h9V7.5M7.5 1.5H10.5M10.5 1.5V4.5M10.5 1.5L5 7"
                  stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Программа государственных гарантий — Минздрав России
            </a>
            <a
              href="/docs/Памятка для граждан о гарантиях бесплатного оказания медицинской помощи.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-1.5 rounded-xl border border-line px-5 py-3 text-sm text-ink-muted hover:border-coral hover:text-coral transition-colors"
            >
              Памятка о госгарантиях — PDF ↗
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
