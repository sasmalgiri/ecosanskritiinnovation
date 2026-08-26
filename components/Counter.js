'use client';

import { useEffect, useRef, useState } from 'react';
import useReducedMotion from './useReducedMotion';

/* Counts up once, when scrolled into view. Cubic ease-out. */
export default function Counter({ to, prefix = '', suffix = '', decimals = 0, duration = 1500 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced || typeof IntersectionObserver === 'undefined') { setVal(to); return; }

    let raf = 0;
    let start = 0;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        const tick = (now) => {
          if (!start) start = now;
          const p = Math.min((now - start) / duration, 1);
          setVal(to * (1 - Math.pow(1 - p, 3)));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });

    io.observe(el);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [to, duration, reduced]);

  return <span ref={ref} className="counter">{prefix}{val.toFixed(decimals)}{suffix}</span>;
}
