import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import React from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projectsData: Project[] = [
  {
    title: "DocAI",
    description:
      "DocAI is an AI-powered medical assistant that enables real-time healthcare interactions. Built with Next.js and Postgres, it integrates voice and AI technologies for smart medical suggestions, speech-to-text, and text-to-speech. With secure authentication, billing, and an intuitive dashboard, it offers both free and premium users a seamless experience.",
    image: "/project1.png",
    tags: [
      "Next.js",
      "NeonDB(Postgres)",
      "Drizzle ORM",
      "Clerk",
      "Gemini API",
      "AssemblyAI",
      "Vapi",
    ],
    liveUrl: "https://doc-ai-green.vercel.app/",
    githubUrl: "https://github.com/gitApurv/DocAI",
  },
  {
    title: "ShopiFyzz",
    description:
      "ShopiFyzz is a full-stack MERN e-commerce platform designed for a smooth shopping experience. It features secure JWT authentication, product and order management, and Cloudinary image uploads. With automated PDF receipts, email notifications, and a responsive Material UI, it ensures reliability for both customers and sellers.",
    image: "/project2.png",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Material UI",
      "Cloudinary",
    ],
    liveUrl: "https://shopifyzz.netlify.app/",
    githubUrl: "https://github.com/gitApurv/ShopiFyzz",
  },
  {
    title: "Roamify",
    description:
      "Roamify is a full-stack MERN travel journal platform that lets users pin their memories on an interactive world map. It provides secure JWT authentication, full CRUD functionality for travel entries, and a dynamic map interface with geolocation and location search. Deployed seamlessly, it delivers a responsive and engaging travel experience.",
    image: "/project3.png",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React Map GL",
      "MapLibre",
    ],
    liveUrl: "https://travel-app-roamify.netlify.app/",
    githubUrl: "https://github.com/gitApurv/Roamify",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={600}
                className="object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-indigo-400 transition duration-300"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-indigo-400 transition duration-300"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
