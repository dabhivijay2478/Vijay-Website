import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { useInView } from "react-intersection-observer";
import { FaReact, FaNode, FaGitAlt, FaPython, FaGithub } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
export default function About() {
  const [animationVisible, setAnimationVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setAnimationVisible(true);
      setSkillsVisible(true);
    }
  }, [inView]);

  return (
    <>
      <div
        className="w-full h-full mb-10 text-slate-00 "
        textdirection="toutContent w-full my-0 mb-4 mx-auto py-20 sm:py-0  flex flex-col-reverse sm:flex-row text-left sm:text-right"
      >
        <section className="pt-10 overflow-hidden  md:pt-0 sm:pt-16 2xl:pt-16 w-full h-full">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: animationVisible ? 1 : 0,
                  y: animationVisible ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
              >
                <Player
                  src="https://assets7.lottiefiles.com/packages/lf20_w51pcehl.json"
                  className="player"
                  loop
                  autoplay
                  style={{ height: "300px", width: "300px" }}
                />
              </motion.div>

              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: skillsVisible ? 1 : 0,
                  x: skillsVisible ? 0 : -20,
                }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold leading-tight text-slate-00 sm:text-4xl lg:text-5xl">
                  Skills
                </h2>
              </motion.div>
            </div>
            <div class="bg-black ">
              <div id="features" class="mx-auto max-w-6xl">
                <ul class="mt-5 grid grid-cols-2 gap-8 text-center text-slate-700 md:grid-cols-4">
                  <li class="rounded-xl border border-solid border-slate-700  px-6 py-8 shadow-lg hover:border-cyan-500 cursor-pointer">
                    <SiMongodb class="mx-auto h-10 w-10 text-green-500" />
                  </li>
                  <li class="rounded-xl border border-solid border-slate-700  px-6 py-8 shadow-lg hover:border-cyan-500 cursor-pointer">
                    <SiExpress class="mx-auto h-10 w-10 text-white" />
                  </li>

                  <li class="rounded-xl border border-solid border-slate-700  px-6 py-8 shadow-lg hover:border-cyan-500 cursor-pointer">
                    <FaReact class="mx-auto h-10 w-10 text-sky-600" />
                  </li>
                  <li class="rounded-xl border border-solid border-slate-700  px-6 py-8 shadow-lg hover:border-cyan-500 cursor-pointer">
                    <FaNode class="mx-auto h-16 w-16 text-green-700 " />
                  </li>
                  <li class="rounded-xl border border-solid border-slate-700  px-6 py-8 shadow-lg hover:border-cyan-500 cursor-pointer">
                    <IoLogoJavascript class="mx-auto h-12 w-12 bg-yellow-600 text-black rounded-sm" />
                  </li>

                  <li class="rounded-xl border border-solid border-slate-700  px-6 py-8 shadow-lg hover:border-cyan-500 cursor-pointer">
                    <BiLogoTailwindCss class="mx-auto h-10 w-10 text-cyan-500" />
                  </li>
                  <li class="rounded-xl border border-solid border-slate-700  px-6 py-8 shadow-lg hover:border-cyan-500 cursor-pointer">
                    <IoLogoFirebase class="mx-auto h-10 w-10 text-amber-500" />
                  </li>
                  <li class="rounded-xl border border-solid border-slate-700  px-6 py-8 shadow-lg hover:border-cyan-500 cursor-pointer">
                    <SiMysql class="mx-auto h-16 w-16 text-sky-800" />
                  </li>
                  <li class="rounded-xl border border-solid border-slate-700  px-6 py-8 shadow-lg hover:border-cyan-500 cursor-pointer">
                    <FaGitAlt class="mx-auto h-16 w-16 text-orange-500" />
                  </li>
                  <li class="rounded-xl border border-solid border-slate-700  px-6 py-8 shadow-lg hover:border-cyan-500 cursor-pointer">
                    <FaGithub class="mx-auto h-16 w-16 text-white" />
                  </li>
                  <li class="rounded-xl border border-solid border-slate-700  px-6 py-8 shadow-lg hover:border-cyan-500 cursor-pointer">
                    <FaPython class="mx-auto h-16 w-16 text-blue-500" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
