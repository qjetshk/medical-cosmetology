import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Документы',
  description:
    'Нормативные и правовые документы: политика обработки персональных данных, пользовательское соглашение, правила платных услуг, права пациентов.',
};

/* ── Icons ──────────────────────────────────────────────────────────────── */

function DocIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M3 1.5h6.5L13 5v9.5H3V1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M9.5 1.5V5H13" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M5.5 8.5h5M5.5 11h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function ExtIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0 opacity-60">
      <path d="M4.5 1.5H1.5v9h9V7.5M7.5 1.5H10.5M10.5 1.5V4.5M10.5 1.5L5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── DocLink ────────────────────────────────────────────────────────────── */

function DocLink({ label, href }: { label: string; href?: string }) {
  const base =
    'flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors';

  if (!href) {
    return (
      <span className={`${base} border-line text-ink-muted/60 cursor-default select-none`}>
        <DocIcon />
        {label}
        <span className="ml-auto text-xs opacity-50">скоро</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} border-line text-ink hover:border-coral hover:text-coral bg-cream`}
    >
      <DocIcon />
      {label}
      <span className="ml-auto text-xs text-ink-muted">PDF ↗</span>
    </a>
  );
}

/* ── ExternalLink ───────────────────────────────────────────────────────── */

function ExternalLink({ href, label, sub }: { href: string; label: string; sub?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-2.5 rounded-xl border border-line px-4 py-3 text-sm hover:border-sage hover:bg-sage-light/20 transition-colors group"
    >
      <span className="mt-0.75 text-sage">
        <ExtIcon />
      </span>
      <span>
        <span className="font-medium text-ink">{label}</span>
        {sub && <span className="block text-xs text-ink-muted mt-0.5">{sub}</span>}
      </span>
    </a>
  );
}

/* ── Section ────────────────────────────────────────────────────────────── */

function Section({
  id,
  badge,
  title,
  note,
  children,
}: {
  id: string;
  badge?: string;
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-24 border-t border-line pt-10 first:border-t-0 first:pt-0">
      <div className="mb-6">
        {badge && (
          <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-ink-muted/70 mb-2">
            {badge}
          </span>
        )}
        <h2 className="text-xl font-bold text-ink">{title}</h2>
        {note && <p className="mt-2 text-sm text-ink-muted leading-relaxed max-w-2xl">{note}</p>}
      </div>
      {children}
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────── */

export default function LegalPage() {
  return (
    <div className="max-w-wrapper mx-auto px-4 md:px-6 py-16">

      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-2">Документы</h1>
        <p className="text-ink-muted mb-12 max-w-xl">
          Нормативные, правовые и информационные документы ИП Мешанихина Е.В. в соответствии
          с требованиями Приказа Минздрава России от 13.03.2025 № 118н и ПП РФ № 736.
        </p>
      </FadeIn>

      <div className="space-y-0">

        {/* ── 1. О клинике ─────────────────────────────────────────────── */}
        <FadeIn>
          <Section
            id="org"
            badge="118н"
            title="Информация о медицинской организации"
            note="Сведения об ИП, реквизиты, адрес, режим работы, структура управления."
          >
            <div className="grid gap-2 sm:grid-cols-2 mb-5">
              <DocLink label="Информация о медицинской организации" href="/docs/Информация о медицинской организации.pdf" />
              <DocLink label="Информация о видах медицинской помощи" href="/docs/Информация о видах медицинской помощи.pdf" />
              <DocLink label="Информация о возможности получения медицинской помощи" href="/docs/Информация о возможности получения медицинской помощи.pdf" />
              <DocLink label="Информация о правилах записи на первичный приём" href="/docs/Информация о правилах записи на первичный приём.pdf" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <ExternalLink
                href="https://egrul.nalog.ru"
                label="ЕГРИП — ФНС России"
                sub="Проверить сведения об ИП"
              />
              <ExternalLink
                href="https://roszdravnadzor.gov.ru/services/licenses"
                label="Реестр лицензий Росздравнадзора"
                sub="Проверить статус лицензии"
              />
            </div>
          </Section>
        </FadeIn>

        {/* ── 2. Платные услуги ────────────────────────────────────────── */}
        <FadeIn>
          <Section
            id="paid"
            badge="ПП РФ № 736"
            title="Платные медицинские услуги"
            note="Правила оказания платных медицинских услуг, прейскурант, информация о ценах."
          >
            <div className="grid gap-2 sm:grid-cols-2 mb-5">
              <DocLink label="Положение о порядке оказания платных медицинских услуг" href="/docs/Положение о порядке оказания платных медицинских услуг.pdf" />
              <DocLink label="Прейскурант на медицинские услуги (прайс-лист)" href="/docs/Прейскурант на медицинские услуги.pdf" />
              <DocLink label="Памятка — как получить социальный налоговый вычет" href="/docs/Памятка для пациентов как получить социальный вычет.pdf" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <ExternalLink
                href="https://normativ.kontur.ru/document?moduleId=1&documentId=448474"
                label="Правила предоставления платных медицинских услуг"
                sub="ПП РФ № 736 — КонтурНорматив"
              />
              <ExternalLink
                href="https://www.nalog.gov.ru/rn77/taxation/taxes/ndfl/nalog_vichet/soc_nv/soc_nv_m/"
                label="Налоговый вычет — ФНС"
                sub="Справка и документы для оформления"
              />
            </div>
          </Section>
        </FadeIn>

        {/* ── 3. Права пациентов ───────────────────────────────────────── */}
        <FadeIn>
          <Section
            id="rights"
            badge="ФЗ-323"
            title="Права и обязанности граждан"
            note="Права пациентов, порядок обжалования, гарантии бесплатной медицинской помощи."
          >
            <div className="grid gap-2 sm:grid-cols-2 mb-5">
              <DocLink label="Права и обязанности граждан в сфере охраны здоровья" href="/docs/Информация о правах и обязанностях граждан в сфере здравоохранения.pdf" />
              <DocLink label="Порядок обжалования действий медицинского персонала" href="/docs/Порядок обжалования действий (бездействий) медицинского персонала.pdf" />
              <DocLink label="Памятка о гарантиях бесплатного оказания медицинской помощи" href="/docs/Памятка для граждан о гарантиях бесплатного оказания медицинской помощи.pdf" />
            </div>
          </Section>
        </FadeIn>

        {/* ── 4. Нормативно-правовые акты ──────────────────────────────── */}
        <FadeIn>
          <Section
            id="laws"
            badge="НПА"
            title="Нормативно-правовые акты"
            note="Федеральные законы, постановления и приказы, регулирующие оказание медицинской помощи."
          >
            <div className="grid gap-2 sm:grid-cols-2">
              <ExternalLink
                href="https://minzdrav.gov.ru/documents/7025-federalnyy-zakon-ot-21-noyabrya-2011-g-323-fz-ob-osnovah-ohrany-zdorovya-grazhdan-v-rossiyskoy-federatsii"
                label="ФЗ-323 «Об основах охраны здоровья граждан»"
                sub="от 21.11.2011 · Минздрав России"
              />
              <ExternalLink
                href="https://normativ.kontur.ru/document?moduleId=1&documentId=502750"
                label="ФЗ-326 «Об обязательном медицинском страховании»"
                sub="Актуальная редакция · КонтурНорматив"
              />
              <ExternalLink
                href="https://normativ.kontur.ru/document?moduleId=1&documentId=504449"
                label="Закон о защите прав потребителей"
                sub="Актуальная редакция · КонтурНорматив"
              />
              <ExternalLink
                href="http://government.ru/docs/all/147526/"
                label="ПП РФ № 736 — Правила платных медицинских услуг"
                sub="Постановление Правительства РФ · government.ru"
              />
              <ExternalLink
                href="http://government.ru/docs/all/157366/"
                label="Программа госгарантий на 2025–2027 гг. (ПП РФ № 1940)"
                sub="от 27.12.2024 · government.ru"
              />
              <ExternalLink
                href="http://foms74.ru/page/territorialnaya_programma_oms"
                label="Территориальная программа госгарантий Челябинской обл."
                sub="Постановление Правительства Чел. обл. от 19.12.2024 № 719-П · foms74.ru"
              />
              <ExternalLink
                href="https://normativ.kontur.ru/document?moduleId=1&documentId=475217&ysclid=mhuyadchvf795970662"
                label="Национальный календарь профилактических прививок"
                sub="Приказ Минздрава № 1122н от 06.12.2021 · КонтурНорматив"
              />
              <ExternalLink
                href="https://minzdrav.gov.ru/ministry/61/4/stranitsa-857/poryadki-okazaniya-meditsinskoy-pomoschi-naseleniyu-rossiyskoy-federatsii"
                label="Порядки оказания медицинской помощи населению"
                sub="Официальный сайт Минздрава России"
              />
              <ExternalLink
                href="https://normativ.kontur.ru/document?moduleId=1&documentId=500961&ysclid=mhuyayunoz181150151"
                label="Порядок первичной медико-санитарной помощи"
                sub="Приказ Минздрава № 202н от 14.04.2025 · КонтурНорматив"
              />
            </div>
          </Section>
        </FadeIn>

        {/* ── 5. Лекарственное обеспечение ─────────────────────────────── */}
        <FadeIn>
          <Section
            id="pharma"
            badge="Лекарства"
            title="Лекарственное обеспечение"
            note="Перечни лекарственных препаратов, утверждённые Правительством РФ."
          >
            <div className="grid gap-2 sm:grid-cols-2">
              <ExternalLink
                href="https://normativ.kontur.ru/document?moduleId=1&documentId=491464&ysclid=mlifljg56j610801397"
                label="ЖНВЛП"
                sub="Жизненно необходимые и важнейшие лекарственные препараты · Распоряжение № 2406-р"
              />
              <ExternalLink
                href="https://normativ.kontur.ru/document?moduleId=1&documentId=491464&ysclid=mlifljg56j610801397"
                label="Препараты для льготников (орфанные заболевания)"
                sub="Гемофилия, муковисцидоз, онкология, рассеянный склероз и др. · Распоряжение № 2406-р"
              />
              <ExternalLink
                href="https://normativ.kontur.ru/document?moduleId=1&documentId=491464&ysclid=mlifljg56j610801397"
                label="Препараты по решению врачебных комиссий"
                sub="Назначаемые по решению ВК медицинских организаций · Распоряжение № 2406-р"
              />
              <ExternalLink
                href="https://normativ.kontur.ru/document?moduleId=1&documentId=61472&ysclid=mlifm09wr7815207225"
                label="Препараты бесплатно и со скидкой 50%"
                sub="Отдельным группам населения при амбулаторном лечении · Постановление № 890"
              />
            </div>
          </Section>
        </FadeIn>

        {/* ── 5. Медицинские документы ─────────────────────────────────── */}
        <FadeIn>
          <Section
            id="medical"
            badge="Документы"
            title="Медицинские документы и бланки"
            note="Правила подготовки к процедурам. Бланки согласий подписываются пациентом перед каждым вмешательством."
          >
            <div className="grid gap-2 sm:grid-cols-2">
              <DocLink label="Правила подготовки к процедурам и исследованиям" href="/docs/Правила подготовки к диагностическим исследованиям.pdf" />
              <DocLink label="Сроки и порядок проведения диспансеризации" href="/docs/Информация о сроках, порядке, результатах проводимой диспансеризации.pdf" />
              <DocLink label="Информация о страховых медицинских организациях" href="/docs/Информация о страховых медицинских организациях, с которыми заключены договоры.pdf" />
              <DocLink label="Информированное добровольное согласие на вмешательство (бланк)" href="/docs/ИДС.pdf" />
              <DocLink label="Отказ от медицинского вмешательства (бланк)" href="/docs/Отказ от ИДС.pdf" />
            </div>
          </Section>
        </FadeIn>

        {/* ── 5. Охрана труда ──────────────────────────────────────────── */}
        <FadeIn>
          <Section
            id="labor"
            badge="Охрана труда"
            title="Охрана труда"
          >
            <div className="grid gap-2 sm:grid-cols-2">
              <DocLink label="Перечень мероприятий по улучшению условий и охраны труда" href="/docs/Перечень мероприятий по улучшению условий и охраны труда.pdf" />
            </div>
          </Section>
        </FadeIn>

        {/* ── 6. Надзорные органы ──────────────────────────────────────── */}
        <FadeIn>
          <Section
            id="supervisory"
            badge="Надзор"
            title="Территориальные надзорные органы"
            note="Адреса и телефоны органов государственного контроля в сфере здравоохранения."
          >
            <div className="grid gap-2 sm:grid-cols-2 mb-5">
              <DocLink label="Контакты надзорных органов" href="/docs/Информация об адресах и номерах телефонов органа государственной власти.pdf" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <ExternalLink
                href="https://74reg.roszdravnadzor.gov.ru"
                label="Росздравнадзор по Челябинской области"
                sub="454091, Челябинск, пл. МОПРа, 8а · 8 (351) 263-21-22"
              />
              <ExternalLink
                href="https://74.rospotrebnadzor.ru"
                label="Роспотребнадзор по Челябинской области"
                sub="454092, Челябинск, ул. Елькина, 73 · 8 (351) 263-64-90"
              />
            </div>
          </Section>
        </FadeIn>

        {/* ── 7. Персональные данные ───────────────────────────────────── */}
        <FadeIn>
          <Section
            id="pd"
            badge="152-ФЗ"
            title="Персональные данные"
            note="Документы об обработке персональных данных в соответствии с ФЗ-152."
          >
            <div className="grid gap-2 sm:grid-cols-2 mb-5">
              <DocLink label="Политика обработки персональных данных" href="/docs/Обработка персональных данных.pdf" />
              <DocLink label="Согласие на обработку персональных данных (через сайт)" href="/docs/Согласие на обработку персональных данных (сайт).pdf" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <ExternalLink
                href="https://rkn.gov.ru"
                label="Роскомнадзор"
                sub="Регулятор в сфере персональных данных"
              />
              <ExternalLink
                href="https://pd.rkn.gov.ru/operators-registry/operators-list/"
                label="Реестр операторов ПД"
                sub="Проверить регистрацию оператора"
              />
            </div>
          </Section>
        </FadeIn>

        {/* ── 8. Cookie и рассылки ─────────────────────────────────────── */}
        <FadeIn>
          <Section
            id="cookie"
            badge="Cookie"
            title="Cookie и рассылки"
          >
            <div className="grid gap-2 sm:grid-cols-2">
              <DocLink label="Политика использования cookie" href="/docs/Политика использования cookie.pdf" />
              <DocLink label="Согласие на обработку cookie" href="/docs/Согласие на обработку cookie.pdf" />
              <DocLink label="Согласие на получение рекламно-информационных рассылок" href="/docs/Согласие на получение рекламно-информационных рассылок.pdf" />
            </div>
          </Section>
        </FadeIn>

        {/* ── 9. Пользовательское соглашение ───────────────────────────── */}
        <FadeIn>
          <Section
            id="terms"
            badge="Сайт"
            title="Пользовательское соглашение"
            note="Правила использования сайта ИП Мешанихина Е.В."
          >
            <div className="grid gap-2 sm:grid-cols-2">
              <DocLink label="Пользовательское соглашение" href="/docs/Пользовательское соглашение.pdf" />
            </div>
          </Section>
        </FadeIn>

      </div>
    </div>
  );
}
