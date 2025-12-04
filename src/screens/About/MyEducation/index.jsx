import React from "react";
import { myEducations } from "../../../assets/utils/Data";
import { motion } from "framer-motion";
import { FaCertificate, FaUniversity } from "react-icons/fa";

const iconMap = {
  "ITI 4-month Diploma in Front-End and Cross Platform": { icon: FaCertificate, color: "from-blue-500 to-blue-700" },
  "Faculty of Computers and Information": { icon: FaUniversity, color: "from-indigo-500 to-purple-700" }
};

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
        {myEducations.map((education, index) => {
          const IconComponent = iconMap[education.title]?.icon || FaUniversity;
          const gradientColor = iconMap[education.title]?.color || "from-blue-500 to-blue-700";
          
          return (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-secondary p-6 rounded-xl shadow-lg border border-transparent hover:border-accent transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${gradientColor} rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-text-primary flex-1 pt-1">
                  {education.title}
                </h3>
              </div>
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
          );
        })}
      </div>
    </motion.div>
  );
};

export default MyEducation;
