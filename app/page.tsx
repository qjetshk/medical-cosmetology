import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { owner } from '@/data/owner';
import ServiceCategoryGrid from '@/components/ServiceCategoryGrid';

export const metadata: Metadata = {
  title: 'Косметолог — ИП Мешанихина Е.В. | Челябинск',
  description:
    'Врачебная косметология в Челябинске. Платные медицинские услуги по лицензии. Запись на приём по телефону.',
};

const advantages = [
  'Лицензированная медицинская деятельность',
  'Врач с высшим медицинским образованием',
  'Только сертифицированные препараты и материалы',
  'Индивидуальный план лечения для каждого пациента',
  'Запись без ожидания — по телефону',
  'Соответствие стандартам и протоколам Минздрава',
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">

          {/* Текст */}
          <div className="flex-1 min-w-0">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-[88px] font-bold text-ink leading-tight mb-6">
                Врачебная<br />косметология
              </h1>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="text-ink-muted text-lg max-w-md mb-6 leading-relaxed">
                Профессиональный уход с медицинским подходом.<br />
                {owner.clinicAddress}
              </p>
            </FadeIn>
            <FadeIn delay={0.14}>
              <ul className="space-y-2.5 mb-8" aria-label="Ключевые преимущества">
                {[
                  'Лицензированный врач-косметолог',
                  'Сертифицированные препараты',
                  'Индивидуальный план лечения',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink-muted">
                    <span
                      className="w-4 h-4 rounded-full bg-sage-light flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path
                          d="M1 3l2 2 4-4"
                          stroke="#718F78"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2}>
              <a
                href={owner.phoneHref}
                className="inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral bg-coral text-white hover:opacity-90 px-7 py-3.5 text-base"
              >
                Записаться на приём
              </a>
            </FadeIn>
          </div>

          {/* Изображение */}
          <FadeIn delay={0.1} y={-12} className="flex-1 w-full">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
              <Image
                src="/photos/hero.png"
                alt="Кабинет косметолога"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── Направления ───────────────────────────────────────── */}
      <section className="bg-sage-light/40 py-16 md:py-20">
        <div className="max-w-wrapper mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-2">
              Направления работы
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              Полный спектр процедур — от классических уходов до современных инъекционных и аппаратных методик.
            </p>
          </FadeIn>
          <ServiceCategoryGrid className="mb-8" />
          <FadeIn delay={0.22}>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-coral hover:opacity-80 transition-opacity"
            >
              Смотреть все услуги и цены
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3 7h8M8 4l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── О подходе ─────────────────────────────────────────── */}
      <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center md:gap-16">
          <div className="flex-1 min-w-0 mb-10 md:mb-0">
            <FadeIn>
              <p className="text-sage font-medium text-sm uppercase tracking-widest mb-4">
                О подходе
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6 leading-snug">
                Каждый пациент —<br />индивидуальный план
              </h2>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="text-ink-muted text-lg leading-relaxed mb-4">
                Перед любой процедурой провожу детальную консультацию и оцениваю
                состояние кожи. Назначаю только те методики, которые покажут
                реальный результат именно в вашем случае.
              </p>
              <p className="text-ink-muted text-lg leading-relaxed mb-8">
                Работаю исключительно с сертифицированными препаратами
                и оборудованием. Все вмешательства — строго в рамках
                медицинских протоколов.
              </p>
            </FadeIn>
            <FadeIn delay={0.14}>
              <Link
                href="/specialist"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-coral hover:opacity-80 transition-opacity"
              >
                Подробнее о специалисте
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M3 7h8M8 4l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} y={-10} className="flex-1 w-full">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
              <Image
                src="/photos/approach.png"
                alt="Косметологический кабинет — рабочий стол специалиста"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Преимущества ──────────────────────────────────────── */}
      <section className="border-y border-line py-16 md:py-20">
        <div className="max-w-wrapper mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                Почему выбирают
              </h2>
              <p className="text-ink-muted mb-8">
                Медицинская косметология — это лечение, а не только уход.
                Подходим к каждому случаю именно так.
              </p>
              <a
                href={owner.phoneHref}
                className="inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral bg-coral text-white hover:opacity-90 px-5 py-2.5 text-sm"
              >
                Записаться
              </a>
            </FadeIn>
            <ul className="space-y-4">
              {advantages.map((item, i) => (
                <FadeIn key={item} delay={0.05 * i} y={10}>
                  <li className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full bg-coral-light flex items-center justify-center shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                        <path
                          d="M1 3.5l2.5 2.5 4.5-5"
                          stroke="#C8726A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-ink-muted text-sm leading-relaxed">{item}</span>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Специалист ────────────────────────────────────────── */}
      <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16 md:py-20">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-10">Специалист</h2>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="flex flex-col sm:flex-row gap-8 items-start max-w-2xl rounded-2xl border border-line p-6 md:p-8">
            <div>
              <p className="font-semibold text-ink text-xl mb-1">{owner.fullName}</p>
              <p className="text-sage text-sm font-medium mb-4">Врач-косметолог</p>
              <p className="text-ink-muted text-sm leading-relaxed mb-5">
                Медицинское образование по специальности косметология.
                Регулярное повышение квалификации и аккредитация по специальности.
                Работает строго в соответствии с требованиями законодательства.
              </p>
              <Link
                href="/specialist"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-coral hover:opacity-80 transition-opacity"
              >
                Подробнее
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M3 7h8M8 4l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── CTA — запись ──────────────────────────────────────── */}
      <section className="bg-sage-light/50 py-16 md:py-20">
        <div className="max-w-wrapper mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">
              Запись на приём
            </h2>
            <p className="text-ink-muted mb-2">{owner.clinicAddress}</p>
            <a
              href={owner.phoneHref}
              className="text-2xl md:text-3xl font-semibold text-ink hover:text-coral transition-colors block mb-8"
            >
              {owner.phone}
            </a>
            <a
              href={owner.phoneHref}
              className="inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral bg-coral text-white hover:opacity-90 px-7 py-3.5 text-base"
            >
              Позвонить
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
