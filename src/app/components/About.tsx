"use client";
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-12 tracking-wide">
          <span>💻</span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500">
            About Me
          </span>
        </h2>
        <div className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed space-y-6 bg-gray-800/50 p-10 rounded-3xl border border-white/10 shadow-2xl shadow-black/20 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-500 hover:shadow-indigo-500/10">
          <p className="hover:text-white transition-colors duration-300">
            Hey! I'm{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500 font-semibold">
              Apurv Maurya
            </span>
            , a{" "}
            <span className="text-white font-bold">Full-Stack Developer</span>{" "}
            who loves building scalable, secure, and user-friendly applications.
            My core expertise lies in the
            <span className="text-indigo-400 font-semibold"> MERN stack</span>,
            <span className="text-indigo-400 font-semibold"> Next.js</span>, and
            seamless{" "}
            <span className="text-indigo-400 font-semibold">
              cloud integrations
            </span>
            .
          </p>

          <p className="hover:text-white transition-colors duration-300">
            My journey combines a strong foundation in
            <span className="text-white font-semibold">
              {" "}
              Data Structures & Algorithms
            </span>{" "}
            and
            <span className="text-white font-semibold">
              {" "}
              core CS fundamentals
            </span>{" "}
            with practical experience developing{" "}
            <span className="text-indigo-400">AI-powered SaaS tools</span>,
            <span className="text-indigo-400"> e-commerce platforms</span>, and
            <span className="text-indigo-400">
              {" "}
              interactive web applications
            </span>
            . I enjoy exploring new technologies, especially around
            <span className="text-white font-semibold">
              {" "}
              SaaS architectures
            </span>
            ,
            <span className="text-white font-semibold">
              {" "}
              AI-driven solutions
            </span>
            , and
            <span className="text-white font-semibold">
              {" "}
              cloud-native systems
            </span>
            .
          </p>

          <p className="text-xl font-semibold pt-4">
            <span>⚡</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500">
              Fueled by curiosity and creativity, I aim to craft digital
              products that are technically robust and deliver real-world
              impact.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
