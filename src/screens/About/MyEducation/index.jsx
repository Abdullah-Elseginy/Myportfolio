import React from "react";
import { myEducations } from "../../../assets/utils/Data";
import { motion } from "framer-motion";

const MyEducation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
        <span className="text-accent">04.</span> Education
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myEducations.map((education, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-secondary p-6 rounded-xl shadow-lg border border-transparent hover:border-accent transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-text-primary mb-2">
              {education.title}
            </h3>
            <p className="text-accent font-mono text-sm mb-2">
              {education.institution}
            </p>
            <p className="text-text-secondary text-xs mb-4 font-mono">
              {education.time}
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              {education.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MyEducation;
