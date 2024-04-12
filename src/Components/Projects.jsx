import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modalprojects from "./Modalprojects";
import ProjectData from "../Json/Projects.json";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-slate-00 sm:text-4xl lg:text-5xl">
              Created Projects
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed dark:animate-pulse text-white">
              Click Project Card And Open Project Details
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {ProjectData.map((item, index) => (
              <motion.div
                key={index}
                className="overflow-hidden bg-white rounded shadow shadow-teal-300 border-solid border-2 border-teal-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleProjectClick(item)}
              >
                <div className="p-8">
                  <div className="flex items-center">
                    <div>
                      <Player
                        src={item["Project-Image"]}
                        className="player"
                        loop
                        autoplay
                        style={{ height: "100px", width: "70px" }}
                      />
                    </div>
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        {item["Project-Name"]}
                      </p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    {item["Project-Details"]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedProject && (
              <Modalprojects
                project={selectedProject}
                setSelectedProject={setSelectedProject}
              />
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
