import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  quote: string;
}

// Placeholder testimonials – replace with verified client reviews or Google API feed later
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Dallas, TX',
    rating: 5,
    quote:
      'Triple W Rentals made our family vacation unforgettable. The RV was pristine and the service was beyond exceptional.',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    location: 'Houston, TX',
    rating: 5,
    quote:
      'Professional, reliable, and truly luxurious. The golf cart rental elevated our entire resort experience.',
  },
  {
    id: 3,
    name: 'Emily Chen',
    location: 'Austin, TX',
    rating: 5,
    quote:
      'From start to finish, the team at Triple W went above and beyond. This is how rentals should be done.',
  },
];

export default function Testimonials() {
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
      className="py-24 px-4 bg-gradient-to-b from-[#000000] via-[#071C3A] to-[#020617]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            What Our Clients{' '}
            <span className="text-[#00A8FF] text-glow">Say</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Real experiences from real adventurers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative group ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Card Container */}
              <div className="relative h-full">
                {/* Glowing Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A8FF]/10 to-transparent rounded-xl border border-gray-800 group-hover:border-[#00A8FF] group-hover:uv-blue-glow transition-all duration-500" />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="text-[#00A8FF] opacity-50" size={40} />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-[#00A8FF] text-[#00A8FF]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
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
