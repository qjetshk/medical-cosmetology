import type { Metadata } from 'next';
import Link from 'next/link';
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
          { label: 'Юридический адрес (место регистрации ИП)', value: owner.address },
          { label: 'Фактический адрес осуществления деятельности', value: owner.clinicAddress },
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
          {
            label: 'Лицензия',
            value: (
              <Link href="/license" className="text-coral hover:underline">
                № Л041-01024-74/00304952 от 24.03.2016
              </Link>
            ),
          },
        ]}
      />

      <div className="mt-12">
        <h2 className="text-xl font-semibold text-ink mb-4">Схема проезда</h2>
        <div className="rounded-2xl overflow-hidden border border-line">
          <iframe
            title={`Схема проезда — ${owner.clinicAddress}`}
            src="https://yandex.ru/map-widget/v1/?ll=61.400496,55.174676&z=17&pt=61.400496,55.174676,pm2rdm&lang=ru_RU"
            width="100%"
            height="420"
            allowFullScreen
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="text-sm text-ink-muted mt-3">{owner.clinicAddress}</p>
      </div>
    </section>
  );
}
