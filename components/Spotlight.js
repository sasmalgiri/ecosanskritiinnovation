'use client';

import { useEffect } from 'react';

/* One document-level listener for the whole site. Finds the .spot card under
   the cursor and writes the pointer position into that card's own custom
   properties, so each card lights from wherever the cursor is inside it.
   rAF-throttled, and it does nothing at all on touch-only devices. */
export default function SpotlightRoot() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia && !window.matchMedia('(hover: hover)').matches) return;

    let raf = 0;
    let last = null;

    const apply = () => {
      raf = 0;
      if (!last) return;
      const { card, x, y } = last;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--sx', (x - r.left).toFixed(0) + 'px');
      card.style.setProperty('--sy', (y - r.top).toFixed(0) + 'px');
    };

    const onMove = (e) => {
      const card = e.target instanceof Element ? e.target.closest('.spot') : null;
      if (!card) return;
      last = { card, x: e.clientX, y: e.clientY };
      if (!raf) raf = requestAnimationFrame(apply);
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      document.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
