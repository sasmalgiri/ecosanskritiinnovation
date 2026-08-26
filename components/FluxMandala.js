// The flux-mandala: EcoSanskriti's signature mark.
// A dharma wheel (regeneration) rendered as a motor rotor —
// 24 stator ticks (also the 24 spokes of the Ashoka Chakra),
// 6 magnetic poles as lotus petals, magnetic field-lines as a
// rosette, and a spoked hub. Pure SVG, animated via CSS.

const C = 200; // centre

function polar(r, deg) {
  const a = ((deg - 90) * Math.PI) / 180;
  return [C + r * Math.cos(a), C + r * Math.sin(a)];
}

// 24 radial ticks — the stator slots / chakra spokes
const ticks = Array.from({ length: 24 }, (_, i) => {
  const deg = i * 15;
  const [x1, y1] = polar(176, deg);
  const [x2, y2] = polar(i % 2 === 0 ? 190 : 184, deg);
  return { x1, y1, x2, y2, key: `t${i}` };
});

// 6 poles as lotus petals
const RI = 92, RO = 150, W = 27, MID = (RI + RO) / 2;
const petalPath =
  `M ${C},${C - RI} Q ${C - W},${C - MID} ${C},${C - RO} ` +
  `Q ${C + W},${C - MID} ${C},${C - RI} Z`;
const petals = Array.from({ length: 6 }, (_, i) => ({
  rot: i * 60,
  fill: i % 2 === 0 ? 'var(--haldi)' : 'none',
  key: `p${i}`,
}));

// 12 hub spokes
const spokes = Array.from({ length: 12 }, (_, i) => {
  const deg = i * 30;
  const [x1, y1] = polar(15, deg);
  const [x2, y2] = polar(54, deg);
  return { x1, y1, x2, y2, key: `s${i}` };
});

// 6 rotated ellipses = the magnetic-flux rosette
const rosette = [0, 30, 60, 90, 120, 150];

export default function FluxMandala({ animated = true, className = '', title = 'EcoSanskriti flux-mandala mark' }) {
  const spin = animated ? 'mandala__spin' : '';
  const spinRev = animated ? 'mandala__spin--rev' : '';
  const pulse = animated ? 'mandala__pulse' : '';

  return (
    <svg
      className={`mandala ${className}`}
      viewBox="0 0 400 400"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* outer rings */}
      <circle cx={C} cy={C} r="190" fill="none" stroke="var(--pine-line)" strokeWidth="1" />
      <circle cx={C} cy={C} r="158" fill="none" stroke="var(--pine-line)" strokeWidth="1" />

      {/* stator ticks */}
      <g className={pulse}>
        {ticks.map((t) => (
          <line key={t.key} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="var(--haldi)" strokeWidth="1.4" />
        ))}
      </g>

      {/* flux rosette (counter-rotating) */}
      <g className={spinRev} opacity="0.4">
        {rosette.map((deg) => (
          <ellipse
            key={`e${deg}`}
            cx={C}
            cy={C}
            rx="150"
            ry="52"
            fill="none"
            stroke="var(--haldi-soft)"
            strokeWidth="0.9"
            transform={`rotate(${deg} ${C} ${C})`}
          />
        ))}
      </g>

      {/* poles + hub (rotating) */}
      <g className={spin}>
        {petals.map((p) => (
          <path
            key={p.key}
            d={petalPath}
            transform={`rotate(${p.rot} ${C} ${C})`}
            fill={p.fill}
            fillOpacity={p.fill === 'none' ? 0 : 0.14}
            stroke="var(--haldi)"
            strokeWidth="1.3"
          />
        ))}
        <circle cx={C} cy={C} r="70" fill="none" stroke="var(--pine-line)" strokeWidth="1" />
        {spokes.map((s) => (
          <line key={s.key} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke="var(--moss)" strokeWidth="1" opacity="0.7" />
        ))}
        <circle cx={C} cy={C} r="15" fill="var(--pine-deep)" stroke="var(--haldi)" strokeWidth="1.4" />
        <circle cx={C} cy={C} r="4.5" fill="var(--haldi)" />
      </g>
    </svg>
  );
}
