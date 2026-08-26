import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Stagger from '@/components/Stagger';
import Tilt from '@/components/Tilt';
import Parallax from '@/components/Parallax';
import Gallery from '@/components/Gallery';
import StickyShowcase from '@/components/StickyShowcase';
import { MacWindow } from '@/components/DeviceFrame';
import { IconArrow } from '@/components/Icons';

export const metadata = {
  title: '5S Contact Manager — manage Google Contacts from a spreadsheet',
  description:
    'A Google Sheets add-on that pulls your Google Contacts into a spreadsheet, backs them up automatically, lets you bulk-edit groups, and pushes the changes back once you have reviewed them.',
};

const MARKETPLACE = 'https://workspace.google.com/marketplace';

/* Mirrors the documented menu flow: Extensions > 5S Contact Manager > ... */
const TOUR = [
  {
    title: 'Install and authorise',
    body: 'Find the add-on in the Google Workspace Marketplace, pick the account you want it on, and grant access to Contacts and Sheets. Authorisation is a one-time step handled entirely by Google.',
    src: '/app-shots/contact-manager/02-authorize.webp',
    alt: 'Granting the add-on access to Google Contacts',
  },
  {
    title: 'Download your contacts',
    body: 'Extensions › 5S Contact Manager › Download Contacts pulls your Google Contacts straight into a sheet named Contacts — every field laid out in columns you can actually work with.',
    src: '/app-shots/contact-manager/03-fetching.webp',
    alt: 'Contacts being downloaded into the spreadsheet',
  },
  {
    title: 'A backup, before anything changes',
    body: 'The add-on writes a second sheet called Original_Copy_Dont_Delete the moment it imports. Whatever you do next, the state you started from is still sitting there untouched.',
    src: '/app-shots/contact-manager/05-downloaded.webp',
    alt: 'Downloaded contacts alongside the automatic backup sheet',
  },
  {
    title: 'Edit like a spreadsheet',
    body: 'Reassign groups in the Contact Group column, fix names and numbers in bulk, sort and filter the way you would with any other sheet. Changes save as you type.',
    src: '/app-shots/contact-manager/08-modify.webp',
    alt: 'Bulk editing contact groups in the sheet',
  },
  {
    title: 'Review before you commit',
    body: 'Review Groups Before Updation compares what is in the sheet against what is still live in Google Contacts, so you see exactly what is about to change before a single record moves.',
    src: '/app-shots/contact-manager/07-compare-done.webp',
    alt: 'Reviewing pending group changes before updating',
  },
  {
    title: 'Push the changes back',
    body: 'Update Contacts applies the edits to your real Google Contacts in one pass. Open Contacts afterwards and everything you approved is simply there.',
    src: '/app-shots/contact-manager/10-applied.webp',
    alt: 'Changes applied back to Google Contacts',
  },
];

const CAPABILITIES = [
  { tag: 'GET', title: 'Download contacts', body: 'Import your entire Google Contacts list into a Google Sheet, ready to sort, filter and edit with the tools you already know.' },
  { tag: 'ORG', title: 'Edit and organise', body: 'Modify contact details and reorganise people into groups in bulk, instead of clicking through one record at a time.' },
  { tag: 'BAK', title: 'Automatic back-up', body: 'A pristine copy of your contacts is written to its own sheet before any change is made, so a bad bulk edit is never permanent.' },
  { tag: 'PUT', title: 'Update and create', body: 'Push edits back to Google Contacts, and create new entries straight from spreadsheet rows.' },
];

const GALLERY = [
  { src: '/app-shots/contact-manager/01-connect.webp', alt: 'Starting the add-on from the Extensions menu' },
  { src: '/app-shots/contact-manager/02-authorize.webp', alt: 'Granting access to Google Contacts' },
  { src: '/app-shots/contact-manager/03-fetching.webp', alt: 'Contacts being fetched' },
  { src: '/app-shots/contact-manager/04-fetched.webp', alt: 'Fetch complete' },
  { src: '/app-shots/contact-manager/05-downloaded.webp', alt: 'Contacts downloaded into the sheet' },
  { src: '/app-shots/contact-manager/06-compare-start.webp', alt: 'Starting a comparison against live contacts' },
  { src: '/app-shots/contact-manager/07-compare-done.webp', alt: 'Comparison results' },
  { src: '/app-shots/contact-manager/08-modify.webp', alt: 'Editing contacts in the sheet' },
  { src: '/app-shots/contact-manager/09-modify-done.webp', alt: 'Edits staged and ready' },
  { src: '/app-shots/contact-manager/10-applied.webp', alt: 'Changes applied to Google Contacts' },
];

