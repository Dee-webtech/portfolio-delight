import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 mt-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Delight Chinecherem — Frontend Developer</div>
        <div className="flex gap-3">
          <a href="https://github.com/Dee-webtech" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/Grande_Del" target="_blank" rel="noopener noreferrer">LinkedIn</a>

        </div>
      </div>
    </footer>
  );
}
