import React from "react";
import { motion } from "framer-motion";
import "./ProjectDetails.module.css";

const ProjectDetails = () => {
  return (
    <motion.div
      className="project-details"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="page-title">Project Details</h1>
    </motion.div>
  );
};

export default ProjectDetails;
