import Link from 'next/link';
import FluxMandala from '@/components/FluxMandala';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'Founder & Team',
  description: 'Meet the founder and team behind EcoSanskriti Innovations.',
};

const VALUES = [
  { title: 'Rooted', body: 'We draw on ancient wisdom and local knowledge, not just imported playbooks.' },
  { title: 'Practical', body: 'Prototypes over slideware. If it can’t be built and used, it isn’t finished.' },
  { title: 'Regenerative', body: 'We measure success by what we restore, not only what we make.' },
];

export default function FounderPage() {
  return (
    <>
      <section className="pagehead">
        <FluxMandala animated={false} className="pagehead__mark" />
        <div className="wrap">
          <p className="crumb"><Link href="/">Home</Link> / Founder &amp; Team</p>
          <h1 className="pagehead__title">The people behind <em>the mission.</em></h1>
          <p className="pagehead__lede">
            A founder-led venture building deep-tech and digital tools for a regenerative planet.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="team">
              <div className="team__avatar" aria-hidden="true">SS</div>
              <div>
                <p className="team__role">Founder</p>
                <h2 className="team__name">Shirshendu Sasmal</h2>
                <p className="team__body">
                  Founder of EcoSanskriti Innovations and inventor of the HRIM Motor (Indian Patent
                  555489). Builder, hardware experimenter, and software engineer working at the
                  intersection of renewable energy, electronics, and climate technology.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="prose" style={{ marginTop: '2.5rem' }}>
            <div className="callout">
              <strong>Editor’s note (remove before publishing):</strong> Paste your full founder bio,
              a photo (swap the “SS” monogram for an <code>&lt;img&gt;</code>), and any other team
              members here. The three values below are a placeholder you can keep or replace.
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="head">
            <p className="eyebrow eyebrow--ink">What we stand for</p>
            <h2 className="head__title">Three principles.</h2>
          </Reveal>
          <Reveal>
            <div className="cardgrid">
              {VALUES.map((v) => (
                <article className="card" key={v.title}>
                  <h3 className="card__title">{v.title}</h3>
                  <p className="card__body">{v.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
