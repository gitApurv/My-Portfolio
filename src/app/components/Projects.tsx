"use client";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import React, { useEffect, useRef } from "react";

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
      "NodeMailer",
      "PDFKit",
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
  {
    title: "NextStay",
    description:
      "NextStay is a full-stack Airbnb-style property rental platform built with Next.js, MongoDB, and NextAuth.js. It enables users to list, browse, and bookmark properties, manage profiles, and communicate securely with property owners. Featuring Google OAuth login, secure authentication, and a fully responsive UI, NextStay delivers a seamless and interactive property rental experience.",
    image: "/project4.png",
    tags: [
      "Next.js",
      "MongoDB",
      "Mongoose",
      "NextAuth.js",
      "Tailwind CSS",
      "Cloudinary",
    ],
    liveUrl: "https://next-stay-ebon.vercel.app/",
    githubUrl: "https://github.com/gitApurv/NextStay",
  },
];

const Projects: React.FC = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-16 tracking-wide">
          <span>🚀</span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500">
            Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              className="opacity-0 translate-y-10 group bg-gray-800/50 rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-500/30 transition-all duration-700 ease-out transform hover:-translate-y-2 backdrop-blur-sm"
            >
              <div className="relative w-full h-56 overflow-hidden bg-gray-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
                  >
                    View Live
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-indigo-400 group-hover:to-purple-500 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-5 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-indigo-900/50 text-indigo-200 border border-indigo-500/30 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-indigo-800/50 hover:border-indigo-400/50 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end items-center space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 hover:scale-110 transition-all duration-300"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
                  >
                    <FaExternalLinkAlt size={22} />
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
