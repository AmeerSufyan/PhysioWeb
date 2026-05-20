import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-blue-100 to-blue-300 shadow z-50">
      
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-black-700">
          Dr Munaish Kumar
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-white font-medium">
          <p
            onClick={() => scrollTo("home")}
            className="cursor-pointer hover:text-black transition"
          >
            Home
          </p>

          <p
            onClick={() => scrollTo("about")}
            className="cursor-pointer hover:text-black transition"
          >
            About
          </p>

          <p
            onClick={() => scrollTo("services")}
            className="cursor-pointer hover:text-black transition"
          >
            Services
          </p>

          <p
            onClick={() => scrollTo("contact")}
            className="cursor-pointer hover:text-black transition"
          >
            Contact
          </p>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-white font-medium bg-blue-250">
          
          <p
            onClick={() => scrollTo("home")}
            className="cursor-pointer hover:text-black"
          >
            Home
          </p>

          <p
            onClick={() => scrollTo("about")}
            className="cursor-pointer hover:text-black"
          >
            About
          </p>

          <p
            onClick={() => scrollTo("services")}
            className="cursor-pointer hover:text-black"
          >
            Services
          </p>

          <p
            onClick={() => scrollTo("contact")}
            className="cursor-pointer hover:text-black"
          >
            Contact
          </p>
        </div>
      )}
    </nav>
  );
}