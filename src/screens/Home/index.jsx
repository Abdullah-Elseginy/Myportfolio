import React, { useRef, useState } from "react";
import { AMSAPP, BloomifyMocup, MyCV, MyImage, ShoglMocup } from "../../assets";
import Slider from "react-slick";
import {
  FaReact,
  FaJs,
  FaMobileAlt,
  FaAws,
  FaGit,
  FaLinux,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa"; // Icons for skills
import { SiGmail } from "react-icons/si";
import { useMediaQuery } from "react-responsive";
import { motion, useInView } from "framer-motion";
import styles from "./Home.module.css";
import { CustomBottom, CustomModal } from "../../components";
import { Link, useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [Data, Setdata] = useState({});
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
  const links = [
    {
      title: "Facebook",
      href: "https://www.facebook.com/3bdulla7elseginy",
      icon: <FaFacebook className="mr-2 w-36 h-36 text-light-pink " />,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/abdullah-elseginy-7bbbb21ba/",
      icon: <FaLinkedin className="mr-2 w-36 h-36 text-light-pink" />,
    },
    {
      title: "GitHub",
      href: "https://github.com/Abdullah-Elseginy",
      icon: <FaGithub className="mr-2 w-36 h-36 text-light-pink " />,
    },
    {
      title: "Instagram",
      href:
        "https://www.instagram.com/3bdulla7.elseginy/profilecard/?igsh=NnYwd3dpdjZrOWN3",
      icon: <FaInstagram className="mr-2 w-36 h-36 text-light-pink" />,
    },
    {
      title: "WhatsApp",
      href: "https://wa.link/upgmhp",
      icon: <FaWhatsapp className="mr-2 w-36 h-36 text-light-pink" />,
    },
    {
      title: "Send Email",
      href: "./contact",
      icon: <SiGmail className="mr-2 w-36 h-36 text-light-pink" />,
    },
  ];
  const Projects = [
    {
      title: "Academy Management System App",
      description:
        "A React Native mobile application that integrates with third-party APIs to display dynamic data in a clean UI.",
      githubLink:
        "https://github.com/Abdullah-Elseginy/Academy-management-System-App",
      image: AMSAPP,
    },
    {
      title: "Shoghl App",
      description:
        "This mobile application, built with React Native, facilitates the hiring process by allowing job seekers to apply and company owners to post job listings and hire candidates",
      githubLink: "https://github.com/Abdullah-Elseginy/Shoghl-Application",
      image: ShoglMocup,
    },
    {
      title: "Bloomify App",
      description:
        "Bloomify is an e-commerce application designed for selling flowers online. It allows users to browse and purchase a wide variety of floral arrangements.",
      githubLink: "https://github.com/Abdullah-Elseginy/BLOOMIFY-APP-ITI",
      image: BloomifyMocup,
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
  // Mothions
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false }); // Animates every time in view

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  // const ContactcardVariants = (direction) => ({
  //   hidden: {
  //     opacity: 0,
  //     x: direction === "left" ? -100 : 100, // Start from left or right
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0, // Move to original position
  //     transition: { duration: 0.8, ease: "easeOut" },
  //   },
  // });
  return (
    <div className=" text-white min-h-screen">
      {/* Header Section */}
      <header className="text-center py-12 flex justify-around items-center flex-wrap mx-3 text-light-pink">
        {/* Photo Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className={`rounded-full w-72 h-72 sm:w-32 sm:h-32 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover mx-auto text-light-pink shadow-lg transition-transform duration-500 hover:scale-110 hover:rotate-6 hover:shadow-xl border-cyan-600 border-2 ${styles.heartbeat}`}
            src={MyImage}
            alt="ProfilePicture"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className={`text-4xl font-bold mb-4 text-light-pink ${styles.heartbeat}`}
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
              className={`text-lg max-w-3xl mx-auto text-light-pink ${styles.heartbeat2}`}
            >
              I am passionate about creating beautiful and responsive web and
              mobile apps. With a background in Information Technology, I
              combine technical expertise with a creative flair to build
              user-friendly digital experiences. I specialize in React, React
              Native, and Material UI, with experience in Redux, Tailwind CSS,
              and modern JavaScript frameworks.
            </p>
            <div className="mt-5">
              <a href={MyCV} download>
                <CustomBottom
                  text="Download CV"
                  title="Download CV"
                  rigthIcon={<FaDownload className="ml-3" />}
                />
              </a>
            </div>
          </section>
        </motion.div>
      </header>

      {/* Skills Section */}
      <section className="bg-mint-blue text-white py-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-light-pink">
          Skills
        </h2>
        <div className="px-6">
          <Slider {...settings}>
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                className="p-4 h-96 w-full"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible" // Animate when in view
                viewport={{ once: false, amount: 0.2 }} // Adjust trigger point
              >
                <div
                  className={`bg-gradient-to-b from-light-pink to-mint-green text-center rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 p-6 w-full h-full`}
                >
                  <div
                    className={`bg-mint-green text-white py-3 rounded-t-lg flex flex-row items-center justify-between px-2 ${styles.heartbeat4}`}
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
                        className="text-md text-mint-blue px-3 py-1 rounded-lg font-medium shadow-sm  hover:bg-mint-green hover:text-light-pink transition-colors duration-1000 scale-105"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>
      {/* Projects Section */}
      <section className="px-6 py-12 text-center bg-light-pink">
        <h2 className="text-4xl font-bold text-center mb-10 text-mint-blue">
          My Projects
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref}
        >
          {Projects.map((item, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-lg shadow-lg overflow-hidden"
              style={{
                height: "300px", // Full card height
              }}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} // Re-triggers on scroll
            >
              {/* Image with Full Card Background */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 2 }} // 2 seconds hover effect
              ></motion.div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 rounded-b-lg z-10">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-200">{item.description}</p>
              </div>

              {/* Open Project Button */}
              <a href="#s" className="absolute top-5 right-0 z-10">
                <CustomBottom
                  text="Open Project"
                  styles={"mr-5"}
                  onClick={() => {
                    setShowModal(true);
                    Setdata(item);
                  }}
                />
              </a>
            </motion.div>
          ))}
        </div>
        <div className="mt-3">
          <CustomBottom
            text="See All Projects"
            onClick={() => navigate("./projects")}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-12 py-12 text-center bg-mint-green">
        <h2 className="text-4xl font-bold text-center mb-10 text-light-pink">
          Contact Me
        </h2>
        <p className="text-lg text-light-pink mb-4">
          If you are interested in working with me or just want to chat, feel
          free to reach out!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <motion.div
              key={link.title}
              className={`flex items-center justify-center self-center bg-mint-blue border-light-pink border-2 p-2 rounded-lg my-3 shadow-lg transition-all duration-500 transform hover:bg-black`}
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // Animate every time it scrolls into view
              whileHover={{ scale: 1.04 }} // Scale the card on hover
            >
              <Link
                to={link.href}
                target={link.title !== "Send Email" ? "_blank" : "_self"}
                rel="noreferrer"
                className="flex items-center flex-col font-bold text-light-pink"
              >
                {link.icon}
                {link.title}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Optionally hide content for mobile */}
        {isMobile && <p>This is visible only on mobile</p>}
      </section>

      <CustomModal
        project={Data}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
