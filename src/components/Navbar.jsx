// src/components/Navbar.jsx
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "certificates" },
    { id: 5, link: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full h-16 flex justify-between items-center px-6 bg-cyber-black text-cyber-green shadow-md z-50">
      {/* Logo / Name */}
      <div className="text-2xl font-bold tracking-widest cursor-pointer">
        Briadon Fielies
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="capitalize cursor-pointer hover:text-cyber-greenDark duration-200"
          >
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Icon */}
      <div
        className="md:hidden cursor-pointer text-2xl"
        onClick={() => setNavOpen(!navOpen)}
      >
        {navOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="absolute top-16 left-0 w-full bg-cyber-black flex flex-col items-center gap-6 py-6 md:hidden shadow-lg">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="capitalize cursor-pointer text-lg hover:text-cyber-greenDark duration-200"
              onClick={() => setNavOpen(false)}
            >
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
