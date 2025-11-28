import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CustomModal } from "../../components";
import { ProjectsData } from "../../assets/utils/Data";
import { Helmet } from "react-helmet";
import { FaExternalLinkAlt, FaFolderOpen } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-primary">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Abdullah Elseginy</title>
      </Helmet>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            My Projects
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A collection of things I've built.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref}
        >
          {ProjectsData.map((item, index) => (
            <motion.div
              key={item.id || index}
              className="group relative bg-secondary rounded-xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.1 }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <FaFolderOpen className="text-4xl text-accent" />
                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setShowModal(true);
                        setSelectedProject(item);
                      }}
                      className="text-text-secondary hover:text-accent transition-colors"
                      title="View Details"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm line-clamp-3 mb-4">
                  {item.description}
                </p>

                <ul className="flex flex-wrap gap-3 text-xs font-mono text-text-secondary">
                  <li className="hover:text-accent transition-colors">React</li>
                  <li className="hover:text-accent transition-colors">Tailwind</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CustomModal
        project={selectedProject}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Projects;
