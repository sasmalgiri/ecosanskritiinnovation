import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SplitReveal from '@/components/SplitReveal';
import Stagger from '@/components/Stagger';
import Tilt from '@/components/Tilt';
import ClipReveal from '@/components/ClipReveal';
import Parallax from '@/components/Parallax';
import Counter from '@/components/Counter';
import Marquee from '@/components/Marquee';
import PhoneRail from '@/components/PhoneRail';
import StickyShowcase from '@/components/StickyShowcase';
import AppStoreButton from '@/components/AppStoreButton';
import { MacWindow } from '@/components/DeviceFrame';
import { IconArrow } from '@/components/Icons';

export const metadata = {
  title: 'mailin — Email Archive Analyzer for Mac, iPhone & iPad',
  description:
    'Import .mbox, .eml, .pst, .msg and more from Gmail, Outlook, Thunderbird or Apple Mail. Search, analyse and export your email history with on-device AI. Nothing leaves your device.',
};

const APP_STORE = 'https://apps.apple.com/app/mailin/id6767245397';

/* Scroll-driven tour. Each step pins its screenshot while the copy passes. */
const TOUR = [
  {
    title: 'Open any archive',
    body: 'MBOX, EML, EMLX, MSG, PST, OST, NSF and ZIP — from Gmail Takeout, Thunderbird, Apple Mail, Outlook or Lotus Notes. Full MIME and RFC 822 support, with conversation threading that groups related mail together.',
    src: '/app-shots/mailin/inbox.webp',
    alt: 'mailin browsing an imported email archive',
  },
  {
    title: 'Search like an investigator',
    body: 'Boolean AND / OR / NOT, regex and wildcards, and proximity search that finds terms near each other. BM25 relevance ranking puts the right message first, and Gmail labels survive the import.',
    src: '/app-shots/mailin/search.webp',
    alt: 'Advanced search in mailin',
  },
  {
    title: 'On-device intelligence',
    body: 'Sentiment, topics and keywords via Apple NaturalLanguage. Priority scoring, PII and GDPR scanning, near-duplicate detection, and an AI assistant you can ask questions in plain language — all without a single byte leaving the machine.',
    src: '/app-shots/mailin/ai.webp',
    alt: 'On-device AI analysis in mailin',
  },
  {
    title: 'See the shape of your mail',
    body: 'Volume timelines split by sent and received, top contacts and communication pairs, an activity heatmap by day and hour, attachment breakdowns and a contact network you can export as a report.',
    src: '/app-shots/mailin/analytics.webp',
    alt: 'Analytics dashboard in mailin',
  },
  {
    title: 'Evidence-grade handling',
    body: 'Tamper-proof HMAC audit logging and chain of custody. SPF, DKIM and DMARC analysis, S/MIME verification, spoofing detection, Bates numbering, custodian management and legal hold marking.',
    src: '/app-shots/mailin/documents.webp',
    alt: 'Forensic and legal tooling in mailin',
  },
  {
    title: 'Export anywhere',
    body: 'EML, JSON, CSV, PDF, MSG or PST. Bates-stamped PDFs for compliance, forensic reports carrying SHA-256, SHA-1 and MD5 hashes, Concordance load files, vCard contacts, and redacted exports with PII stripped automatically.',
    src: '/app-shots/mailin/workflow.webp',
    alt: 'Export options in mailin',
  },
];

const STATS = [
  { to: 11, label: 'Languages' },
  { to: 8, label: 'Import formats' },
  { to: 6, label: 'Export formats' },
  { to: 0, label: 'Trackers' },
];

const FEATURES = [
  { tag: 'AI', title: 'Apple Intelligence ready', body: 'Predictive coding learns what counts as relevant as you review, AI Digest summarises a whole archive, and anomaly detection flags unusual patterns. Apple Intelligence on macOS 26 and later.' },
  { tag: 'PII', title: 'Privacy as the default', body: 'Zero data collection — no analytics, no tracking, no telemetry. Everything runs on-device in Apple frameworks, inside an App Sandbox with minimal permissions.' },
  { tag: 'SEC', title: 'AES-256 and biometrics', body: 'Encrypted storage with a biometric lock, plus Spotlight search and iCloud sync when you want your work to follow you between devices.' },
  { tag: 'LAW', title: 'Built for review work', body: 'Evidence tagging, examiner annotations, review batching, deduplication and near-duplicate detection — the machinery a real document review actually needs.' },
  { tag: 'CMP', title: 'Side-by-side diff', body: 'Compare two emails line by line, monitor keywords with smart alerts, and auto-tag incoming material with your own automation rules.' },
  { tag: 'PLN', title: 'Free to start', body: 'Up to 500 emails free with basic filtering and NLP. Personal unlocks unlimited mail, AI and exports; Professional adds audit trail, chain of custody and Bates numbering. Monthly, yearly, or buy once.' },
];

