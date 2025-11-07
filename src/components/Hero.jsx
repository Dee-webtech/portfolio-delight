import React from "react";
import { ArrowDown } from "lucide-react";
// Import your photo from src/assets/images
import myPhoto from "../assets/images/my-photo.jpeg";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold animate-slideUp">
            Hi, I’m <span className="text-accent">Delight Chinecherem</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl animate-fadeIn">
            Frontend Developer |ALX Graduate. I build modern, responsive web apps using React and deliver client-ready WordPress solutions with Elementor and Crocoblock.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3 bg-accent text-white rounded-lg font-medium shadow hover:-translate-y-0.5 transition-transform"
            >
              View Projects
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-3 border-2 border-accent text-accent rounded-lg bg-white font-medium shadow-sm hover:bg-accent hover:text-white transition"
            >
              Let’s Talk
            </button>
          </div>

          <div className="mt-6">
            <button
              onClick={() => scrollTo("about")}
              className="flex items-center gap-2 text-gray-300 hover:text-accent transition mx-auto md:mx-0"
            >
              Learn more about me <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right: photo with gradient ring */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-tr from-accent via-purple to-accentOrange">
            <img
              src={myPhoto}
              alt="Delight Chinecherem"
              className="w-full h-full object-cover rounded-full border-4 border-slate-900 shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Smooth hill divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0 C300,80 900,40 1200,90 L1200,120 L0,120 Z"
            className="fill-gray-50"
          />
        </svg>
      </div>
    </section>
  );
}
