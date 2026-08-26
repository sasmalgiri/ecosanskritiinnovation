import Link from 'next/link';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using the EcoSanskriti Innovations website and services.',
};

export default function TermsPage() {
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <p className="crumb"><Link href="/">Home</Link> / Legal / Terms &amp; Conditions</p>
          <h1 className="pagehead__title">Terms &amp; Conditions</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <div className="callout">
            <strong>Editor’s note (remove before publishing):</strong> This is a starting template, not
            legal advice. Replace it with the terms you had on your WordPress site, or have them
            reviewed before you rely on them.
          </div>

          <Reveal as="p">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</Reveal>

          <h2>1. Agreement</h2>
          <p>
            By accessing ecosanskritiinnovations.co.in (the “Site”) or using any product or service
            provided by EcoSanskriti Innovations (OPC) Pvt. Ltd. (“we”, “us”), you agree to these Terms.
            If you do not agree, please do not use the Site.
          </p>

          <h2>2. Use of the Site</h2>
          <p>
            You may use the Site for lawful purposes only. You agree not to misuse the Site, interfere
            with its operation, or attempt to access it in any way other than the interface we provide.
          </p>

          <h2>3. Intellectual property</h2>
          <p>
            All content on the Site — including the HRIM Motor design and related materials, text,
            graphics, logos, and the EcoSanskriti name — is owned by or licensed to us and protected by
            applicable intellectual-property laws. You may not reproduce it without permission.
          </p>

          <h2>4. Products &amp; services</h2>
          <p>
            Specific products (such as the 5S Contact Manager) may carry their own licence terms. Where
            they do, those terms apply in addition to these.
          </p>

          <h2>5. Disclaimer</h2>
          <p>
            The Site and its content are provided “as is”, without warranties of any kind. We do not
            guarantee that the Site will be uninterrupted or error-free.
          </p>

          <h2>6. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, we are not liable for any indirect or consequential
            loss arising from your use of the Site.
          </p>

          <h2>7. Governing law</h2>
          <p>These Terms are governed by the laws of India, with jurisdiction in West Bengal.</p>

          <h2>8. Contact</h2>
          <p>
            Questions about these Terms? Email{' '}
            <a href="mailto:sasmalgiri@gmail.com">sasmalgiri@gmail.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
