import { Phone } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919829050308"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
      style={{
        width: '56px',
        height: '56px',
        backgroundColor: '#25D366',
        boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
      }}
    >
      <Phone size={24} color="white" fill="white" />
      <span
        className="absolute inset-0 rounded-full animate-pulse-ring"
        style={{ border: '2px solid #25D366' }}
      />
    </a>
  );
}
