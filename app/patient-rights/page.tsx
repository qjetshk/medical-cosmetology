import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Права пациентов',
  description: 'Права и обязанности граждан в сфере охраны здоровья, правила поведения пациента.',
};

export default function PatientRightsPage() {
  return (
    <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16">
      {/* TODO: права/обязанности по ФЗ-323, правила поведения по ПП 736 */}
      <h1 className="text-4xl font-bold text-ink mb-4">Права пациентов</h1>
      <p className="text-ink-muted">Наполнение — следующий шаг.</p>
    </section>
  );
}
