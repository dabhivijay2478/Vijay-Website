import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import experienceData from "../Json/Data.json";

export default function Experience() {
  const animationRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once when element comes into view
    rootMargin: "-100px", // Adjust root margin for earlier trigger
  });

  return (
    <div className="max-w-5xl mx-auto mt-8 mb-8">
      <h2 className="text-4xl font-bold leading-tight text-white sm:text-4xl lg:text-4xl">
        Experience
      </h2>

      <div className="border-l-2 border-blue-500 pl-8">
        {experienceData.experience.map((exp, index) => (
          <div key={index} ref={animationRef}>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className={`flex flex-col md:flex-row md:justify-between mt-8 text-white ${
                index % 2 === 0 ? "animate-left" : "animate-right"
              }`}
            >
              <div className="mb-4 md:mb-10 m-2">
                <h3 className="text-2xl font-bold mb-2 text-indigo-500">
                  {exp["Company-Name"]}
                </h3>
                <p className="text-sm text-white">
                  Time Period :
                  <span className="text-cyan-500 ml-2 mt-2">
                    {exp["Time-Period"]}
                  </span>
                </p>
                <p className="text-sm text-white">
                  Technologies :
                  <span className="text-cyan-500 ml-2 mt-2">
                    {exp["Technologies"].join(", ")}
                  </span>
                </p>
                <p className="text-white mt-2">{exp["Description"]}</p>
              </div>
              <p className="text-xl text-indigo-500">{exp["Designation"]}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
