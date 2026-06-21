import { useState, useRef } from 'react';
import { Link } from 'react-router';
import { motion, useInView } from 'framer-motion';
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const contactMethods = [
  {
    icon: Phone,
    label: 'Call Direct',
    value: '+91 98290 50308',
    href: 'tel:+919829050308',
    actionLabel: 'Call Now',
    color: '#00809D',
  },
  {
    icon: Phone,
    label: 'Alternate Line',
    value: '+91 97999 10519',
    href: 'tel:+919799910519',
    actionLabel: 'Call Now',
    color: '#00809D',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Quick Inquiry',
    href: 'https://wa.me/919829050308',
    actionLabel: 'Chat Now',
    color: '#00809D',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'jhabarmalchoudhary1974@gmail.com',
    href: 'mailto:jhabarmalchoudhary1974@gmail.com',
    actionLabel: 'Send Email',
    color: '#00809D',
  },
];

const serviceOptions = [
  'BIS License (ISI Mark)',
  'ISO 9001 Certification',
  'ISO 14001 Certification',
  'ISO 45001 Certification',
  'ISI Mark Certification',
  'Calibration Certificate',
  'Trademark Registration',
  'Factory Inspection Support',
  'General Inquiry',
];

const faqItems = [
  {
    question: 'What is the typical timeline for BIS certification?',
    answer: 'The BIS certification process typically takes 4-6 months from application to approval. This includes document submission, product testing at BIS-approved labs, factory inspection, and final approval.',
  },
  {
    question: 'What documents do I need to start the certification process?',
    answer: 'You will need business registration documents, manufacturing process flow, product specifications, test reports (if available), factory layout plan, quality control manual, and ID/address proofs of directors.',
  },
  {
    question: 'Do you provide support throughout the entire process?',
    answer: 'Yes, we provide end-to-end support from initial consultation, documentation preparation, lab coordination, factory inspection preparation, to final certification and post-certification renewal assistance.',
  },
  {
    question: 'Is factory inspection mandatory for all certifications?',
    answer: 'Yes, factory inspection is mandatory for BIS/ISI certification. Our team helps you prepare for the inspection, ensures your factory meets compliance standards, and coordinates with the inspecting authority.',
  },
];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const staggerChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

function FaqItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-[rgba(0,128,157,0.08)] rounded-xl overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200"
      >
        <span className="font-body text-[15px] font-semibold leading-snug" style={{ color: '#0B1F4D' }}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown size={20} style={{ color: '#00809D' }} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 font-body text-[14px] leading-relaxed" style={{ color: 'rgba(11,31,77,0.65)' }}>
          {answer}
        </div>
      </motion.div>
    </div>
  );
}

function ContactMethodCard({ method }: { method: typeof contactMethods[0] }) {
  const Icon = method.icon;
  return (
    <motion.div
      variants={staggerChild}
      className="flex flex-col items-center text-center p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 group"
      style={{
        backgroundColor: '#FFFFFF',
        borderColor: 'rgba(0,128,157,0.05)',
        boxShadow: '0 4px 24px rgba(0,128,157,0.04)',
      }}
      whileHover={{
        boxShadow: '0 12px 40px rgba(0,128,157,0.08)',
        borderColor: 'rgba(255,215,0,0.2)',
      }}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: '#00809D' + '18' }}
      >
        <Icon size={28} style={{ color: '#00809D' }} />
      </div>
      <span className="font-body text-[12px] font-semibold uppercase tracking-[0.08em]" style={{ color: 'rgba(11,31,77,0.4)' }}>
        {method.label}
      </span>
      <span className="font-body text-[15px] font-semibold mt-1.5 leading-snug" style={{ color: '#0B1F4D', wordBreak: 'break-word' }}>
        {method.value}
      </span>
      <a
        href={method.href}
        target={method.href.startsWith('http') ? '_blank' : undefined}
        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="font-body text-[14px] font-semibold mt-3 transition-colors duration-200"
        style={{ color: '#00809D' }}
        onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
        onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}
      >
        {method.actionLabel} <ArrowRight size={14} className="inline ml-0.5" />
      </a>
    </motion.div>
  );
}

