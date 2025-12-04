import React from "react";
import { motion } from "framer-motion";
import { skills } from "../../../assets/utils/Data";

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-secondary py-20" id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 flex items-center justify-center gap-3">
            <span className="text-accent">03.</span> Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-text-secondary mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I use to build amazing applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-primary via-primary to-secondary p-6 rounded-2xl shadow-xl border border-secondary/50 hover:border-accent/50 transition-all duration-300 overflow-hidden"
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Animated background circles */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header with icon */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-secondary/30">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <div className="text-accent scale-90">
                      {skillGroup.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Skills as badges */}
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-secondary/80 hover:bg-accent/10 border border-secondary hover:border-accent rounded-lg text-sm text-text-secondary hover:text-accent font-medium transition-all duration-300 cursor-default backdrop-blur-sm"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                {/* Skill count badge */}
                <div className="mt-6 pt-4 border-t border-secondary/30 flex items-center justify-between">
                  <span className="text-xs font-mono text-text-secondary/70">
                    {skillGroup.items.length} {skillGroup.items.length === 1 ? 'skill' : 'skills'}
                  </span>
                  <div className="w-8 h-1 bg-accent/30 rounded-full group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
