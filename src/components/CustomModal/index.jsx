import React from "react";
import CustomBottom from "../Bottom";
import { FaGithub, FaEye, FaSignOutAlt } from "react-icons/fa";
const CustomModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open
  console.log("first" + project.image);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-2xl p-6 mx-3 transform scale-95 opacity-0 animate-fade-in">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg md:text-2xl font-bold text-blue">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <FaSignOutAlt />
          </button>
        </div>

        {/* Modal Image */}
        <div className="mb-4">
          <img
            src={project.image}
            loading="lazy"
            alt={project.title}
            className="rounded-md w-full max-h-64 object-cover"
          />
        </div>

        {/* Modal Content */}
        <div className="text-gray-700 mb-4">
          <p>{project.description}</p>
        </div>

        {/* Modal Actions */}
        <div className="flex space-x-4 justify-end">
          <a
            href={project.viewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 "
          >
            <CustomBottom
              text="View Project"
              buttonStyles={"bg-mint-green"}
              rigthIcon={<FaEye className="ml-1 text-light-pink" />}
            />
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" px-4 py-2  "
          >
            <CustomBottom
              text="GitHub"
              rigthIcon={<FaGithub className="ml-1 text-light-pink" />}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
