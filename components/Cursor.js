'use client';

import { useEffect, useRef } from 'react';

/**
 * A cursor that tells you what a thing will do before you click it.
 *
 * The reference studios all replace the pointer, and the reason is not
 * decoration: a ring that swells over a project tile and reads "VIEW" removes
 * the guesswork about what is interactive on a page with very little chrome.
 *
 * The implementation is deliberately cheap. A dot pinned to the real pointer
 * position and a ring that chases it with a lerp, both moved by transform
 * inside one rAF loop — no React state per frame, no layout reads, so it stays
 * at 60fps while the rest of the page is animating.
 *
 * It disables itself on anything without a fine pointer (phones, tablets) and
 * under `prefers-reduced-motion`, and it never hides the real cursor unless it
 * has successfully taken over. Losing the pointer entirely is far worse than
 * having an ordinary one.
 */
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    const d = dot.current;
    const r = ring.current;
    if (!d || !r) return;

    document.documentElement.classList.add('has-cursor');

    // Start off-screen so the cursor does not flash at 0,0 before first move.
    let mx = -100, my = -100;   // true pointer
    let rx = -100, ry = -100;   // ring, chasing
    let raf = 0;
    let visible = false;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        visible = true;
        rx = mx; ry = my;                    // no swoop in from the corner
        r.classList.add('is-on');
        d.classList.add('is-on');
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      d.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    /**
     * What the ring should say. An explicit `data-cursor` wins; otherwise the
     * element's own semantics decide, so links added later get sensible
     * behaviour without anyone remembering to annotate them.
     */
    const labelFor = (el) => {
      const tagged = el.closest('[data-cursor]');
      if (tagged) return tagged.getAttribute('data-cursor');
      if (el.closest('a[href^="http"], a[target="_blank"]')) return 'open';
      if (el.closest('a, button, [role="button"], summary')) return '';
      // Everything else, form fields included, keeps the native pointer.
      // The I-beam shows the insertion point, which no decorative ring can do.
      return null;
    };

    const onOver = (e) => {
      const label = labelFor(e.target);
      if (label === null) {
        r.classList.remove('is-active', 'is-labelled');
        r.textContent = '';
        return;
      }
      r.classList.add('is-active');
      if (label) {
        r.textContent = label;
        r.classList.add('is-labelled');
      } else {
        r.textContent = '';
        r.classList.remove('is-labelled');
      }
    };

    const onDown = () => r.classList.add('is-down');
    const onUp = () => r.classList.remove('is-down');
    // Leaving the document should hide it, or it sticks to the last edge
    // position while the visitor is in another tab.
    const onLeave = () => { d.classList.remove('is-on'); r.classList.remove('is-on'); visible = false; };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointerleave', onLeave);
      document.documentElement.classList.remove('has-cursor');
    };
  }, []);

  return (
    <>
      <span ref={dot} className="cursor-dot" aria-hidden="true" />
      <span ref={ring} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
