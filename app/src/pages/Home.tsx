import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ChevronDown, CheckCircle, Phone, MessageCircle, FileCheck, Shield, Award,
  ClipboardCheck, BookOpen, Settings, Users, Clock, Download, Factory,
  FileText, Stethoscope, RefreshCw,
} from 'lucide-react';
import GradientText from '../components/GradientText';
import WhatsAppButton from '../components/WhatsAppButton';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'BIS License (ISI Mark)',
    desc: 'New License / Renewal',
    items: ['Complete support for ISI certification under BIS standards.'],
    icon: Award,
    id: 'bis',
  },
  {
    title: 'ISO Certification',
    desc: 'ISO 9001, 14001, 45001 & more',
    items: ['Improve quality, build trust and grow your business.'],
    icon: Shield,
    id: 'iso',
  },
  {
    title: 'ISI Mark Certification',
    desc: 'For HDPE Pipes, Fittings & Other Products',
    items: ['As per applicable standards.'],
    icon: CheckCircle,
    id: 'isi',
  },
  {
    title: 'Calibration Certificate',
    desc: 'All types of measuring instruments',
    items: ['Calibration certificates for pressure gauges, testing instruments & lab equipment.'],
    icon: Settings,
    id: 'calibration',
  },
  {
    title: 'Trademark Registration',
    desc: 'Protect your brand identity',
    items: ['Registered trademark protection for your brand.'],
    icon: BookOpen,
    id: 'trademark',
  },
  {
    title: 'BIS Documentation & Compliance',
    desc: 'End-to-end documentation support',
    items: ['Complete documentation for BIS certification process.'],
    icon: FileText,
    id: 'documentation',
  },
  {
    title: 'Factory Inspection Coordination',
    desc: 'Smooth coordination with BIS',
    items: ['Expert coordination with BIS authorities for factory inspection.'],
    icon: ClipboardCheck,
    id: 'inspection',
  },
  {
    title: 'Test Report Arrangement',
    desc: 'From BIS recognized laboratories',
    items: ['Test report arrangement from BIS approved labs.'],
    icon: FileCheck,
    id: 'testreport',
  },
  {
    title: 'Consultancy Support',
    desc: 'Expert guidance at every step',
    items: ['Expert guidance throughout the BIS certification process.'],
    icon: Stethoscope,
    id: 'consultancy',
  },
  {
    title: 'Renewal & Post Certification Support',
    desc: 'On-time renewal & continuous support',
    items: ['Continuous support assurance after certification.'],
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

const industries = [
  { name: 'HDPE Pipe Manufacturers', desc: 'Complete BIS/ISI certification for HDPE pipe production.', image: '/industry-hdpe.webp' },
  { name: 'PVC Pipe Manufacturers', desc: 'ISI mark certification for PVC pipe manufacturers.', image: '/industry-pvc.webp' },
  { name: 'uPVC Pipe Manufacturers', desc: 'Compliance solutions for uPVC window & pipe manufacturers.', image: '/industry-pvc.webp' },
  { name: 'SWR Pipe Manufacturers', desc: 'SWR pipe certification and BIS license support.', image: '/industry-hdpe.webp' },
  { name: 'Pipe Fittings Manufacturers', desc: 'ISI certification for all types of pipe fittings.', image: '/industry-irrigation.webp' },
  { name: 'Irrigation Product Manufacturers', desc: 'BIS certification for irrigation pipe and component makers.', image: '/industry-irrigation.webp' },
];

const whyChoose = [
  { icon: Award, title: 'Experienced in BIS & Regulatory Services', desc: 'Deep expertise in BIS, ISI, ISO and regulatory compliance for pipe manufacturers.' },
  { icon: BookOpen, title: 'In-depth Knowledge of Standards', desc: 'Thorough understanding of all applicable BIS and ISO standards for your products.' },
  { icon: CheckCircle, title: 'Hassle-free Process', desc: 'We handle all the complexity so you can focus on your manufacturing.' },
  { icon: FileCheck, title: 'Transparent & Reliable Services', desc: 'Complete transparency at every stage with regular updates and progress reports.' },
  { icon: Users, title: 'Customer Satisfaction First', desc: 'Your satisfaction is our priority. We work until you get certified.' },
  { icon: Shield, title: 'Post Certification Support', desc: 'Continued support even after certification to ensure ongoing compliance.' },
];

const faqItems = [
  { q: 'How long does BIS certification take?', a: 'The BIS certification process typically takes 4-6 months from application to approval, depending on product testing and factory inspection schedules.' },
  { q: 'What documents are required?', a: 'Key documents include business registration, manufacturing process flow, product test reports, factory layout, quality manual, and address proofs.' },
  { q: 'What is the cost of BIS certification?', a: 'Costs vary based on product category, number of variants, factory location, and testing requirements. Contact us for a customized quote.' },
  { q: 'Is factory inspection mandatory?', a: 'Yes, factory inspection is a mandatory part of BIS certification. We help you prepare and coordinate the inspection process.' },
  { q: 'How often is renewal required?', a: 'BIS license is typically valid for one year and requires annual renewal. We provide timely reminders and full renewal support.' },
];

const testimonials = [
  { quote: 'Pratham Technoplast handled our entire BIS certification process. Their expertise in documentation and BIS coordination saved us months of effort.', author: 'HDPE Pipe Manufacturer' },
  { quote: 'Professional, transparent, and efficient. They guided us through ISI certification for our PVC pipes with complete hand-holding.', author: 'PVC Pipe Factory' },
  { quote: 'We needed ISO 9001 certification urgently. Pratham delivered within the promised timeline. Highly recommended.', author: 'Fittings Manufacturer' },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checklistForm, setChecklistForm] = useState({ name: '', phone: '', email: '' });
  const [checklistSubmitted, setChecklistSubmitted] = useState(false);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo('.hero-bg', { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' })
        .fromTo('.hero-gradient-mesh', { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.6')
        .fromTo('.hero-eyebrow', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.4')
        .fromTo('.hero-headline', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.2')
        .fromTo('.hero-subtitle', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.2')
        .fromTo('.hero-cta', { y: 15, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }, '-=0.2')
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.1');
    }, heroRef);
    return () => ctx.revert();
  }, []);

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
      document.querySelectorAll('.reveal-section, .reveal-stagger').forEach((el) => observer!.observe(el));
    }, 100);
    return () => { clearTimeout(timer); observer?.disconnect(); };
  }, []);

  const handleChecklistDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (checklistForm.name && checklistForm.phone) {
      setChecklistSubmitted(true);
    }
  };

  return (
    <div>
      <style>{`
        .reveal-section { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
        .reveal-section.revealed { opacity: 1; transform: translateY(0); }
        .reveal-stagger > * { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
        .reveal-stagger.revealed > * { opacity: 1; transform: translateY(0); }
        .reveal-stagger.revealed > *:nth-child(1) { transition-delay: 0s; }
        .reveal-stagger.revealed > *:nth-child(2) { transition-delay: 0.1s; }
        .reveal-stagger.revealed > *:nth-child(3) { transition-delay: 0.2s; }
        .reveal-stagger.revealed > *:nth-child(4) { transition-delay: 0.3s; }
        .reveal-stagger.revealed > *:nth-child(5) { transition-delay: 0.4s; }
        .reveal-stagger.revealed > *:nth-child(6) { transition-delay: 0.5s; }
        @keyframes gradient-shift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-2%, 1%); }
        }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section ref={heroRef} className="relative w-full min-h-[100dvh] overflow-hidden flex items-center">
        {/* Full-width banner image */}
        <div className="hero-bg absolute inset-0 z-0">
          <img
            src="/d39cb358-8155-45d8-9493-4fc7314fde82.png"
            alt="Pratham Technoplast"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Left-side dark overlay for text readability */}
        <div className="absolute inset-0 z-[1]" style={{
          background: 'linear-gradient(90deg, rgba(11,31,77,0.92) 0%, rgba(11,31,77,0.80) 40%, rgba(11,31,77,0.30) 65%, rgba(11,31,77,0.05) 100%)',
        }} />

        {/* Subtle gold accent glow */}
        <div className="hero-gradient-mesh absolute inset-0 z-[2] opacity-0" style={{
          background: 'radial-gradient(ellipse at 15% 50%, rgba(255,215,0,0.06) 0%, transparent 50%)',
          animation: 'gradient-shift 15s ease infinite',
        }} />

        <div className="relative z-10 w-full px-6 lg:px-12 max-w-[1280px] mx-auto" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="lg:w-[50%] md:max-w-[580px]">
          <p className="hero-eyebrow font-body text-[12px] font-semibold tracking-[0.12em] uppercase mb-6" style={{ color: '#FFD700' }}>
            Your Trusted Partner in Quality, Compliance & Certification
          </p>
            <h1 className="hero-headline font-display text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold leading-[1.05] tracking-[-0.02em]" style={{ color: '#FCF8DD' }}>
              BIS, ISI & ISO Certification
              <br />
              <GradientText as="span">Experts for Pipe Manufacturers</GradientText>
            </h1>
            <p className="hero-subtitle font-body text-[16px] lg:text-[18px] leading-relaxed mt-6" style={{ color: 'rgba(252,248,221,0.8)' }}>
              End-to-end support for BIS License, ISI Mark Certification, ISO Certification, Calibration, Trademark Registration, Documentation & Factory Inspection Coordination.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-10">
              <a
                href="https://wa.me/919829050308"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta font-body text-[14px] font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.03] inline-flex items-center gap-2"
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
                <MessageCircle size={18} /> Get Free Consultation
              </a>
              <a
                href="https://wa.me/919829050308"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta font-body text-[14px] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.03] inline-flex items-center gap-2"
                style={{ border: '2px solid #FFD700', color: '#FFD700' }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#FFD700';
                  (e.target as HTMLElement).style.color = '#0B1F4D';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'transparent';
                  (e.target as HTMLElement).style.color = '#FFD700';
                }}
              >
                <MessageCircle size={18} /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
        <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown size={24} className="animate-bounce-slow" style={{ color: 'rgba(252,248,221,0.5)' }} />
        </div>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <section className="reveal-section" style={{ backgroundColor: '#0B1F4D', padding: '48px 0' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: CheckCircle, label: '100% Compliance Support' },
              { icon: FileCheck, label: 'End-to-End Documentation' },
              { icon: Award, label: 'Expert Consultancy' },
              { icon: Clock, label: 'Timely Processing' },
              { icon: Shield, label: 'Post Certification Support' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <item.icon size={24} style={{ color: '#FFD700' }} />
                <span className="font-body text-[13px] font-medium leading-tight" style={{ color: 'rgba(252,248,221,0.7)' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="reveal-section" style={{ backgroundColor: '#FCF8DD', padding: '120px 0' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-[600px] mb-16">
            <p className="font-body text-[12px] font-semibold tracking-[0.08em] uppercase mb-4" style={{ color: '#00809D' }}>
              ONE STOP SOLUTION
            </p>
            <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold leading-tight" style={{ color: '#0B1F4D' }}>
              Complete Certification
              <br />
              <GradientText>Solutions</GradientText>
            </h2>
            <p className="font-body text-[16px] mt-4 leading-relaxed" style={{ color: 'rgba(11,31,77,0.6)' }}>
              We provide complete certifications for HDPE, PVC, uPVC, SWR pipe manufacturers and more.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                id={service.id}
                className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(0,128,157,0.06)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,128,157,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255,215,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(0,128,157,0.06)';
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(0,128,157,0.1)' }}>
                  <service.icon size={20} style={{ color: '#00809D' }} />
                </div>
                <h3 className="font-body text-[15px] font-semibold" style={{ color: '#0B1F4D' }}>
                  {service.title}
                </h3>
                <p className="font-body text-[12px] mt-1 font-medium" style={{ color: '#00809D' }}>
                  {service.desc}
                </p>
                {service.items.map((item, j) => (
                  <p key={j} className="font-body text-[13px] mt-2 leading-relaxed" style={{ color: 'rgba(11,31,77,0.55)' }}>
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATION PROCESS ─── */}
      <section className="reveal-section" style={{ backgroundColor: '#0B1F4D', padding: '120px 0' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-[12px] font-semibold tracking-[0.08em] uppercase mb-4" style={{ color: '#FFD700' }}>
              OUR PROCESS
            </p>
            <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold leading-tight" style={{ color: '#FCF8DD' }}>
              How We Get You
              <br />
              <span style={{ color: '#FFD700' }}>Certified</span>
            </h2>
            <p className="font-body text-[16px] mt-4 max-w-[600px] mx-auto" style={{ color: 'rgba(252,248,221,0.6)' }}>
              Most competitors don't explain the process. We believe in complete transparency.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-8"
                style={{
                  backgroundColor: 'rgba(252,248,221,0.03)',
                  border: '1px solid rgba(255,215,0,0.06)',
                }}
              >
                <span className="font-display text-[48px] font-extrabold leading-none" style={{ color: 'rgba(255,215,0,0.1)' }}>
                  {step.step}
                </span>
                <h3 className="font-body text-[18px] font-semibold mt-4" style={{ color: '#FCF8DD' }}>
                  {step.title}
                </h3>
                <p className="font-body text-[14px] mt-2 leading-relaxed" style={{ color: 'rgba(252,248,221,0.5)' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES WE SERVE ─── */}
      <section className="reveal-section" style={{ backgroundColor: '#FCF8DD', padding: '120px 0' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="font-body text-[12px] font-semibold tracking-[0.08em] uppercase mb-4" style={{ color: '#00809D' }}>
              INDUSTRIES WE SERVE
            </p>
            <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold leading-tight" style={{ color: '#0B1F4D' }}>
              Serving Every
              <br />
              <GradientText>Pipe Manufacturing Segment</GradientText>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden min-h-[280px] flex flex-col justify-end p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(11,31,77,0.05) 0%, rgba(0,128,157,0.9) 100%)`,
                  backgroundColor: '#00809D',
                }}
              >
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url(${ind.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }} />
                <div className="relative z-[1]">
                  <Factory size={28} style={{ color: '#FFD700', marginBottom: '12px' }} />
                  <h3 className="font-body text-[18px] font-semibold" style={{ color: '#FCF8DD' }}>
                    {ind.name}
                  </h3>
                  <p className="font-body text-[13px] mt-1" style={{ color: 'rgba(252,248,221,0.7)' }}>
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ALL CERTIFICATIONS CTA STRIP ─── */}
      <section className="reveal-section" style={{ background: 'linear-gradient(135deg, #FFD700 0%, #D3AF37 100%)', padding: '64px 0' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold leading-tight" style={{ color: '#0B1F4D' }}>
            All Certifications Solutions At One Place
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            <span className="font-body text-[15px] font-semibold px-4 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(11,31,77,0.1)', color: '#0B1F4D' }}>
              Save Time
            </span>
            <span className="font-body text-[15px] font-semibold px-4 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(11,31,77,0.1)', color: '#0B1F4D' }}>
              Ensure Compliance
            </span>
            <span className="font-body text-[15px] font-semibold px-4 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(11,31,77,0.1)', color: '#0B1F4D' }}>
              Grow Your Business
            </span>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE PRATHAM ─── */}
      <section className="reveal-section" style={{ backgroundColor: '#0B1F4D', padding: '120px 0' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-[12px] font-semibold tracking-[0.08em] uppercase mb-4" style={{ color: '#FFD700' }}>
              WHY PRATHAM
            </p>
            <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold leading-tight" style={{ color: '#FCF8DD' }}>
              Why Pipe Manufacturers
              <br />
              <span style={{ color: '#FFD700' }}>Trust Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {whyChoose.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(252,248,221,0.03)',
                  border: '1px solid rgba(255,215,0,0.06)',
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: 'rgba(255,215,0,0.1)' }}>
                  <item.icon size={24} style={{ color: '#FFD700' }} />
                </div>
                <h3 className="font-body text-[18px] font-semibold" style={{ color: '#FCF8DD' }}>
                  {item.title}
                </h3>
                <p className="font-body text-[14px] mt-3 leading-relaxed" style={{ color: 'rgba(252,248,221,0.5)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FREE RESOURCE / CHECKLIST ─── */}
      <section className="reveal-section" style={{ backgroundColor: '#00809D', padding: '100px 0' }}>
        <div className="max-w-[800px] mx-auto px-6 lg:px-12 text-center">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(255,215,0,0.15)' }}>
            <Download size={32} style={{ color: '#FFD700' }} />
          </div>
          <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold leading-tight" style={{ color: '#FCF8DD' }}>
            Download Free
            <br />
            <span style={{ color: '#FFD700' }}>BIS Certification Checklist</span>
          </h2>
          <p className="font-body text-[16px] mt-4 max-w-[500px] mx-auto" style={{ color: 'rgba(252,248,221,0.7)' }}>
            Get our comprehensive checklist covering all documents, tests, and steps required for BIS certification.
          </p>

          {!checklistSubmitted ? (
            <form onSubmit={handleChecklistDownload} className="max-w-[480px] mx-auto mt-10 space-y-4">
              <input
                type="text"
                placeholder="Your Name *"
                required
                value={checklistForm.name}
                onChange={(e) => setChecklistForm(p => ({ ...p, name: e.target.value }))}
                className="w-full font-body text-[15px] px-5 py-3.5 rounded-xl border-0 outline-none"
                style={{ backgroundColor: 'rgba(252,248,221,0.12)', color: '#FCF8DD' }}
                onFocus={(e) => { e.currentTarget.style.backgroundColor = 'rgba(252,248,221,0.18)'; }}
                onBlur={(e) => { e.currentTarget.style.backgroundColor = 'rgba(252,248,221,0.12)'; }}
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                value={checklistForm.phone}
                onChange={(e) => setChecklistForm(p => ({ ...p, phone: e.target.value }))}
                className="w-full font-body text-[15px] px-5 py-3.5 rounded-xl border-0 outline-none"
                style={{ backgroundColor: 'rgba(252,248,221,0.12)', color: '#FCF8DD' }}
                onFocus={(e) => { e.currentTarget.style.backgroundColor = 'rgba(252,248,221,0.18)'; }}
                onBlur={(e) => { e.currentTarget.style.backgroundColor = 'rgba(252,248,221,0.12)'; }}
              />
              <input
                type="email"
                placeholder="Email Address"
                value={checklistForm.email}
                onChange={(e) => setChecklistForm(p => ({ ...p, email: e.target.value }))}
                className="w-full font-body text-[15px] px-5 py-3.5 rounded-xl border-0 outline-none"
                style={{ backgroundColor: 'rgba(252,248,221,0.12)', color: '#FCF8DD' }}
                onFocus={(e) => { e.currentTarget.style.backgroundColor = 'rgba(252,248,221,0.18)'; }}
                onBlur={(e) => { e.currentTarget.style.backgroundColor = 'rgba(252,248,221,0.12)'; }}
              />
              <button
                type="submit"
                className="w-full font-body text-[16px] font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: '#FFD700', color: '#0B1F4D' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#D3AF37'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFD700'; }}
              >
                <Download size={18} className="inline mr-2" />
                Download Checklist
              </button>
            </form>
          ) : (
            <div className="mt-10 p-8 rounded-2xl" style={{ backgroundColor: 'rgba(252,248,221,0.08)' }}>
              <CheckCircle size={48} style={{ color: '#FFD700', margin: '0 auto' }} />
              <h3 className="font-body text-[20px] font-semibold mt-4" style={{ color: '#FCF8DD' }}>
                Checklist Sent!
              </h3>
              <p className="font-body text-[14px] mt-2" style={{ color: 'rgba(252,248,221,0.6)' }}>
                We've sent the BIS certification checklist to your email. Our team will also follow up for any assistance.
              </p>
              <a
                href={`https://wa.me/919829050308?text=Hi%2C%20I%20just%20downloaded%20the%20BIS%20checklist.%20I%20need%20help%20with%20certification.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 font-body text-[14px] font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: '#FFD700', color: '#0B1F4D' }}
              >
                <MessageCircle size={18} /> Need Help? WhatsApp Us
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="reveal-section" style={{ backgroundColor: '#FCF8DD', padding: '100px 0' }}>
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="font-body text-[12px] font-semibold tracking-[0.08em] uppercase mb-4" style={{ color: '#00809D' }}>
              FAQ
            </p>
            <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold leading-tight" style={{ color: '#0B1F4D' }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-all duration-200"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(0,128,157,0.06)',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-body text-[15px] font-semibold leading-snug" style={{ color: '#0B1F4D' }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: '#00809D',
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openFaq === i ? '200px' : '0',
                    opacity: openFaq === i ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-5 font-body text-[14px] leading-relaxed" style={{ color: 'rgba(11,31,77,0.6)' }}>
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="reveal-section" style={{ backgroundColor: '#FCF8DD', padding: '0 0 100px 0' }}>
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="font-body text-[12px] font-semibold tracking-[0.08em] uppercase mb-4" style={{ color: '#00809D' }}>
              TESTIMONIALS
            </p>
            <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold" style={{ color: '#0B1F4D' }}>
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(0,128,157,0.06)',
                  boxShadow: '0 4px 24px rgba(0,128,157,0.04)',
                }}
              >
                <span className="font-display text-[36px] leading-none" style={{ color: 'rgba(0,128,157,0.15)' }}>
                  &ldquo;
                </span>
                <p className="font-body text-[14px] italic leading-relaxed mt-2" style={{ color: 'rgba(11,31,77,0.7)' }}>
                  {t.quote}
                </p>
                <div className="mt-6 pt-4" style={{ borderTop: '1px solid rgba(0,128,157,0.08)' }}>
                  <p className="font-body text-[14px] font-semibold" style={{ color: '#00809D' }}>
                    — {t.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT / FINAL CTA ─── */}
      <section className="reveal-section relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #00809D 0%, #0B1F4D 100%)',
        padding: '100px 0',
      }}>
        <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full opacity-[0.04] pointer-events-none" style={{ border: '1px solid rgba(255,215,0,0.2)' }} />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full opacity-[0.04] pointer-events-none" style={{ border: '1px solid rgba(255,215,0,0.2)' }} />

        <div className="relative max-w-[800px] mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(255,215,0,0.12)' }}>
            <Phone size={32} style={{ color: '#FFD700' }} />
          </div>
          <h2 className="font-display text-[34px] sm:text-[46px] lg:text-[56px] font-bold leading-tight" style={{ color: '#FCF8DD' }}>
            Ready to Get
            <br />
            <span style={{ color: '#FFD700' }}>Certified?</span>
          </h2>
          <p className="font-body text-[16px] lg:text-[18px] mt-5 max-w-[600px] mx-auto" style={{ color: 'rgba(252,248,221,0.7)' }}>
            Get in touch for a free consultation. Our certification experts will guide you through the entire process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="https://wa.me/919829050308"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[15px] font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-[1.03] inline-flex items-center gap-2"
              style={{ backgroundColor: '#FFD700', color: '#0B1F4D' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#D3AF37'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFD700'; }}
            >
              <MessageCircle size={20} /> Get Free Consultation
            </a>
            <a
              href="tel:+919829050308"
              className="font-body text-[15px] font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-[1.03]"
              style={{ border: '2px solid #FFD700', color: '#FFD700' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFD700';
                e.currentTarget.style.color = '#0B1F4D';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#FFD700';
              }}
            >
              Call +91 98290 50308
            </a>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
