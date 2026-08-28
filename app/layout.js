import './globals.css';
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import SpotlightRoot from '@/components/Spotlight';
import MagneticRoot from '@/components/Magnetic';
import Preloader from '@/components/Preloader';
import Cursor from '@/components/Cursor';
import ToneScroll from '@/components/ToneScroll';

const display = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
});

const body = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-body',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-mono',
});

const SITE = 'https://ecosanskritiinnovations.co.in';

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'EcoSanskriti Innovations — Greener tomorrow, rooted in ancient wisdom',
    template: '%s · EcoSanskriti Innovations',
  },
  description:
    'EcoSanskriti Innovations builds deep-tech and digital tools for a regenerative planet — from the patented HRIM Motor to EV & solar mobility, non-GHG cooling, and climate software.',
  keywords: [
    'EcoSanskriti Innovations', 'HRIM Motor', 'green technology', 'renewable energy',
    'EV mobility', 'solar', 'climate software', 'sustainability', 'India',
  ],
  authors: [{ name: 'EcoSanskriti Innovations' }],
  alternates: { canonical: SITE },
  openGraph: {
    type: 'website',
    url: SITE,
    siteName: 'EcoSanskriti Innovations',
    title: 'EcoSanskriti Innovations — Greener tomorrow, rooted in ancient wisdom',
    description:
      'Deep-tech and digital tools for a regenerative planet. Home of the patented HRIM Motor.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoSanskriti Innovations',
    description: 'Innovating for a greener tomorrow, rooted in ancient wisdom.',
  },
  verification: {
    google: 'W12WaM-3wVs9jVqaZeexTzR44meePsD-d0DP8AjSGwk',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#10382a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Runs before first paint. Marks JS as available, so scroll-reveal
            only hides content when it can animate it back in, and decides
            whether the opening curtain should be up — see Preloader. */}
        <script dangerouslySetInnerHTML={{ __html: "(function(){var d=document.documentElement;d.classList.add('js');try{if(location.pathname==='/'&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&sessionStorage.getItem('esi:preloaded')!=='1'){sessionStorage.setItem('esi:preloaded','1');d.classList.add('is-preloading');setTimeout(function(){d.classList.remove('is-preloading')},4500);}}catch(e){}})()" }} />
        <Preloader />
        <Cursor />
        <ToneScroll />
        <ScrollProgress />
        <div className="grain" aria-hidden="true" />
        <SpotlightRoot />
        <MagneticRoot />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