const IOS_SHOTS = [
  { src: '/app-shots/mailin/ios-01.webp', alt: 'mailin on iPhone — archive list', caption: 'Your archive, in your pocket' },
  { src: '/app-shots/mailin/ios-02.webp', alt: 'mailin on iPhone — message view', caption: 'Full MIME rendering' },
  { src: '/app-shots/mailin/ios-03.webp', alt: 'mailin on iPhone — search', caption: 'The same search engine' },
  { src: '/app-shots/mailin/ios-04.webp', alt: 'mailin on iPhone — analytics', caption: 'Analytics on the move' },
  { src: '/app-shots/mailin/ios-05.webp', alt: 'mailin on iPhone — settings', caption: 'Locked behind Face ID' },
];

const STRIP = TOUR.map((t) => ({ src: t.src, alt: t.alt }));

export default function MailinPage() {
  return (
    <>
      {/* -------- HERO -------- */}
      <section className="applead aurora">
        <div className="wrap">
          <p className="applead__crumb">
            <Link href="/" className="ulink">Home</Link> / <Link href="/products" className="ulink">Products</Link> / mailin
          </p>

          <div className="applead__grid">
            <div>
              <div className="applead__icon">
                <img src="/app-icons/mailin.webp" alt="" width="84" height="84" />
              </div>

              <h1 className="applead__title">mailin</h1>
              <p className="applead__tagline">Email Archive Analyzer</p>

              <div className="applead__meta">
                <span className="pill pill--platform">macOS</span>
                <span className="pill pill--platform">iOS</span>
                <span className="pill pill--platform">iPadOS</span>
                <span className="pill badge--live">Live on the App Store</span>
              </div>

              <p className="applead__desc">
                Import your mail archive from Gmail, Outlook, Thunderbird or Apple Mail &mdash; then
                search, analyse and export a decade of correspondence with on-device AI.
                Everything runs on your machine. Nothing leaves your device.
              </p>

              <div className="applead__actions">
                <AppStoreButton url={APP_STORE} />
                <Link href="/contact" className="btn btn--ghost">
                  Talk to us <IconArrow className="btn__arrow" width="16" height="16" />
                </Link>
              </div>
            </div>

            <Parallax speed={0.05}>
              <ClipReveal>
                <Tilt max={6}>
                <MacWindow
                  src="/app-shots/mailin/hero.webp"
                  alt="mailin running on macOS"
                  title="mailin"
                  priority
                />
                </Tilt>
            </ClipReveal>
            </Parallax>
          </div>
        </div>
      </section>

      {/* -------- STATS -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <div className="statband">
              {STATS.map((s) => (
                <div className="statband__cell spot" key={s.label}>
                  <span className="statband__num"><Counter to={s.to} /></span>
                  <span className="statband__label">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------- SCROLL TOUR -------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">A guided look</p>
            <SplitReveal as="h2" className="head__title" text="Six things it does that nothing else does together." />
          </Reveal>
          <StickyShowcase steps={TOUR} windowTitle="mailin" />
        </div>
      </section>

      {/* -------- FEATURE GRID -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">Under the hood</p>
            <SplitReveal as="h2" className="head__title" text="Everything else it carries." />
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

      {/* -------- iOS -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">iPhone &amp; iPad</p>
            <SplitReveal as="h2" className="head__title" text="The same archive, in your pocket." />
          </Reveal>
          <Reveal>
            <PhoneRail shots={IOS_SHOTS} />
          </Reveal>
        </div>
      </section>

      {/* -------- MARQUEE -------- */}
      <section className="section section--tight">
        <Reveal>
          <Marquee items={STRIP} speed={52} />
        </Reveal>
      </section>

      {/* -------- CTA -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <div className="cta">
              <SplitReveal as="h2" className="cta__title" text="Start with 500 emails, free." />
              <p className="cta__body">
                No account, no telemetry, no upload. Import an archive and see what a decade of
                your own correspondence actually looks like.
              </p>
              <div className="cta__actions">
                <AppStoreButton url={APP_STORE} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
