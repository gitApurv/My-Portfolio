import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900 px-6 lg:px-12"
    >
      <div className="md:w-1/2 md:pr-12 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Hi, I'm{" "}
          <span className="text-indigo-400 drop-shadow-md">Apurv Maurya</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto md:mx-0">
          🚀 Full Stack Developer — Self-taught, curious, and code-driven.
          Passionate about building scalable, secure, and user-friendly
          applications.
        </p>

        <div className="mt-8 flex justify-center md:justify-start space-x-5">
          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-indigo-600 text-white font-semibold py-2.5 px-7 rounded-full shadow-md hover:shadow-xl hover:bg-indigo-500 transition-all duration-300"
          >
            📄 Resume
          </a>
          <a
            href="#contact"
            className="border-2 border-indigo-600 text-indigo-400 font-semibold py-2.5 px-7 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            ✉️ Contact Me
          </a>
        </div>
      </div>

      <div className="mt-10 md:mt-0 md:w-1/3 flex justify-center">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={400}
          height={400}
          className="rounded-full shadow-2xl border-4 border-indigo-500/30 hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default Hero;
