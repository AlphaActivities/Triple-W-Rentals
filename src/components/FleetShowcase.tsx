import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface FleetItem {
  id: number;
  name: string;
  caption: string;
  image: string;
}

const fleetData: FleetItem[] = [
  {
    id: 1,
    name: 'Momentum Luxury Class A',
    caption: 'Where luxury meets the open road',
    image: '/images/rs=w_1160,h_766.webp',
  },
  {
    id: 2,
    name: 'Grand Design Series',
    caption: 'Built for the journey, designed for comfort',
    image: '/images/rs=w_1160,h_766 (1).webp',
  },
  {
    id: 3,
    name: 'Family Cruiser Elite',
    caption: 'Making memories, one mile at a time',
    image: '/images/rs=w_1160,h_766 (2).webp',
  },
  {
    id: 4,
    name: 'Adventure Series RV',
    caption: 'Redefining freedom on four wheels',
    image: '/images/rs=w_1160,h_766 (3).webp',
  },
  {
    id: 5,
    name: 'Expedition Elite',
    caption: 'Premium comfort for extended journeys',
    image: '/images/rs=w_1160,h_766 (4).webp',
  },
  {
    id: 6,
    name: 'Luxury Touring RV',
    caption: 'Every mile is a first-class experience',
    image: '/images/rs=w_1160,h_766 (5).webp',
  },
];

export default function FleetShowcase() {
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
      id="fleet"
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-[#020617] via-[#071C3A] to-[#001F4F] transition-all duration-1000 ease-in-out"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Our <span className="text-[#00A8FF] text-glow">Premium Fleet</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our curated collection of luxury RVs and golf carts, each
            meticulously maintained for your perfect adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetData.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl border border-gray-800 hover:border-[#00A8FF] transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl text-white mb-2">{item.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{item.caption}</p>
                <button className="flex items-center gap-2 text-[#00A8FF] hover:gap-3 transition-all duration-300 group/btn">
                  <span>View Details</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* UV Glow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 border-2 border-[#00A8FF] rounded-xl uv-blue-glow" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
