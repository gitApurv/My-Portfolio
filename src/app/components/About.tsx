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
            I'm Apurv Maurya, a Full-Stack Developer passionate about building
            scalable, secure, and user-friendly applications. With strong
            expertise in the MERN stack, Next.js, and cloud integrations, I
            enjoy turning complex problems into elegant solutions.
          </p>
          <p className="mb-4">
            My journey blends a solid foundation in data structures, algorithms,
            and core CS fundamentals with hands-on experience creating
            AI-powered SaaS tools, e-commerce platforms, and interactive web
            apps. I thrive on learning new technologies and exploring SaaS
            architectures, AI-driven applications, and cloud-native systems.
          </p>
          <p>
            ⚡ Driven by curiosity and creativity, my goal is to craft digital
            products that are not only technically strong but also deliver real
            value to users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
