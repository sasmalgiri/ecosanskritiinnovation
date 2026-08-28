'use client';

import { useEffect, useRef, useState } from 'react';
import FluxMandala from './FluxMandala';

/**
 * The opening curtain.
 *
 * Every studio site we took direction from opens with one: a count to 100 while
 * the first assets settle, then a wipe. It is theatre, but it is useful theatre
 * — it hides the moment when web fonts swap and the hero image decodes, which
 * is the ugliest half-second of any page load.
 *
 * Three rules keep it from becoming an obstacle:
 *
 *  - It runs once per browsing session, not once per navigation. Being made to
 *    watch a loader again on the way to the contact page is an insult.
 *  - It is skipped entirely under `prefers-reduced-motion`, and for anyone
 *    arriving on a deep link from search.
 *  - It never gates the content. The page is fully rendered and readable
 *    underneath; this is an overlay that leaves. If the JavaScript fails, the
 *    visitor simply gets the site with no curtain.
 */
export default function Preloader() {
  const [phase, setPhase] = useState('idle'); // idle | running | leaving | done
  const [pct, setPct] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    // The blocking script in the layout has already decided, before paint,
    // whether a curtain is up. Asking again here would only let the two
    // disagree; all this component does is finish what is already on screen.
    if (!document.documentElement.classList.contains('is-preloading')) {
      setPhase('done');
      return;
    }

    setPhase('running');

    // The count is eased rather than linear, and it waits for the window load
    // event before it is allowed to finish — so the number means something
    // instead of being pure decoration.
    const start = performance.now();
    const MIN = 1100;   // never flash by too fast to read
    const MAX = 3000;   // never hold the page hostage to a slow asset
    let loaded = document.readyState === 'complete';
    const onLoad = () => { loaded = true; };
    window.addEventListener('load', onLoad);

    const tick = (now) => {
      const t = now - start;
      // Ease-out: fast to ~90, then crawl until the load event lands.
      const ceiling = loaded || t > MAX ? 100 : 92;
      const eased = Math.min(ceiling, Math.round(ceiling * (1 - Math.pow(1 - Math.min(t / MIN, 1), 3))));
      setPct(eased);

      if (eased >= 100) {
        setPhase('leaving');
        window.setTimeout(() => {
          setPhase('done');
          document.documentElement.classList.remove('is-preloading');
        }, 900);
        return;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('load', onLoad);
      document.documentElement.classList.remove('is-preloading');
    };
  }, []);

  if (phase === 'idle' || phase === 'done') return null;

  return (
    <div className="preloader" data-leaving={phase === 'leaving'} aria-hidden="true">
      <div className="preloader__inner">
        <FluxMandala className="preloader__mark" />
        <p className="preloader__name">
          Eco<span>Sanskriti</span> Innovations
        </p>
        <p className="preloader__tag">Deep-tech · Digital · Regenerative</p>
      </div>

      <div className="preloader__count">
        <span>{String(pct).padStart(3, '0')}</span>
      </div>

      <div className="preloader__bar">
        <i style={{ transform: `scaleX(${pct / 100})` }} />
      </div>

      {/* Two panels that part like a curtain rather than a single fade — it
          reads as the site arriving, not as a dialog dismissing. */}
      <span className="preloader__panel preloader__panel--t" />
      <span className="preloader__panel preloader__panel--b" />
    </div>
  );
}
