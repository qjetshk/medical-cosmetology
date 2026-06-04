import type { Metadata } from 'next';
import InfoTable from '@/components/InfoTable';
import { owner } from '@/data/owner';

export const metadata: Metadata = {
  title: 'Лицензия',
  description: 'Медицинская лицензия: номер, дата выдачи, орган выдачи. ИП Мешанихина Е.В.',
};

export default function LicensePage() {
  return (
    <section className="max-w-wrapper mx-auto px-4 md:px-6 py-16">
      <h1 className="text-4xl font-bold text-ink mb-4">Лицензия</h1>
      <p className="text-ink-muted mb-10">
        ИП имеет 3 лицензии по 2 видам лицензируемой деятельности (1 из ЕГРИП, 2 от Росздравнадзора).
      </p>

      <div className="space-y-8">
        {owner.licenses.map((lic, i) => (
          <div key={i} className="rounded-2xl border border-line p-6">
            <h2 className="text-lg font-semibold text-ink mb-4">Лицензия {i + 1}</h2>
            <InfoTable
              rows={[
                { label: 'Регистрационный номер', value: lic.number },
                { label: 'Дата выдачи', value: lic.issuedAt },
                { label: 'Лицензирующий орган', value: lic.issuedBy },
                { label: 'Вид деятельности', value: lic.activity },
                { label: 'Срок действия', value: lic.validUntil },
              ]}
            />
          </div>
        ))}
      </div>

      {/* TODO: QR-код / ссылка на выписку из реестра лицензий Росздравнадзора */}
      <div className="mt-10 p-4 rounded-xl border border-line text-sm text-ink-muted">
        Проверить лицензию:{' '}
        <a
          href="https://roszdravnadzor.gov.ru/services/licenses"
          target="_blank"
          rel="noopener noreferrer"
          className="text-coral hover:underline"
        >
          реестр лицензий Росздравнадзора
        </a>
      </div>
    </section>
  );
}
