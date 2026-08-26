'use client';

import { useEffect, useRef, useState } from 'react';

/* Wipes its child into view behind a moving clip-path edge, with a gold
   sheen that sweeps across as the mask opens. */
export default function ClipReveal({ children, className = '', delay = 0 }) {
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
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={'clipreveal ' + (shown ? 'is-in ' : '') + className}
      style={delay ? { transitionDelay: delay + 'ms' } : undefined}
    >
      {children}
      <span className="clipreveal__sheen" aria-hidden="true" />
    </div>
  );
}
