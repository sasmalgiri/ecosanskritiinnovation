import Link from 'next/link';
import FluxMandala from '@/components/FluxMandala';
import Reveal from '@/components/Reveal';
import Stagger from '@/components/Stagger';
import Tilt from '@/components/Tilt';
import Parallax from '@/components/Parallax';
import Marquee from '@/components/Marquee';
import AppStoreButton from '@/components/AppStoreButton';
import { MacWindow } from '@/components/DeviceFrame';
import { IconArrow } from '@/components/Icons';

export const metadata = {
  title: 'Apps & Products',
  description:
    'Native Mac and iOS apps from EcoSanskriti Innovations — mailin, Antya Yuga, 5S Contact Manager, Kalsmritikosh and Photo AI — plus the patented HRIM Motor.',
};

/* ============================================================
   EDIT YOUR APPS HERE — one place, all fields.
   - status:  'live' shows a real App Store button, 'soon' a muted chip.
   - store:   the https://apps.apple.com/... link (or a Marketplace URL).
   - icon:    true when public/app-icons/<slug>.webp exists.
   - href:    the in-site landing page for the app.
   ============================================================ */
const APPS = [
  {
    slug: 'mailin',
    name: 'mailin',
    monogram: 'M',
    platform: 'macOS · iOS · iPadOS',
    status: 'live',
    icon: true,
    featured: true,
    href: '/products/mailin',
    store: 'https://apps.apple.com/app/mailin/id6767245397',
    tagline: 'Email Archive Analyzer.',
    description:
      'Import .mbox, .eml, .pst, .msg and more from Gmail, Outlook, Thunderbird or Apple Mail — then search, analyse and export a decade of correspondence with on-device AI. Zero data collection, 11 languages, forensic-grade export.',
    shot: '/app-shots/mailin/hero.webp',
  },
  {
    slug: 'antya-yuga',
    name: 'Antya Yuga',
    monogram: 'A',
    platform: 'iPhone · iPad · macOS',
    status: 'live',
    icon: true,
    href: '/products/antya-yuga',
    store: 'https://apps.apple.com/app/antya-yuga/id6783359423',
    tagline: 'Hold the line in the last age of myth.',
    description:
      'A tower defence rooted in Indian itihasa. Three Yugas, nine dynasties, thirty divine astras, and one spinning Sudarshana Chakra between dharma and Kali. Free to play, no in-app purchases, no tracking.',
  },
  {
    slug: '5s-contact-manager',
    name: '5S Contact Manager',
    monogram: '5',
    platform: 'Google Sheets add-on',
    status: 'live',
    icon: true,
    href: '/products/5s-contact-manager',
    store: 'https://workspace.google.com/marketplace',
    storeLabel: 'Workspace Marketplace',
    tagline: 'Your Google Contacts, in a spreadsheet.',
    description:
      'Pull your whole contact list into a Google Sheet, keep an automatic backup, bulk-edit groups and details, then push it all back once you have reviewed exactly what changed.',
  },
  {
    slug: 'kalsmritikosh',
    name: 'Kalsmritikosh',
    monogram: 'K',
    platform: 'macOS',
    status: 'soon',
    icon: false,
    href: '/products/kalsmritikosh',
    store: '',
    tagline: 'Your private, on-device knowledge vault.',
    description:
      'A personal knowledge system that keeps everything you know on your own Mac. Capture, connect and recall your notes and documents — private by design, working even offline.',
  },
  {
    slug: 'photo-ai',
    name: 'Photo AI',
    monogram: 'P',
    platform: 'iOS',
    status: 'soon',
    icon: false,
    href: '/products/photo-ai',
    store: '',
    tagline: 'Studio-grade photo magic, on your phone.',
    description:
      'Turn everyday photos into polished, share-ready images with on-device AI — clean up, enhance and restyle in a tap, with your pictures staying on your device.',
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

const STRIP = [
  { src: '/app-shots/mailin/inbox.webp', alt: 'mailin browsing an archive' },
  { src: '/app-shots/mailin/search.webp', alt: 'mailin advanced search' },
  { src: '/app-shots/contact-manager/05-downloaded.webp', alt: '5S Contact Manager in Google Sheets' },
  { src: '/app-shots/mailin/analytics.webp', alt: 'mailin analytics dashboard' },
  { src: '/app-shots/antya-yuga/wave1.webp', alt: 'Antya Yuga mid-fight' },
  { src: '/app-shots/mailin/documents.webp', alt: 'mailin forensic tooling' },
  { src: '/app-shots/antya-yuga/raceselect.webp', alt: 'Antya Yuga dynasty select' },
];

function AppIcon({ app }) {
  return (
    <div className="appicon" aria-hidden={!app.icon}>
      {app.icon
        ? <img src={`/app-icons/${app.slug}.webp`} alt={`${app.name} icon`} />
        : app.monogram}
    </div>
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
          <p className="crumb"><Link href="/" className="ulink">Home</Link> / Apps &amp; Products</p>
          <h1 className="pagehead__title">Apps, <em>crafted in-house.</em></h1>
          <p className="pagehead__lede">
            Native Mac and iOS software built with the same care as our hardware &mdash; private by
            default, useful on day one, and rooted in the world we come from.
          </p>
        </div>
      </section>

      {/* -------- FEATURED APP -------- */}
      {featured && (
        <section className="section">
          <div className="wrap">
            <Reveal className="head">
              <p className="eyebrow eyebrow--ink">On the App Store</p>
              <h2 className="head__title">Featured app.</h2>
            </Reveal>
            <Reveal>
              <div className="featapp">
                <div className="featapp__main">
                  <div className="featapp__head">
                    <AppIcon app={featured} />
                    <span className="pill pill--platform">{featured.platform}</span>
                    <span className="pill badge--live">Live</span>
                  </div>
                  <h3 className="featapp__name">{featured.name}</h3>
                  <p className="featapp__tagline">{featured.tagline}</p>
                  <p className="featapp__desc">{featured.description}</p>
                  <div className="applead__actions">
                    <AppStoreButton url={featured.store} />
                    <Link href={featured.href} className="btn btn--ghost">
                      Full tour <IconArrow className="btn__arrow" width="16" height="16" />
                    </Link>
                  </div>
                </div>
                <div className="featapp__shot">
                  <Parallax speed={0.04}>
                    <Tilt max={6}>
                      <MacWindow src={featured.shot} alt={`${featured.name} on macOS`} title={featured.name} priority />
                    </Tilt>
                  </Parallax>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* -------- SCREENSHOT STRIP -------- */}
      <section className="section section--tight">
        <Reveal>
          <Marquee items={STRIP} speed={58} />
        </Reveal>
      </section>

      {/* -------- MORE APPS -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">More from the studio</p>
            <h2 className="head__title">The rest of the lineup.</h2>
          </Reveal>
          <Stagger className="apps">
            {rest.map((app) => (
              <article className="appcard" key={app.slug}>
                <AppIcon app={app} />
                <div className="appcard__body">
                  <div className="appcard__head">
                    <Link href={app.href} className="appcard__name ulink">{app.name}</Link>
                    <span className="pill pill--platform">{app.platform}</span>
                    <span className={`pill ${app.status === 'live' ? 'badge--live' : 'badge--soon'}`}>
                      {app.status === 'live' ? 'Live' : 'Coming soon'}
                    </span>
                  </div>
                  <p className="appcard__tagline">{app.tagline}</p>
                  <p className="appcard__desc">{app.description}</p>
                  <Link href={app.href} className="card__link">
                    Explore {app.name} <IconArrow width="15" height="15" />
                  </Link>
                </div>
                <div className="appcard__cta">
                  <AppStoreButton url={app.store} platform={app.platform} label={app.storeLabel || 'App Store'} />
                </div>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      {/* -------- HARDWARE & FOCUS AREAS -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">Hardware &amp; focus areas</p>
            <h2 className="head__title">Beyond the screen.</h2>
          </Reveal>
          <Stagger className="cardgrid">
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
          </Stagger>
        </div>
      </section>
    </>
  );
}
