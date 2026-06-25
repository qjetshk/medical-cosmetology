import Link from 'next/link';
import { owner } from '@/data/owner';
import { navLinks } from '@/data/nav';

export default function Footer() {
  return (
    <footer className="border-t border-line mt-20 text-sm text-ink-muted">
      <div className="max-w-wrapper mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Реквизиты */}
        <address className="not-italic space-y-2">
          <p className="font-semibold text-ink">{owner.shortName}</p>
          <p>ОГРНИП: {owner.ogrnip}</p>
          <p>ИНН: {owner.inn}</p>
          <p>
            <span className="sr-only">Телефон: </span>
            <a
              href={owner.phoneHref}
              aria-label={`Позвонить по номеру ${owner.phone}`}
              className="hover:text-coral transition-colors"
            >
              {owner.phone}
            </a>
          </p>
          <p>
            <a
              href={`mailto:${owner.email}`}
              aria-label={`Написать на почту ${owner.email}`}
              className="hover:text-coral transition-colors"
            >
              {owner.email}
            </a>
          </p>
          <p><span className="text-ink-muted/60 text-xs">Юр. адрес: </span>{owner.address}</p>
          <p><span className="text-ink-muted/60 text-xs">Факт. адрес: </span>{owner.clinicAddress}</p>
        </address>

        {/* Навигация */}
        <nav aria-label="Разделы сайта">
          <p className="font-semibold text-ink mb-3" aria-hidden="true">Разделы</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-coral transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Справочная информация */}
        <div className="space-y-3">
          <p className="italic leading-relaxed">
            О возможных противопоказаниях проконсультируйтесь со специалистом.
          </p>
          <p className="leading-relaxed">
            Вся информация на сайте носит справочно-ознакомительный характер и не является публичной офертой
            в соответствии со ст.&nbsp;437 ГК&nbsp;РФ.
          </p>
          <p>
            <a href="http://www.pravo.gov.ru/" target="_blank" rel="noopener noreferrer"
              className="hover:text-coral underline underline-offset-2 transition-colors">
              Портал правовой информации
            </a>
          </p>
          <p>
            <a href="https://cr.minzdrav.gov.ru/" target="_blank" rel="noopener noreferrer"
              className="hover:text-coral underline underline-offset-2 transition-colors">
              Клинические рекомендации Минздрава
            </a>
          </p>
          <p>
            <Link href="/about" className="hover:text-coral underline underline-offset-2 transition-colors">
              Реквизиты организации
            </Link>
          </p>
          <p>
            <Link href="/license" className="hover:text-coral underline underline-offset-2 transition-colors">
              Лицензия
            </Link>
          </p>
        </div>

        {/* Документы */}
        <nav aria-label="Документы">
          <p className="font-semibold text-ink mb-3" aria-hidden="true">Документы</p>
          <ul className="space-y-2">
            {[
              { label: 'Оплата услуг', href: '/docs/Положение о порядке оказания платных медицинских услуг.pdf' },
              { label: 'Политика обработки персональных данных', href: '/docs/Обработка персональных данных.pdf' },
              { label: 'Пользовательское соглашение', href: '/docs/Пользовательское соглашение.pdf' },
              { label: 'Согласие на обработку персональных данных', href: '/docs/Согласие на обработку персональных данных (сайт).pdf' },
              { label: 'Согласие на информационные рассылки', href: '/docs/Согласие на получение рекламно-информационных рассылок.pdf' },
              { label: 'Политика использования cookie', href: '/docs/Политика использования cookie.pdf' },
              { label: 'Согласие на обработку cookie', href: '/docs/Согласие на обработку cookie.pdf' },
            ].map(({ label, href }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer"
                  className="hover:text-coral transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Копирайт */}
      <div className="border-t border-line py-4 text-xs text-center text-ink-muted/70 space-y-1">
        <p>© {new Date().getFullYear()} {owner.shortName}. Все права защищены.</p>
        <p>
          Все материалы, размещённые на сайте, являются объектами авторского права,
          принадлежащими {owner.shortName}.
        </p>
        <p>Все иллюстрации, используемые на сайте, сгенерированы с помощью искусственного интеллекта.</p>
      </div>
    </footer>
  );
}
