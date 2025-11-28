import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MyCV, MyImage } from "../../../assets";

function SectionOne() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-accent font-mono mb-4 text-lg"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-text-primary mb-4 leading-tight"
          >
            Abdullah Elseginy.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-text-secondary mb-6"
          >
            I build things for the web.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-text-secondary text-lg max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed"
          >
            I'm a Front-End & Cross-Platform Developer specializing in building
            (and occasionally designing) exceptional digital experiences. Currently,
            I'm focused on building accessible, human-centered products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Link
              to="/projects"
              className="px-8 py-4 border-2 border-accent text-accent rounded hover:bg-accent/10 transition-all duration-300 font-mono flex items-center gap-2 group"
            >
              Check out my work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={MyCV}
              download
              className="px-8 py-4 bg-accent text-primary rounded hover:bg-accent/90 transition-all duration-300 font-mono flex items-center gap-2 font-bold"
            >
              Download CV
              <FaDownload />
            </a>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
            <div className="absolute inset-0 border-2 border-accent rounded-full translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-accent/20 rounded-full group-hover:bg-transparent transition-colors duration-300 z-10"></div>
            <img
              src={MyImage}
              alt="Abdullah Elseginy"
              className="relative w-full h-full object-cover rounded-full shadow-2xl z-0 grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SectionOne;
