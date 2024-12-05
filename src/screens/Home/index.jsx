import React from "react";

export default function Home() {
  return (
    <div className=" text-white min-h-screen">
      {/* Header Section */}
      <header className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4 text-light-pink">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-mint-blue">
          Hi, I'm a Front-End & Cross Platform Developer
        </p>
      </header>

      {/* About Me Section */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-mint-green">
          About Me
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-white">
          I am passionate about creating beautiful and responsive web and mobile
          apps. With a background in Information Technology and Accounting, I
          combine technical expertise with a creative flair to build
          user-friendly digital experiences. I specialize in React, React
          Native, and Material UI, with experience in Redux, Tailwind CSS, and
          modern JavaScript frameworks.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-mint-blue text-white py-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="text-xl">
            <i className="fab fa-react text-4xl mb-2"></i>
            <p>React</p>
          </div>
          <div className="text-xl">
            <i className="fab fa-node text-4xl mb-2"></i>
            <p>Node.js</p>
          </div>
          <div className="text-xl">
            <i className="fab fa-android text-4xl mb-2"></i>
            <p>React Native</p>
          </div>
          <div className="text-xl">
            <i className="fab fa-js-square text-4xl mb-2"></i>
            <p>JavaScript</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-12 text-center bg-light-pink">
        <h2 className="text-3xl font-semibold mb-6 text-blue">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue">
              Project One
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              A React web application that integrates with third-party APIs to
              display dynamic data in a clean UI.
            </p>
            <a
              href="#s"
              className="text-mint-green hover:text-mint-blue text-lg font-semibold"
            >
              View Project
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue">
              Project Two
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              A mobile app built with React Native, designed for both iOS and
              Android platforms.
            </p>
            <a
              href="#s"
              className="text-mint-green hover:text-mint-blue text-lg font-semibold"
            >
              View Project
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue">
              Project Three
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              A dashboard with real-time data using Redux and WebSocket
              integration for a smooth user experience.
            </p>
            <a
              href="#s"
              className="text-mint-green hover:text-mint-blue text-lg font-semibold"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-12 text-center bg-mint-green">
        <h2 className="text-3xl font-semibold mb-6 text-white">Contact Me</h2>
        <p className="text-lg text-white mb-4">
          If you are interested in working with me or just want to chat, feel
          free to reach out!
        </p>
        <a
          href="mailto:someone@example.com"
          className="text-xl text-light-pink hover:text-mint-blue font-semibold"
        >
          Send me an email
        </a>
      </section>
    </div>
  );
}
