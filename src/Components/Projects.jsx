import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
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
              Projects
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed dark:animate-pulse text-white">
              Click Project Card And Open Project Details
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {ProjectData.map((item, index) => (
              <li key={index} className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                  </div>
                  <a href="#" className="cursor-pointer" onClick={() => handleProjectClick(item)}>
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img src={item["Project-Image"]} className="w-12 h-12 bg-center bg-cover border rounded-full" alt={item["Project-Name"]} />
                        <div>
                          <h3 className="text-lg font-semibold text-white">{item["Project-Name"]}</h3>
                          <p className="text-gray-500 text-md">{item["Project-Technology"].join(", ")}</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">{item["Project-Details"]}</p>
                    </div>
                  </a>
                </div>
              </li>
            ))}
          </ul>

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
