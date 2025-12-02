import { Link, useLocation } from "react-router-dom";
import LogoSquare from "../assets/L_Square.png";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Careers", to: "/careers" },
    { name: "News", to: "/news" },
    { name: "Contact", to: "/contact" },
  ];

  return (
  <header className="fixed top-0 left-0 right-0 z-50 
                     bg-white/10 backdrop-blur-xl border-b border-white/20">
    <div className="w-full px-10 flex items-center justify-between h-20">

      {/* LOGO */}
      <Link to="/" className="flex items-center">
        <img
          src={LogoSquare}
          alt="TFI Logo"
          className="h-18 w-20 object-contain"
        />
      </Link>

      {/* NAV LINKS */}
      <nav className="flex items-center gap-10 text-[17px] font-semibold ml-auto">
        {navLinks.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`pb-1 transition-all ${
              location.pathname === item.to
                ? "text-black border-b-2 border-black"
                : "text-gray-800 hover:text-black"
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