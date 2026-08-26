import Link from 'next/link';
import FluxMandala from '@/components/FluxMandala';
import Reveal from '@/components/Reveal';
import { IconArrow, IconPlay } from '@/components/Icons';

export const metadata = {
  title: 'Apps & Products',
  description:
    'Native Mac and iOS apps from EcoSanskriti Innovations — Mailin, Kalsmritikosh, Antya Yuga, and Photo AI — plus the patented HRIM Motor.',
};

/* ============================================================
   EDIT YOUR APPS HERE — one place, all fields.
   - status: 'live'  -> shows a "Download on the App Store" button
             'soon'  -> shows a "Coming soon" chip
   - appStoreUrl: paste the real https://apps.apple.com/... link.
                  Leave '' and a live app shows "Add App Store link".
   - icon: drop a square PNG at  public/app-icons/<slug>.png  and set
           icon: true. Otherwise a lettered monogram is shown.
   - Rewrite tagline/description in your own words any time.
   ============================================================ */
const APPS = [
  {
    slug: 'mailin',
    name: 'Mailin',
    monogram: 'M',
    platform: 'macOS',
    status: 'live',
    icon: false,
    featured: true,
    tagline: 'A calmer, native inbox for your Mac.',
    description:
      'A fast, genuinely native macOS email client that keeps your mail instantly searchable and your data on your machine — no bloat, no clutter, just a quiet place to get to inbox zero.',
    appStoreUrl: '', // <-- paste Mailin's App Store URL
  },
  {
    slug: 'kalsmritikosh',
    name: 'Kalsmritikosh',
    monogram: 'K',
    platform: 'macOS',
    status: 'soon',
    icon: false,
    tagline: 'Your private, on-device knowledge vault.',
    description:
      'A personal knowledge system that keeps everything you know on your own Mac. Capture, connect, and recall your notes and documents — private by design, working even offline.',
    appStoreUrl: '',
  },
  {
    slug: 'antya-yuga',
    name: 'Antya Yuga',
    monogram: 'A',
    platform: 'iOS',
    status: 'soon',
    icon: false,
    tagline: 'Hold the line in the last age of myth.',
    description:
      'A tower-defense game rooted in Indian mythology. Command divine defenders, place your towers with intent, and hold back the tide across the final age — the Antya Yuga.',
    appStoreUrl: '',
  },
  {
    slug: 'photo-ai',
    name: 'Photo AI',
    monogram: 'P',
    platform: 'iOS',
    status: 'soon',
    icon: false,
    tagline: 'Studio-grade photo magic, on your phone.',
    description:
      'Turn everyday photos into polished, share-ready images with on-device AI — clean up, enhance, and restyle in a tap, with your pictures staying on your device.',
    appStoreUrl: '',
  },
];

const HARDWARE = [
  {
    tag: 'Granted patent',
    title: 'HRIM Motor',
    body: 'Hybrid Reluctance Inductance Motor (Patent 555489) — uses 100% of its magnetic flux, recovers energy as it runs, and cools itself without a fan.',
    href: '/#hrim',
    cta: 'See the patent',
  },
  { tag: 'Focus area', title: 'EV & Solar Mobility', body: 'Electric and solar-powered cars, boats, buses, and green public transport for real Indian roads.' },
  { tag: 'Focus area', title: 'Non-GHG Cooling', body: 'Clay-based air coolers and evaporative fans — energy-efficient alternatives to conventional AC.' },
  { tag: 'Focus area', title: 'Upcycling Projects', body: 'Turning waste streams into useful community products through practical, low-cost innovation.' },
];

function AppIcon({ app, className = '' }) {
  return (
    <div className={`appicon ${className}`} aria-hidden={!app.icon}>
      {app.icon ? <img src={`/app-icons/${app.slug}.png`} alt={`${app.name} icon`} /> : app.monogram}
    </div>
  );
}

