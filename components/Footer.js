import Link from 'next/link';
import FluxMandala from './FluxMandala';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href="/" className="brand" style={{ color: 'var(--paper)' }}>
              <FluxMandala animated={false} className="brand__mark" />
              <span className="brand__name">Eco<span>Sanskriti</span></span>
            </Link>
            <p>Innovating for a greener tomorrow, rooted in ancient wisdom. Deep-tech and digital tools for a regenerative planet.</p>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/products">Apps &amp; Products</Link></li>
              <li><Link href="/products">Mailin for Mac</Link></li>
              <li><Link href="/founder">Founder &amp; Team</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/legal/terms">Terms &amp; Conditions</Link></li>
              <li><Link href="/legal/privacy">Privacy Policy</Link></li>
              <li><Link href="/legal/eula">EULA</Link></li>
              <li><a href="https://www.youtube.com/@everythingmedia9644" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            </ul>
          </div>
        </div>

        {/*
          Statutory identity block. Section 12(3)(c) of the Companies Act 2013
          requires a company to display its full registered name, registered
          office and CIN on its business communications, and the 2014 rules
          extend that to the website. An abbreviated "Pvt. Ltd." with no CIN
          does not satisfy it.
        */}
        <div className="footer__legal">
          <p><strong>EcoSanskriti Innovations (OPC) Private Limited</strong></p>
          <p>CIN: U27100WB2025OPC279246</p>
          <p>Registered office: Vill + Post Binogram, Dist. Hooghly, West Bengal 712401, India</p>
          <p>HRIM Motor — Indian Patent No. 555489, granted 22 March 2023</p>
        </div>

        <div className="footer__bar">
          <span>© {new Date().getFullYear()} EcoSanskriti Innovations (OPC) Private Limited. All rights reserved.</span>
          <span>sasmalgiri@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}
