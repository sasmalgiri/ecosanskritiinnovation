'use client';

import { useEffect } from 'react';
import useReducedMotion from './useReducedMotion';

/* Any element carrying .magnet leans toward the cursor when it comes near,
   and springs back once the pointer leaves its field. One rAF-throttled
   document listener drives all of them; skipped entirely on touch-only
   devices and under reduced motion. */
export default function MagneticRoot({ radius = 90, strength = 0.28 }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (typeof window === 'undefined' || reduced) return;
    if (window.matchMedia && !window.matchMedia('(hover: hover)').matches) return;

    let raf = 0;
    let mx = 0;
    let my = 0;

    const apply = () => {
      raf = 0;
      const nodes = document.querySelectorAll('.magnet');
      nodes.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -radius || r.top > window.innerHeight + radius) return;
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = mx - cx;
        const dy = my - cy;
        const near = Math.abs(dx) < r.width / 2 + radius && Math.abs(dy) < r.height / 2 + radius;
        el.style.setProperty('--tx', near ? (dx * strength).toFixed(1) + 'px' : '0px');
        el.style.setProperty('--ty', near ? (dy * strength).toFixed(1) + 'px' : '0px');
      });
    };

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      document.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [radius, strength, reduced]);

  return null;
}
