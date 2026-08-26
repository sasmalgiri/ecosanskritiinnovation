import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SplitReveal from '@/components/SplitReveal';
import Stagger from '@/components/Stagger';
import Parallax from '@/components/Parallax';
import Counter from '@/components/Counter';
import FluxMandala from '@/components/FluxMandala';
import AppStoreButton from '@/components/AppStoreButton';
import { IconArrow } from '@/components/Icons';

export const metadata = {
  title: 'AI Camera Coach — take pro-looking photos without learning photography',
  description:
    'An iOS camera app pairing an AI Coach that tells you what to do with an AI Photographer that decides when to fire the shutter. Runs on-device, with no accounts, ads or tracking. In development.',
};

const STATS = [
  { to: 7, label: 'Vision experts' },
  { to: 6, label: 'Capture modes' },
  { to: 100, label: 'Point score scale' },
  { to: 0, label: 'Trackers' },
];

const MODES = [
  { name: 'Original', body: 'Raw camera, no enhancement — for when you want exactly what the sensor saw.' },
  { name: 'Smart', body: 'General-purpose AI capture that adapts to whatever is in front of you.' },
  { name: 'Family', body: 'Group shots — it waits for the moment everyone actually has their eyes open.' },
  { name: 'Child', body: 'Moving kids and unpredictable expressions, where timing is the whole problem.' },
  { name: 'Pet', body: 'Animal faces and fast subjects that will not hold a pose for you.' },
  { name: 'Travel', body: 'Landmarks and scenery, with horizon-level framing so the sea stays flat.' },
];

const FEATURES = [
  { tag: 'SCR', title: 'Live photo scoring', body: 'A 0-100 quality score updated in real time as you move, so you can watch a shot improve before you take it.' },
  { tag: 'SAY', title: 'Coaching in plain language', body: 'Move closer. Turn toward the light. Not ISO, not EV, not a histogram — instructions you can act on without a photography course.' },
  { tag: 'FIR', title: 'An AI that takes the photo', body: 'The AI Photographer watches the frame and fires the shutter itself once confidence is high enough, instead of leaving the timing to you.' },
  { tag: 'MoE', title: 'Seven experts in parallel', body: 'Face, OCR, classification, horizon, saliency, animal and aesthetics Vision experts run alongside NaturalLanguage, feeding parallel Apple Intelligence sessions that are map-reduced into one answer.' },
  { tag: 'FIX', title: 'Automatic correction', body: 'Exposure, white balance, colour and tone corrected on capture — with a before/after slider in the gallery so you can always see what it changed.' },
  { tag: 'GRD', title: 'Composition overlays', body: 'A rule-of-thirds grid and a live horizon level driven by CoreMotion, plus tap-to-focus, tap-to-expose, pinch zoom and a self-timer.' },
  { tag: 'SIR', title: 'Siri and Shortcuts', body: 'Open it straight into Pet mode by voice. App Intents support, proactive tips when your score drops, and optional spoken tips for tripod and selfie work.' },
  { tag: 'DEV', title: 'On-device by default', body: 'Vision and Core Image do the work locally with no cloud calls, no accounts, no ads and no tracking. Cloud vision coaching exists only if you opt in with your own API key.' },
];

export default function PhotoAIPage() {
  return (
    <>
      {/* -------- HERO -------- */}
      <section className="applead aurora">
        <div className="wrap">
          <p className="applead__crumb">
            <Link href="/" className="ulink">Home</Link> / <Link href="/products" className="ulink">Products</Link> / AI Camera Coach
          </p>

          <div className="applead__grid">
            <div>
              <div className="applead__icon" style={{ display: 'grid', placeItems: 'center', background: 'var(--pine)', fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--haldi)' }}>
                C
              </div>

              <h1 className="applead__title">AI Camera <em>Coach</em></h1>
              <p className="applead__tagline">Take pro-looking photos without learning photography.</p>

              <div className="applead__meta">
                <span className="pill pill--platform">iOS 18+</span>
                <span className="pill pill--platform">One-time purchase</span>
                <span className="pill badge--soon">In development</span>
              </div>

              <p className="applead__desc">
                An iOS camera app that pairs an <strong>AI Coach</strong>, which tells you what to
                do, with an <strong>AI Photographer</strong>, which decides when to fire the
                shutter. Everything runs on-device by default &mdash; no accounts, no ads,
                no tracking.
              </p>

              <div className="applead__actions">
                <AppStoreButton platform="iOS" />
                <Link href="/contact" className="btn btn--ghost">
                  Ask about early access <IconArrow className="btn__arrow" width="16" height="16" />
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

      {/* -------- MODES -------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">Capture modes</p>
            <SplitReveal as="h2" className="head__title" text="Six ways to point a camera." />
          </Reveal>
          <Stagger className="cardgrid">
            {MODES.map((m) => (
              <article className="card spot" key={m.name}>
                <span className="card__tag">Mode</span>
                <h3 className="card__title">{m.name}</h3>
                <p className="card__body">{m.body}</p>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      {/* -------- FEATURES -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">What it does</p>
            <SplitReveal as="h2" className="head__title" text="Coaching at the moment it matters." />
          </Reveal>
          <Stagger className="featgrid">
            {FEATURES.map((f) => (
              <article className="featgrid__cell spot" key={f.title}>
                <span className="featgrid__ico">
                  <b style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', letterSpacing: '0.06em' }}>{f.tag}</b>
                </span>
                <h3 className="featgrid__title">{f.title}</h3>
                <p className="featgrid__body">{f.body}</p>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      {/* -------- CTA -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <div className="cta">
              <FluxMandala animated={false} className="cta__watermark" />
              <SplitReveal as="h2" className="cta__title" text="Want it first?" />
              <p className="cta__body">
                AI Camera Coach is still in development, and there are no screenshots to show yet.
                Leave us a note and we will tell you when there is a build worth putting on
                your phone.
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
