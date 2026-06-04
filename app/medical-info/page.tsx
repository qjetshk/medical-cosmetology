import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Информация для пациентов',
  description: 'Виды помощи, правила записи, подготовка к процедурам, госгарантии.',
};

export default function MedicalInfoPage() {
  return (
    <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16">
      {/* TODO: виды мед. помощи, правила записи, подготовка, блок госгарантий */}
      <h1 className="text-4xl font-bold text-ink mb-4">Информация для пациентов</h1>
      <p className="text-ink-muted">Наполнение — следующий шаг.</p>
    </section>
  );
}
