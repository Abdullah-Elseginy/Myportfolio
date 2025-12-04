import React from "react";
import { FaGlobe, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { MyImage } from "../../assets";
import { skillsAbout } from "../../assets/utils/Data";
import { motion } from "framer-motion";
import HardSkills from "./HardSkills";
import { SoftSkills } from "./SoftSkills";
import MyCertificates from "./MyCertificates";
import MyEducation from "./MyEducation";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-primary overflow-x-hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Abdullah Elseginy</title>
      </Helmet>

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            About Me
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center lg:justify-start"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-accent rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-300">
                <img
                  src={MyImage}
                  alt="Abdullah Elseginy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
            </div>
          </motion.div>

          {/* Bio & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-8 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Abdullah Elseginy
            </h2>
            <h3 className="text-xl text-accent font-mono mb-6">
              Front-End & Cross-Platform Developer
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              I am a passionate developer with expertise in building high-quality
              mobile and web applications. I thrive on learning new technologies
              and turning complex problems into elegant, user-friendly solutions.
              My goal is to create digital experiences that not only look great
              but also perform flawlessly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-text-secondary font-mono text-sm">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-accent" />
                <span>Tanta, El Gharbia, Egypt</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-accent" />
                <span>+20 106 678 7955</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-accent" />
                <span>abdullah.ahmed.elseginy@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaGlobe className="text-accent" />
                <a
                  href="https://abdullah-elseginy.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent transition-colors underline"
                >
                  portfolio
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Professional Skills (Progress Bars) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
            <span className="text-accent">01.</span> Professional Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsAbout.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2 text-text-primary font-mono text-sm">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-accent"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sub Components */}
        <div className="space-y-20">
          <HardSkills />
          <SoftSkills />
          <MyEducation />
          <MyCertificates />
        </div>
      </div>
    </div>
  );
};

export default About;
