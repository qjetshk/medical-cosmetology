import type { Metadata } from 'next';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Косметолог — ИП Мешанихина Е.В. | Копейск',
  description:
    'Профессиональная косметология в Копейске. Платные медицинские услуги по лицензии. Запись на приём.',
};

export default function HomePage() {
  return (
    <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">

        {/* Текст */}
        <div className="flex-1 min-w-0">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
              Врачебная<br />косметология
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-ink-muted text-lg max-w-md mb-8 leading-relaxed">
              Платные медицинские услуги по лицензии.<br />
              Копейск, Челябинская область.
            </p>
          </FadeIn>
          {/* TODO: CTA — кнопка записи на приём */}
        </div>

        {/* Изображение */}
        <FadeIn delay={0.15} y={-12} className="flex-1 w-full">
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
  );
}