function StoreButton({ app }) {
  const glyph = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12M8 11l4 4 4-4" />
      <path d="M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2" />
    </svg>
  );

  if (app.status === 'live' && app.appStoreUrl) {
    return (
      <a className="appstore" href={app.appStoreUrl} target="_blank" rel="noopener noreferrer">
        {glyph}
        <span className="appstore__lines">
          <span className="appstore__small">Download on the</span>
          <span className="appstore__big">App Store</span>
        </span>
      </a>
    );
  }

  // Live but no link yet, or not released — muted chip (edit APPS to update).
  const label = app.status === 'live' ? 'Add App Store link' : 'Coming soon';
  return (
    <span className="appstore appstore--muted" role="note">
      {glyph}
      <span className="appstore__lines">
        <span className="appstore__small">{app.platform}</span>
        <span className="appstore__big">{label}</span>
      </span>
    </span>
  );
}

export default function ProductsPage() {
  const featured = APPS.find((a) => a.featured);
  const rest = APPS.filter((a) => !a.featured);

  return (
    <>
      <section className="pagehead">
        <FluxMandala animated={false} className="pagehead__mark" />
        <div className="wrap">
          <p className="crumb"><Link href="/">Home</Link> / Apps &amp; Products</p>
          <h1 className="pagehead__title">Apps, <em>crafted in-house.</em></h1>
          <p className="pagehead__lede">
            Native Mac and iOS software built with the same care as our hardware — private by
            default, useful on day one, and rooted in the world we come from.
          </p>
        </div>
      </section>

      {/* -------- FEATURED APP -------- */}
      {featured && (
        <section className="section">
          <div className="wrap">
            <Reveal className="head" as="div">
              <p className="eyebrow eyebrow--ink">On the App Store</p>
              <h2 className="head__title">Featured app.</h2>
            </Reveal>
            <Reveal>
              <div className="featapp">
                <div className="featapp__main">
                  <div className="featapp__head">
                    <AppIcon app={featured} />
                    <span className="pill pill--platform">{featured.platform}</span>
                    <span className={`pill ${featured.status === 'live' ? 'badge--live' : 'badge--soon'}`}>
                      {featured.status === 'live' ? 'Live' : 'Coming soon'}
                    </span>
                  </div>
                  <h3 className="featapp__name">{featured.name}</h3>
                  <p className="featapp__tagline">{featured.tagline}</p>
                  <p className="featapp__desc">{featured.description}</p>
                  <StoreButton app={featured} />
                </div>
                <div className="featapp__shot">
                  {/* Drop a screenshot here: replace this block with
                      <img src="/app-shots/mailin.png" alt="Mailin screenshot" /> */}
                  <div className="shotph">
                    <IconPlay width="34" height="34" />
                    ADD A SCREENSHOT
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* -------- MORE APPS -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="head" as="div">
            <p className="eyebrow eyebrow--ink">More from the studio</p>
            <h2 className="head__title">The rest of the lineup.</h2>
          </Reveal>
          <Reveal>
            <div className="apps">
              {rest.map((app) => (
                <article className="appcard" key={app.slug}>
                  <AppIcon app={app} />
                  <div className="appcard__body">
                    <div className="appcard__head">
                      <span className="appcard__name">{app.name}</span>
                      <span className="pill pill--platform">{app.platform}</span>
                      <span className={`pill ${app.status === 'live' ? 'badge--live' : 'badge--soon'}`}>
                        {app.status === 'live' ? 'Live' : 'Coming soon'}
                      </span>
                    </div>
                    <p className="appcard__tagline">{app.tagline}</p>
                    <p className="appcard__desc">{app.description}</p>
                  </div>
                  <div className="appcard__cta"><StoreButton app={app} /></div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------- HARDWARE & FOCUS AREAS -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="head" as="div">
            <p className="eyebrow eyebrow--ink">Hardware &amp; focus areas</p>
            <h2 className="head__title">Beyond the screen.</h2>
          </Reveal>
          <Reveal>
            <div className="cardgrid">
              {HARDWARE.map((p) => (
                <article className="card" key={p.title}>
                  <span className="card__tag">{p.tag}</span>
                  <h3 className="card__title">{p.title}</h3>
                  <p className="card__body">{p.body}</p>
                  {p.href && (
                    <Link href={p.href} className="card__link">
                      {p.cta} <IconArrow width="15" height="15" />
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
