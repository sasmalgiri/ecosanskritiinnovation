'use client';

import { useEffect, useRef, useState } from 'react';

/* Heading that rises word by word from behind a mask. Each word gets its own
   overflow-hidden shell, so the letters slide up out of nothing rather than
   just fading. Punctuation stays attached to its word. */
export default function SplitReveal({ text, as: Tag = 'h2', className = '', delay = 0, step = 42 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setShown(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -60px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = String(text).split(/\s+/).filter(Boolean);

  return (
    <Tag ref={ref} className={'splitrev ' + (shown ? 'is-in ' : '') + className}>
      {words.map((w, i) => (
        <span className="splitrev__mask" key={w + i}>
          <span className="splitrev__word" style={{ transitionDelay: (delay + i * step) + 'ms' }}>{w}</span>
        </span>
      ))}
    </Tag>
  );
}
