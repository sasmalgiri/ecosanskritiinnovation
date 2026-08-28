import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Stagger from '@/components/Stagger';
import SplitReveal from '@/components/SplitReveal';
import ClipReveal from '@/components/ClipReveal';
import Tilt from '@/components/Tilt';
import Counter from '@/components/Counter';
import Marquee from '@/components/Marquee';
import KineticStrip from '@/components/KineticStrip';
import Magnetic from '@/components/Magnetic';

export const metadata = {
  title: 'Work — shipped, not pitched',
  description:
    'Two apps live on the App Store, a granted patent, speech and document AI pipelines in production. The work of EcoSanskriti Innovations, with links to every one.',
};

const FIVERR = 'https://www.fiverr.com/everythingme232';

/**
 * The work, ordered by how easily a stranger can verify it.
 *
 * Studio sites like Trionn and LiquidInk lead with tiles that carry the
 * deliverables as tags — "3D, Visual Language, Icons" — because a visitor
 * scanning for capability reads tags faster than prose. The same idea here,
 * with one difference that matters more than any styling: every entry has a
 * `href` to the actual artefact. Shipped work you can download outranks a
 * case study you have to take on trust, and it is the one thing a small
 * studio has that a big one cannot fake.
 *
 * `status` is deliberately honest — "Live on the App Store" and "Open source"
 * are different claims and are labelled differently.
 */
const WORK = [
  {
    name: 'mailin',
    kind: 'Product · Apple platforms',
    year: '2026',
    status: 'Live on the App Store',
    blurb:
      'Forensic email analysis for Mac and iPhone. Parses .mbox and .eml archives, filters at scale, surfaces AI insight and exports what you found.',
    tags: ['Swift', 'SwiftUI', 'On-device AI', 'App Store'],
    href: 'https://apps.apple.com/app/mailin/id6767245397',
    internal: '/products/mailin',
    accent: 'a',
  },
  {
    name: 'Antya Yuga',
    kind: 'Product · Game',
    year: '2026',
    status: 'Live on the App Store',
    blurb:
      'A tower defence built on Indian itihāsa. Three Yugas, nine dynasties, thirty divine astras and a Sudarshana Chakra you charge across a run.',
    tags: ['SwiftUI', 'Game design', 'iOS · macOS', 'Windows · Android'],
    href: 'https://apps.apple.com/app/antya-yuga/id6783359423',
    internal: '/products/antya-yuga',
    accent: 'b',
  },
  {
    name: 'HRIM Motor',
    kind: 'Deep tech · Hardware',
    year: '2023',
    status: 'Patent granted',
    blurb:
      'A hybrid reluctance induction motor that uses all of its magnetic flux, recovers energy while running, and cools itself without a fan.',
    tags: ['Electric machines', 'Patent 555489', 'EV', 'Industrial'],
    href: '/assets/hrim-patent.pdf',
    internal: '/#hrim',
    accent: 'c',
  },
  {
    name: 'Kalsmritikosh',
    kind: 'Product · Knowledge OS',
    year: '2026',
    status: 'In development',
    blurb:
      'A local-first, Apple-native knowledge system. Ingests anything, extracts entities and events, builds timelines, and answers with cited evidence through a capability-routed master brain.',
    tags: ['Swift', 'RAG', 'Local-first', 'macOS 15+'],
    href: 'https://github.com/sasmalgiri/kalsmritikosh',
    internal: '/products/kalsmritikosh',
    accent: 'a',
  },
  {
    name: 'VITS Hindi TTS',
    kind: 'AI · Speech',
    year: '2026',
    status: 'Open source',
    blurb:
      'An end-to-end Hindi text-to-speech toolkit: data pipeline, training, inference and evaluation. Built because good Hindi voices were not available off the shelf.',
    tags: ['Python', 'VITS', 'Speech synthesis', 'Hindi'],
    href: 'https://github.com/sasmalgiri/VITS_Hindi_TTS',
    accent: 'b',
  },
  {
    name: 'Hindi Dubbing Pipeline',
    kind: 'AI · Media',
    year: '2026',
    status: 'Open source',
    blurb:
      'Production-grade English to Hindi dubbing: automatic speech recognition, translation, synthesis and audio assembly, run as one pipeline.',
    tags: ['ASR', 'Translation', 'TTS', 'Audio'],
    href: 'https://github.com/sasmalgiri/youtube-hindi-dubbing-app',
    accent: 'c',
  },
  {
    name: 'OCR Table Pipeline',
    kind: 'AI · Documents',
    year: '2026',
    status: 'Open source',
    blurb:
      'Deskewing, table detection, column splitting and Excel export for logistics paperwork — the unglamorous work that turns scans into data.',
    tags: ['OCR', 'Computer vision', 'Python', 'Excel'],
    href: 'https://github.com/sasmalgiri/ocr-table-pipeline',
    accent: 'a',
  },
  {
    name: 'MyCupIsEmpty',
    kind: 'Platform · Education',
    year: '2026',
    status: 'In development',
    blurb:
      'An adaptive learning platform for the Indian school curriculum that observes how a child actually learns rather than asking, and adapts per subject.',
    tags: ['Next.js', 'Supabase', 'Adaptive learning', 'NCERT'],
    href: 'https://github.com/sasmalgiri/mycupisempty',
    accent: 'b',
  },
  {
    name: 'AI Camera Coach',
    kind: 'Product · Apple platforms',
    year: '2026',
    status: 'In development',
    blurb:
      'An iOS camera that coaches the shot as you frame it — pro-looking photographs without first learning photography.',
    tags: ['Swift', 'Vision', 'On-device', 'iOS'],
    href: 'https://github.com/sasmalgiri/ai-camera-coach',
    accent: 'c',
  },
];

