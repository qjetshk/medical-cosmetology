'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { owner } from '@/data/owner';

declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void;
  }
}

export default function YandexMetrika({ counterId }: { counterId: number }) {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const previousUrl = useRef<string>(null);

  useEffect(() => {
    if (!ready) return;

    const url = new URL(pathname, window.location.origin).href;
    if (previousUrl.current === url) return;

    window.ym?.(counterId, 'hit', url, {
      referer: previousUrl.current ?? document.referrer,
    });
    previousUrl.current = url;
  }, [counterId, pathname, ready]);

  useEffect(() => {
    if (!ready) return;

    function trackPhoneClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest('a')?.getAttribute('href') === owner.phoneHref) {
        window.ym?.(counterId, 'reachGoal', 'phone_click');
      }
    }

    document.addEventListener('click', trackPhoneClick, true);
    return () => document.removeEventListener('click', trackPhoneClick, true);
  }, [counterId, ready]);

  return (
    <Script
      id="yandex-metrika"
      strategy="afterInteractive"
      onReady={() => setReady(true)}
    >{`
      (function (window, document) {
        if (window.ym) return;
        window.ym = function () { (window.ym.a = window.ym.a || []).push(arguments); };
        window.ym.l = Date.now();

        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://mc.yandex.ru/metrika/tag.js';
        document.head.appendChild(script);
      })(window, document);
      window.ym(${counterId}, 'init', { defer: true, webvisor: false });
    `}</Script>
  );
}
