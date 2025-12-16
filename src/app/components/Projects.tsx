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
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-white mb-16 tracking-wide">
          🚀 Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              className="opacity-0 translate-y-10 group bg-gray-800 rounded-2xl overflow-hidden border border-white/5 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-700 ease-out transform hover:-translate-y-2"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={600}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-indigo-500 hover:scale-105 transition-all duration-300"
                  >
                    View Live
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-indigo-900/50 text-indigo-200 border border-indigo-500/20 text-xs font-medium px-3 py-1 rounded-full"
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
                    className="text-gray-400 hover:text-indigo-400 transition duration-300"
                  >
                    <FaGithub size={22} />
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
