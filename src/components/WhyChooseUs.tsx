import { useEffect, useRef, useState } from 'react';
import { Sparkles, Truck, Headphones, Heart } from 'lucide-react';

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: <Sparkles size={40} />,
    title: 'Luxury Fleet',
    description: 'Premium vehicles that turn every journey into an experience',
  },
  {
    icon: <Truck size={40} />,
    title: 'Flexible Delivery',
    description: 'We bring the adventure to your doorstep, anywhere in Texas',
  },
  {
    icon: <Headphones size={40} />,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for peace of mind on the road',
  },
  {
    icon: <Heart size={40} />,
    title: 'Family Owned & Locally Trusted',
    description: 'Built on relationships, driven by excellence',
  },
];

export default function WhyChooseUs() {
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
      id="why-us"
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-[#001F4F] via-[#0A2540] to-[#020617]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Why Choose<br />
            <span className="text-[#00A8FF] text-glow">Triple W Rentals</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the difference that sets us apart in luxury rentals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`relative group ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Glowing Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A8FF]/20 to-transparent rounded-xl border border-[#00A8FF]/30 group-hover:border-[#00A8FF] group-hover:uv-blue-glow transition-all duration-500" />

              {/* Content */}
              <div className="relative p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="text-[#00A8FF] transform group-hover:scale-110 transition-transform duration-500">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-xl text-white mb-3">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out both;
        }
      `}</style>
    </section>
  );
}
