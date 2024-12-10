import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CustomBottom, CustomModal } from "../../components";
import { ProjectsData } from "../../assets/utils/Data";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [Data, Setdata] = useState({});
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
  return (
    <div className="min-h-screen p-6">
      <h2 className="text-4xl font-bold  mb-10 text-light-pink">My Projects</h2>
      <section className="py-6 text-center">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref}
        >
          {ProjectsData.map((item, index) => (
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
      </section>
      <CustomModal
        project={Data}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Projects;
