import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { settings, skills } from "../../../assets/utils/Data";
import styles from "../Home.module.css";

function Skills() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <section className="bg-gradient-to-b from-mint-blue to-mint-green text-white py-12">
      <h2 className="text-4xl font-bold text-center mb-10 text-light-pink">
        Skills
      </h2>
      <div className="px-6">
        <Slider {...settings}>
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="p-4 h-96 w-full"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible" // Animate when in view
              viewport={{ once: false, amount: 0.2 }} // Adjust trigger point
            >
              <div
                className={`bg-gradient-to-b from-light-pink to-mint-green text-center rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 p-6 w-full h-full`}
              >
                <div
                  className={`bg-mint-green text-white py-3 rounded-t-lg flex flex-row items-center justify-between px-2 ${styles.heartbeat4}`}
                >
                  <h3 className="text-xl font-semibold">
                    {skillGroup.category}
                  </h3>
                  <div className="mt-2">{skillGroup.icon}</div>
                </div>
                <ul className="space-y-2 mt-4">
                  {skillGroup.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-md text-mint-blue px-3 py-1 rounded-lg font-medium shadow-sm  hover:bg-mint-green hover:text-light-pink transition-colors duration-1000 scale-105"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Skills;
