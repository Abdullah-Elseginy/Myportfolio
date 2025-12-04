import React from "react";
import { hardSkills } from "../../../assets/utils/Data";
import { motion } from "framer-motion";
import { FaCode, FaPython, FaMobileAlt, FaDatabase, FaReact, FaCubes, FaAws, FaUsers, FaPalette, FaHtml5, FaGitAlt, FaGithub, FaNetworkWired, FaShieldAlt } from "react-icons/fa";
import { SiJavascript, SiRedux, SiPostman, SiFirebase, SiCisco } from "react-icons/si";

const iconMap = {
  "JavaScript": { icon: SiJavascript, color: "from-yellow-400 to-yellow-600" },
  "Python": { icon: FaPython, color: "from-blue-400 to-blue-600" },
  "React Native": { icon: FaMobileAlt, color: "from-cyan-500 to-blue-600" },
  "Redux": { icon: SiRedux, color: "from-purple-500 to-purple-700" },
  "React Hooks": { icon: FaReact, color: "from-cyan-400 to-blue-500" },
  "OOP": { icon: FaCubes, color: "from-indigo-500 to-indigo-700" },
  "AWS": { icon: FaAws, color: "from-orange-400 to-orange-600" },
  "Agile": { icon: FaUsers, color: "from-green-500 to-green-700" },
  "Design Patterns": { icon: FaPalette, color: "from-pink-500 to-pink-700" },
  "HTML-5 | CSS-3 | Bootstrap": { icon: FaHtml5, color: "from-red-500 to-orange-600" },
  "React Native | React": { icon: FaReact, color: "from-cyan-500 to-blue-600" },
  "Git": { icon: FaGitAlt, color: "from-red-600 to-orange-700" },
  "Git Hub": { icon: FaGithub, color: "from-gray-700 to-gray-900" },
  "Postman": { icon: SiPostman, color: "from-orange-500 to-orange-700" },
  "Firebase": { icon: SiFirebase, color: "from-yellow-500 to-orange-600" },
  "Network Infrastructure": { icon: FaNetworkWired, color: "from-blue-600 to-indigo-700" },
  "CCNA": { icon: SiCisco, color: "from-blue-700 to-indigo-800" },
  "Cyber Security Basics": { icon: FaShieldAlt, color: "from-red-600 to-red-800" }
};

const HardSkills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
        <span className="text-accent">02.</span> Hard Skills
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hardSkills.map((skill, index) => {
          const IconComponent = iconMap[skill.skill]?.icon || FaCode;
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

export default HardSkills;
