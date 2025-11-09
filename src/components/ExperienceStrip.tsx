export default function ExperienceStrip() {
  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0 moving-gradient"></div>
      <div className="absolute inset-0 light-sweep"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Every road becomes <span className="text-[#00b0ff]">home</span> with Triple W Rentals.
        </h2>
        <p className="mt-4 text-gray-200/90 text-base md:text-lg">
          From Tyler to Tahoe, experience luxury, comfort, and freedom without compromise.
        </p>
      </div>
    </section>
  );
}
