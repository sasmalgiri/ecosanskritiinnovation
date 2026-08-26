'use client';

import { useRef } from 'react';
import useReducedMotion from './useReducedMotion';

/* Pointer-tracked 3D tilt with a light glare that follows the cursor.
   Touch devices never fire mousemove, so they get the flat card for free. */
export default function Tilt({ children, max = 7, className = '', glare = true }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const onMove = (e) => {
    const el = ref.current;
    if (!el || reduced) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--rx', ((0.5 - py) * max).toFixed(2) + 'deg');
    el.style.setProperty('--ry', ((px - 0.5) * max).toFixed(2) + 'deg');
    el.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
    el.style.setProperty('--my', (py * 100).toFixed(1) + '%');
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div ref={ref} className={'tilt ' + className} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="tilt__inner">
        {children}
        {glare && !reduced && <span className="tilt__glare" aria-hidden="true" />}
      </div>
    </div>
  );
}
