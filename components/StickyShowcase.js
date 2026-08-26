'use client';

import { useEffect, useRef, useState } from 'react';
import { MacWindow } from './DeviceFrame';

/* Scroll-driven feature tour: the text steps scroll past a pinned screenshot
   that cross-fades to match whichever step is centred in the viewport.
   Falls back to a plain readable list when IntersectionObserver is absent. */
export default function StickyShowcase({ steps, windowTitle = '' }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const els = stepRefs.current.filter(Boolean);
    if (!els.length || typeof IntersectionObserver === 'undefined') return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const i = Number(entry.target.dataset.index);
        if (!Number.isNaN(i)) setActive(i);
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [steps.length]);

  return (
    <div className="stickyshow">
      <div className="stickyshow__rail">
        {steps.map((step, i) => (
          <div
            key={step.title}
            data-index={i}
            ref={(el) => { stepRefs.current[i] = el; }}
            className={'stickyshow__step' + (i === active ? ' is-active' : '')}
          >
            <span className="stickyshow__num">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="stickyshow__title">{step.title}</h3>
            <p className="stickyshow__body">{step.body}</p>
          </div>
        ))}
      </div>

      <div className="stickyshow__media">
        <div className="stickyshow__stack">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={'stickyshow__slide' + (i === active ? ' is-active' : '')}
              aria-hidden={i !== active || undefined}
            >
              <MacWindow src={step.src} alt={step.alt || step.title} title={windowTitle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
