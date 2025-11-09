import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

type Review = {
  name: string;
  when: string;
  rating: number;
  text: string;
  source: string;
};

const REVIEWS: Review[] = [
  {
    name: "Wyman Jones",
    when: "3 weeks ago",
    rating: 5,
    text:
      "Called Triple W when another company canceled last minute. They answered every question, delivered on time, set everything up, and went above and beyond. We had a great time and will rent again.",
    source: "Google Maps",
  },
  {
    name: "JT Seargeant",
    when: "6 days ago",
    rating: 5,
    text:
      "I've rented from Triple W multiple times. Communication is outstanding and on-site response is quick. They check in daily and make sure expectations are exceeded. My go-to for Texas Rose Horse Park.",
    source: "Google Maps",
  },
  {
    name: "Giovanna Iriel",
    when: "7 months ago",
    rating: 5,
    text:
      "Top-notch golf cart rentals and incredible customer service, personable, responsive, and accommodating. Delivery was seamless and the carts were spotless and super comfortable. Highly recommend.",
    source: "Google Maps",
  },
  {
    name: "Amy Walker",
    when: "September 2024",
    rating: 5,
    text:
      "First-time RV rental for a family trip, Triple W reached out, guided me through options, and delivered the camper fully stocked before we arrived. Above-and-beyond service. We'll rent again next year.",
    source: "Google Maps",
  },
];

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [manual, setManual] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  const visibleRef = useRef<boolean>(true);

  const next = () => setIndex((i) => (i + 1) % REVIEWS.length);
  const prev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);

  useEffect(() => {
    const start = () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (!manual && visibleRef.current) {
        intervalRef.current = window.setInterval(next, 6000);
      }
    };
    start();
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [manual, index]);

  useEffect(() => {
    if (!wrapRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        visibleRef.current = entry.isIntersecting;
        if (!entry.isIntersecting) {
          setManual(false);
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(wrapRef.current);
    return () => obs.disconnect();
  }, []);

  const current = REVIEWS[index];

  return (
    <section id="reviews" ref={wrapRef} className="relative py-20 bg-gradient-to-b from-black via-[#001a33] to-[#003366]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl text-white font-semibold text-center">
            What Our Clients <span className="text-[#00b0ff]">Say</span>
          </h2>
        </div>

        <div className="relative flex items-center gap-6">
          <button
            onClick={() => {
              prev();
              setManual(true);
            }}
            aria-label="Previous review"
            className="hidden md:block group rounded-full border border-[#00b0ff]/40 hover:border-[#00b0ff]/80 backdrop-blur px-3 py-3 flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5 text-[#00b0ff] group-hover:scale-110 transition-transform" />
          </button>

          <div className="mx-auto max-w-3xl rounded-2xl border border-[#00b0ff]/25 bg-gradient-to-br from-black/40 to-[#001025]/60 shadow-[0_0_40px_-10px_rgba(0,176,255,.45)] p-8 flex-grow relative">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-[#4285f4] via-[#34a853] to-[#fbbc05] px-4 py-2 rounded-bl-xl rounded-tr-xl shadow-lg">
              <span className="text-white font-semibold text-sm inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white" />
                {current.source}
              </span>
            </div>

            <div className="flex items-center gap-1 mb-3" aria-label={`${current.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < current.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}`}
                />
              ))}
            </div>

            <p className="text-lg leading-relaxed text-gray-100">{current.text}</p>

            <div className="mt-6 flex items-center text-sm">
              <div className="text-gray-300">
                <span className="font-semibold text-white">{current.name}</span>
                <span className="mx-2 text-gray-500">•</span>
                <span className="text-gray-400">{current.when}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              next();
              setManual(true);
            }}
            aria-label="Next review"
            className="hidden md:block group rounded-full border border-[#00b0ff]/40 hover:border-[#00b0ff]/80 backdrop-blur px-3 py-3 flex-shrink-0"
          >
            <ChevronRight className="h-5 w-5 text-[#00b0ff] group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="mt-6 flex md:hidden items-center justify-center gap-4">
          <button
            onClick={() => {
              prev();
              setManual(true);
            }}
            aria-label="Previous review"
            className="rounded-full border border-[#00b0ff]/40 hover:border-[#00b0ff]/80 backdrop-blur px-3 py-3"
          >
            <ChevronLeft className="h-5 w-5 text-[#00b0ff]" />
          </button>
          <button
            onClick={() => {
              next();
              setManual(true);
            }}
            aria-label="Next review"
            className="rounded-full border border-[#00b0ff]/40 hover:border-[#00b0ff]/80 backdrop-blur px-3 py-3"
          >
            <ChevronRight className="h-5 w-5 text-[#00b0ff]" />
          </button>
        </div>
      </div>
    </section>
  );
}
