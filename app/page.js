import Link from 'next/link';
import FluxMandala from '@/components/FluxMandala';
import ScrollSpin from '@/components/ScrollSpin';
import KineticStrip from '@/components/KineticStrip';
import Reveal from '@/components/Reveal';
import SplitReveal from '@/components/SplitReveal';
import Gallery from '@/components/Gallery';
import {
  IconMobility, IconCooling, IconDigital, IconUpcycle,
  IconArrow, IconCheck, IconPlay,
} from '@/components/Icons';

const CAPS = [
  { n: '01', Icon: IconMobility, title: 'EV & Solar Mobility', body: 'Electric and solar-powered cars, boats, buses, and green public transport.' },
  { n: '02', Icon: IconCooling, title: 'Non-GHG Cooling', body: 'Clay-based air coolers, evaporative fans, and energy-efficient alternatives to conventional AC.' },
  { n: '03', Icon: IconDigital, title: 'Digital for Earth', body: 'Dashboards, apps, and data tools for climate action and eco-awareness.' },
  { n: '04', Icon: IconUpcycle, title: 'Upcycling Projects', body: 'Turning waste into useful community products through practical innovation.' },
];

const HOME_APPS = [
  { slug: 'mailin', icon: true, name: 'mailin', monogram: 'M', platform: 'macOS · iOS', status: 'live' },
  { slug: 'antya-yuga', icon: true, name: 'Antya Yuga', monogram: 'A', platform: 'iOS · macOS', status: 'live' },
  { slug: '5s-contact-manager', icon: true, name: '5S Contact Manager', monogram: '5', platform: 'Google Sheets', status: 'soon' },
  { slug: 'kalsmritikosh', icon: true, name: 'Kalsmritikosh', monogram: 'K', platform: 'macOS', status: 'soon' },
  { slug: 'photo-ai', name: 'AI Camera Coach', monogram: 'C', platform: 'iOS 18+', status: 'soon' },
];

