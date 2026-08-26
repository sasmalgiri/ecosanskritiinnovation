'use client';

import { useEffect, useRef } from 'react';
import useReducedMotion from './useReducedMotion';

/* Seamless infinite strip that also leans into your scroll: fast scrolling
   skews and nudges the row, then it springs back to rest. The list is
   duplicated once and translated -50%, so the loop point is invisible. */
export default function Marquee({ items, speed = 46, reverse = false, className = '' }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const doubled = items.concat(items);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    let lastY = window.scrollY;
    let skew = 0;
    let raf = 0;

    const settle = () => {
      skew *= 0.86;
      if (Math.abs(skew) < 0.05) {
        skew = 0;
        raf = 0;
        el.style.setProperty('--skew', '0deg');
        el.style.setProperty('--shove', '0px');
        return;
      }
      el.style.setProperty('--skew', skew.toFixed(2) + 'deg');
      el.style.setProperty('--shove', (skew * 3).toFixed(1) + 'px');
      raf = requestAnimationFrame(settle);
    };

    const onScroll = () => {
      const y = window.scrollY;
      const v = y - lastY;
      lastY = y;
      skew = Math.max(-7, Math.min(7, v * 0.3));
      if (!raf) raf = requestAnimationFrame(settle);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div ref={ref} className={'marquee ' + className} data-frozen={reduced ? 'true' : undefined}>
      <div className="marquee__skew">
      <div
        className="marquee__track"
        style={reduced ? undefined : {
          animationDuration: speed + 's',
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {doubled.map((item, i) => (
          <figure className="marquee__item" key={i} aria-hidden={i >= items.length || undefined}>
            <img src={item.src} alt={i < items.length ? item.alt : ''} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
      </div>
    </div>
  );
}
