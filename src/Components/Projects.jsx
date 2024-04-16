import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modalprojects from "./Modalprojects";
import ProjectData from "../Json/Projects.json";
import { TbCertificate } from "react-icons/tb";
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="bg-black">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10   bg-black"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Project's
          </h2>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {ProjectData.map((item, index) => (
            <div
              key={index}
              className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow"
            >
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage: `linear-gradient(${item["Project-Color"]} 0%, ${item["Project-Color"]} 100%)`,
                  borderColor: `${item["Project-Color"]}`,
                }}
              >
                <TbCertificate size={30} />
              </div>
              <h3 className="mt-6 text-gray-400">{item["Project-Name"]}</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                {item["Project-Details"]}
              </p>
              <button
                className={`mt-4 mb-0 bg-${item["Project-Color"]} text-cyan-500 px-4 py-2 rounded-lg`}
                onClick={() => handleProjectClick(item)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>

      </section>

      <AnimatePresence>
        {selectedProject && (
          <Modalprojects
            project={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
