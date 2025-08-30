import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold mb-6 tracking-wide">
          📬 Get In Touch
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
          I'm always excited to collaborate on new projects, share ideas, or
          explore opportunities. Drop me a message, and let's build something
          amazing together!
        </p>

        <div className="flex justify-center items-center">
          <a
            href="mailto:apurvmaurya5@gmail.com"
            className="flex items-center px-6 py-3 bg-indigo-600 rounded-full 
        text-white font-medium text-lg shadow-md hover:shadow-xl 
        transition-all duration-300 hover:bg-indigo-500"
          >
            <FaEnvelope size={22} className="mr-2" />
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
