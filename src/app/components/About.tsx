import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center text-gray-300 text-lg">
          <p className="mb-4">
            Hello! I'm a self-motivated developer with a strong passion for
            building beautiful and functional websites. I specialize in the MERN
            stack (MongoDB, Express, React, Node.js) but I am always eager to
            learn new technologies.
          </p>
          <p className="mb-4">
            My journey into web development started with a simple "Hello World"
            and has grown into a full-fledged passion. I enjoy solving complex
            problems and turning ideas into reality.
          </p>
          <p>
            When I'm not coding, I enjoy watching movies, reading tech blogs,
            and enjoying the outdoors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
