import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Stagger from '@/components/Stagger';
import Magnetic from '@/components/Magnetic';

export const metadata = {
  title: 'Services — build with us',
  description:
    'We architect, build and deploy AI platforms end to end: RAG search, admin dashboards and APIs. Available for client work, with a 5.0-rated Fiverr practice.',
};

const FIVERR = 'https://www.fiverr.com/everythingme232';
const GIG =
  'https://www.fiverr.com/everythingme232/build-a-complete-ai-platform-with-rag-search-admin-dashboard-and-api';

/**
 * What we actually build, evidenced by shipped work rather than adjectives.
 *
 * Every item here maps to something real and checkable — two apps live on the
 * App Store, a granted patent, public repositories. A services page that lists
 * capabilities with no proof is indistinguishable from every other services
 * page; one that links to the thing you can download is not.
 */
const CAPABILITIES = [
  {
    k: 'AI platforms',
    t: 'RAG search, agents and APIs',
    d: 'Retrieval-augmented systems with vector search, an admin dashboard and a documented API — architected, built and deployed, not prototyped.',
    proof: 'Kalsmritikosh — a capability-routed knowledge OS with cited evidence',
  },
  {
    k: 'Apple platforms',
    t: 'iOS, iPadOS and macOS',
    d: 'Native Swift and SwiftUI applications taken through App Store review and published.',
    proof: 'mailin and Antya Yuga — both live on the App Store',
  },
  {
    k: 'Speech & language',
    t: 'TTS, dubbing and ASR pipelines',
    d: 'Hindi text-to-speech training toolkits and full English-to-Hindi dubbing pipelines: ASR, translation, synthesis and audio assembly.',
    proof: 'VITS Hindi TTS · YouTube dubbing pipeline',
  },
  {
    k: 'Document AI',
    t: 'OCR and structured extraction',
    d: 'Deskewing, table detection, column splitting and export — turning scanned logistics documents into usable spreadsheets.',
    proof: 'OCR table pipeline, production-grade',
  },
  {
    k: 'Web platforms',
    t: 'Next.js products and dashboards',
    d: 'Adaptive learning platforms, analytics dashboards and data tools, deployed and maintained.',
    proof: 'MyCupIsEmpty · ChatMind dashboard',
  },
  {
    k: 'Deep tech',
    t: 'Electric machines',
    d: 'The HRIM Motor: 100% flux utilisation, energy recovery in operation, and no cooling fan.',
    proof: 'Indian Patent No. 555489, granted 2023',
  },
];

const TIERS = [
  {
    name: 'Core Platform',
    price: '₹20,064',
    days: '21-day delivery',
    what: 'RAG system with vector search and a basic API.',
    for: 'Proving the idea works on your own data.',
    featured: false,
  },
  {
    name: 'Standard',
    price: 'On the gig',
    days: 'Scoped with you',
    what: 'The core platform plus an admin dashboard and a fuller API surface.',
    for: 'A working internal tool your team can actually use.',
    featured: true,
  },
  {
    name: 'Premium',
    price: 'On the gig',
    days: 'Scoped with you',
    what: 'End-to-end architecture, build and deployment, hardened for production.',
    for: 'Something you intend to put in front of customers.',
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <p className="crumb"><Link href="/">Home</Link> / Services</p>
          <h1 className="pagehead__title">
            We build the thing,<br />not the slide deck.
          </h1>
          <p className="pagehead__lede">
            Everything below is something we have shipped — apps you can download today,
            a patent that was granted, pipelines running in production. We take on client
            work in the same areas.
          </p>
          <div className="cta-row">
            <Magnetic>
              <a className="btn btn--gold" href={GIG} target="_blank" rel="noopener noreferrer">
                Start a project on Fiverr
              </a>
            </Magnetic>
            <Link className="btn btn--ghost" href="/contact">Talk to us directly</Link>
          </div>
          <p className="micro">
            ★★★★★ 5.0 on Fiverr · Programming &amp; Tech → AI Development
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="h2" className="head__title">What we do</Reveal>
          <Stagger className="cardgrid">
            {CAPABILITIES.map((c) => (
              <article className="card" key={c.t}>
                <span className="card__kicker">{c.k}</span>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
                <p className="card__proof">↳ {c.proof}</p>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="h2" className="head__title">
            Build a complete AI platform
          </Reveal>
          <Reveal as="p" className="lede">
            RAG search, an admin dashboard and an API — architected, developed and deployed.
            Three tiers, priced and scoped on Fiverr so there is nothing to negotiate blind.
          </Reveal>

          <Stagger className="tiergrid">
            {TIERS.map((t) => (
              <article
                className={`tier${t.featured ? ' tier--featured' : ''}`}
                key={t.name}
              >
                {t.featured && <span className="tier__flag">Most chosen</span>}
                <h3>{t.name}</h3>
                <p className="tier__price">{t.price}</p>
                <p className="tier__days">{t.days}</p>
                <p className="tier__what">{t.what}</p>
                <p className="tier__for">{t.for}</p>
                <a className="btn btn--outline-ink" href={GIG} target="_blank" rel="noopener noreferrer">
                  View on Fiverr
                </a>
              </article>
            ))}
          </Stagger>

          <p className="micro micro--center">
            Prices shown in INR as listed on Fiverr and may change there. The gig page is
            always the authority.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap ctaband">
          <Reveal as="h2">Have something you need built?</Reveal>
          <Reveal as="p">
            Tell us what it has to do. If we are the wrong people for it, we will say so.
          </Reveal>
          <div className="cta-row">
            <Magnetic>
              <a className="btn btn--gold" href={FIVERR} target="_blank" rel="noopener noreferrer">
                See all our gigs
              </a>
            </Magnetic>
            <Link className="btn btn--outline-ink" href="/contact">Email us instead</Link>
          </div>
        </div>
      </section>
    </>
  );
}
