import Link from 'next/link';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'EULA',
  description: 'End User Licence Agreement for EcoSanskriti Innovations software.',
};

export default function EulaPage() {
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <p className="crumb"><Link href="/">Home</Link> / Legal / EULA</p>
          <h1 className="pagehead__title">End User Licence Agreement</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <div className="callout">
            <strong>Editor’s note (remove before publishing):</strong> On the old site this lived under a
            WooCommerce “my-account” page. Since you confirmed it was a placeholder, this is a clean EULA
            template — replace it with your actual software licence terms.
          </div>

          <Reveal as="p">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</Reveal>

          <h2>1. Licence grant</h2>
          <p>
            Subject to this Agreement, EcoSanskriti Innovations grants you a personal, non-exclusive,
            non-transferable licence to install and use our software (for example, the 5S Contact
            Manager) on devices you own or control.
          </p>

          <h2>2. Restrictions</h2>
          <p>
            You may not copy, modify, reverse-engineer, redistribute, or resell the software except as
            permitted by law or expressly allowed here.
          </p>

          <h2>3. Ownership</h2>
          <p>
            The software is licensed, not sold. All rights, title, and interest remain with EcoSanskriti
            Innovations.
          </p>

          <h2>4. Updates</h2>
          <p>
            We may provide updates from time to time. This Agreement covers any updates unless they come
            with separate terms.
          </p>

          <h2>5. Termination</h2>
          <p>
            This licence ends automatically if you breach its terms. On termination, you must stop using
            the software and remove all copies.
          </p>

          <h2>6. Warranty &amp; liability</h2>
          <p>
            The software is provided “as is”. To the extent permitted by law, we disclaim all warranties
            and are not liable for any damages arising from its use.
          </p>

          <h2>7. Contact</h2>
          <p>
            Licensing questions? Email{' '}
            <a href="mailto:contact@ecosanskritiinnovations.co.in">contact@ecosanskritiinnovations.co.in</a>.
          </p>
        </div>
      </section>
    </>
  );
}
