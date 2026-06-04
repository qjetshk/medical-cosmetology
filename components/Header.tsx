'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '@/data/nav';
import Logo from './Logo';
import A11yToggle from './A11yToggle';

const PRIMARY_LINKS = navLinks.slice(0, 6);
const OVERFLOW_LINKS = navLinks.slice(6);

function linkClass(active: boolean) {
  return `px-3 py-1.5 rounded-lg text-sm transition-colors whitespace-nowrap ${
    active
      ? 'text-coral font-medium bg-coral-light/60'
      : 'text-ink-muted hover:text-ink hover:bg-line/50'
  }`;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();
  const moreRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  // Закрыть всё при смене маршрута
  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  // Escape закрывает всё, возвращает фокус на бургер
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (menuOpen) closeDrawer();
        setMoreOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  // Блокировать скролл страницы пока открыт drawer
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Когда drawer открывается — переместить фокус на кнопку закрытия
  useEffect(() => {
    if (menuOpen) {
      const id = setTimeout(() => closeButtonRef.current?.focus(), 60);
      return () => clearTimeout(id);
    }
  }, [menuOpen]);

  // Focus trap внутри drawer'а
  useEffect(() => {
    if (!menuOpen || !drawerRef.current) return;

    const drawer = drawerRef.current;
    const getFocusable = () =>
      Array.from(
        drawer.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusable = getFocusable();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };

    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [menuOpen]);

  const closeDrawer = useCallback(() => {
    setMenuOpen(false);
    requestAnimationFrame(() => burgerRef.current?.focus());
  }, []);

  return (
    <>
      {/* ─── Шапка ─────────────────────────────────────────── */}
      <header className="border-b border-line bg-cream/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-wrapper mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
          <Logo />

          {/* Полная навигация — xl+ */}
          <nav
            className="hidden xl:flex items-center gap-1 flex-1 justify-center"
            aria-label="Основная навигация"
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(pathname === link.href)}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Сокращённая навигация — lg–xl */}
          <nav
            className="hidden lg:flex xl:hidden items-center gap-1 flex-1 justify-center"
            aria-label="Основная навигация"
          >
            {PRIMARY_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(pathname === link.href)}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}

            <div
              ref={moreRef}
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
                aria-haspopup="menu"
                aria-label="Ещё разделы"
                className={`px-3 py-1.5 rounded-lg text-sm font-medium tracking-wider transition-colors ${
                  moreOpen ? 'text-ink bg-line/50' : 'text-ink-muted hover:text-ink hover:bg-line/50'
                }`}
              >
                ···
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    role="menu"
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute top-full right-0 mt-2 bg-cream border border-line rounded-xl shadow-lg py-1.5 min-w-45 z-50"
                  >
                    {OVERFLOW_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        role="menuitem"
                        aria-current={pathname === link.href ? 'page' : undefined}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          pathname === link.href
                            ? 'text-coral font-medium'
                            : 'text-ink hover:text-coral hover:bg-coral-light/30'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <A11yToggle />

            {/* Кнопка бургера — мобильный */}
            <button
              ref={burgerRef}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-drawer"
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
              className="lg:hidden relative w-8 h-8 flex items-center justify-center rounded-lg hover:bg-line/50 transition-colors"
            >
              <div className="relative w-5 h-3.5" aria-hidden="true">
                <span className={`absolute left-0 w-5 h-0.5 bg-ink rounded-full transition-all duration-200 ${menuOpen ? 'top-1.75 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 top-1.75 w-5 h-0.5 bg-ink rounded-full transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`absolute left-0 w-5 h-0.5 bg-ink rounded-full transition-all duration-200 ${menuOpen ? 'top-1.75 -rotate-45' : 'top-3.5'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ─── Мобильный drawer ──────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="fixed inset-0 z-90 backdrop-blur-2xl bg-ink/25 lg:hidden"
              onClick={closeDrawer}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.nav
              id="mobile-drawer"
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Навигация"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220, mass: 0.8 }}
              className="fixed top-0 left-0 bottom-0 z-100 w-72 bg-cream border-r border-line flex flex-col shadow-2xl lg:hidden"
            >
              {/* Шапка drawer'а */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-line shrink-0">
                <Logo />
                <button
                  ref={closeButtonRef}
                  onClick={closeDrawer}
                  aria-label="Закрыть меню"
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-ink-muted hover:text-ink hover:bg-line/50 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Ссылки со stagger-анимацией */}
              <ul className="flex-1 overflow-y-auto py-3 px-3" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3, ease: 'easeOut' }}
                  >
                    <Link
                      href={link.href}
                      aria-current={pathname === link.href ? 'page' : undefined}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm transition-colors ${
                        pathname === link.href
                          ? 'text-coral font-medium bg-coral-light/40'
                          : 'text-ink hover:text-coral hover:bg-line/40'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
