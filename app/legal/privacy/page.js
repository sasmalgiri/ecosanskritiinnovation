import Link from 'next/link';
import { LEGAL } from '@/lib/legal-content';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for EcoSanskriti Innovations (OPC) Private Limited, CIN U27100WB2025OPC279246.',
};

/**
 * The document body is injected as raw HTML rather than rewritten as JSX.
 *
 * These are the documents the published App Store listings link to, so the
 * wording has to survive exactly. Re-authoring 130 KB of Termly markup as
 * components would risk changing clause numbering or nesting to no benefit,
 * and the content is static and trusted — it ships in our own repo.
 */
export default function Page() {
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <p className="crumb"><Link href="/">Home</Link> / Legal / Privacy Policy</p>
          <h1 className="pagehead__title">Privacy Policy</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose legal-doc">
          <div dangerouslySetInnerHTML={{ __html: LEGAL.privacy }} />
        </div>
      </section>
    </>
  );
}
