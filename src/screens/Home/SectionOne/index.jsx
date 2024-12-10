import React from "react";
import { CustomBottom } from "../../../components";
import { FaDownload } from "react-icons/fa";
import { MyCV, MyImage } from "../../../assets";
import styles from "../Home.module.css";
import { motion } from "framer-motion";

function SectionOne() {
  return (
    <header className="text-center py-12 flex justify-around items-center flex-wrap mx-3 text-light-pink ">
      {/* Photo Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          className={`rounded-full w-72 h-72 sm:w-32 sm:h-32 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover mx-auto text-light-pink shadow-lg transition-transform duration-500 hover:scale-110 hover:rotate-6 hover:shadow-xl border-cyan-600 border-2 ${styles.heartbeat}`}
          src={MyImage}
          alt="ProfilePicture"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1
          className={`text-4xl font-bold mb-4 text-light-pink ${styles.heartbeat}`}
        >
          Welcome to My Portfolio
        </h1>
        <p className={`text-xl text-light-pink ${styles.heartbeat1}`}>
          Hi, I'm a Front-End & Cross Platform Developer React Native
        </p>
        {/* About Me Section */}
        <section className="px-6 py-12 text-center">
          <h2
            className={`text-3xl font-semibold mb-6 text-blue ${styles.heartbeat2}`}
          >
            About Me
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto text-light-pink ${styles.heartbeat2}`}
          >
            I am passionate about creating beautiful and responsive web and
            mobile apps. With a background in Information Technology, I combine
            technical expertise with a creative flair to build user-friendly
            digital experiences. I specialize in React, React Native, and
            Material UI, with experience in Redux, Tailwind CSS, and modern
            JavaScript frameworks.
          </p>
          <div className="mt-5">
            <a href={MyCV} download>
              <CustomBottom
                text="Download CV"
                title="Download CV"
                rigthIcon={<FaDownload className="ml-3" />}
              />
            </a>
          </div>
        </section>
      </motion.div>
    </header>
  );
}

export default SectionOne;
