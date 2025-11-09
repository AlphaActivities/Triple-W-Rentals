import { useEffect, useRef, useState } from 'react';
import { Bed, UtensilsCrossed, Sofa } from 'lucide-react';

interface Interior {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const interiors: Interior[] = [
  {
    id: 1,
    title: 'Bedroom Suite',
    description: 'Rest in luxury with premium bedding and spacious quarters',
    image: '/images/rs=w_1160,h_766 (6).webp',
    icon: <Bed size={32} />,
  },
  {
    id: 2,
    title: 'Gourmet Kitchen',
    description: 'Full-service kitchen with modern appliances and elegant finishes',
    image: '/images/rs=w_1160,h_766 (2).webp',
    icon: <UtensilsCrossed size={32} />,
  },
  {
    id: 3,
    title: 'Living Lounge',
    description: 'Relax in style with premium seating and entertainment systems',
    image: '/images/rs=w_1160,h_766 (1).webp',
    icon: <Sofa size={32} />,
  },
];

export default function LuxuryInteriors() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-[#001F4F] via-[#001838] to-[#020617] relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(0, 168, 255, 0.5) 1px, transparent 0)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Luxury <span className="text-[#00A8FF] text-glow">Interiors</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Step inside and experience premium comfort designed for your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interiors.map((interior, index) => (
            <div
              key={interior.id}
              className={`relative group ${
                isVisible ? 'animate-zoom-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-800 group-hover:border-[#00A8FF] transition-all duration-500">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={interior.image}
                    alt={interior.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="w-14 h-14 bg-[#00A8FF]/20 backdrop-blur-md rounded-full flex items-center justify-center text-[#00A8FF] border border-[#00A8FF]/50 group-hover:uv-blue-glow transition-all duration-500">
                      {interior.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl text-white mb-2 font-semibold">
                      {interior.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {interior.description}
                    </p>
                  </div>
                </div>

                {/* UV Glow on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 uv-blue-glow" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent Line */}
        <div className="mt-16 flex justify-center">
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-[#00A8FF] to-transparent" />
        </div>
      </div>

      <style>{`
        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-zoom-in {
          animation: zoom-in 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
