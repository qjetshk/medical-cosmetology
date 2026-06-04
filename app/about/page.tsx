import type { Metadata } from 'next';
import InfoTable from '@/components/InfoTable';
import { owner } from '@/data/owner';

export const metadata: Metadata = {
  title: 'О клинике',
  description: 'Информация об организации: реквизиты, адрес, режим работы. ИП Мешанихина Е.В.',
};

export default function AboutPage() {
  return (
    <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16">
      <h1 className="text-4xl font-bold text-ink mb-10">О клинике</h1>

      <InfoTable
        caption="Сведения об организации (Приказ Минздрава №118н)"
        rows={[
          {
            label: 'Полное наименование',
            value: `Индивидуальный предприниматель ${owner.fullName}`,
          },
          { label: 'Сокращённое наименование', value: owner.shortName },
          { label: 'ОГРНИП', value: owner.ogrnip },
          { label: 'ИНН', value: owner.inn },
          { label: 'Дата регистрации', value: owner.registeredAt },
          { label: 'Адрес местонахождения', value: owner.address },
          { label: 'Почтовый адрес', value: owner.postalAddress },
          {
            label: 'Телефон',
            value: (
              <a href={owner.phoneHref} className="text-coral hover:underline">
                {owner.phone}
              </a>
            ),
          },
          {
            label: 'Email',
            value: (
              <a href={`mailto:${owner.email}`} className="text-coral hover:underline">
                {owner.email}
              </a>
            ),
          },
          { label: 'Режим работы', value: owner.workingHours },
          { label: 'График приёма граждан', value: owner.appointmentSchedule },
          {
            label: 'Структура управления',
            value: 'Руководитель — индивидуальный предприниматель (единолично)',
          },
        ]}
      />

      {/* TODO: схема проезда (карта или описание) */}
      <div className="mt-12 rounded-2xl border border-line h-64 flex items-center justify-center text-ink-muted">
        Схема проезда — TODO
      </div>
    </section>
  );
}
