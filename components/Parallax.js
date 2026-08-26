'use client';

import { useEffect, useRef } from 'react';
import useReducedMotion from './useReducedMotion';

/* Writes a --py offset the stylesheet consumes. rAF-throttled, passive
   listener, and completely inert when motion is reduced. */
export default function Parallax({ children, speed = 0.1, className = '' }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    let raf = 0;
    const calc = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const fromCentre = r.top + r.height / 2 - window.innerHeight / 2;
      el.style.setProperty('--py', (-fromCentre * speed).toFixed(1) + 'px');
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
  }, [speed, reduced]);

  return <div ref={ref} className={'parallax ' + className}>{children}</div>;
}
