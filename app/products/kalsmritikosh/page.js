import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Stagger from '@/components/Stagger';
import Parallax from '@/components/Parallax';
import FluxMandala from '@/components/FluxMandala';
import AppStoreButton from '@/components/AppStoreButton';
import { IconArrow } from '@/components/Icons';

export const metadata = {
  title: 'Kalsmritikosh — a private, on-device knowledge vault for Mac',
  description:
    'A personal knowledge system that keeps everything you know on your own Mac. Capture, connect and recall your notes and documents — private by design, working even offline. In development.',
};

const PLANNED = [
  { tag: 'CAP', title: 'Capture without friction', body: 'Notes, documents and clippings land in one place instead of scattering across folders, apps and downloads.' },
  { tag: 'LNK', title: 'Connect what belongs together', body: 'Ideas link to the documents that produced them, so recall follows the shape of your own thinking rather than a folder tree.' },
  { tag: 'FND', title: 'Recall in a keystroke', body: 'Search that reaches inside your documents, not just their filenames.' },
  { tag: 'OFF', title: 'Works with the wifi off', body: 'A vault that depends on a server is a vault someone else holds. This one lives on your Mac and opens whether or not you are online.' },
];

export default function KalsmritikoshPage() {
  return (
    <>
      <section className="applead aurora">
        <div className="wrap">
          <p className="applead__crumb">
            <Link href="/" className="ulink">Home</Link> / <Link href="/products" className="ulink">Products</Link> / Kalsmritikosh
          </p>

          <div className="applead__grid">
            <div>
              <div className="applead__icon" style={{ display: 'grid', placeItems: 'center', background: 'var(--pine)', fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--haldi)' }}>
                K
              </div>

              <h1 className="applead__title">Kal<em>smritikosh</em></h1>
              <p className="applead__tagline">Your private, on-device knowledge vault.</p>

              <div className="applead__meta">
                <span className="pill pill--platform">macOS</span>
                <span className="pill badge--soon">In development</span>
              </div>

              <p className="applead__desc">
                A personal knowledge system that keeps everything you know on your own Mac.
                Capture, connect and recall your notes and documents &mdash; private by design,
                and working even with the network off.
              </p>

              <div className="applead__actions">
                <AppStoreButton platform="macOS" />
                <Link href="/contact" className="btn btn--ghost">
                  Tell us what you need <IconArrow className="btn__arrow" width="16" height="16" />
                </Link>
              </div>
            </div>

            <Parallax speed={0.05}>
              <div className="float float--slow" style={{ display: "grid", placeItems: "center", minHeight: "260px" }}>
                <div style={{ width: "100%", maxWidth: "340px", opacity: 0.9 }}>
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
              <h2 className="cta__title">Want an early build?</h2>
              <p className="cta__body">
                Kalsmritikosh is still being built. Tell us how you work and what you would want
                from it, and we will come back to you when there is something to try.
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
