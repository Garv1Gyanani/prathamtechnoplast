import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919829050308"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 lg:bottom-24 z-40 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
      style={{
        width: '56px',
        height: '56px',
        backgroundColor: '#00809D',
        boxShadow: '0 4px 20px rgba(0,128,157,0.3)',
      }}
    >
      <MessageCircle size={24} color="white" fill="white" />
      <span
        className="absolute inset-0 rounded-full animate-pulse-ring"
        style={{ border: '2px solid #00809D' }}
      />
    </a>
  );
}
