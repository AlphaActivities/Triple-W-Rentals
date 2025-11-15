import { useEffect, useRef, useState, ReactNode } from 'react';
import { Compass, PiggyBank, BedDouble, Mountain, Users, GaugeCircle } from 'lucide-react';

interface Reason {
  icon: ReactNode;
  title: string;
  description: string;
  example: string;
  mainIdea: string;
}

const reasons: Reason[] = [
  {
    icon: <Compass size={40} />,
    title: 'Freedom and Flexibility',
    description:
      'Go where you want, when you want, from beaches and national parks to mountain towns and hidden small cities, without being locked into hotel check-ins or flight schedules.',
    example:
      'Example: A family can drive from Texas to Colorado and sleep in scenic campgrounds instead of paying for multiple hotel nights.',
    mainIdea: 'RV rentals give you complete control over your trip and route.',
  },
  {
    icon: <PiggyBank size={40} />,
    title: 'Cost-Effective Travel',
    description:
      'For families or groups, renting an RV can be more affordable than booking multiple hotel rooms and eating out every day. You cook inside, sleep inside, and avoid extra airline and luggage fees.',
    example:
      'Example: A family of five can save over $1,000 on a weeklong road trip compared to flights and hotel stays.',
    mainIdea: 'RVs combine transportation and lodging into one smart investment for your trip.',
  },
  {
    icon: <BedDouble size={40} />,
    title: 'Comfort and Convenience',
    description:
      'Modern RVs bring beds, bathrooms, kitchens, AC, and WiFi on the road. No constant packing and unpacking and no searching for restaurants three times a day while you are trying to relax.',
    example:
      'Example: Retired couples often rent a Class C motorhome for two to three weeks of comfortable exploration.',
    mainIdea: 'RV rentals bring the comfort of home to every mile you drive.',
  },
  {
    icon: <Mountain size={40} />,
    title: 'Nature and Adventure',
    description:
      'Perfect for national parks, scenic campgrounds, and outdoor festivals. You can park close to the views you came for, then step back into a warm, secure space whenever you are ready to recharge.',
    example:
      'Example: Adventurers rent compact camper vans to visit places like Banff or Yellowstone for hiking and photography trips.',
    mainIdea: 'You get direct access to nature with built-in shelter and freedom.',
  },
  {
    icon: <Users size={40} />,
    title: 'Family and Social Experience',
    description:
      'Cooking together, driving together, and sleeping under the same roof turns a simple road trip into a shared story. Families use RVs for road-schooling, cross-country adventures, and once-in-a-lifetime memory trips.',
    example:
      'Example: Parents rent RVs to take their kids on educational road trips across the United States or Canada.',
    mainIdea: 'RV rentals create lasting shared experiences, not just standard vacations.',
  },
  {
    icon: <GaugeCircle size={40} />,
    title: 'Test the Lifestyle Before You Buy',
    description:
      'Many travelers rent first to see what RV life actually feels like before investing tens of thousands of dollars into a rig. Others use rentals as temporary housing during renovations or relocations.',
    example:
      'Example: Some guests rent an RV while their home is being renovated or before committing $50,000 to $200,000 or more to buy their own.',
    mainIdea: 'Renting lets you test-drive the RV lifestyle with zero long-term commitment.',
  },
];

export default function WhyPeopleRentRVs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="why-rent"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#020617] via-[#0A2540] to-[#001F4F] py-24 px-4 overflow-hidden"
    >
      {/* Local animation styles for fade-in-up, matching the existing animation approach */}
      <style>
        {`
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
        `}
      </style>

      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="mx-auto h-full max-w-7xl bg-[radial-gradient(circle_at_top,_rgba(0,168,255,0.35),_transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-[#00A8FF]/80 uppercase mb-3">
            WHY TRAVELERS RENT RVS
          </p>
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Why people choose
            <span className="text-[#00A8FF] text-glow"> RV travel</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            People choose RV rentals for practical, emotional, and financial reasons. Here are the
            six biggest drivers behind why families, adventurers, and road-trippers keep coming back
            to the open road.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className={`group relative rounded-2xl overflow-hidden border border-[#00A8FF]/30 bg-gradient-to-br from-[#00A8FF]/20 to-transparent uv-blue-glow/0 hover:uv-blue-glow transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[#00A8FF] transform group-hover:scale-110 transition-transform duration-500">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {index + 1}. {reason.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-4">
                  {reason.description}
                </p>

                <p className="text-xs md:text-sm text-gray-300 italic mb-3">
                  {reason.example}
                </p>

                <p className="mt-auto text-xs md:text-sm font-medium text-[#00A8FF]">
                  {reason.mainIdea}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
