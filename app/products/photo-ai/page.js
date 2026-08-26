import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Stagger from '@/components/Stagger';
import Parallax from '@/components/Parallax';
import FluxMandala from '@/components/FluxMandala';
import AppStoreButton from '@/components/AppStoreButton';
import { IconArrow } from '@/components/Icons';

export const metadata = {
  title: 'Photo AI — studio-grade photo editing, on device',
  description:
    'Turn everyday photos into polished, share-ready images with on-device AI. Clean up, enhance and restyle in a tap, with your pictures never leaving your phone. In development.',
};

const PLANNED = [
  { tag: 'FIX', title: 'Clean up in a tap', body: 'Remove the passer-by, the power line, the smudge on the lens — without learning a desktop editor first.' },
  { tag: 'ENH', title: 'Enhance, not overcook', body: 'Lift a dull photo into something worth printing, while keeping skin, sky and colour looking like the moment you remember.' },
  { tag: 'STY', title: 'Restyle a shot', body: 'Try a different mood on an image and keep the version you like, with the original always recoverable.' },
  { tag: 'DEV', title: 'Nothing leaves the phone', body: 'Processing happens on the device. Your photos are not uploaded to a server to be enhanced, and there is no account to create.' },
];

export default function PhotoAIPage() {
  return (
    <>
      <section className="applead aurora">
        <div className="wrap">
          <p className="applead__crumb">
            <Link href="/" className="ulink">Home</Link> / <Link href="/products" className="ulink">Products</Link> / Photo AI
          </p>

          <div className="applead__grid">
            <div>
              <div className="applead__icon" style={{ display: 'grid', placeItems: 'center', background: 'var(--pine)', fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--haldi)' }}>
                P
              </div>

              <h1 className="applead__title">Photo <em>AI</em></h1>
              <p className="applead__tagline">Studio-grade photo magic, on your phone.</p>

              <div className="applead__meta">
                <span className="pill pill--platform">iOS</span>
                <span className="pill badge--soon">In development</span>
              </div>

              <p className="applead__desc">
                Turn everyday photos into polished, share-ready images with on-device AI &mdash;
                clean up, enhance and restyle in a tap, with your pictures staying exactly where
                they are.
              </p>

              <div className="applead__actions">
                <AppStoreButton platform="iOS" />
                <Link href="/contact" className="btn btn--ghost">
                  Tell us what you need <IconArrow className="btn__arrow" width="16" height="16" />
                </Link>
              </div>
            </div>

            <Parallax speed={0.05}>
              <div className="float float--slow" style={{ display: 'grid', placeItems: 'center', minHeight: '260px' }}>
                <div style={{ width: '100%', maxWidth: '340px', opacity: 0.9 }}>
                  <FluxMandala animated />
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">What we are building</p>
            <h2 className="head__title">The shape it is taking.</h2>
          </Reveal>
          <Stagger className="featgrid">
            {PLANNED.map((f) => (
              <article className="featgrid__cell" key={f.title}>
                <span className="featgrid__ico">
                  <b style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.06em' }}>{f.tag}</b>
                </span>
                <h3 className="featgrid__title">{f.title}</h3>
                <p className="featgrid__body">{f.body}</p>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <div className="cta">
              <FluxMandala animated={false} className="cta__watermark" />
              <h2 className="cta__title">Want it first?</h2>
              <p className="cta__body">
                Photo AI is still in development. Leave us a note and we will let you know when
                there is a build worth putting on your phone.
              </p>
              <div className="cta__actions">
                <Link href="/contact" className="btn btn--gold">
                  Get in touch <IconArrow className="btn__arrow" width="16" height="16" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
