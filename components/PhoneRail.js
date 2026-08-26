'use client';

import { useRef } from 'react';
import { PhoneFrame } from './DeviceFrame';

/* Horizontal scroll-snap rail of phone screenshots with arrow controls.
   Native scrolling on touch; buttons only appear where hover exists. */
export default function PhoneRail({ shots, className = '' }) {
  const railRef = useRef(null);

  const nudge = (dir) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: 'smooth' });
  };

  return (
    <div className={'phonerail ' + className}>
      <button type="button" className="phonerail__nav phonerail__nav--prev" onClick={() => nudge(-1)} aria-label="Previous screenshots">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
      </button>
      <div className="phonerail__track" ref={railRef}>
        {shots.map((s) => (
          <div className="phonerail__cell" key={s.src}>
            <PhoneFrame src={s.src} alt={s.alt} />
            {s.caption && <p className="phonerail__cap">{s.caption}</p>}
          </div>
        ))}
      </div>
      <button type="button" className="phonerail__nav phonerail__nav--next" onClick={() => nudge(1)} aria-label="More screenshots">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
}
