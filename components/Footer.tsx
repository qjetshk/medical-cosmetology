import Link from 'next/link';
import { owner } from '@/data/owner';
import { navLinks } from '@/data/nav';

export default function Footer() {
  return (
    <footer className="border-t border-line mt-20 text-sm text-ink-muted">
      <div className="max-w-wrapper mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

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

        {/* Дисклеймер */}
        <div className="space-y-3">
          <p className="italic leading-relaxed">
            О возможных противопоказаниях проконсультируйтесь со специалистом.
          </p>
          <p>
            <Link href="/legal" className="hover:text-coral underline underline-offset-2 transition-colors">
              Политика конфиденциальности
            </Link>
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
      </div>

      {/* Копирайт */}
      <div className="border-t border-line py-4 text-xs text-center">
        <span aria-label={`© ${new Date().getFullYear()} ${owner.shortName}. Все права защищены.`}>
          © {new Date().getFullYear()} {owner.shortName}. Все права защищены.
        </span>
      </div>
    </footer>
  );
}
