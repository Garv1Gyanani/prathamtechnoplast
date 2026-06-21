import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(11,31,77,0.97)' : 'rgba(11,31,77,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid rgba(255,215,0,0.08)' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.15)' : 'none',
          height: '80px',
        }}
      >
        <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-6 lg:px-12">
          <Link to="/" className="flex flex-col items-start leading-none">
            <span className="font-display text-[20px] font-extrabold tracking-tight" style={{ color: '#FFD700' }}>
              PRATHAM
            </span>
            <span className="font-body text-[9px] font-semibold tracking-[0.15em] mt-0.5" style={{ color: '#FCF8DD' }}>
              TECHNOPLAST
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-body text-[14px] font-medium transition-colors duration-200"
                style={{ color: 'rgba(252,248,221,0.7)' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#FFD700'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(252,248,221,0.7)'; }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="https://wa.me/919829050308"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex font-body text-[13px] font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.03]"
            style={{ backgroundColor: '#FFD700', color: '#0B1F4D' }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = '#D3AF37';
              (e.target as HTMLElement).style.boxShadow = '0 4px 20px rgba(255,215,0,0.3)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = '#FFD700';
              (e.target as HTMLElement).style.boxShadow = 'none';
            }}
          >
            WhatsApp Now
          </a>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} style={{ color: '#FCF8DD' }} />
            ) : (
              <Menu size={24} style={{ color: '#FCF8DD' }} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay — rendered outside nav to avoid stacking context */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[80px] lg:hidden flex flex-col items-center pt-16 gap-8"
          style={{ backgroundColor: '#0B1F4D', zIndex: 99 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="font-body text-xl font-medium transition-all duration-300"
              style={{ color: 'rgba(252,248,221,0.9)' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919829050308"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-4 font-body text-[14px] font-semibold px-8 py-3 rounded-full"
            style={{ backgroundColor: '#FFD700', color: '#0B1F4D' }}
          >
            WhatsApp Now
          </a>
        </div>
      )}
    </>
  );
}
