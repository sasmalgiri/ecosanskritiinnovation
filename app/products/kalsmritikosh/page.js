import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SplitReveal from '@/components/SplitReveal';
import Stagger from '@/components/Stagger';
import Tilt from '@/components/Tilt';
import ClipReveal from '@/components/ClipReveal';
import Parallax from '@/components/Parallax';
import Gallery from '@/components/Gallery';
import Marquee from '@/components/Marquee';
import StickyShowcase from '@/components/StickyShowcase';
import AppStoreButton from '@/components/AppStoreButton';
import { MacWindow } from '@/components/DeviceFrame';
import { IconArrow } from '@/components/Icons';

export const metadata = {
  title: 'Kalsmritikosh — a private evidence workbench for macOS',
  description:
    'Turn your document and email archive into answers you can trust — timelines, dossiers and cited datasets, every claim traced to its source. Runs entirely on your Mac. In development.',
};

const S = '/app-shots/kalsmritikosh';

/* Captions follow the repo's own shot list, kept to what each screen shows. */
const TOUR = [
  {
    title: 'Ask, and see the evidence',
    body: 'Ask in plain language and get an answer that cites its sources, grades its own confidence, and says plainly where the gaps are. Conflicts between documents are shown side by side rather than averaged away.',
    src: `${S}/ask.webp`,
    alt: 'Kalsmritikosh answering a question with cited evidence',
  },
  {
    title: 'A timeline it builds for you',
    body: 'Dated events are extracted across the whole archive and assembled into a real timeline — not a chat log, but a ledger of what happened and when, with each entry anchored to the document it came from.',
    src: `${S}/timeline.webp`,
    alt: 'Reconstructed timeline of dated events',
  },
  {
    title: 'The knowledge ledger',
    body: 'People, events and the relationships between them are extracted into a structured store, so the archive becomes something you can query rather than something you have to remember.',
    src: `${S}/knowledge.webp`,
    alt: 'The structured knowledge ledger',
  },
  {
    title: 'Every claim, traced',
    body: 'Layered citations run all the way down to the originating file. Drill into any cell, any fact, any figure, and the source is right there — with file authenticity signals and email threading alongside it.',
    src: `${S}/sources.webp`,
    alt: 'Sources and citations behind a claim',
  },
  {
    title: 'Bring in what you already have',
    body: 'Documents and email archives are converted and ingested into the same evidence base, so material that arrived in a dozen formats ends up answerable in one place.',
    src: `${S}/convert.webp`,
    alt: 'Converting and ingesting documents',
  },
  {
    title: 'Workflows for real jobs',
    body: 'The Professional Work Center runs step-by-step workflows for specific kinds of work, with gated steps and guidance, instead of leaving you to invent a process from a blank window.',
    src: `${S}/professional-jobs.webp`,
    alt: 'The Professional Work Center persona picker',
  },
];

const FEATURES = [
  { tag: 'ASK', title: 'Answers with an evidence gate', body: 'Specialist experts sit behind a gate that will not let an answer through without the sources to support it. Every claim carries what it rests on.' },
  { tag: 'LAB', title: 'DataLab', body: 'Build cited datasets over your evidence, or generate them from what you have ingested — timelines, people, payments, communications, conflicts, missing evidence. Every cell drills back to its source.' },
  { tag: 'RED', title: 'Real redaction', body: 'Redaction that actually removes the text, rather than drawing a black box over something still sitting in the file underneath.' },
  { tag: 'FLW', title: 'Fund flow', body: 'A payer-to-payee view with a ranked flow list, for when the question is where the money went rather than what the document said.' },
  { tag: 'DEV', title: 'Fully on-device', body: 'Your documents, the knowledge built from them, and the questions you ask never leave your Mac. No analytics, no telemetry, no cloud processing. Remove the app data and it is all gone.' },
  { tag: 'HON', title: 'Honest by design', body: 'It shows what is proven, what is inferred and what is missing — and tells you when it is not sure. A tool, explicitly not professional advice.' },
];

