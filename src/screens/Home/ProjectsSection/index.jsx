import React, { useRef, useState } from "react";
import { CustomBottom, CustomModal } from "../../../components";
import { ProjectsData } from "../../../assets/utils/Data";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function ProjectsSection() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false }); // Animates every time in view
  const [showModal, setShowModal] = useState(false);
  const [Data, Setdata] = useState({});
  return (
    <section className="px-6 py-12 text-center bg-light-pink">
      <h2 className="text-4xl font-bold text-center mb-10 text-mint-blue">
        My Projects
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        ref={ref}
      >
        {ProjectsData.slice(0, 3).map((item, index) => (
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
      <CustomModal
        project={Data}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </section>
  );
}

export default ProjectsSection;
