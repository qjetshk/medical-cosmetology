'use client';

import { useEffect, useState } from 'react';

export default function A11yToggle() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('a11y-mode') === 'on';
    setActive(stored);
    document.documentElement.classList.toggle('a11y-mode', stored);
  }, []);

  function toggle() {
    const next = !active;
    setActive(next);
    document.documentElement.classList.toggle('a11y-mode', next);
    localStorage.setItem('a11y-mode', next ? 'on' : 'off');
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={active}
      aria-label="Версия для слабовидящих"
      title="Версия для слабовидящих"
      className="shrink-0 border border-line rounded-md px-2 py-1 text-xs text-ink-muted hover:border-sage hover:text-sage transition-colors"
    >
      {active ? 'A−' : 'A+'}
    </button>
  );
}
