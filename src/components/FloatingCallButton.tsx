import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  const handleCall = () => {
    window.location.href = 'tel:+1234567890';
  };

  return (
    <button
      onClick={handleCall}
      className="fixed bottom-6 right-6 z-50 md:hidden w-16 h-16 bg-[#00A8FF] rounded-full flex items-center justify-center text-white shadow-lg uv-blue-glow hover:scale-110 transition-all duration-300 animate-pulse"
      aria-label="Call us"
    >
      <Phone size={28} />
    </button>
  );
}
