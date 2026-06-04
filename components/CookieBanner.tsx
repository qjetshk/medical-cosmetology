'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Уведомление об использовании cookie"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50 bg-cream border border-line rounded-2xl p-4 shadow-md text-sm"
    >
      <p className="text-ink mb-3">
        Мы используем файлы cookie для корректной работы сайта.{' '}
        <Link href="/legal" className="text-coral hover:underline">
          Подробнее
        </Link>
      </p>
      <button
        onClick={accept}
        className="bg-coral text-white rounded-xl px-4 py-2 text-sm hover:opacity-90 transition-opacity"
      >
        Принять
      </button>
    </div>
  );
}
