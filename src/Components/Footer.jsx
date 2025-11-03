import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="h-12 md:h-20 w-auto" />
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-slate-400 hover:text-sky-400 transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <p className="text-sm text-slate-500">
          &copy; 2025 Educourse.id. Crafted with 💙 and modern web technologies.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
