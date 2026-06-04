'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const acceptRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) setVisible(true);
  }, []);

  // Автофокус на кнопку «Принять» при появлении баннера
  useEffect(() => {
    if (visible) {
      const id = setTimeout(() => acceptRef.current?.focus(), 100);
      return () => clearTimeout(id);
    }
  }, [visible]);

  function accept() {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50 bg-cream border border-line rounded-2xl p-4 shadow-md text-sm"
    >
      <p id="cookie-title" className="sr-only">Уведомление об использовании cookie</p>
      <p id="cookie-desc" className="text-ink mb-3">
        Мы используем файлы cookie для корректной работы сайта.{' '}
        <Link href="/legal" className="text-coral hover:underline">
          Подробнее
        </Link>
      </p>
      <button
        ref={acceptRef}
        onClick={accept}
        className="bg-coral text-white rounded-xl px-4 py-2 text-sm hover:opacity-90 transition-opacity"
      >
        Принять
      </button>
    </div>
  );
}
