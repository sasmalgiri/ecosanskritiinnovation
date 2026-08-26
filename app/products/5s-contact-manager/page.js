import Link from 'next/link';
import FluxMandala from '@/components/FluxMandala';
import Reveal from '@/components/Reveal';
import { IconCheck, IconArrow } from '@/components/Icons';

export const metadata = {
  title: '5S Contact Manager',
  description: 'A calm, organised contact manager built on the 5S philosophy — sort, set in order, shine, standardise, sustain.',
};

const FIVE_S = [
  { s: 'Sort', body: 'Clear out duplicates and dead entries so only what matters remains.' },
  { s: 'Set in order', body: 'Every contact in a predictable place, findable in a keystroke.' },
  { s: 'Shine', body: 'Clean, consistent records — names, numbers, and notes that stay tidy.' },
  { s: 'Standardise', body: 'One way of storing things, so your address book never drifts.' },
  { s: 'Sustain', body: 'Habits and gentle nudges that keep everything in order over time.' },
];

export default function FiveSPage() {
  return (
    <>
      <section className="pagehead">
        <FluxMandala animated={false} className="pagehead__mark" />
        <div className="wrap">
          <p className="crumb">
            <Link href="/">Home</Link> / <Link href="/products">Products</Link> / 5S Contact Manager
          </p>
          <h1 className="pagehead__title">5S Contact Manager</h1>
          <p className="pagehead__lede">
            A calm, organised way to keep your contacts in order — built on the Japanese 5S
            philosophy of sort, set in order, shine, standardise, and sustain.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <div className="callout">
            <strong>Editor’s note (remove before publishing):</strong> Drop in your real product
            description, screenshots, App Store link, and pricing here. The 5S framing below is a
            starting point you can keep or rewrite.
          </div>

          <Reveal as="p">
            The 5S Contact Manager takes a workshop-floor discipline and applies it to the messiest
            corner of your digital life: your address book. Instead of another feature-heavy CRM, it’s
            a focused tool that helps you keep contacts clean, consistent, and effortless to find.
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">The method</p>
            <h2 className="head__title">Five steps to a tidy address book.</h2>
          </Reveal>
          <Reveal>
            <div className="cardgrid">
              {FIVE_S.map((item, i) => (
                <article className="card" key={item.s}>
                  <span className="card__tag">{`S${i + 1}`}</span>
                  <h3 className="card__title">{item.s}</h3>
                  <p className="card__body">{item.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <div className="cta">
              <FluxMandala animated={false} className="cta__watermark" />
              <h2 className="cta__title">Want it for your team?</h2>
              <p className="cta__body">
                Add your App Store link or a “request access” action here. Until then, reach out and
                we’ll point you to the latest build.
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
