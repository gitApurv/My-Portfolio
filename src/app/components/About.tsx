import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12 tracking-wide">
          👨‍💻 About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed space-y-6">
          <p>
            Hey! I'm{" "}
            <span className="text-indigo-400 font-semibold">Apurv Maurya</span>,
            a <span className="text-white font-bold">Full-Stack Developer</span>{" "}
            who loves building scalable, secure, and user-friendly applications.
            My core expertise lies in the
            <span className="text-indigo-400 font-semibold"> MERN stack</span>,
            <span className="text-indigo-400 font-semibold"> Next.js</span>, and
            seamless{" "}
            <span className="text-indigo-400 font-semibold">
              cloud integrations
            </span>
            .
          </p>

          <p>
            My journey combines a strong foundation in
            <span className="text-white font-semibold">
              {" "}
              Data Structures & Algorithms
            </span>{" "}
            and
            <span className="text-white font-semibold">
              {" "}
              core CS fundamentals
            </span>{" "}
            with practical experience developing{" "}
            <span className="text-indigo-400">AI-powered SaaS tools</span>,
            <span className="text-indigo-400"> e-commerce platforms</span>, and
            <span className="text-indigo-400">
              {" "}
              interactive web applications
            </span>
            . I enjoy exploring new technologies, especially around
            <span className="text-white font-semibold">
              {" "}
              SaaS architectures
            </span>
            ,
            <span className="text-white font-semibold">
              {" "}
              AI-driven solutions
            </span>
            , and
            <span className="text-white font-semibold">
              {" "}
              cloud-native systems
            </span>
            .
          </p>

          <p className="text-xl text-indigo-400 font-medium">
            ⚡ Fueled by curiosity and creativity, I aim to craft digital
            products that are technically robust and deliver real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
