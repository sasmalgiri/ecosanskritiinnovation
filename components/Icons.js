// Consistent line-icon set — 24x24, 1.5 stroke, currentColor.
// Replaces the external flaticon PNGs the WordPress site used.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function IconMobility(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 15l1.6-4.2A2 2 0 017.5 9.5h6a2 2 0 011.9 1.3L17 15" />
      <path d="M3 15h18v2a1 1 0 01-1 1h-1" />
      <path d="M6 18H5a1 1 0 01-1-1v-2" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
      <path d="M12 3l-2 4h3l-2 4" />
    </svg>
  );
}

export function IconCooling(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v18M3 12h18" />
      <path d="M12 3l2.2 2.2M12 3L9.8 5.2" />
      <path d="M12 21l2.2-2.2M12 21l-2.2-2.2" />
      <path d="M3 12l2.2-2.2M3 12l2.2 2.2" />
      <path d="M21 12l-2.2-2.2M21 12l-2.2 2.2" />
      <path d="M5.6 5.6l1.7 3M18.4 18.4l-1.7-3M18.4 5.6l-3 1.7M5.6 18.4l3-1.7" />
    </svg>
  );
}

export function IconDigital(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="13" rx="1.5" />
      <path d="M8 21h8M12 17v4" />
      <path d="M7 13l2.5-3 2 2L15 8" />
      <circle cx="15" cy="8" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function IconUpcycle(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 7l-2 3.4 2 1.2" />
      <path d="M7.2 7.3A6 6 0 0118 8" />
      <path d="M17 17l2-3.4-2-1.2" />
      <path d="M16.8 16.7A6 6 0 016 16" />
      <path d="M5 16l-1 2 2 .4" />
      <path d="M19 8l1-2-2-.4" />
    </svg>
  );
}

export function IconArrow(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconCheck(props) {
  return (
    <svg {...base} width="18" height="18" {...props}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function IconPlay(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 5.5v13l11-6.5-11-6.5z" />
    </svg>
  );
}

export function IconLeaf(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20C4 11 11 4 20 4c0 9-7 16-16 16z" />
      <path d="M4 20c4-6 8-8 12-9" />
    </svg>
  );
}
