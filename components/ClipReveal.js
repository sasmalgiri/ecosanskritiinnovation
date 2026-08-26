'use client';

import { useEffect, useRef, useState } from 'react';

/* Wipes its child into view behind a moving clip-path edge, with a gold
   sheen that sweeps across as the mask opens.

   The hidden state is CSS-gated (.js .clipreveal), which means a picture
   stays invisible until this component says otherwise. So the reveal must
   be guaranteed, not merely likely: threshold 0 rather than a fraction the
   element may never reach, an immediate reveal for a zero-area box (which
   an observer with a non-zero threshold can never satisfy), and a timer
   that fires regardless. Content is never left hidden by a missed frame. */
export default function ClipReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setShown(true); return; }

    let settled = false;
    const reveal = () => {
      if (settled) return;
      settled = true;
      setShown(true);
    };

    // A collapsed box can never satisfy a ratio-based threshold.
    const box = el.getBoundingClientRect();
    if (box.width === 0 || box.height === 0) { reveal(); return; }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal();
        io.disconnect();
      });
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

    io.observe(el);
    const failsafe = setTimeout(reveal, 1400);

    return () => { io.disconnect(); clearTimeout(failsafe); };
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
