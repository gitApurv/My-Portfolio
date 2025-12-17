"use client";
import React from "react";
import { DiRedis } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiAmazonwebservices,
  SiPostman,
  SiGit,
  SiGithub,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

interface Skill {
  icon: React.ReactNode;
  name: string;
}

const skillsData: Skill[] = [
  { icon: <SiC size={50} />, name: "C" },
  { icon: <SiCplusplus size={50} />, name: "C++" },
  { icon: <FaHtml5 size={50} />, name: "HTML5" },
  { icon: <FaCss3Alt size={50} />, name: "CSS3" },
  { icon: <FaJs size={50} />, name: "JavaScript" },
  { icon: <SiTypescript size={50} />, name: "TypeScript" },
  { icon: <FaReact size={50} />, name: "React.js" },
  { icon: <SiNextdotjs size={50} />, name: "Next.js" },
  { icon: <SiTailwindcss size={50} />, name: "Tailwind CSS" },
  { icon: <FaNodeJs size={50} />, name: "Node.js" },
  { icon: <SiExpress size={50} />, name: "Express.js" },
  { icon: <SiPostgresql size={50} />, name: "PostgreSQL" },
  { icon: <SiMongodb size={50} />, name: "MongoDB" },
  { icon: <DiRedis size={50} />, name: "Redis" },
  { icon: <SiDocker size={50} />, name: "Docker" },
  { icon: <SiAmazonwebservices size={50} />, name: "AWS" },
  { icon: <SiPostman size={50} />, name: "Postman" },
  { icon: <SiGit size={50} />, name: "Git" },
  { icon: <SiGithub size={50} />, name: "Github" },
  { icon: <VscVscode size={50} />, name: "VS Code" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-16 tracking-wide">
          <span>🛠</span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500">
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-900/50 border border-white/10 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-indigo-400 mb-4 text-4xl group-hover:scale-125 group-hover:text-purple-400 transition-all duration-300">
                {skill.icon}
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-indigo-400 group-hover:to-purple-500 transition-all duration-300 text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
