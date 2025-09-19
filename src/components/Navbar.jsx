import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all ${
        scrolled ? "backdrop-blur-sm bg-white/80 shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* smaller logo: gradient circle + short name */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-accent via-purple to-accentOrange flex items-center justify-center text-white text-sm font-bold shadow">
              DC
            </div>
            <div className="text-lg font-semibold text-primary hidden sm:block">
              Delight
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6">
            {items.map((it) => (
              <button
                key={it.id}
                onClick={() => scrollTo(it.id)}
                className="text-gray-700 hover:text-accent font-medium transition-colors"
              >
                {it.label}
              </button>
            ))}
            <a
              href="https://docs.google.com/document/d/1T7VjiZBMjlTPMHc2kbkHTWWhiyiqko2TJIJpGyEZWOs/edit?usp=sharing"
              className="ml-4 inline-block px-4 py-1.5 bg-accent text-white rounded-md shadow-sm hover:opacity-95 transition"
            >
              Resume
            </a>
          </nav>

          {/* Mobile button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="p-2 rounded-md">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 border-t shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
            {items.map((it) => (
              <button
                key={it.id}
                onClick={() => scrollTo(it.id)}
                className="text-left px-3 py-2 rounded-md hover:bg-gray-100 transition"
              >
                {it.label}
              </button>
            ))}
            <a
              href="https://docs.google.com/document/d/1T7VjiZBMjlTPMHc2kbkHTWWhiyiqko2TJIJpGyEZWOs/edit?usp=sharing"
              className="mt-2 inline-block px-4 py-2 bg-accent text-white rounded-md text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
