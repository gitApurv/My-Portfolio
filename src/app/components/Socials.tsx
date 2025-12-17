"use client";
import React from "react";
import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  hoverColor: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: <FaGithub size={32} />,
    url: "https://github.com/gitApurv",
    hoverColor: "hover:shadow-gray-500/30",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={32} />,
    url: "https://www.linkedin.com/in/apurvmaurya",
    hoverColor: "hover:shadow-blue-600/30",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode size={32} />,
    url: "https://leetcode.com/u/leetApurv/",
    hoverColor: "hover:shadow-yellow-500/30",
  },
  {
    name: "HackerRank",
    icon: <FaHackerrank size={32} />,
    url: "https://www.hackerrank.com/profile/justApurv",
    hoverColor: "hover:shadow-green-500/30",
  },
  {
    name: "GeeksForGeeks",
    icon: <SiGeeksforgeeks size={32} />,
    url: "https://www.geeksforgeeks.org/user/geekapurv/",
    hoverColor: "hover:shadow-green-800/30",
  },
];

const Socials: React.FC = () => {
  return (
    <section
      id="socials"
      className="py-20 bg-gray-800 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-16 tracking-wide">
          <span>📱</span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500">
            Socials
          </span>
        </h2>
        <div className="max-w-xl mx-auto grid grid-cols-1 gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-center w-full p-5 bg-gray-900/50 rounded-2xl border border-white/10 hover:border-indigo-500/30 hover:shadow-xl hover:-translate-y-1 ${link.hoverColor} transition-all duration-300 cursor-pointer backdrop-blur-sm animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-indigo-400 mr-4 text-4xl group-hover:scale-125 group-hover:text-purple-400 transition-all duration-300">
                {link.icon}
              </span>
              <span className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-indigo-400 group-hover:to-purple-500 transition-all duration-300">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
