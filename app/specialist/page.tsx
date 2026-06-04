import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Специалист',
  description: 'Информация о специалисте: образование, аккредитация, график приёма.',
};

export default function SpecialistPage() {
  return (
    <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16">
      {/* TODO: ФИО, должность по номенклатуре, образование, аккредитация, фото, график */}
      <h1 className="text-4xl font-bold text-ink mb-4">Специалист</h1>
      <p className="text-ink-muted">Наполнение — следующий шаг.</p>
    </section>
  );
}
