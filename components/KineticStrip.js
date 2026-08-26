'use client';

import useReducedMotion from './useReducedMotion';

/* Oversized type scrolling edge to edge as a section divider. Decorative
   only, so the whole band is hidden from assistive tech. */
export default function KineticStrip({ words, speed = 30, reverse = false, className = '' }) {
  const reduced = useReducedMotion();
  const row = words.concat(words);

  return (
    <div className={'kinetic ' + className} aria-hidden="true" data-frozen={reduced ? 'true' : undefined}>
      <div
        className="kinetic__track"
        style={reduced ? undefined : {
          animationDuration: speed + 's',
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {row.map((w, i) => (
          <span className="kinetic__word" key={i}>
            {w}
            <i className="kinetic__sep" />
          </span>
        ))}
      </div>
    </div>
  );
}
