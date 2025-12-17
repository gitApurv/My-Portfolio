"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
    }[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2,
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.fill();
      });
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-linear-to-b from-gray-900 via-gray-900 to-gray-800 px-6 lg:px-12 py-20 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] opacity-50 pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] opacity-50 pointer-events-none animate-pulse-slow"></div>

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="relative z-10 md:w-1/2 md:pr-12 text-center md:text-left animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Hi, I'm{" "}
          <span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-500 to-pink-500 drop-shadow-lg animate-gradient">
            Apurv Maurya
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
          🚀 {text}
          <span className="animate-pulse text-indigo-400">|</span> —
          Self-taught, curious, and code-driven. Passionate about building
          scalable, secure, and user-friendly applications.
        </p>

        <div className="mt-8 flex justify-center md:justify-start space-x-5">
          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
          >
            📄 Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="border border-indigo-500/50 bg-gray-800/50 text-indigo-300 font-semibold py-3 px-8 rounded-full hover:bg-indigo-600 hover:text-white hover:border-indigo-600 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
          >
            ✉️ Contact Me
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-12 md:mt-0 md:w-1/3 flex justify-center animate-fade-in-up animation-delay-300">
        <div className="animate-float">
          <Image
            src="/profile.png"
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-full shadow-[0_0_60px_rgba(79,70,229,0.4)] border-4 border-indigo-500/30 hover:scale-105 hover:shadow-[0_0_80px_rgba(79,70,229,0.6)] transition-all duration-500 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
