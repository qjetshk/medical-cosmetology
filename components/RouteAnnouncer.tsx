'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * Объявляет скринридерам о смене страницы через aria-live.
 * Next.js App Router не делает это автоматически (в отличие от Pages Router).
 */
export default function RouteAnnouncer() {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.textContent = '';
    const id = requestAnimationFrame(() => {
      if (ref.current) ref.current.textContent = document.title;
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <div
      ref={ref}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    />
  );
}
