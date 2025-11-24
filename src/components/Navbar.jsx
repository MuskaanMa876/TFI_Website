import { Link, useLocation } from "react-router-dom";
import LogoSquare from "../assets/L_Square.png";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Careers", to: "/careers" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[#f2f4fa]/70 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        {/* SQUARE LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={LogoSquare}
            alt="TFI Logo Square"
            className="h-[120px] w-[120px] object-contain"
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-10 text-[16px] font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`pb-1 transition-all ${
                location.pathname === item.to
                  ? "text-indigo-700 border-b-2 border-indigo-700"
                  : "text-slate-700 hover:text-indigo-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}
