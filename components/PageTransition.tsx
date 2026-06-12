'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function PageTransition() {
  const pathname = usePathname();
  const [key, setKey] = useState(0);

  // Increment on every navigation including back/forward.
  // key={pathname} breaks on A→B→A because React reuses the element
  // (same key), so framer-motion never restarts the animation.
  useEffect(() => {
    setKey((k) => k + 1);
  }, [pathname]);

  return (
    <motion.div
      key={key}
      aria-hidden="true"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-200 pointer-events-none backdrop-blur-[120px] bg-cream/50"
    />
  );
}
