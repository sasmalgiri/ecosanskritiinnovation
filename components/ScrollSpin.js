'use client';

import { useEffect, useRef } from 'react';
import useReducedMotion from './useReducedMotion';

/* Ties a rotation to scroll position — the mark turns as the page moves,
   which reads as mechanical rather than decorative. */
export default function ScrollSpin({ children, factor = 0.08, className = '' }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    let raf = 0;
    const calc = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const travelled = window.innerHeight - r.top;
      el.style.setProperty('--spin', (travelled * factor).toFixed(2) + 'deg');
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(calc); };

    calc();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [factor, reduced]);

  return <div ref={ref} className={'scrollspin ' + className}>{children}</div>;
}
