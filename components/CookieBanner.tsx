'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import YandexMetrika from './YandexMetrika';

function subscribeToStorage(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

export default function CookieBanner({ counterId }: { counterId?: number }) {
  const storageKey = counterId ? 'analytics-consent' : 'cookie-consent';
  const [unsavedChoice, setUnsavedChoice] = useState<string | null>(null);
  const savedChoice = useSyncExternalStore(
    subscribeToStorage,
    () => {
      try {
        return localStorage.getItem(storageKey);
      } catch {
        return null;
      }
    },
    () => undefined,
  );
  const choice = unsavedChoice ?? savedChoice;
  const visible = choice === null;
  const acceptRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (visible) {
      const id = setTimeout(() => acceptRef.current?.focus(), 100);
      return () => clearTimeout(id);
    }
  }, [visible]);

  function saveChoice(accepted: boolean) {
    const value = String(accepted);
    try {
      localStorage.setItem(storageKey, value);
      window.dispatchEvent(new StorageEvent('storage', { key: storageKey }));
    } catch {
      setUnsavedChoice(value);
    }
  }

  if (!visible) {
    return counterId && choice === 'true' ? <YandexMetrika counterId={counterId} /> : null;
  }

  return (
    <div
      role="region"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50 bg-cream border border-line rounded-2xl p-4 shadow-md text-sm"
    >
      <p id="cookie-title" className="sr-only">Уведомление об использовании cookie</p>
      <p id="cookie-desc" className="text-ink mb-3">
        {counterId
          ? 'С вашего разрешения Яндекс Метрика собирает статистику посещений с помощью cookie.'
          : 'Мы используем файлы cookie для корректной работы сайта.'}{' '}
        <Link href="/legal" className="text-coral hover:underline">
          Подробнее
        </Link>
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          ref={acceptRef}
          onClick={() => saveChoice(true)}
          className="bg-coral text-white rounded-xl px-4 py-2 text-sm hover:opacity-90 transition-opacity"
        >
          Принять
        </button>
        {counterId && (
          <button
            onClick={() => saveChoice(false)}
            className="border border-line rounded-xl px-4 py-2 text-sm hover:bg-sage-light transition-colors"
          >
            Отклонить
          </button>
        )}
      </div>
    </div>
  );
}
