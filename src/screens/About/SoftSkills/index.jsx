import React from "react";
import { softSkills } from "../../../assets/utils/Data";
import { motion } from "framer-motion";
import { FaUsers, FaChartLine, FaChalkboardTeacher, FaClock, FaEye, FaBrain, FaLightbulb, FaComments, FaFire, FaWrench } from "react-icons/fa";

const iconMap = {
  "Communication": { icon: FaComments, color: "from-blue-500 to-blue-700" },
  "Collaboration": { icon: FaUsers, color: "from-purple-500 to-purple-700" },
  "Progressive": { icon: FaChartLine, color: "from-green-500 to-green-700" },
  "Presentation Skill": { icon: FaChalkboardTeacher, color: "from-yellow-500 to-yellow-700" },
  "Time Management": { icon: FaClock, color: "from-red-500 to-red-700" },
  "Attention to Detail": { icon: FaEye, color: "from-indigo-500 to-indigo-700" },
  "Critical Thinking": { icon: FaBrain, color: "from-pink-500 to-pink-700" },
  "Creativity": { icon: FaLightbulb, color: "from-orange-500 to-orange-700" },
  "Interviewing Skills": { icon: FaComments, color: "from-teal-500 to-teal-700" },
  "Self-Motivation": { icon: FaFire, color: "from-red-600 to-orange-600" },
  "Troubleshooting": { icon: FaWrench, color: "from-gray-600 to-gray-800" }
};

export const SoftSkills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
        <span className="text-accent">03.</span> Soft Skills
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {softSkills.map((skill, index) => {
          const IconComponent = iconMap[skill.skill]?.icon || FaComments;
          const gradientColor = iconMap[skill.skill]?.color || "from-accent to-accent/60";
          
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
                <h3 className="text-xl font-bold text-text-primary flex-1 pt-2">
                  {skill.skill}
                </h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
