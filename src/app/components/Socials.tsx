import React from "react";
import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

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
    hoverColor: "hover:border-gray-500",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={30} />,
    url: "https://www.linkedin.com/in/apurvmaurya",
    hoverColor: "hover:border-blue-600",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode size={30} />,
    url: "https://leetcode.com/u/leetApurv/",
    hoverColor: "hover:border-yellow-500",
  },
  {
    name: "HackerRank",
    icon: <FaHackerrank size={30} />,
    url: "https://www.hackerrank.com/profile/justApurv",
    hoverColor: "hover:border-green-500",
  },
  {
    name: "GeeksForGeeks",
    icon: <SiGeeksforgeeks size={30} />,
    url: "https://www.geeksforgeeks.org/user/apurvma2koe/",
    hoverColor: "hover:border-green-800",
  },
];

const Socials: React.FC = () => {
  return (
    <section id="socials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Socials
        </h2>
        <div className="max-w-xl mx-auto grid grid-cols-1 gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-full p-4 bg-gray-800 rounded-lg border-2 border-transparent transition-all duration-300 ease-in-out text-white font-semibold text-lg ${link.hoverColor} hover:scale-105`}
            >
              <span className="mr-3">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
