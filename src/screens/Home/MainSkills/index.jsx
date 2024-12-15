import React, { useEffect, useRef, useState } from "react";
import { skillsAbout } from "../../../assets/utils/Data";

export const MainSkills = () => {
  const [animatedSkills, setAnimatedSkills] = useState(
    skillsAbout.map(() => 0) // Initialize progress to 0
  );
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const intervals = skillsAbout.map((skill, index) => {
        return setInterval(() => {
          setAnimatedSkills((prev) => {
            const updated = [...prev];
            if (updated[index] < skill.percentage) {
              updated[index] += 1; // Increment progress
            }
            return updated;
          });
        }, 10); // Update every 10ms
      });

      return () => {
        intervals.forEach(clearInterval); // Clear intervals
      };
    }
  }, [isVisible]);
  const getColorForPercentage = (percentage) => {
    if (percentage <= 50) return "#003161"; // Red for 0–50%
    if (percentage <= 80) return "#006A67"; // Orange for 51–80%
    return "#000B58"; // Green for 81–100%
  };
  return (
    <div className="py-12 bg-gradient-to-r items-center justify-center from-light-pink via-mint-green to-light-pink">
      <h2 className="text-4xl font-bold text-center mb-10 text-light-pink">
        Mian Skills Percentage
      </h2>
      <div
        ref={sectionRef}
        className="flex justify-center items-center flex-wrap  space-x-6"
      >
        {skillsAbout.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-500 mb-7 hover:scale-110 hover:rotate-6 "
          >
            {/* Circle Progress */}
            <div className="relative w-56 h-40">
              {/* Background Circle */}
              <svg className="w-full h-full">
                <circle
                  cx="50%"
                  cy="50%"
                  r="72"
                  stroke="#FFF4B7" // Light gray
                  strokeWidth="6"
                  fill="#000"
                />
                {/* Animated Circle */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="72"
                  stroke={getColorForPercentage(animatedSkills[index])}
                  strokeWidth="7"
                  fill="none"
                  strokeDasharray="452.39" // Circumference: 2 * Math.PI * radius
                  strokeDashoffset={
                    452.39 - (animatedSkills[index] / 100) * 452.39
                  } // Offset for animation
                  style={{ transition: "stroke-dashoffset 0.5s linear" }}
                />
              </svg>
              {/* Percentage Inside Circle */}
              <div className="absolute inset-0 flex justify-center items-center">
                <span className="text-xl font-bold text-light-pink">
                  {animatedSkills[index]}%
                </span>
              </div>
            </div>
            {/* Skill Name Below the Circle */}
            <p className="mt-1 text-sm text-light-pink font-medium">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
