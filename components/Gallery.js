'use client';

import { useCallback, useEffect, useState } from 'react';

/* Click-to-zoom grid. Arrow keys move between shots, Escape closes,
   and body scroll is locked while the lightbox is open. */
export default function Gallery({ images, className = '', columns }) {
  const [open, setOpen] = useState(-1);
  const close = useCallback(() => setOpen(-1), []);
  const isOpen = open >= 0;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % images.length);
      else if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + images.length) % images.length);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, images.length, close]);

  return (
    <>
      <div
        className={'gallery ' + className}
        style={columns ? { '--gallery-cols': columns } : undefined}
      >
        {images.map((im, i) => (
          <button type="button" className="gallery__cell" key={im.src} onClick={() => setOpen(i)}>
            <img src={im.src} alt={im.alt} loading="lazy" decoding="async" />
            <span className="gallery__zoom" aria-hidden="true">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5M11 8v6M8 11h6" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={images[open].alt} onClick={close}>
          <button type="button" className="lightbox__close" onClick={close} aria-label="Close">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <img
            className="lightbox__img"
            src={images[open].src}
            alt={images[open].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <p className="lightbox__cap">
            {images[open].alt}
            <span className="lightbox__count">{open + 1} / {images.length}</span>
          </p>
        </div>
      )}
    </>
  );
}
