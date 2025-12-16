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
    icon: <FaGithub size={30} />,
    url: "https://github.com/gitApurv",
    hoverColor: "hover:shadow-gray-500",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={30} />,
    url: "https://www.linkedin.com/in/apurvmaurya",
    hoverColor: "hover:shadow-blue-600",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode size={30} />,
    url: "https://leetcode.com/u/leetApurv/",
    hoverColor: "hover:shadow-yellow-500",
  },
  {
    name: "HackerRank",
    icon: <FaHackerrank size={30} />,
    url: "https://www.hackerrank.com/profile/justApurv",
    hoverColor: "hover:shadow-green-500",
  },
  {
    name: "GeeksForGeeks",
    icon: <SiGeeksforgeeks size={30} />,
    url: "https://www.geeksforgeeks.org/user/geekapurv/",
    hoverColor: "hover:shadow-green-800",
  },
];

const Socials: React.FC = () => {
  return (
    <section id="socials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-white mb-16 tracking-wide">
          📱Socials
        </h2>
        <div className="max-w-xl mx-auto grid grid-cols-1 gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              className={`group flex items-center justify-center w-full p-4 bg-gray-900/50 rounded-2xl border border-white/5 hover:border-indigo-500/30 hover:shadow-lg hover:-translate-y-1 ${link.hoverColor} transition-all duration-300 cursor-pointer backdrop-blur-sm`}
            >
              <span className="text-indigo-400 mr-4 text-4xl group-hover:scale-125 transition-transform duration-300">
                {link.icon}
              </span>
              <span className="text-lg font-semibold text-white group-hover:text-indigo-400 transition">
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
