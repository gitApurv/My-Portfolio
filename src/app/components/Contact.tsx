import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import React from "react";

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-6">
          I'm currently looking for new opportunities. Feel free to reach out!
        </p>
        <div className="flex justify-center items-center space-x-6 mb-8">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center text-gray-300 hover:text-indigo-400 transition duration-300"
          >
            <FaEnvelope size={24} className="mr-2" />
            apurvmaurya5@gmail.com
          </a>
        </div>
        <p className="mt-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} Apurv Maurya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
