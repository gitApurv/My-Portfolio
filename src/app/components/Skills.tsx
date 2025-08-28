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
  { icon: <FaReact size={50} />, name: "React" },
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
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              <div className="text-indigo-400 mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
