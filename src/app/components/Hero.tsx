import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center md:text-left bg-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="md:w-1/2 md:pr-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
          Hi, I'm <span className="text-indigo-400">Apurv Maurya</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300">
          I build scalable, secure, and user-focused web applications with the
          MERN stack and a passion for advancing my skills in Next.js and
          AI-powered solutions.
        </p>
        <div className="mt-8 flex justify-center md:justify-start space-x-4">
          <a
            href="https://github.com/gitApurv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition duration-300"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com/in/apurvmaurya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition duration-300"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
        <div className="mt-8 flex justify-center md:justify-start space-x-4">
          <a
            href="https://drive.google.com/file/d/11Gzj1CShGvzzJTFki23Moa1gkaSYkqHZ/view?usp=sharing"
            target="_blank"
            className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="border-2 border-indigo-600 text-indigo-400 font-semibold py-2 px-6 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="mt-10 md:mt-0 md:w-1/3">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={400}
          height={400}
          className="rounded-full shadow-2xl mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
