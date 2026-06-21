import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Phone, Factory } from 'lucide-react';

const industries = [
  {
    name: 'HDPE Pipe Manufacturers',
    desc: 'Complete BIS/ISI certification for HDPE pipe production. We handle documentation, testing coordination, and factory inspection for all HDPE pipe standards.',
    standards: ['IS 4984', 'IS 14151', 'IS 14333'],
  },
  {
    name: 'PVC Pipe Manufacturers',
    desc: 'ISI mark certification for PVC pipe manufacturers. Expert guidance on IS 4985 and related standards for potable water supply.',
    standards: ['IS 4985', 'IS 10124', 'IS 12818'],
  },
  {
    name: 'uPVC Pipe Manufacturers',
    desc: 'Compliance solutions for uPVC window & pipe manufacturers. Complete support for unplasticized PVC certification requirements.',
    standards: ['IS 4985', 'IS 10124'],
  },
  {
    name: 'SWR Pipe Manufacturers',
    desc: 'SWR pipe certification and BIS license support. We ensure your SWR pipes meet all applicable BIS standards.',
    standards: ['IS 13592', 'IS 14735'],
  },
  {
    name: 'Pipe Fittings Manufacturers',
    desc: 'ISI certification for all types of pipe fittings. From Elbows to Tees, we cover all fitting types under applicable BIS standards.',
    standards: ['IS 7834', 'IS 10124'],
  },
  {
    name: 'Irrigation Product Manufacturers',
    desc: 'BIS certification for irrigation pipe and component makers. Support for drip irrigation, sprinkler systems, and related products.',
    standards: ['IS 12818', 'IS 14151'],
  },
];

const whyIndustries = [
  { title: 'Pipe-Specific Expertise', desc: 'We specialize exclusively in pipe manufacturers — no other clients, full focus on your certification needs.' },
  { title: 'Standard Knowledge', desc: 'In-depth knowledge of every BIS standard applicable to HDPE, PVC, uPVC, SWR pipes and fittings.' },
  { title: 'Lab Relationships', desc: 'Established relationships with BIS-approved testing laboratories for faster turnaround.' },
  { title: 'Factory Inspection Ready', desc: 'We know exactly what BIS inspectors look for in pipe factories and help you prepare accordingly.' },
];

export default function Industries() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true });

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -10% 0px' }
      );
      document.querySelectorAll('.reveal-section').forEach((el) => observer!.observe(el));
    }, 100);
    return () => { clearTimeout(timer); observer?.disconnect(); };
  }, []);

  return (
    <div>
      <style>{`
        .reveal-section { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
        .reveal-section.revealed { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* Hero */}
      <section className="relative" style={{ background: 'linear-gradient(180deg, #00809D 0%, #0B1F4D 100%)', paddingTop: '160px', paddingBottom: '80px' }}>
        <div ref={heroRef} className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0 }} animate={heroInView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Link to="/" className="font-body text-[14px] font-medium" style={{ color: 'rgba(252,248,221,0.4)' }}>Home</Link>
              <span style={{ color: 'rgba(252,248,221,0.2)' }}>/</span>
              <span className="font-body text-[14px]" style={{ color: 'rgba(252,248,221,0.4)' }}>Industries</span>
            </div>
          </motion.div>
          <motion.h1
            className="font-display text-[40px] sm:text-[48px] lg:text-[56px] font-bold"
            style={{ color: '#FCF8DD', lineHeight: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            Industries We Serve
          </motion.h1>
          <motion.p
            className="font-body text-[16px] lg:text-[18px] mx-auto mt-4 max-w-[600px]"
            style={{ color: 'rgba(252,248,221,0.6)', lineHeight: 1.65 }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            Specialized certification support for every segment of the pipe manufacturing industry.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section ref={gridRef} className="reveal-section" style={{ backgroundColor: '#FCF8DD', padding: '100px 0' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(0,128,157,0.06)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,128,157,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255,215,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(0,128,157,0.06)';
                }}
              >
                {/* Card Header */}
                <div className="relative h-[160px] overflow-hidden" style={{ background: 'linear-gradient(135deg, #00809D 0%, #0B1F4D 100%)' }}>
                  <Factory size={64} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" style={{ color: '#FFD700' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Factory size={40} style={{ color: '#FFD700' }} />
                  </div>
                </div>
                {/* Card Body */}
                <div className="p-6">
                  <h3 className="font-body text-[18px] font-semibold" style={{ color: '#0B1F4D' }}>
                    {ind.name}
                  </h3>
                  <p className="font-body text-[14px] mt-2 leading-relaxed" style={{ color: 'rgba(11,31,77,0.6)' }}>
                    {ind.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {ind.standards.map((std, j) => (
                      <span key={j} className="font-body text-[11px] font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(0,128,157,0.08)', color: '#00809D' }}>
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us for Industries */}
      <section className="reveal-section" style={{ backgroundColor: '#0B1F4D', padding: '100px 0' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-[12px] font-semibold tracking-[0.08em] uppercase mb-4" style={{ color: '#FFD700' }}>WHY US FOR YOUR INDUSTRY</p>
            <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold" style={{ color: '#FCF8DD' }}>
              Pipe Certification <span style={{ color: '#FFD700' }}>Specialists</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyIndustries.map((item, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: 'rgba(252,248,221,0.03)', border: '1px solid rgba(255,215,0,0.06)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(255,215,0,0.1)' }}>
                  <span className="font-display text-[18px] font-bold" style={{ color: '#FFD700' }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-body text-[16px] font-semibold" style={{ color: '#FCF8DD' }}>{item.title}</h3>
                <p className="font-body text-[13px] mt-2 leading-relaxed" style={{ color: 'rgba(252,248,221,0.5)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal-section" style={{ background: 'linear-gradient(135deg, #00809D 0%, #0B1F4D 100%)', padding: '100px 0' }}>
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <h2 className="font-display text-[34px] sm:text-[46px] font-bold leading-tight" style={{ color: '#FCF8DD' }}>
            Need Certification for <span style={{ color: '#FFD700' }}>Your Factory?</span>
          </h2>
          <p className="font-body text-[16px] mt-5" style={{ color: 'rgba(252,248,221,0.7)' }}>
            Get in touch for a free consultation specific to your pipe manufacturing segment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a href="https://wa.me/919829050308" target="_blank" rel="noopener noreferrer"
              className="font-body text-[15px] font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-[1.03] inline-flex items-center gap-2"
              style={{ backgroundColor: '#FFD700', color: '#0B1F4D' }}>
              <MessageCircle size={20} /> Get Free Consultation
            </a>
            <a href="tel:+919829050308"
              className="font-body text-[15px] font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-[1.03]"
              style={{ border: '2px solid #FFD700', color: '#FFD700' }}>
              <Phone size={18} className="inline mr-2" /> Call +91 98290 50308
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