const CAPABILITY_WORDS = [
  'RAG search', 'Swift & SwiftUI', 'Speech synthesis', 'Computer vision',
  'Next.js platforms', 'Electric machines', 'On-device AI', 'Document AI',
  'App Store delivery', 'Vector databases',
];

const STACK = [
  'Swift', 'SwiftUI', 'Python', 'PyTorch', 'Next.js', 'React',
  'Supabase', 'Postgres', 'WebGL', 'Vercel', 'Groq', 'Ollama',
];

export default function WorkPage() {
  return (
    <>
      {/* ── hero ─────────────────────────────────────────────── */}
      <section className="pagehead pagehead--xl">
        <div className="wrap">
          <p className="crumb"><Link href="/">Home</Link> / Work</p>
          <SplitReveal
            as="h1"
            className="worktitle"
            text="Shipped, not pitched."
          />
          <Reveal as="p" className="pagehead__lede" delay={120}>
            A granted patent in electric machines. Two applications live on the App Store.
            Speech, vision and document pipelines running in production. Everything below
            links to the thing itself — download it, read the patent, clone the repository.
          </Reveal>
        </div>
      </section>

      {/* ── metrics ──────────────────────────────────────────── */}
      <section className="section section--tight">
        <div className="wrap">
          <Stagger className="metrics">
            <div className="metric">
              <span className="metric__num"><Counter to={2} /></span>
              <span className="metric__lbl">Apps on the App Store</span>
            </div>
            <div className="metric">
              <span className="metric__num"><Counter to={1} /></span>
              <span className="metric__lbl">Patent granted</span>
            </div>
            <div className="metric">
              <span className="metric__num"><Counter to={9} suffix="+" /></span>
              <span className="metric__lbl">Shipped projects</span>
            </div>
            <div className="metric">
              <span className="metric__num"><Counter to={5.0} decimals={1} /></span>
              <span className="metric__lbl">Fiverr rating</span>
            </div>
          </Stagger>
        </div>
      </section>

      <KineticStrip words={CAPABILITY_WORDS} speed={34} />

      {/* ── the work ─────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <Reveal as="h2" className="head__title">Selected work</Reveal>

          <div className="worklist">
            {WORK.map((w, i) => (
              <ClipReveal key={w.name} delay={Math.min(i, 4) * 60}>
                <Tilt max={4} className="workcard-tilt">
                  <article className={`workcard workcard--${w.accent}`}>
                    <div className="workcard__meta">
                      <span className="workcard__kind">{w.kind}</span>
                      <span className="workcard__year">{w.year}</span>
                    </div>

                    <h3 className="workcard__name">{w.name}</h3>
                    <p className="workcard__status">{w.status}</p>
                    <p className="workcard__blurb">{w.blurb}</p>

                    <ul className="workcard__tags">
                      {w.tags.map((t) => <li key={t}>{t}</li>)}
                    </ul>

                    <div className="workcard__links">
                      <a
                        className="workcard__cta"
                        href={w.href}
                        target={w.href.startsWith('http') ? '_blank' : undefined}
                        rel={w.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {w.status === 'Live on the App Store' ? 'Download it'
                          : w.status === 'Patent granted' ? 'Read the patent'
                          : 'See the code'} <span aria-hidden="true">→</span>
                      </a>
                      {w.internal && (
                        <Link className="workcard__more" href={w.internal}>More about it</Link>
                      )}
                    </div>
                  </article>
                </Tilt>
              </ClipReveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={STACK} speed={40} />

      {/* ── hire us ──────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap ctaband">
          <Reveal as="h2">We take on this work for other people too.</Reveal>
          <Reveal as="p">
            AI platforms, Apple applications, speech and document pipelines — scoped
            and priced on Fiverr, rated 5.0.
          </Reveal>
          <div className="cta-row">
            <Magnetic>
              <Link className="btn btn--gold" href="/services">See what we offer</Link>
            </Magnetic>
            <a className="btn" href={FIVERR} target="_blank" rel="noopener noreferrer">
              Our Fiverr profile
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
