import { useEffect, useRef, useState } from 'react';
import { Send, Calendar, User, Mail, Phone, MessageSquare } from 'lucide-react';

export default function BookingForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    try {
      const fd = new FormData(formRef.current);
      fd.set("form-name", "contact");

      const body = new URLSearchParams();
      for (const [k, v] of fd.entries()) {
        body.append(k, String(v));
      }

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!res.ok) {
        console.error("Netlify form submission failed", res.status, res.statusText);
        setStatus("error");
        return;
      }

      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-[#020617] via-[#0A1929] to-[#000000]"
    >
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Start Your <span className="text-[#00A8FF] text-glow">Adventure</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tell us about your trip, your dates, and who is traveling with you. Whether you are planning a family road trip, a festival weekend, or a season of remote work, we will match you with the right RV and walk you through simple, clear pricing.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Renting an RV lets you enjoy the lifestyle and the freedom of the road, without a long term purchase commitment.
          </p>
        </div>

        <div
          className={`relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          {/* Glowing Border Container */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A8FF]/20 to-transparent rounded-2xl border border-[#00A8FF]/30 uv-blue-glow" />

          {/* Form */}
          <form
            ref={formRef}
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div className="relative">
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">
                  <User size={16} className="inline mr-2 text-[#00A8FF]" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[#00A8FF] focus:outline-none focus:ring-2 focus:ring-[#00A8FF]/50 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
                  <Mail size={16} className="inline mr-2 text-[#00A8FF]" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[#00A8FF] focus:outline-none focus:ring-2 focus:ring-[#00A8FF]/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Phone */}
              <div className="relative">
                <label htmlFor="phone" className="block text-gray-300 mb-2 text-sm">
                  <Phone size={16} className="inline mr-2 text-[#00A8FF]" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[#00A8FF] focus:outline-none focus:ring-2 focus:ring-[#00A8FF]/50 transition-all"
                  placeholder="(972) 965-6901"
                />
              </div>

              {/* Rental Dates */}
              <div className="relative">
                <label htmlFor="dates" className="block text-gray-300 mb-2 text-sm">
                  <Calendar size={16} className="inline mr-2 text-[#00A8FF]" />
                  Preferred Rental Dates
                </label>
                <input
                  type="text"
                  id="dates"
                  name="dates"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[#00A8FF] focus:outline-none focus:ring-2 focus:ring-[#00A8FF]/50 transition-all"
                  placeholder="e.g., March 15-20, 2025"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">
                <MessageSquare size={16} className="inline mr-2 text-[#00A8FF]" />
                Message / Special Requests
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[#00A8FF] focus:outline-none focus:ring-2 focus:ring-[#00A8FF]/50 transition-all resize-none"
                placeholder="Tell us about your rental needs, destination plans, or any questions you have..."
              />
            </div>

            {/* Inline status messages */}
            {status === "sent" && (
              <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-sm flex items-center gap-2">
                <span className="text-lg">✓</span>
                <span>Message sent — we'll reply shortly.</span>
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm flex items-center gap-2">
                <span className="text-lg">⚠</span>
                <span>Something went wrong. Please try again.</span>
              </div>
            )}

            {/* Privacy Note */}
            <p className="text-xs text-gray-500 mb-6 flex items-start gap-2">
              <span className="text-[#00A8FF] text-lg">🔒</span>
              <span>
                We never share your information. Your privacy is protected and your
                details are only used to provide you with exceptional service.
              </span>
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 bg-[#00A8FF] text-white rounded-lg font-medium hover:uv-blue-glow transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending…" : "Send Inquiry"}
              <Send
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>
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

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out both;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
