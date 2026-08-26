import Link from 'next/link';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How EcoSanskriti Innovations handles your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <p className="crumb"><Link href="/">Home</Link> / Legal / Privacy Policy</p>
          <h1 className="pagehead__title">Privacy Policy</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <div className="callout">
            <strong>Editor’s note (remove before publishing):</strong> A starting template, not legal
            advice. Update it to reflect exactly what you collect and which services you use (e.g.
            Resend for the contact form, any analytics), then have it reviewed.
          </div>

          <Reveal as="p">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</Reveal>

          <h2>1. What we collect</h2>
          <p>
            When you use our contact form, we collect the name, email address, and message you provide,
            so we can reply. We don’t sell your information to anyone.
          </p>

          <h2>2. How we use it</h2>
          <p>
            We use the details you submit solely to respond to your enquiry and, where relevant, to
            follow up about products or partnerships you asked about.
          </p>

          <h2>3. Third-party services</h2>
          <p>
            Contact-form messages are delivered through an email provider (Resend). This site is hosted
            on Vercel, which may process basic technical request data. These providers handle data under
            their own privacy terms.
          </p>

          <h2>4. Cookies &amp; analytics</h2>
          <p>
            This site uses only what’s needed to function. If you add analytics later, describe it here
            and offer a way to opt out where required.
          </p>

          <h2>5. Your rights</h2>
          <p>
            You may ask us what personal data we hold about you and request its correction or deletion.
            Email us to make a request.
          </p>

          <h2>6. Contact</h2>
          <p>
            Privacy questions? Email{' '}
            <a href="mailto:sasmalgiri@gmail.com">sasmalgiri@gmail.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
