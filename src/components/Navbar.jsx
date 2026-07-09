import { useState } from "react";
import { Menu, X, Accessibility, MapPin } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  const links = ["home", "about", "services", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50">
      {/* Animated marquee strip */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-xs font-medium py-1.5 whitespace-nowrap">
        <style>{`
          @keyframes marquee-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: marquee-scroll 45s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track {
              animation: none;
            }
          }
        `}</style>
        <div className="marquee-track flex w-max items-center gap-10">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center gap-10 pr-10">
              {Array.from({ length: 4 }).map((_, j) => (
                <span key={j} className="flex items-center gap-2 tracking-wide">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <MapPin size={13} className="opacity-90" />
                  Home Service Available &mdash; Book a visit at your doorstep &mdash; Call{" "}
                  <a
                    href="tel:+923328214183"
                    className=" decoration-white/70 hover:decoration-white font-semibold"
                    onClick={(e) => e.stopPropagation()}
                  >
                    +923328214183
                  </a>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-sm">
            <Accessibility size={22} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 leading-tight">
                Dr. Munaish Kumar
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="capitalize text-gray-700 hover:text-cyan-600 transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-600 after:transition-all hover:after:w-full"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md   overflow-hidden transition-all duration-300 ${
          open ? "max-h-[28rem] py-5" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 font-medium">

          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="capitalize hover:text-cyan-600 transition"
            >
              {link}
            </button>
          ))}

        </div>
      </div>
    </nav>
  );
}