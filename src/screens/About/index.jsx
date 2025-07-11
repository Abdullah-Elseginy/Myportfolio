import { FaGlobe, FaHome, FaPhone } from "react-icons/fa";
import { MyImage } from "../../assets";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import { skillsAbout } from "../../assets/utils/Data";
import { SoftSkills } from "./SoftSkills";
import HardSkills from "./HardSkills";
import MyProjects from "./MyProjects";
import MyCertificates from "./MyCertificates";
import MyEducation from "./MyEducation";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const About = () => {
  const [animatedSkills, setAnimatedSkills] = useState(
    skillsAbout.map(() => ({ width: 0, percentage: 0 })) // Initialize width and percentage to 0
  );

  useEffect(() => {
    const intervals = skillsAbout.map((skill, index) => {
      return setInterval(() => {
        setAnimatedSkills((prevSkills) => {
          const updatedSkills = [...prevSkills];
          const currentWidth = updatedSkills[index].width;
          const currentPercentage = updatedSkills[index].percentage;

          // Increment width and percentage until they reach the skill's target value
          if (
            currentWidth < skill.percentage ||
            currentPercentage < skill.percentage
          ) {
            updatedSkills[index] = {
              width: Math.min(currentWidth + 1, skill.percentage),
              percentage: Math.min(currentPercentage + 1, skill.percentage),
            };
          }

          return updatedSkills;
        });
      }, 10); // Update every 10ms for smooth animation
    });

    return () => {
      intervals.forEach(clearInterval); // Clear intervals on unmount
    };
  }, []);

  // Inside your component:
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center py-10 ">
      <h1 className="text-light-pink text-4xl font-bold mb-6 mt-7">ABOUT ME</h1>
      <div className="flex flex-col md:flex-row items-center border-t-2 border-t-mint-blue md:items-start md:justify-center max-w-5xl border-1 shadow-lg shadow-mint-blue p-6 mx-2 rounded-lg">
        {/* Left Section */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-mint-green text-3xl font-bold">
            Abdullah Elseginy
          </h2>
          <p className="text-light-pink font-serif text-xs leading-5 mt-2">
            Front-End & Cross-Platform Developer with a passion for mobile app
            and web development. Skilled in quickly learning new technologies
            and translating UI/UX designs into high-performance, responsive
            code. Seeking to contribute to a team of talented developers
            creating innovative mobile apps.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center font-extralight">
              <FaHome className="text-light-pink mr-1" />
              <span className="material-icons text-light-pink mr-2 ">
                Tanta,El gharbia,Egypt
              </span>
            </li>
            <li className="flex items-center font-extralight">
              <FaPhone className="text-light-pink mr-1" />
              <span className="material-icons text-light-pink mr-2 ">
                +201066787955
              </span>
            </li>
            <li className="flex items-center font-extralight">
              <MdEmail className="text-light-pink mr-1" />
              <span className="material-icons text-light-pink mr-2 ">
                abdullah.ahmed.elseginy@gmail.com
              </span>
            </li>
            <li className="flex items-center font-extralight">
              <FaGlobe className="text-light-pink mr-1" />
              <span className="material-icons text-light-pink mr-2 ">
                https://abdullah-elseginy.vercel.app/
              </span>
            </li>
          </ul>
        </div>

        {/* Center Section */}
        <div className="my-6 md:my-0 mx-10 md:w-1/3 flex justify-center items-center relative w-full h-60">
          {!showImage ? (
            <motion.svg
              width="160"
              height="160"
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
              src={MyImage}
              alt="Your Name"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border-2 object-cover transition-transform duration-500 hover:scale-110 hover:rotate-6 hover:shadow-xl border-mint-green shadow-xl w-48 h-48 md:w-60 md:h-60 mx-auto hover:shadow-cyan-500/50"
            />
          )}
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 px-4">
          <h2 className="text-light-pink text-2xl font-bold mb-4">
            My Professional Skills
          </h2>
          <p className="text-slate-400 mb-6">
            Dedicated to ensuring growth with expertise in development, design,
            and marketing strategies.
          </p>

          <div className="space-y-6">
            {skillsAbout.map((skill, index) => (
              <div key={index}>
                {/* Skill Name + Percentage */}
                <div className="flex justify-between items-center mb-1">
                  <p className="text-light-pink font-semibold tracking-wide">
                    {skill.name}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-bold text-light-pink">
                    {animatedSkills[index].percentage}%
                    {animatedSkills[index].percentage > 90 && (
                      <span className="animate-bounce text-red-500 text-lg">
                        🔥
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden shadow-inner ring-1 ring-gray-600">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out shadow-lg"
                    style={{
                      width: `${animatedSkills[index].width}%`,
                      backgroundImage:
                        "linear-gradient(to right, #3b82f6, #22c55e, #facc15, #ef4444)",
                      boxShadow: "0 0 8px rgba(255, 255, 255, 0.15)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* HArd Skills Section  */}
      <HardSkills />
      {/* Soft Skills Section */}
      <SoftSkills />
      {/* My Projects Section */}
      <MyProjects />
      {/* My certificates section */}
      <MyCertificates />
      {/* My Education section */}
      <MyEducation />
      <Helmet>
        {/* Primary Meta Tags */}
        <meta charSet="utf-8" />
        <title>About | My Portfolio</title>
        <meta
          name="description"
          content="I'm a front-end and React Native developer passionate about building user-friendly mobile and web apps."
        />
        <meta
          name="keywords"
          content="React Native Developer, Front-End Developer, Portfolio, JavaScript, Mobile App Developer, Abdullah Elseginy"
        />
        <meta name="author" content="Abdullah Elseginy" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="en" />
        <link
          rel="canonical"
          href="https://abdullah-elseginy.vercel.app/about"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://abdullah-elseginy.vercel.app/about"
        />
        <meta property="og:title" content="About | My Portfolio" />
        <meta
          property="og:description"
          content="Learn more about Abdullah Elseginy, a React Native and front-end developer."
        />
        <meta
          property="og:image"
          content="https://www.myportfolio.com/images/preview.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://abdullah-elseginy.vercel.app/about"
        />
        <meta name="twitter:title" content="About | My Portfolio" />
        <meta
          name="twitter:description"
          content="Learn more about Abdullah Elseginy, a React Native and front-end developer."
        />
        <meta
          name="twitter:image"
          content="https://www.myportfolio.com/images/preview.jpg"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
    </div>
  );
};

export default About;
