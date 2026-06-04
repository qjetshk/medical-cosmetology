import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export default function NotFound() {
  return (
    <section className="max-w-wrapper mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center py-32 min-h-[60vh]">
      <FadeIn>
        <div className="flex items-center justify-center gap-4 mb-4" aria-hidden="true">
          {/* Знак «+» */}
          <div className="relative w-16 h-16 shrink-0">
            <span className="absolute left-[33%] top-0 bottom-0 w-[34%] bg-line rounded-full" />
            <span className="absolute top-[33%] left-0 right-0 h-[34%] bg-line rounded-full" />
          </div>
          <p className="text-[7rem] font-bold leading-none text-line select-none">404</p>
        </div>

        <h1 className="text-2xl font-semibold text-ink mb-3">
          Страница не найдена
        </h1>

        <p className="text-ink-muted text-base max-w-sm mb-10 leading-relaxed">
          Возможно, ссылка устарела или страница была перемещена.<br />
          Проверьте адрес или вернитесь на главную.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-coral text-white px-6 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          На главную
        </Link>
      </FadeIn>
    </section>
  );
}
