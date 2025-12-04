import React from "react";
import { myCertificates } from "../../../assets/utils/Data";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaShieldAlt } from "react-icons/fa";

const iconMap = {
  "ITI 4-Month Program Certificate": { icon: FaCode, color: "from-green-500 to-green-700" },
  "Camp Coding React Native Certificate": { icon: FaMobileAlt, color: "from-cyan-500 to-blue-600" },
  "Network Infrastructure and Cybersecurity": { icon: FaShieldAlt, color: "from-red-500 to-orange-600" }
};

const MyCertificates = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
        <span className="text-accent">05.</span> Certificates
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myCertificates.map((certificate, index) => {
          const IconComponent = iconMap[certificate.title]?.icon || FaCode;
          const gradientColor = iconMap[certificate.title]?.color || "from-green-500 to-green-700";
          
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
                  {certificate.title}
                </h3>
              </div>
              <p className="text-text-secondary text-xs mb-4 font-mono">
                {certificate.time}
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                {certificate.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default MyCertificates;
