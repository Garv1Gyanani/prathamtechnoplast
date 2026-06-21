import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { motion, useInView } from 'framer-motion';
import {
  Award, Shield, CheckCircle, Settings, BookOpen, FileText,
  ClipboardCheck, FileCheck, Stethoscope, RefreshCw, MessageCircle, Phone,
} from 'lucide-react';

const services = [
  {
    title: 'BIS License (ISI Mark)',
    desc: 'New License / Renewal',
    detail: 'Complete support for ISI certification under BIS standards. We handle the entire application process, documentation, and coordination with BIS authorities.',
    icon: Award,
    id: 'bis',
  },
  {
    title: 'ISO Certification',
    desc: 'ISO 9001, 14001, 45001 & more',
    detail: 'Improve quality, build trust and grow your business. Our team guides you through the complete ISO certification process.',
    icon: Shield,
    id: 'iso',
  },
  {
    title: 'ISI Mark Certification',
    desc: 'For HDPE Pipes, Fittings & Other Products',
    detail: 'As per applicable BIS standards. We ensure your products meet all required specifications for ISI marking.',
    icon: CheckCircle,
    id: 'isi',
  },
  {
    title: 'Calibration Certificate',
    desc: 'All types of measuring instruments',
    detail: 'Calibration certificates for pressure gauges, testing instruments & lab equipment. We coordinate with NABL-accredited labs.',
    icon: Settings,
    id: 'calibration',
  },
  {
    title: 'Trademark Registration',
    desc: 'Protect your brand identity',
    detail: 'Registered trademark protection for your brand. Complete filing assistance and registration process support.',
    icon: BookOpen,
    id: 'trademark',
  },
  {
    title: 'BIS Documentation & Compliance',
    desc: 'End-to-end documentation support',
    detail: 'Complete documentation for BIS certification process. We prepare, review, and submit all required documents.',
    icon: FileText,
    id: 'documentation',
  },
  {
    title: 'Factory Inspection Coordination',
    desc: 'Smooth coordination with BIS',
    detail: 'Expert coordination with BIS authorities for factory inspection. We help you prepare and ensure a smooth inspection process.',
    icon: ClipboardCheck,
    id: 'inspection',
  },
  {
    title: 'Test Report Arrangement',
    desc: 'From BIS recognized laboratories',
    detail: 'Test report arrangement from BIS approved labs. We coordinate sample submission and report collection.',
    icon: FileCheck,
    id: 'testreport',
  },
  {
    title: 'Consultancy Support',
    desc: 'Expert guidance at every step',
    detail: 'Expert guidance throughout the BIS certification process. Our consultants are available for any questions or concerns.',
    icon: Stethoscope,
    id: 'consultancy',
  },
  {
    title: 'Renewal & Post Certification Support',
    desc: 'On-time renewal & continuous support',
    detail: 'Continuous support assurance after certification. We track renewal deadlines and ensure timely compliance.',
    icon: RefreshCw,
    id: 'renewal',
  },
];

const processSteps = [
  { step: '01', title: 'Initial Consultation', desc: 'We understand your requirements and assess your current compliance status.' },
  { step: '02', title: 'Documentation Preparation', desc: 'Our experts prepare all necessary documents and applications.' },
  { step: '03', title: 'Product Testing', desc: 'Coordination with BIS-approved labs for product sample testing.' },
  { step: '04', title: 'Factory Inspection', desc: 'Pre-inspection preparation and coordination with authorities.' },
  { step: '05', title: 'Certification Approval', desc: 'End-to-end follow-up until certificate is issued.' },
  { step: '06', title: 'Renewal & Ongoing Support', desc: 'Timely renewal reminders and ongoing compliance guidance.' },
];

export default function Services() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true });

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
              <span className="font-body text-[14px]" style={{ color: 'rgba(252,248,221,0.4)' }}>Services</span>
            </div>
          </motion.div>
          <motion.h1
            className="font-display text-[40px] sm:text-[48px] lg:text-[56px] font-bold"
            style={{ color: '#FCF8DD', lineHeight: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="font-body text-[16px] lg:text-[18px] mx-auto mt-4 max-w-[600px]"
            style={{ color: 'rgba(252,248,221,0.6)', lineHeight: 1.65 }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            Complete certification solutions for HDPE, PVC, uPVC, SWR pipe manufacturers and more.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="reveal-section" style={{ backgroundColor: '#FCF8DD', padding: '100px 0' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                id={service.id}
                className="group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(0,128,157,0.06)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,128,157,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255,215,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(0,128,157,0.06)';
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: 'rgba(0,128,157,0.1)' }}>
                  <service.icon size={24} style={{ color: '#00809D' }} />
                </div>
                <h3 className="font-body text-[18px] font-semibold" style={{ color: '#0B1F4D' }}>
                  {service.title}
                </h3>
                <p className="font-body text-[13px] mt-1 font-medium" style={{ color: '#00809D' }}>
                  {service.desc}
                </p>
                <p className="font-body text-[14px] mt-3 leading-relaxed" style={{ color: 'rgba(11,31,77,0.6)' }}>
                  {service.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} className="reveal-section" style={{ backgroundColor: '#0B1F4D', padding: '100px 0' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-[12px] font-semibold tracking-[0.08em] uppercase mb-4" style={{ color: '#FFD700' }}>OUR PROCESS</p>
            <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold leading-tight" style={{ color: '#FCF8DD' }}>
              How We Get You <span style={{ color: '#FFD700' }}>Certified</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                className="relative rounded-2xl p-8"
                style={{ backgroundColor: 'rgba(252,248,221,0.03)', border: '1px solid rgba(255,215,0,0.06)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              >
                <span className="font-display text-[48px] font-extrabold leading-none" style={{ color: 'rgba(255,215,0,0.1)' }}>{step.step}</span>
                <h3 className="font-body text-[18px] font-semibold mt-4" style={{ color: '#FCF8DD' }}>{step.title}</h3>
                <p className="font-body text-[14px] mt-2 leading-relaxed" style={{ color: 'rgba(252,248,221,0.5)' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal-section" style={{ background: 'linear-gradient(135deg, #00809D 0%, #0B1F4D 100%)', padding: '100px 0' }}>
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <h2 className="font-display text-[34px] sm:text-[46px] font-bold leading-tight" style={{ color: '#FCF8DD' }}>
            Ready to Get <span style={{ color: '#FFD700' }}>Certified?</span>
          </h2>
          <p className="font-body text-[16px] mt-5" style={{ color: 'rgba(252,248,221,0.7)' }}>
            Get in touch for a free consultation. Our experts will guide you through the entire process.
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
