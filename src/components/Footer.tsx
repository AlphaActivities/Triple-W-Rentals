import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#000814] via-[#001a33] to-[#003366] text-gray-300 py-8 px-8">
      <div className="max-w-7xl mx-auto">
        {/* put columns back L➝R and center each cell's contents */}
        <div className="footer-grid">
          {/* Column 1 — Brand (centered) */}
          <div className="footer-col">
            <img
              src="/images/logo/logo.png"
              alt="Triple W Rentals Logo"
              className="mx-auto w-28 h-28 drop-shadow-[0_0_14px_#00b0ff] mb-2"
            />
            <h3 className="text-white font-semibold text-xl mb-0.5">Triple W Rentals</h3>
            <p className="footer-text">
              Luxury RV &amp; Golf Cart Rentals<br />
              Creating unforgettable journeys across Texas.
            </p>
            <div className="footer-fill" />
          </div>

          {/* Column 2 — Quick Links (centered list) */}
          <div className="footer-col">
            <h3 className="footer-head underline">Quick Links</h3>
            <ul className="footer-list">
              <li><a href="#fleet"   className="quicklink">Fleet</a></li>
              <li><a href="#whyus"   className="quicklink">Why Us</a></li>
              <li><a href="#booking" className="quicklink">Booking</a></li>
              <li><a href="#contact" className="quicklink">Contact</a></li>
            </ul>
            <div className="footer-fill" />
          </div>

          {/* Column 3 — Contact (centered block) */}
          <div className="footer-col">
            <h3 className="footer-head underline">Contact</h3>

            <div className="contact-item mb-3 mt-2.5">
              <div>14078 State Hwy 110 N</div>
              <div>Tyler, TX 75704</div>
            </div>

            <a href="tel:+19729656901" className="contact-item contact-link mt-1.5 font-normal">
              (972) 965-6901
            </a>

            <a
              href="mailto:triplewrentals@gmail.com"
              className="contact-item contact-link mt-4 break-all font-normal"
              title="Email Triple W Rentals"
            >
              info@triplewrentals.com
            </a>

            <div className="footer-fill" />
          </div>

          {/* Column 4 — Connect (centered icons) */}
          <div className="footer-col">
            <h3 className="footer-head underline">Connect</h3>
            <div className="social-row">
              <a
                href="https://www.facebook.com/triplewrentals"
                target="_blank" rel="noopener noreferrer"
                className="text-[#00b0ff] hover:text-white transition-colors duration-300" aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/triplewrentals"
                target="_blank" rel="noopener noreferrer"
                className="text-[#00b0ff] hover:text-white transition-colors duration-300" aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>

            <div className="border-t border-[#00b0ff]/30 w-16 my-3 mx-auto" />
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-lg border border-[#00b0ff]/30 hover:border-[#00b0ff]/60 transition-all duration-300">
              <div className="text-[#00b0ff] font-bold text-2xl mb-1 text-center">BBB</div>
              <div className="flex gap-1 justify-center mb-1">
                {[...Array(5)].map((_, i) => <div key={i} className="w-3 h-3 bg-[#00b0ff] rounded-sm" />)}
              </div>
              <p className="text-white text-xs font-semibold text-center">A+ Rating</p>
            </div>

            <div className="footer-fill" />
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-[#00b0ff]/20 mt-8 pt-4 text-center text-xs text-gray-400 leading-[1.8]">
          © 2025 Triple W Rentals. All rights reserved.<br />
          Built for adventure. Designed for comfort. Made for you.
        </div>
      </div>
    </footer>
  );
}
