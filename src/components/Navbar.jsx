import { NavLink } from "react-router-dom";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import TextHover from "../utils/TextHover";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "About", path: "/about" },
  { name: "Pricing", path: "/pricing" },
  { name: "Blog", path: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="
fixed w-full flex items-center justify-between px-6 md:px-8 py-4 z-50
md:bg-transparent
bg-white/60 backdrop-blur-lg
border-b border-white/30
"
      >
        <div className="flex items-center gap-3 cursor-pointer group">
          {/* LOGO ICON */}
          <img
            src="/logo.svg"
            alt="fizens logo"
            className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110"
          />

          {/* TEXT */}
          <span className="text-xl font-semibold tracking-tight leading-none">
            <TextHover>fizens</TextHover>
          </span>
        </div>

        {/* CENTER NAV */}
        <ul className="hidden md:flex items-center gap-1 bg-[#f5f6f8] px-2 py-1 rounded-full">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-full font-[font2] text-xl transition ${
                    isActive
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-black"
                  }`
                }
              >
                {/* BLUE DOT ONLY FOR ACTIVE */}
                {({ isActive }) =>
                  isActive ? (
                    <>
                      <span className="w-2 h-2 bg-blue-600 rounded-full font-semibold"></span>
                      <TextHover>{item.name}</TextHover>
                    </>
                  ) : (
                    <TextHover>{item.name}</TextHover>
                  )
                }
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* BUTTON */}
          <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
            <TextHover> Get Started</TextHover>
          </button>

          {/* MOBILE MENU */}
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 bg-gradient-to-br from-blue-700 to-blue-500 text-white flex flex-col items-center justify-center transition-all duration-500 ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-110 pointer-events-none"
        }`}
      >
        {/* CLOSE */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 bg-white text-blue-600 rounded-full p-2"
        >
          <X size={20} />
        </button>

        {/* LOGO */}
        <div className="absolute top-6 left-6 flex items-center gap-2 text-lg font-semibold">
          <span className="w-5 h-5 bg-white rounded-sm"></span>
          fizens
        </div>

        {/* MENU */}
        <ul className="space-y-6 text-2xl font-[font2] text-center z-50">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink to={item.path} onClick={() => setIsOpen(false)}>
                <TextHover>{item.name}</TextHover>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* DIVIDER */}
        <div className="w-1/2 h-px bg-white/30 my-10"></div>

        {/* SOCIAL */}
        <div className="flex gap-6">
          <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
            f
          </div>
          <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
            ig
          </div>
          <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
            x
          </div>
          <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
            in
          </div>
        </div>
      </div>
    </>
  );
}
