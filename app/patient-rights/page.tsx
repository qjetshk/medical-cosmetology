import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Права пациентов — ИП Мешанихина Е.В.',
  description:
    'Права и обязанности граждан в сфере охраны здоровья по ФЗ-323. Правила поведения пациента по ПП РФ №736.',
};

const rights = [
  {
    article: 'Ст. 18',
    title: 'Право на охрану здоровья',
    text: 'Каждый имеет право на охрану здоровья, включая сохранение и укрепление физического и психического здоровья, долголетнюю активную жизнь.',
  },
  {
    article: 'Ст. 19',
    title: 'Право на медицинскую помощь',
    text: 'Право на получение медицинской помощи в гарантированном объёме, на выбор медицинской организации и врача, на консультации других специалистов.',
  },
  {
    article: 'Ст. 20',
    title: 'Информированное добровольное согласие',
    text: 'Любое медицинское вмешательство проводится только после добровольного информированного согласия пациента. Пациент вправе отказаться от вмешательства.',
  },
  {
    article: 'Ст. 21',
    title: 'Выбор врача',
    text: 'Пациент вправе выбирать врача и медицинскую организацию в соответствии с законодательством.',
  },
  {
    article: 'Ст. 22',
    title: 'Право на информацию о состоянии здоровья',
    text: 'Пациент имеет право получать информацию о своём здоровье, диагнозе, методах лечения и прогнозе, а также знакомиться с медицинской документацией.',
  },
  {
    article: 'Ст. 23',
    title: 'Право на информацию об организации',
    text: 'Пациент вправе получать сведения о медицинской организации, её лицензии, специалистах, перечне и стоимости услуг.',
  },
  {
    article: 'Ст. 25',
    title: 'Право на облегчение боли',
    text: 'Пациент имеет право на облегчение боли, связанной с заболеванием или медицинским вмешательством, доступными методами.',
  },
  {
    article: 'Ст. 26',
    title: 'Право на конфиденциальность',
    text: 'Сведения о факте обращения за медицинской помощью, состоянии здоровья и диагнозе составляют врачебную тайну.',
  },
];

const obligations = [
  'Заботиться о сохранении своего здоровья.',
  'Сообщать медицинскому работнику достоверную информацию о состоянии своего здоровья, в том числе о противопоказаниях к применению лекарственных средств.',
  'Соблюдать режим и правила поведения, установленные в медицинской организации.',
  'Выполнять назначения и рекомендации медицинского работника.',
  'Сотрудничать с медицинским работником при оказании медицинской помощи.',
];

const rules = [
  'Соблюдать вежливость и уважительное отношение к медицинскому персоналу и другим посетителям.',
  'Являться на приём в назначенное время. При невозможности — уведомить не менее чем за 24 часа.',
  'Предоставлять точные и полные сведения о состоянии здоровья, принимаемых препаратах и перенесённых заболеваниях.',
  'Соблюдать режим работы кабинета и санитарно-гигиенические требования.',
  'Подписывать информированное добровольное согласие перед каждой процедурой.',
  'Оплачивать медицинские услуги в соответствии с утверждённым прейскурантом.',
];

export default function PatientRightsPage() {
  return (
    <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16">

      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-2">Права пациентов</h1>
        <p className="text-ink-muted mb-12 max-w-xl">
          Права и обязанности граждан в сфере охраны здоровья (Федеральный закон № 323-ФЗ от 21.11.2011).
          Правила поведения пациента в соответствии с ПП РФ № 736 от 11.05.2023.
        </p>
      </FadeIn>

      <div className="space-y-14">

        {/* ── Права ── */}
        <FadeIn delay={0.04}>
          <h2 className="text-2xl font-bold text-ink mb-6">Права граждан</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rights.map((r) => (
              <div key={r.article} className="rounded-xl border border-line p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-sage-light text-sage-dark">
                    {r.article}
                  </span>
                  <p className="font-semibold text-ink text-sm">{r.title}</p>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Обязанности ── */}
        <FadeIn delay={0.06}>
          <h2 className="text-2xl font-bold text-ink mb-6">Обязанности граждан</h2>
          <div className="rounded-2xl border border-line p-6 md:p-8">
            <p className="text-xs text-ink-muted mb-4">Статья 27 Федерального закона № 323-ФЗ</p>
            <ul className="space-y-3">
              {obligations.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink-muted leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-coral-light text-coral flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* ── Правила поведения ── */}
        <FadeIn delay={0.08}>
          <h2 className="text-2xl font-bold text-ink mb-2">Правила поведения пациента</h2>
          <p className="text-sm text-ink-muted mb-6">
            ИП Мешанихина Е.В. в соответствии с ПП РФ № 736 от 11.05.2023
          </p>
          <div className="rounded-2xl border border-line p-6 md:p-8">
            <ul className="space-y-3">
              {rules.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink-muted leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* ── Документы ── */}
        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-line bg-sage-light/20 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-ink mb-1">Полный текст документов</p>
              <p className="text-sm text-ink-muted">Права и обязанности, порядок обжалования — в разделе документов</p>
            </div>
            <a
              href="/legal#rights"
              className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-coral hover:opacity-80 transition-opacity"
            >
              Перейти к документам
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
