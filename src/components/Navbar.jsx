import { Link, useLocation } from "react-router-dom";
import LogoSquare from "../assets/L_Square.png";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Careers", to: "/careers" },
    { name: "News", to: "/news" },       // ✅ Added News
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-lg">
      <div className="w-full px-8 flex items-center justify-between h-16">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={LogoSquare}
            alt="TFI Logo Square"
            className="h-12 w-12 object-contain"
          />
        </Link>

        {/* NAV ITEMS */}
        <nav className="flex items-center gap-8 text-[15px] font-medium ml-auto">
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
