import React from "react";
import { MyImage } from "../../assets";
import Slider from "react-slick";
import {
  FaReact,
  FaJs,
  FaMobileAlt,
  FaAws,
  FaGit,
  FaLinux,
} from "react-icons/fa"; // Icons for skills
import styles from "./Home.module.css";
export default function Home() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["JavaScript", "Python"],
      icon: <FaJs className="text-4xl text-light-pink" />,
    },
    {
      category: "Mobile Application Technologies",
      items: ["React Native", "Redux", "React Hooks"],
      icon: <FaMobileAlt className="text-4xl  text-light-pink" />,
    },
    {
      category: "Concepts",
      items: ["OOP", "AWS", "Agile", "Design Patterns"],
      icon: <FaAws className="text-4xl  text-light-pink" />,
    },
    {
      category: "Front-End",
      items: ["HTML-5", "CSS-3", "Bootstrap", "React Native", "React"],
      icon: <FaReact className="text-4xl  text-light-pink" />,
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "Firebase"],
      icon: <FaGit className="text-4xl  text-light-pink" />,
    },
    {
      category: "Other Skills",
      items: ["Network Infrastructure", "CCNA", "Cyber Security Basics"],
      icon: <FaLinux className="text-4xl  text-light-pink" />,
    },
  ];

  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          arrows: true,
        },
      },
    ],
  };
  return (
    <div className=" text-white min-h-screen">
      {/* Header Section */}
      <header className="text-center py-12 flex justify-around items-center flex-wrap mx-3 text-light-pink">
        <div>
          <img
            className={`rounded-full w-72 h-72 sm:w-32 sm:h-32 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover mx-auto   text-light-pink
  shadow-lg transition-transform duration-500 hover:scale-110 hover:rotate-6 hover:shadow-xl border-cyan-600 border-2 ${styles.heartbeat} `}
            src={MyImage}
            alt="ProfilePicture"
          />
        </div>
        <div>
          <h1
            className={`text-5xl font-bold mb-4 text-light-pink ${styles.heartbeat} `}
          >
            Welcome to My Portfolio
          </h1>
          <p className={`text-xl text-light-pink ${styles.heartbeat1}`}>
            Hi, I'm a Front-End & Cross Platform Developer React Native
          </p>
          {/* About Me Section */}
          <section className="px-6 py-12 text-center">
            <h2
              className={`text-3xl font-semibold mb-6 text-blue ${styles.heartbeat2}`}
            >
              About Me
            </h2>
            <p
              className={`text-lg max-w-3xl mx-auto  text-light-pink ${styles.heartbeat2}`}
            >
              I am passionate about creating beautiful and responsive web and
              mobile apps. With a background in Information Technology. I
              combine technical expertise with a creative flair to build
              user-friendly digital experiences. I specialize in React, React
              Native, and Material UI, with experience in Redux, Tailwind CSS,
              and modern JavaScript frameworks.
            </p>
          </section>
        </div>
      </header>

      {/* Skills Section */}
      <section className="bg-mint-blue text-white py-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-light-pink">
          Skills
        </h2>
        <div className="px-6">
          <Slider {...settings}>
            {skills.map((skillGroup, index) => (
              <div key={index} className="p-4 h-96 w-full   ">
                <div
                  className={`bg-light-pink text-center rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 p-6 w-full h-full`}
                >
                  <div
                    className={`bg-mint-green text-white py-3 rounded-t-lg flex flex-row items-center justify-between px-2  ${styles.heartbeat4}`}
                  >
                    <h3 className="text-xl font-semibold">
                      {skillGroup.category}
                    </h3>
                    <div className="mt-2">{skillGroup.icon}</div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {skillGroup.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-md text-mint-blue px-3 py-1 rounded-lg font-medium shadow-sm hover:bg-mint-green hover:text-light-pink transition-colors duration-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* Projects Section */}
      <section className="px-6 py-12 text-center bg-light-pink">
        <h2 className="text-3xl font-semibold mb-6 text-blue">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div
            className="relative bg-cover bg-center p-6 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "300px", // Adjust the height as needed
            }}
          >
            <a
              href="#s"
              className="absolute top-5 right-0 bg-mint-green text-light-pink hover:bg-mint-blue py-2 px-4 rounded-lg mb-4 mr-4 font-bold"
            >
              View Project
            </a>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Project One
              </h3>
              <p className="text-lg text-gray-200">
                A React web application that integrates with third-party APIs to
                display dynamic data in a clean UI.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-4 text-blue">
              Project Two
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              A mobile app built with React Native, designed for both iOS and
              Android platforms.
            </p>
            <a
              href="#s"
              className="text-mint-green hover:text-mint-blue text-lg font-semibold mt-auto"
            >
              View Project
            </a>
          </div>

          {/* Project 3 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-4 text-blue">
              Project Three
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              A dashboard with real-time data using Redux and WebSocket
              integration for a smooth user experience.
            </p>
            <a
              href="#s"
              className="text-mint-green hover:text-mint-blue text-lg font-semibold mt-auto"
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
