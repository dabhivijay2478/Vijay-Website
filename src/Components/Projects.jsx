import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectData from "../Json/Data.json";
import { TbCertificate, TbBrandRedux, TbMilk } from "react-icons/tb";
import { FaRobot, FaConnectdevelop } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  const getIconComponent = (logo) => {
    let IconComponent;

    if (logo.startsWith("Tb")) {
      switch (logo) {
        case "TbCertificate":
          IconComponent = TbCertificate;
          break;
        case "TbBrandRedux":
          IconComponent = TbBrandRedux;
          break;
        case "TbMilk":
          IconComponent = TbMilk;
          break;
        default:
          IconComponent = null;
      }
    } else if (logo.startsWith("Fa")) {
      switch (logo) {
        case "FaRobot":
          IconComponent = FaRobot;
          break;
        case "FaConnectdevelop":
          IconComponent = FaConnectdevelop;
          break;
        default:
          IconComponent = null;
      }
    } else {
      return <img src={logo} alt="Project Logo" className="w-18 h-18 " />;
    }

    if (IconComponent) {
      return <IconComponent size={30} className="text-indigo-800" />;
    } else {
      return null;
    }
  };

  return (
    <div className="bg-black">
      <section className="relative block px-6 py-10 md:py-20 md:px-10 bg-black">
        <div className="relative mx-auto max-w-5xl text-center">
          <h2 className="block w-full bg-gradient-to-b  text-white bg-clip-text font-bold text-transparent text-4xl sm:text-4xl">
            Projects
          </h2>
        </div>

        <div className=" relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {ProjectData.projects.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-md border border-fuchsia-500 p-8 text-center shadow relative"
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={animate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              ref={ref}
            >
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage: `linear-gradient(${item["Project-Color"]} 0%, ${item["Project-Color"]} 100%)`,
                  borderColor: `${item["Project-Color"]}`,
                }}
              >
                {getIconComponent(item["Project-Logo"])}
              </div>
              <h3 className="mt-6 text-gray-400">{item["Project-Name"]}</h3>
              <p className="my-4 mb-5 font-normal leading-relaxed tracking-wide text-white">
                {item["Project-Details"]}
              </p>
              <a
                href={item["Project-GitHubLink"]}
                target="_blank"
                className="link link-primary  absolute left-4 bottom-4  text-cyan-400 px-4 py-2 rounded-lg hover:text-blue-500"
              >
                View Github
              </a>
              {item["Project-Live-Link"] && (
                <a
                  href={item["Project-Live-Link"]}
                  target="_blank"
                  className="link link-primary absolute right-4 bottom-4  text-cyan-400 px-4 py-2 rounded-lg hover:text-blue-500"
                >
                  View Live
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
