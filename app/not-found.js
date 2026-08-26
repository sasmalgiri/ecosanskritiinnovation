import Link from 'next/link';
import FluxMandala from '@/components/FluxMandala';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="hero" style={{ minHeight: '70vh', display: 'grid', placeItems: 'center' }}>
      <div className="wrap" style={{ textAlign: 'center', paddingBlock: '4rem' }}>
        <div style={{ display: 'grid', placeItems: 'center', marginBottom: '1.5rem' }}>
          <FluxMandala className="mandala" />
        </div>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>Error · 404</p>
        <h1 className="hero__title" style={{ fontSize: 'clamp(2rem, 1.5rem + 3vw, 3.5rem)' }}>
          This path went <em>off the grid.</em>
        </h1>
        <p className="hero__sub" style={{ marginInline: 'auto' }}>
          The page you’re after doesn’t exist or has moved. Let’s get you back on track.
        </p>
        <div className="hero__actions" style={{ justifyContent: 'center' }}>
          <Link href="/" className="btn btn--gold">Back to home</Link>
          <Link href="/products" className="btn btn--ghost">See products</Link>
        </div>
      </div>
    </section>
  );
}
