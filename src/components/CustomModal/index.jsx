import React from "react";
import Slider from "react-slick";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomModal = ({ isOpen, onClose, project }) => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: (i) => (
      <div className="w-2 h-2 bg-text-secondary rounded-full mt-2 hover:bg-accent transition-colors"></div>
    ),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
          ></motion.div>

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-secondary w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-accent/20"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-primary/50">
              <h2 className="text-2xl font-bold text-text-primary">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className="text-text-secondary hover:text-accent transition-colors p-2 rounded-full hover:bg-primary/50"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {/* Image Carousel */}
              <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
                <Slider {...settings}>
                  {project.images?.map((image, index) => (
                    <div key={index} className="outline-none">
                      <img
                        src={image}
                        loading="lazy"
                        alt={`Slide ${index + 1}`}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Description */}
              <div className="text-text-secondary leading-relaxed mb-8 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                <p>{project.description}</p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 justify-end">
                {project.viewLink && (
                  <a
                    href={project.viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-text-primary rounded-lg hover:text-accent border border-transparent hover:border-accent transition-all duration-300 font-mono text-sm"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent rounded-lg hover:bg-accent hover:text-primary transition-all duration-300 font-mono text-sm font-bold"
                  >
                    <FaGithub /> View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CustomModal;
