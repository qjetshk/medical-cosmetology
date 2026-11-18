import { pageMetadata } from '@/data/site';

export const metadata = pageMetadata(
  '/vacancies',
  'Вакансии',
  'Сведения о вакантных должностях ИП Мешанихина Е.В. Вакансии отсутствуют.',
);

export default function VacanciesPage() {
  return (
    <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16">
      <h1 className="text-4xl font-bold text-ink mb-4">Вакансии</h1>
      <p className="text-ink-muted">В настоящее время вакантных должностей нет.</p>
    </section>
  );
}