function InfoBlock({ icon: Icon, title, children }: {
  icon: typeof Phone;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 rounded-xl border" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,128,157,0.05)' }}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(0,128,157,0.12)' }}>
          <Icon size={20} style={{ color: '#00809D' }} />
        </div>
        <span className="font-body text-[16px] font-semibold" style={{ color: '#0B1F4D' }}>
          {title}
        </span>
      </div>
      <div className="mt-3 pl-[52px]">{children}</div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    mobile: '',
    serviceRequired: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroRef = useRef(null);
  const methodsRef = useRef(null);
  const formSectionRef = useRef(null);
  const ctaRef = useRef(null);
  const faqRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const methodsInView = useInView(methodsRef, { once: true });
  const formInView = useInView(formSectionRef, { once: true });
  const ctaInView = useInView(ctaRef, { once: true });
  const faqInView = useInView(faqRef, { once: true });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceRequired: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: '', companyName: '', mobile: '', serviceRequired: '', message: '' });
    }, 5000);
  };

  return (
    <div>
      {/* Page Hero */}
      <section className="relative" style={{ background: 'linear-gradient(180deg, #00809D 0%, #0B1F4D 100%)', paddingTop: '160px', paddingBottom: '80px' }}>
        <div ref={heroRef} className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Link to="/" className="font-body text-[14px] font-medium transition-colors duration-200" style={{ color: 'rgba(252,248,221,0.4)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#FFD700'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(252,248,221,0.4)'; }}
              >
                Home
              </Link>
              <span style={{ color: 'rgba(252,248,221,0.2)' }}>/</span>
              <span className="font-body text-[14px]" style={{ color: 'rgba(252,248,221,0.4)' }}>
                Contact Us
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="font-display text-[40px] sm:text-[48px] lg:text-[56px] font-bold"
            style={{ color: '#FCF8DD', lineHeight: 1.1, letterSpacing: '-0.015em' }}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="font-body text-[16px] lg:text-[18px] mx-auto mt-4 max-w-[560px]"
            style={{ color: 'rgba(252,248,221,0.6)', lineHeight: 1.65 }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            Request a consultation, ask about certification pricing, or discuss your compliance requirements. Our experts respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section style={{ backgroundColor: '#FCF8DD', paddingTop: '48px', paddingBottom: '48px' }}>
        <div ref={methodsRef} className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={methodsInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {contactMethods.map((method, i) => (
              <ContactMethodCard key={i} method={method} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form + Company Info */}
      <section style={{ backgroundColor: '#FCF8DD', paddingTop: '80px', paddingBottom: '80px' }}>
        <div ref={formSectionRef} className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Form */}
            <motion.div
              className="flex-1 lg:max-w-[60%]"
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <div
                className="p-6 sm:p-8 rounded-2xl"
                style={{
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 4px 24px rgba(0,128,157,0.06)',
                  border: '1px solid rgba(0,128,157,0.05)',
                }}
              >
                <h2 className="font-body text-[24px] lg:text-[28px] font-semibold mb-6" style={{ color: '#0B1F4D', letterSpacing: '-0.01em' }}>
                  Request a Consultation
                </h2>

                {submitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center py-16 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(0,128,157,0.15)' }}>
                      <CheckCircle2 size={32} style={{ color: '#00809D' }} />
                    </div>
                    <h3 className="font-body text-[20px] font-semibold" style={{ color: '#0B1F4D' }}>
                      Inquiry Sent Successfully!
                    </h3>
                    <p className="font-body text-[14px] mt-2" style={{ color: 'rgba(11,31,77,0.6)' }}>
                      Thank you for reaching out. Our certification team will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="font-body text-[13px] font-semibold" style={{ color: '#0B1F4D' }}>
                          Full Name <span style={{ color: '#00809D' }}>*</span>
                        </Label>
                        <Input
                          id="fullName" name="fullName" type="text" required
                          placeholder="Your full name"
                          value={formData.fullName} onChange={handleInputChange}
                          className="font-body text-[15px] h-12 px-4 rounded-[10px] border-[rgba(0,128,157,0.1)] bg-white transition-all duration-200"
                          onFocus={(e) => { e.currentTarget.style.borderColor = '#00809D'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,128,157,0.12)'; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(0,128,157,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="companyName" className="font-body text-[13px] font-semibold" style={{ color: '#0B1F4D' }}>
                          Company Name
                        </Label>
                        <Input
                          id="companyName" name="companyName" type="text"
                          placeholder="Your company name"
                          value={formData.companyName} onChange={handleInputChange}
                          className="font-body text-[15px] h-12 px-4 rounded-[10px] border-[rgba(0,128,157,0.1)] bg-white transition-all duration-200"
                          onFocus={(e) => { e.currentTarget.style.borderColor = '#00809D'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,128,157,0.12)'; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(0,128,157,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="mobile" className="font-body text-[13px] font-semibold" style={{ color: '#0B1F4D' }}>
                          Mobile <span style={{ color: '#00809D' }}>*</span>
                        </Label>
                        <Input
                          id="mobile" name="mobile" type="tel" required
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.mobile} onChange={handleInputChange}
                          className="font-body text-[15px] h-12 px-4 rounded-[10px] border-[rgba(0,128,157,0.1)] bg-white transition-all duration-200"
                          onFocus={(e) => { e.currentTarget.style.borderColor = '#00809D'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,128,157,0.12)'; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(0,128,157,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="serviceRequired" className="font-body text-[13px] font-semibold" style={{ color: '#0B1F4D' }}>
                          Service Required
                        </Label>
                        <Select value={formData.serviceRequired} onValueChange={handleSelectChange}>
                          <SelectTrigger
                            id="serviceRequired"
                            className="font-body text-[15px] h-12 px-4 rounded-[10px] border-[rgba(0,128,157,0.1)] bg-white w-full transition-all duration-200"
                            onFocus={(e) => { e.currentTarget.style.borderColor = '#00809D'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,128,157,0.12)'; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(0,128,157,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                          >
                            <SelectValue placeholder="Select a service..." />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((option) => (
                              <SelectItem key={option} value={option} className="font-body text-[14px]">
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-body text-[13px] font-semibold" style={{ color: '#0B1F4D' }}>
                        Message
                      </Label>
                      <Textarea
                        id="message" name="message"
                        placeholder="Tell us about your certification requirements — product type, certification needed, timeline..."
                        value={formData.message} onChange={handleInputChange}
                        className="font-body text-[15px] px-4 py-3 rounded-[10px] border-[rgba(0,128,157,0.1)] bg-white resize-y transition-all duration-200"
                        style={{ minHeight: '120px' }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = '#00809D'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,128,157,0.12)'; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(0,128,157,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full sm:w-auto font-body text-[16px] font-semibold px-10 py-4 rounded-xl transition-all duration-300 cursor-pointer"
                      style={{ backgroundColor: '#00809D', color: '#FFFFFF', minWidth: '200px' }}
                      whileHover={{ scale: 1.02, boxShadow: '0 4px 20px rgba(0,128,157,0.25)' }}
                      whileTap={{ scale: 0.98 }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0B1F4D'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#00809D'; }}
                    >
                      Send Inquiry
                    </motion.button>

                    <div className="mt-1">
                      <p className="font-body text-[13px]" style={{ color: 'rgba(11,31,77,0.4)' }}>
                        Your information is secure and will never be shared. We respond within 24 hours.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right: Company Info */}
            <motion.div
              className="lg:w-[40%] flex flex-col gap-5"
              initial={{ opacity: 0, x: 20 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <InfoBlock icon={Phone} title="Phone">
                <a href="tel:+919829050308" className="block font-body text-[16px] font-semibold transition-colors duration-200"
                  style={{ color: '#0B1F4D' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#00809D'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#0B1F4D'; }}
                >
                  +91 98290 50308
                </a>
                <a href="tel:+919799910519" className="block font-body text-[15px] mt-1 transition-colors duration-200"
                  style={{ color: 'rgba(11,31,77,0.7)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#00809D'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(11,31,77,0.7)'; }}
                >
                  +91 97999 10519
                </a>
                <p className="font-body text-[13px] mt-2" style={{ color: 'rgba(11,31,77,0.5)' }}>
                  Jhabar Mal Choudhary
                </p>
              </InfoBlock>

              <InfoBlock icon={Mail} title="Email">
                <a href="mailto:jhabarmalchoudhary1974@gmail.com" className="font-body text-[15px] transition-colors duration-200 break-all"
                  style={{ color: '#0B1F4D' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#00809D'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#0B1F4D'; }}
                >
                  jhabarmalchoudhary1974@gmail.com
                </a>
              </InfoBlock>

              <InfoBlock icon={Clock} title="Business Hours">
                <p className="font-body text-[15px] leading-relaxed" style={{ color: 'rgba(11,31,77,0.7)' }}>
                  Monday — Saturday: 9:00 AM – 6:00 PM<br />
                  Sunday: Closed
                </p>
              </InfoBlock>

              <motion.a
                href="https://wa.me/919829050308"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #00809D 0%, #0B1F4D 100%)' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle size={32} color="#FFD700" fill="#FFD700" />
                <span className="font-body text-[16px] font-semibold mt-3" style={{ color: '#FCF8DD' }}>
                  Prefer WhatsApp?
                </span>
                <span className="font-body text-[14px] mt-1" style={{ color: 'rgba(252,248,221,0.7)' }}>
                  Chat with us for quick inquiries
                </span>
                <span
                  className="inline-flex items-center gap-2 mt-3 font-body text-[14px] font-semibold px-6 py-2.5 rounded-lg transition-all duration-200"
                  style={{ backgroundColor: '#FFD700', color: '#0B1F4D' }}
                >
                  <MessageCircle size={16} /> Chat on WhatsApp
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section style={{ background: 'linear-gradient(135deg, #00809D 0%, #0B1F4D 100%)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div ref={ctaRef} className="max-w-[600px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <MessageCircle size={48} style={{ color: '#FFD700', margin: '0 auto' }} />
          </motion.div>
          <motion.h2
            className="font-display text-[32px] sm:text-[36px] font-bold mt-5"
            style={{ color: '#FCF8DD', lineHeight: 1.15 }}
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            Quick Question?<br />Message Us on WhatsApp
          </motion.h2>
          <motion.p
            className="font-body text-[16px] mt-4"
            style={{ color: 'rgba(252,248,221,0.7)', lineHeight: 1.6 }}
            initial={{ opacity: 0, y: 15 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            Get instant replies for certification pricing, documentation, and requirements.
          </motion.p>
          <motion.a
            href="https://wa.me/919829050308"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 font-body text-[16px] font-semibold px-9 py-4 rounded-xl transition-all duration-300"
            style={{ backgroundColor: '#FFD700', color: '#0B1F4D' }}
            initial={{ opacity: 0, y: 10 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            whileHover={{ scale: 1.03, boxShadow: '0 4px 20px rgba(255,215,0,0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle size={20} fill="#0B1F4D" /> Chat on WhatsApp
          </motion.a>
          <motion.p
            className="font-mono text-[16px] mt-4"
            style={{ color: 'rgba(252,248,221,0.6)' }}
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            +91 98290 50308
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#FCF8DD', paddingTop: '80px', paddingBottom: '80px' }}>
        <div ref={faqRef} className="max-w-[800px] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <h2 className="font-display text-[32px] sm:text-[36px] font-bold" style={{ color: '#0B1F4D', lineHeight: 1.15 }}>
              Frequently Asked Questions
            </h2>
            <p className="font-body text-[16px] mt-3" style={{ color: 'rgba(11,31,77,0.6)' }}>
              Quick answers to common questions about our certification services.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            animate={faqInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {faqItems.map((faq, i) => (
              <motion.div key={i} variants={staggerChild}>
                <FaqItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
