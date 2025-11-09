import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const [shimmerPosition, setShimmerPosition] = useState(-100);

  useEffect(() => {
    const interval = setInterval(() => {
      setShimmerPosition((prev) => (prev >= 200 ? -100 : prev + 0.8));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundColor: '#000000',
        }}
      />

      {/* Subtle hero photo underlay */}
      <img
        src="/rs=w_1160,h_771.webp"
        alt="Triple W Rentals Hero"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-30 pointer-events-none select-none"
      />

      {/* Luxury Glass Shimmer Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(110deg,
            transparent ${shimmerPosition - 10}%,
            rgba(255, 255, 255, 0.03) ${shimmerPosition - 5}%,
            rgba(255, 255, 255, 0.15) ${shimmerPosition}%,
            rgba(255, 255, 255, 0.25) ${shimmerPosition + 2}%,
            rgba(255, 255, 255, 0.15) ${shimmerPosition + 4}%,
            rgba(255, 255, 255, 0.03) ${shimmerPosition + 9}%,
            transparent ${shimmerPosition + 14}%)`,
          filter: 'blur(1px)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background: `linear-gradient(110deg,
            transparent ${shimmerPosition - 8}%,
            rgba(200, 230, 255, 0.1) ${shimmerPosition}%,
            rgba(255, 255, 255, 0.2) ${shimmerPosition + 2}%,
            rgba(200, 230, 255, 0.1) ${shimmerPosition + 4}%,
            transparent ${shimmerPosition + 12}%)`,
          mixBlendMode: 'screen',
        }}
      />

      {/* Black overlay - slightly lighter */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-[1.15] animate-fade-in text-center flex flex-col items-center justify-center font-semibold tracking-tight">
            <span>Adventure. Comfort. Freedom.</span>
            <span className="text-[#00A8FF] text-glow mt-2">All Redefined.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 animate-fade-in-delay">
            Luxury RV and Golf Cart Rentals Across Texas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-2">
            <a
              href="#fleet"
              className="group px-8 py-4 bg-transparent border-2 border-[#00A8FF] text-white rounded-lg hover:bg-[#00A8FF] transition-all duration-300 flex items-center gap-2 w-64 justify-center uv-blue-glow-hover"
            >
              Explore Fleet
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#booking"
              className="px-8 py-4 bg-[#00A8FF] text-white rounded-lg hover:uv-blue-glow transition-all duration-300 w-64 text-center font-medium"
            >
              Reserve Your Trip
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
      `}</style>
    </section>
  );
}
