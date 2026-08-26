import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Stagger from '@/components/Stagger';
import Tilt from '@/components/Tilt';
import Parallax from '@/components/Parallax';
import Counter from '@/components/Counter';
import Gallery from '@/components/Gallery';
import PhoneRail from '@/components/PhoneRail';
import AppStoreButton from '@/components/AppStoreButton';
import { PhoneFrame } from '@/components/DeviceFrame';
import { IconArrow } from '@/components/Icons';

export const metadata = {
  title: 'Antya Yuga — Tower defence rooted in Indian itihasa',
  description:
    'Three Yugas. Nine dynasties. Thirty divine astras. Hold the spiral path against Kali with the Sudarshana Chakra. Free to play, no in-app purchases, no tracking.',
};

const APP_STORE = 'https://apps.apple.com/app/antya-yuga/id6783359423';

const STATS = [
  { to: 3, label: 'Yugas' },
  { to: 9, label: 'Dynasties' },
  { to: 30, suffix: '+', label: 'Divine astras' },
  { to: 14, suffix: '+', label: 'Demons & bosses' },
  { to: 5, label: 'Resources' },
  { to: 0, label: 'Trackers' },
];

/* The four ages, in the order a run actually meets them. */
const YUGAS = [
  { name: 'Satya Yug', waves: 'Waves 1 – 5', body: 'The age of truth. Build your first towers as Pishachas and Rakshasas swarm the spiral. Enemy power at baseline.' },
  { name: 'Treta Yug', waves: 'Waves 6 – 10', body: 'Heal auras unlock. Mahishasura, Ravana and Indrajit begin to march. Enemy power rises 20%.' },
  { name: 'Dvapara Yug', waves: 'Waves 11 – 13', body: 'Shield auras unlock. Vritra, Bhasmasura and Putana lead the breach. Feed the Sudarshana. Enemy power rises 50%.' },
  { name: 'Kali Yuga', waves: 'Wave 14 — the end', body: 'Kali arrives with 600,000 HP, 500 HP per second of regeneration, and minion summons. Burn him with the Chakra before dharma falls.' },
];

const FEATURES = [
  { tag: 'IX', title: 'Nine dynasties', body: 'Raghuvansh, Maurya, Gupta, Pratihara, Rashtrakuta, Pal, Chola, Sen and Ahom — each carrying a unique combat or economy signature that shapes the whole run.' },
  { tag: 'XXX', title: 'Thirty divine astras', body: 'From the humble Dart Astra up to apex T4 ultimates: Sudarshana, Brahmasira, Bhambhrastra and Pashupatastra.' },
  { tag: 'ASU', title: 'Mythological enemies', body: 'Pishachas, Rakshasas and resource bearers march under bosses drawn straight from the itihasa — Mahishasura, Ravana, Indrajit, Vritra, Bhasmasura, Putana and Kali himself.' },
  { tag: 'RTN', title: 'Power stones', body: 'Socket Chuni, Panna, Nila and Raktamukhi into your towers for timed amplification — and to pay for the Wall, an emergency shield when the line breaks.' },
  { tag: 'V', title: 'Five-resource economy', body: 'Gold, Metal, Tech, Jotisha and Veda, gathered by resource buildings during waves to feed the upgrades that carry you through the next age.' },
  { tag: 'BZR', title: 'Bazaar & perks', body: 'Earn Bazaar points from kills and wave clears, then spend them on instant items, run-long buffs, and permanent unlocks that persist across runs.' },
  { tag: 'CHK', title: 'Sudarshana Chakra', body: 'Feed the central relic gold through the run. At full charge it ignites on the Kali wave and burns the dark age at 1,650 damage per second.' },
  { tag: 'VRK', title: 'Parijata Briksha', body: 'A wish-tree that compounds with every divine kill, so late-game production scales with the faith you have accumulated.' },
  { tag: 'NIL', title: 'No tracking, ever', body: 'No analytics SDK. No ad SDK. No accounts. UserDefaults stays on your device, and your run belongs to nobody else.' },
];

const SHOTS = [
  { src: '/app-shots/antya-yuga/raceselect.webp', alt: 'Antya Yuga — choosing a dynasty on iPhone', caption: 'Pick your dynasty' },
  { src: '/app-shots/antya-yuga/wave1.webp', alt: 'Antya Yuga — wave one mid-fight on iPhone', caption: 'Wave one, mid-fight' },
  { src: '/app-shots/antya-yuga/kalifight.webp', alt: 'Antya Yuga — the Kali Yuga boss fight on iPhone', caption: 'Kali Yuga, wave 14' },
];

