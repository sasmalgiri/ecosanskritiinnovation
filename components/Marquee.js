'use client';

import useReducedMotion from './useReducedMotion';

/* Seamless infinite strip. The list is duplicated once and the track is
   translated -50%, so the loop point is invisible. The clone is aria-hidden
   so screen readers hear each screenshot exactly once. */
export default function Marquee({ items, speed = 46, reverse = false, className = '' }) {
  const reduced = useReducedMotion();
  const doubled = items.concat(items);

  return (
    <div className={'marquee ' + className} data-frozen={reduced ? 'true' : undefined}>
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
  );
}
