import Link from 'next/link';
import FluxMandala from '@/components/FluxMandala';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with EcoSanskriti Innovations — partnerships, products, and press.',
};

export default function ContactPage() {
  return (
    <>
      <section className="pagehead" data-tone="dark">
        <FluxMandala animated={false} className="pagehead__mark" />
        <div className="wrap">
          <p className="crumb"><Link href="/">Home</Link> / Contact</p>
          <h1 className="pagehead__title">Let’s build something <em>that lasts.</em></h1>
          <p className="pagehead__lede">
            Whether you’re a developer, investor, partner, or just curious — we’d love to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact">
          <Reveal className="contact__aside">
            <p className="eyebrow eyebrow--ink">Reach us</p>
            <h2 className="head__title" style={{ fontSize: 'clamp(1.5rem, 1.2rem + 1vw, 2rem)' }}>
              Direct lines.
            </h2>
            <ul className="contact__list">
              <li>
                <span className="contact__k">Email</span>
                <span className="contact__v">
                  <a href="mailto:sasmalgiri@gmail.com">sasmalgiri@gmail.com</a>
                </span>
              </li>
              <li>
                <span className="contact__k">YouTube</span>
                <span className="contact__v">
                  <a href="https://www.youtube.com/@everythingmedia9644" target="_blank" rel="noopener noreferrer">
                    @everythingmedia9644
                  </a>
                </span>
              </li>
              <li>
                <span className="contact__k">Based in</span>
                <span className="contact__v">Howrah · West Bengal · India</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
