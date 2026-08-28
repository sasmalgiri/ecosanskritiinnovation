'use client';

import { useEffect } from 'react';

/**
 * The page changes colour as you scroll through it.
 *
 * This is the signature move on zalak-patel.com, whose markup carries
 * `js-color-bg` and `js-color-text` hooks for exactly this: the whole surface
 * inverts from light to dark and back as sections pass under the viewport,
 * rather than each block sitting in its own coloured box.
 *
 * The colour swap itself is pure CSS — a section marked `data-invert`
 * redefines the paper and ink tokens, so it works with JavaScript switched
 * off and the site is never unreadable. What this component adds is the part
 * CSS cannot do: it tells the *page* which tone is currently dominant, so the
 * body behind the sections, the fixed navigation and the scroll progress bar
 * all cross over at the same moment. Without it you get a dark band floating
 * on a cream page and the illusion collapses.
 *
 * The decision point is the middle of the viewport. A section owns the tone
 * from the moment its top crosses the midline until the next one does — which
 * is what makes the transition feel tied to the scroll rather than arbitrary.
 */
export default function ToneScroll() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-invert], [data-tone]'));
    if (!sections.length) {
      document.body.dataset.tone = 'light';
      return;
    }

    let ticking = false;

    const settle = () => {
      ticking = false;
      const mid = window.innerHeight / 2;

      // Walk downward and keep the last section whose top is above the midline.
      // Anything below the midline has not taken over yet.
      let tone = 'light';
      for (const el of sections) {
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= mid && bottom > mid) {
          tone = el.hasAttribute('data-invert') ? 'dark' : (el.dataset.tone || 'light');
          break;
        }
      }
      if (document.body.dataset.tone !== tone) document.body.dataset.tone = tone;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(settle);
    };

    settle();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      delete document.body.dataset.tone;
    };
  }, []);

  return null;
}