export default function FiveSPage() {
  return (
    <>
      {/* -------- HERO -------- */}
      <section className="applead aurora">
        <div className="wrap">
          <p className="applead__crumb">
            <Link href="/" className="ulink">Home</Link> / <Link href="/products" className="ulink">Products</Link> / 5S Contact Manager
          </p>

          <div className="applead__grid">
            <div>
              <div className="applead__icon">
                <img src="/app-icons/5s-contact-manager.webp" alt="" width="84" height="84" />
              </div>

              <h1 className="applead__title">5S <em>Contact Manager</em></h1>
              <p className="applead__tagline">Your Google Contacts, in a spreadsheet.</p>

              <div className="applead__meta">
                <span className="pill pill--platform">Google Sheets</span>
                <span className="pill pill--platform">Workspace add-on</span>
                <span className="pill badge--live">Live</span>
              </div>

              <p className="applead__desc">
                Managing contacts one card at a time is slow. This add-on pulls the whole list into
                a Google Sheet, keeps an automatic backup, lets you fix hundreds of records at once,
                and pushes it all back only after you have reviewed exactly what changed.
              </p>

              <div className="applead__actions">
                <a className="btn btn--gold" href={MARKETPLACE} target="_blank" rel="noopener noreferrer">
                  Google Workspace Marketplace <IconArrow className="btn__arrow" width="16" height="16" />
                </a>
                <Link href="/contact" className="btn btn--ghost">
                  Ask a question <IconArrow className="btn__arrow" width="16" height="16" />
                </Link>
              </div>
            </div>

            <Parallax speed={0.05}>
              <Tilt max={6}>
                <MacWindow
                  src="/app-shots/contact-manager/05-downloaded.webp"
                  alt="Google Contacts downloaded into a spreadsheet"
                  title="Google Sheets"
                  priority
                />
              </Tilt>
            </Parallax>
          </div>
        </div>
      </section>

      {/* -------- CAPABILITIES -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">Key features</p>
            <h2 className="head__title">Four things, done properly.</h2>
          </Reveal>
          <Stagger className="featgrid">
            {CAPABILITIES.map((c) => (
              <article className="featgrid__cell" key={c.title}>
                <span className="featgrid__ico">
                  <b style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.06em' }}>{c.tag}</b>
                </span>
                <h3 className="featgrid__title">{c.title}</h3>
                <p className="featgrid__body">{c.body}</p>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      {/* -------- WALKTHROUGH -------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">Start to finish</p>
            <h2 className="head__title">What using it actually looks like.</h2>
          </Reveal>
          <StickyShowcase steps={TOUR} windowTitle="Google Sheets" />
        </div>
      </section>

      {/* -------- FULL GALLERY -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">Every screen</p>
            <h2 className="head__title">The whole flow, in ten shots.</h2>
          </Reveal>
          <Reveal>
            <Gallery images={GALLERY} columns={4} />
          </Reveal>
        </div>
      </section>

      {/* -------- CTA -------- */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <div className="cta">
              <h2 className="cta__title">Install it from the Marketplace.</h2>
              <p className="cta__body">
                Search for &ldquo;5S Contact Manager&rdquo; in the Google Workspace Marketplace,
                grant it access to Contacts and Sheets, and it appears under
                Extensions in any spreadsheet you open.
              </p>
              <div className="cta__actions">
                <a className="btn btn--gold" href={MARKETPLACE} target="_blank" rel="noopener noreferrer">
                  Open the Marketplace <IconArrow className="btn__arrow" width="16" height="16" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
