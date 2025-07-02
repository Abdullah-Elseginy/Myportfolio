import React, { useState } from "react";
import { CustomBottom } from "../../../components";
import { FaDownload } from "react-icons/fa";
import { MyCV, MyImage } from "../../../assets";
import styles from "../Home.module.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

function SectionOne() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1500); // 1.5 seconds loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="text-center py-12 flex justify-around items-center flex-wrap mx-3 text-light-pink ">
      {/* Photo Section */}
      <div className="relative w-72 h-72 sm:w-32 sm:h-32 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto flex items-center justify-center">
        {!showImage ? (
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 200 200"
            className="absolute"
          >
            <motion.ellipse
              cx="100"
              cy="100"
              rx="80"
              ry="30"
              stroke="#06b6d4"
              strokeWidth="1"
              fill="none"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
            <motion.ellipse
              cx="100"
              cy="100"
              rx="30"
              ry="80"
              stroke="#06b6d4"
              strokeWidth="1"
              fill="none"
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
          </motion.svg>
        ) : (
          <motion.img
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={MyImage}
            alt="ProfilePicture"
            className="rounded-2xl w-full h-full object-cover shadow-2xl border-2 border-cyan-600 transition-transform duration-1000 hover:scale-105 hover:rotate-3 hover:shadow-cyan-500/50"
          />
        )}
      </div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1
          className={`text-4xl font-bold mb-4 text-light-pink font-sans ${styles.heartbeat}`}
        >
          Welcome to My Portfolio
        </h1>
        <p className={`text-xl text-light-pink ${styles.heartbeat1}`}>
          Hi, I'm a Front-End & Cross Platform Developer React Native
        </p>
        {/* About Me Section */}
        <section className="px-6 py-12 text-center">
          <h2
            className={`text-3xl font-bold mb-6 text-light-pink underline decoration-cyan-500 underline-offset-8 ${styles.heartbeat2}`}
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