const GALLERY = [
  { src: `${S}/ask.webp`, alt: 'Asking a question with cited evidence' },
  { src: `${S}/timeline.webp`, alt: 'Reconstructed timeline' },
  { src: `${S}/insights.webp`, alt: 'Insights across the archive' },
  { src: `${S}/knowledge.webp`, alt: 'The knowledge ledger' },
  { src: `${S}/sources.webp`, alt: 'Sources behind a claim' },
  { src: `${S}/search.webp`, alt: 'Searching the archive' },
  { src: `${S}/convert.webp`, alt: 'Converting and ingesting documents' },
  { src: `${S}/live.webp`, alt: 'What changed as new documents arrive' },
  { src: `${S}/settings.webp`, alt: 'Privacy settings — on-device by design' },
  { src: `${S}/professional-jobs.webp`, alt: 'Professional Work Center' },
];

const STRIP = GALLERY.slice(0, 7);

export default function KalsmritikoshPage() {
  return (
    <>
      {/* -------- HERO -------- */}
      <section className="applead aurora">
        <div className="wrap">
          <p className="applead__crumb">
            <Link href="/" className="ulink">Home</Link> / <Link href="/products" className="ulink">Products</Link> / Kalsmritikosh
          </p>

          <div className="applead__grid">
            <div>
              <div className="applead__icon">
                <img src="/app-icons/kalsmritikosh.webp" alt="" width="84" height="84" />
              </div>

              <h1 className="applead__title">Kal<em>smritikosh</em></h1>
              <p className="applead__tagline">A private evidence workbench.</p>

              <div className="applead__meta">
                <span className="pill pill--platform">macOS 15+</span>
                <span className="pill pill--platform">Apple-native</span>
                <span className="pill badge--soon">In development</span>
              </div>

              <p className="applead__desc">
                Turn your whole document and email archive into answers you can trust &mdash;
                timelines, dossiers, datasets &mdash; with every fact cited to its source.
                It builds a real ledger of people, dated events and relationships, and runs
                entirely on your Mac.
              </p>

              <div className="applead__actions">
                <AppStoreButton platform="macOS" />
                <Link href="/contact" className="btn btn--ghost">
                  Ask about early access <IconArrow className="btn__arrow" width="16" height="16" />
                </Link>
              </div>
            </div>

            <Parallax speed={0.05}>
              <ClipReveal>
                <Tilt max={6}>
                <MacWindow src={`${S}/ask.webp`} alt="Kalsmritikosh answering with cited evidence" title="Kalsmritikosh" priority />
                </Tilt>
            </ClipReveal>
            </Parallax>
          </div>
        </div>
      </section>

      {/* -------- TOUR -------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">A guided look</p>
            <SplitReveal as="h2" className="head__title" text="It does not chat with your files. It builds a ledger." />
          </Reveal>
          <StickyShowcase steps={TOUR} windowTitle="Kalsmritikosh" />
        </div>
      </section>

      {/* -------- FEATURES -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">Built for serious work</p>
            <SplitReveal as="h2" className="head__title" text="What is inside." />
          </Reveal>
          <Stagger className="featgrid">
            {FEATURES.map((f) => (
              <article className="featgrid__cell spot" key={f.title}>
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

      {/* -------- STRIP -------- */}
      <section className="section section--tight">
        <Reveal><Marquee items={STRIP} speed={56} /></Reveal>
      </section>

      {/* -------- GALLERY -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">Every screen</p>
            <SplitReveal as="h2" className="head__title" text="Ten shots from the build." />
          </Reveal>
          <Reveal><Gallery images={GALLERY} columns={4} /></Reveal>
        </div>
      </section>

      {/* -------- CTA -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <div className="cta">
              <SplitReveal as="h2" className="cta__title" text="Want an early build?" />
              <p className="cta__body">
                Kalsmritikosh is still in development. Tell us what you work on and we will come
                back to you when there is something worth putting on your Mac.
              </p>
              <div className="cta__actions">
                <Link href="/contact" className="btn btn--gold magnet">
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