const RUN = [
  { n: '1', title: 'Pick your dynasty', body: 'Each lineage grants a permanent combat or economy bonus that colours everything that follows.' },
  { n: '2', title: 'Place your astras', body: 'Drop towers onto the spiral path, socket stones for timed boosts, and raise resource buildings to fund the next upgrade.' },
  { n: '3', title: 'Hold until Kali', body: 'Survive three ages, feed the Chakra, and meet the final wave with everything you have built.' },
];

export default function AntyaYugaPage() {
  return (
    <>
      {/* -------- HERO -------- */}
      <section className="applead aurora">
        <div className="wrap">
          <p className="applead__crumb">
            <Link href="/" className="ulink">Home</Link> / <Link href="/products" className="ulink">Products</Link> / Antya Yuga
          </p>

          <div className="applead__grid">
            <div>
              <div className="applead__icon">
                <img src="/app-icons/antya-yuga.webp" alt="" width="84" height="84" />
              </div>

              <h1 className="applead__title">Antya <em>Yuga</em></h1>
              <p className="applead__tagline">A tower defence inspired by Indian itihasa</p>

              <div className="applead__meta">
                <span className="pill pill--platform">iPhone</span>
                <span className="pill pill--platform">iPad</span>
                <span className="pill pill--platform">macOS</span>
                <span className="pill badge--live">Free &middot; no in-app purchases</span>
              </div>

              <p className="applead__desc">
                Three Yugas. Nine dynasties. Thirty divine weapons. One spinning Sudarshana Chakra
                between dharma and Kali&rsquo;s final age. Every run is its own Mahabharata in
                miniature &mdash; pick a lineage, march through three ages, and end Kali.
              </p>

              <div className="applead__actions">
                <AppStoreButton url={APP_STORE} />
                <Link href="/contact" className="btn btn--ghost">
                  Talk to us <IconArrow className="btn__arrow" width="16" height="16" />
                </Link>
              </div>
            </div>

            <Parallax speed={0.06}>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start' }}>
                <Tilt max={8} className="float float--slow">
                  <PhoneFrame src="/app-shots/antya-yuga/raceselect.webp" alt="Antya Yuga dynasty select" />
                </Tilt>
                <Tilt max={8} className="float float--slow float--offset" >
                  <PhoneFrame src="/app-shots/antya-yuga/kalifight.webp" alt="Antya Yuga Kali Yuga boss fight" />
                </Tilt>
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
                <div className="statband__cell" key={s.label}>
                  <span className="statband__num"><Counter to={s.to} suffix={s.suffix || ''} /></span>
                  <span className="statband__label">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------- THE FOUR AGES -------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">Three Yugas, one fight</p>
            <h2 className="head__title">Every run traverses the ages.</h2>
          </Reveal>
          <Stagger className="cardgrid">
            {YUGAS.map((y) => (
              <article className="card" key={y.name}>
                <span className="card__tag">{y.waves}</span>
                <h3 className="card__title">{y.name}</h3>
                <p className="card__body">{y.body}</p>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      {/* -------- SCREENS -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">Screens</p>
            <h2 className="head__title">Dense slot grids on iPhone, sweeping spirals on iPad.</h2>
          </Reveal>
          <Reveal>
            <PhoneRail shots={SHOTS} />
          </Reveal>
          <Reveal>
            <div style={{ marginTop: '2rem' }}>
              <Gallery
                columns={1}
                images={[{ src: '/app-shots/antya-yuga/ipad-kalifight.webp', alt: 'Antya Yuga on iPad — the Kali Yuga wave in full' }]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------- HOW A RUN UNFOLDS -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">How a run unfolds</p>
            <h2 className="head__title">Three decisions, thirteen waves, one ending.</h2>
          </Reveal>
          <Stagger className="cardgrid">
            {RUN.map((r) => (
              <article className="card" key={r.n}>
                <span className="card__tag">{r.n}</span>
                <h3 className="card__title">{r.title}</h3>
                <p className="card__body">{r.body}</p>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      {/* -------- WHAT LIVES INSIDE -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">What lives inside</p>
            <h2 className="head__title">A dharma epic in tower-defence clothing.</h2>
          </Reveal>
          <Stagger className="featgrid">
            {FEATURES.map((f) => (
              <article className="featgrid__cell" key={f.title}>
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
              <h2 className="cta__title">Hold the line in the last age.</h2>
              <p className="cta__body">
                Free to play, with no in-app purchases, no ads and no accounts. Download it and
                see how far dharma carries you.
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
