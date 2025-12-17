"use client";
import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-linear-to-t from-black to-gray-900 text-white py-16 border-t border-white/10 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="container mx-auto text-center px-6 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-wide">
          <span>📬</span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500">
            Get In Touch
          </span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
          I'm always excited to collaborate on new projects, share ideas, or
          explore opportunities. Drop me a message, and let's build something
          amazing together!
        </p>

        <div className="flex justify-center items-center">
          <a
            href="mailto:apurvmaurya5@gmail.com"
            className="flex items-center px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 rounded-full 
        text-white font-medium text-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50
        transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <FaEnvelope size={22} className="mr-3" />
            apurvmaurya5@gmail.com
          </a>
        </div>

        <p className="mt-12 text-gray-500 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-300 font-medium">Apurv Maurya</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
