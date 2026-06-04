'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

/**
 * Рендерит полноэкранный overlay с backdrop-blur поверх всей страницы.
 * При смене маршрута overlay появляется (opacity 1) и растворяется (opacity 0).
 * pointer-events-none — клики проходят сквозь.
 * fixed + z-200 — покрывает хедер, футер и весь контент.
 */
export default function PageTransition() {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      aria-hidden="true"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-200 pointer-events-none backdrop-blur-[120px] bg-cream/50"
    />
  );
}
