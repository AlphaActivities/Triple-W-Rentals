export default function Testimonials() {
  // NOTE: Replace this stub with real entries once photos/text are provided.
  // To add real testimonials, update TESTIMONIALS below or swap to a JSON fetch.
  const TESTIMONIALS: {
    name: string;
    city: string;
    text: string;
    photo?: string;
  }[] = [
    // Real testimonials go here. Example format:
    // { name: "Jane Doe", city: "Dallas, TX", text: "Actual customer quote...", photo: "/images/testimonials/jane.jpg" }
  ];

  if (TESTIMONIALS.length === 0) {
    return (
      <section
        id="testimonials"
        className="relative py-20 bg-gradient-to-b from-[#001a33] to-[#001427]"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            What Our Clients <span className="text-[#00b0ff]">Say</span>
          </h2>
          <p className="mt-3 text-gray-300">
            Verified reviews incoming. We're integrating your uploaded photos
            and quotes next.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="testimonials"
      className="relative py-20 bg-gradient-to-b from-[#001a33] to-[#001427]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white">
          What Our Clients <span className="text-[#00b0ff]">Say</span>
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className="rounded-2xl bg-[#041423]/80 backdrop-blur-sm border border-white/10 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {t.photo ? (
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#00b0ff]/40"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#0a2a44] grid place-items-center text-white/80 ring-2 ring-[#00b0ff]/30">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                )}
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.city}</div>
                </div>
              </div>
              <p className="text-gray-200 leading-7">"{t.text}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