const MOTOR_SHOTS = [
    { src: '/motor/motor-01.webp', alt: 'HRIM motor prototype in the workshop — view 1' },
    { src: '/motor/motor-02.webp', alt: 'HRIM motor prototype in the workshop — view 2' },
    { src: '/motor/motor-03.webp', alt: 'HRIM motor prototype in the workshop — view 3' },
    { src: '/motor/motor-04.webp', alt: 'HRIM motor prototype in the workshop — view 4' },
    { src: '/motor/motor-05.webp', alt: 'HRIM motor prototype in the workshop — view 5' },
    { src: '/motor/motor-06.webp', alt: 'HRIM motor prototype in the workshop — view 6' },
    { src: '/motor/motor-07.webp', alt: 'HRIM motor prototype in the workshop — view 7' },
    { src: '/motor/motor-08.webp', alt: 'HRIM motor prototype in the workshop — view 8' },
    { src: '/motor/motor-09.webp', alt: 'HRIM motor prototype in the workshop — view 9' },
    { src: '/motor/motor-10.webp', alt: 'HRIM motor prototype in the workshop — view 10' },
    { src: '/motor/motor-11.webp', alt: 'HRIM motor prototype in the workshop — view 11' },
    { src: '/motor/motor-12.webp', alt: 'HRIM motor prototype in the workshop — view 12' },
];

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="wrap hero__grid">
          <div>
            <p className="eyebrow">Deep-tech · Digital · Regenerative</p>
            <h1 className="hero__title">
              Innovating for a greener tomorrow, <em>rooted in ancient wisdom.</em>
            </h1>
            <p className="hero__sub">
              At EcoSanskriti Innovations, we believe the answers to Earth’s climate crisis live where
              ancient wisdom meets modern technology — restoring balance, reducing harm, and regenerating
              the planet, starting today.
            </p>
            <div className="hero__actions">
              <Link href="#hrim" className="btn btn--gold magnet">
                View the HRIM patent <IconArrow className="btn__arrow" width="16" height="16" />
              </Link>
              <Link href="/products" className="btn btn--ghost">Explore products</Link>
            </div>
          </div>
          <div className="hero__art">
            <ScrollSpin factor={0.05}>
              <FluxMandala />
            </ScrollSpin>
          </div>
        </div>
        <div className="hero__ticker">
          <div className="wrap">
            <span>Patent <b>555489</b> · Granted</span>
            <span>HRIM Motor</span>
            <span>Howrah · West Bengal</span>
            <span>EcoSanskriti Innovations (OPC) Pvt. Ltd.</span>
          </div>
        </div>
      </section>

      {/* ---------- MISSION + CAPABILITIES ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">The mission</p>
            <h2 className="head__title">Rebuilding the Earth, <em>one idea at a time.</em></h2>
            <p className="lede">
              We create meaningful innovations that restore natural balance and regenerate the
              planet — not decades from now, but starting today. Here’s where we put that to work.
            </p>
          </Reveal>

          <Reveal>
            <div className="caps">
              {CAPS.map(({ n, Icon, title, body }) => (
                <article className="cap" key={n}>
                  <span className="cap__num">{n}</span>
                  <Icon className="cap__icon" width="40" height="40" />
                  <h3 className="cap__title">{title}</h3>
                  <p className="cap__body">{body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- OUR APPS ---------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="head" as="div">
            <p className="eyebrow eyebrow--ink">Our apps</p>
            <h2 className="head__title">Software you can <em>download today.</em></h2>
            <p className="lede">Native Mac and iOS apps from our studio — private by default, useful from the first launch.</p>
          </Reveal>
          <Reveal>
            <div className="appstrip">
              {HOME_APPS.map((a) => (
                <Link key={a.slug} href={`/products/${a.slug}`} className="appstrip__item spot">
                  <div className="appicon" aria-hidden={!a.icon}>
                    {a.icon ? <img src={`/app-icons/${a.slug}.webp`} alt="" /> : a.monogram}
                  </div>
                  <span className="appstrip__name">{a.name}</span>
                  <span className="appstrip__plat">{a.platform}{a.status === 'soon' ? ' · Soon' : ''}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- HRIM PATENT DATASHEET ---------- */}
      <section className="section section--tight" id="hrim">
        <div className="wrap">
          <Reveal>
            <div className="sheet spot">
              <div className="sheet__grid">
                <div className="sheet__main">
                  <p className="eyebrow">Granted patent · India</p>
                  <p className="sheet__abbr">HRIM · Hybrid Reluctance Inductance Motor</p>
                  <h2 className="sheet__title">A motor that wastes <em>none of its flux.</em></h2>
                  <p className="sheet__desc">
                    Unlike a conventional induction motor, the HRIM design uses 100% of its magnetic
                    flux for more torque and speed at the same power input. It doubles as a generator,
                    recovering energy as it runs, and replaces the cooling fan with a self-cooling
                    impeller.
                  </p>
                  <ul className="spec">
                    <li><span className="k">Patent No.</span><span className="v">555489 (India)</span></li>
                    <li><span className="k">Status</span><span className="v v--ok">Granted</span></li>
                    <li><span className="k">Date</span><span className="v">22 March 2023</span></li>
                    <li><span className="k">Jurisdiction</span><span className="v">India</span></li>
                  </ul>
                  <a href="/patent-hrim-555489.pdf" className="btn btn--gold magnet" target="_blank" rel="noopener noreferrer">
                    View full patent (PDF) <IconArrow className="btn__arrow" width="16" height="16" />
                  </a>
                </div>
                <div className="sheet__side">
                  <p className="eyebrow">Why it matters</p>
                  <ul className="feat">
                    <li><IconCheck width="18" height="18" /> Extra torque &amp; continuous energy recovery</li>
                    <li><IconCheck width="18" height="18" /> Fanless, natural self-cooling</li>
                    <li><IconCheck width="18" height="18" /> Built for EVs &amp; industrial drives</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- KINETIC BAND ---------- */}
      <section className="section section--tight">
        <KineticStrip
          words={['Deep-tech', 'Regenerative', 'On-device', 'Patented in India', 'Private by default']}
          speed={34}
        />
      </section>

      {/* ---------- MOTOR GALLERY ---------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">From the workshop</p>
            <SplitReveal as="h2" className="head__title" text="The HRIM, on the bench." />
          </Reveal>
          <Reveal>
            <Gallery images={MOTOR_SHOTS} columns={4} />
          </Reveal>
        </div>
      </section>

      {/* ---------- YOUTUBE ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="media">
            <Reveal>
              <p className="eyebrow eyebrow--ink">On YouTube</p>
              <h2 className="head__title">Follow the <em>eco-journey.</em></h2>
              <p className="lede">Prototypes, build logs, and community work, straight from the workshop.</p>
              <div style={{ marginTop: '1.5rem' }}>
                <a href="https://www.youtube.com/@everythingmedia9644" className="btn btn--ink" target="_blank" rel="noopener noreferrer">
                  Visit the channel <IconArrow className="btn__arrow" width="16" height="16" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="media__frame">
                {/*
                  To embed a specific video instead of this placeholder, replace
                  the block below with:
                  <iframe src="https://www.youtube.com/embed/VIDEO_ID"
                    title="EcoSanskriti Innovations" allowfullscreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                */}
                <a
                  href="https://www.youtube.com/@everythingmedia9644"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media__placeholder"
                >
                  <IconPlay width="46" height="46" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.08em' }}>
                    WATCH ON YOUTUBE
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <div className="cta">
              <FluxMandala animated={false} className="cta__watermark" />
              <h2 className="cta__title">Join the <em>movement.</em></h2>
              <p className="cta__body">
                We’re not just a company — we’re a purpose. Whether you’re a developer, farmer, activist,
                investor, or student, there’s a place for you at EcoSanskriti Innovations.
              </p>
              <div className="cta__actions">
                <Link href="/products" className="btn btn--gold magnet">Explore projects</Link>
                <Link href="/contact" className="btn btn--ghost">Contact us</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
