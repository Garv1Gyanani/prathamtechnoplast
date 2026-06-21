import { Link } from 'react-router';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { label: 'BIS License', path: '/services#bis' },
  { label: 'ISI Certification', path: '/services#isi' },
  { label: 'ISO Certification', path: '/services#iso' },
  { label: 'Calibration', path: '/services#calibration' },
  { label: 'Trademark Registration', path: '/services#trademark' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0B1F4D' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Logo + Description + Social */}
          <div>
            <Link to="/" className="flex flex-col items-start leading-none">
              <span className="font-display text-[22px] font-extrabold" style={{ color: '#FFD700' }}>
                PRATHAM
              </span>
              <span
                className="font-body text-[9px] font-semibold tracking-[0.15em] mt-0.5"
                style={{ color: '#FCF8DD' }}
              >
                TECHNOPLAST
              </span>
            </Link>
            <p className="mt-4 font-body text-[14px] leading-relaxed" style={{ color: 'rgba(252,248,221,0.5)' }}>
              BIS, ISI & ISO Certification Consultants for pipe manufacturers. End-to-end compliance services with expert documentation and factory inspection support.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[
                { icon: Phone, href: 'tel:+919829050308' },
                { icon: MessageCircle, href: 'https://wa.me/919829050308' },
                { icon: Mail, href: 'mailto:jhabarmalchoudhary1974@gmail.com' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                  style={{ color: 'rgba(252,248,221,0.5)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FFD700'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(252,248,221,0.5)'; }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-body text-[14px] font-semibold mb-4" style={{ color: '#FCF8DD', letterSpacing: '0.08em' }}>
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-[14px] transition-colors duration-200"
                    style={{ color: 'rgba(252,248,221,0.5)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FFD700'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(252,248,221,0.5)'; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-body text-[14px] font-semibold mb-4" style={{ color: '#FCF8DD', letterSpacing: '0.08em' }}>
              SERVICES
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-[14px] transition-colors duration-200"
                    style={{ color: 'rgba(252,248,221,0.5)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FFD700'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(252,248,221,0.5)'; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-body text-[14px] font-semibold mb-4" style={{ color: '#FCF8DD', letterSpacing: '0.08em' }}>
              CONTACT US
            </h4>
            <div className="space-y-3 font-body text-[14px]" style={{ color: 'rgba(252,248,221,0.5)' }}>
              <p>
                <a href="tel:+919829050308" className="hover:text-[#FFD700] transition-colors">
                  +91 98290 50308
                </a>
              </p>
              <p>
                <a href="tel:+919799910519" className="hover:text-[#FFD700] transition-colors">
                  +91 97999 10519
                </a>
              </p>
              <p>
                <a href="mailto:jhabarmalchoudhary1974@gmail.com" className="hover:text-[#FFD700] transition-colors break-all">
                  jhabarmalchoudhary1974@gmail.com
                </a>
              </p>
              <p className="pt-1" style={{ color: 'rgba(252,248,221,0.4)' }}>
                Jhabar Mal Choudhary
              </p>
            </div>
            <a
              href="https://wa.me/919829050308"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 font-body text-[13px] font-semibold px-5 py-2.5 rounded-xl transition-transform duration-200 hover:scale-105"
              style={{ backgroundColor: '#00809D', color: '#fff' }}
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2"
          style={{ borderTop: '1px solid rgba(255,215,0,0.1)' }}
        >
          <p className="font-body text-[12px]" style={{ color: 'rgba(252,248,221,0.4)' }}>
            2025 Pratham Technoplast. All rights reserved.
          </p>
          <p className="font-body text-[12px]" style={{ color: 'rgba(252,248,221,0.4)' }}>
            BIS | ISI | ISO Certification Consultants
          </p>
        </div>
      </div>
    </footer>
  );
}
