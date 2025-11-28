import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { settings, skills } from "../../../assets/utils/Data";

function Skills() {
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
          <h2 className="text-4xl font-bold text-text-primary mb-4 flex items-center justify-center gap-3">
            <span className="text-accent">03.</span> Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="px-4">
          <Slider {...settings}>
            {skills.map((skillGroup, index) => (
              <div key={index} className="px-4 py-8">
                <motion.div
                  className="bg-primary p-8 rounded-xl shadow-xl border border-secondary hover:border-accent transition-colors duration-300 h-full min-h-[300px] flex flex-col"
                  whileHover={{ y: -10 }}
                >
                  <div className="flex items-center gap-4 mb-6 border-b border-secondary pb-4">
                    <div className="text-3xl text-accent">{skillGroup.icon}</div>
                    <h3 className="text-xl font-bold text-text-primary">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {skillGroup.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Skills;
