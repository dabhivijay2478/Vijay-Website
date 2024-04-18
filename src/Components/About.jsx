import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
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
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setAnimationVisible(true);
      setSkillsVisible(true);
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [inView, controls]);

  return (
    <>
      <section className="mt-10 pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 w-full h-full relative">
        <div class="bg-black">
          <div id="features" class="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
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
                animate={controls}
                initial={{ opacity: 0, y: 20 }}
                className="mb-10"
              >
                <h2 className="text-4xl font-bold leading-tight text-white sm:text-4xl lg:text-4xl ml-6">
                  Skills
                </h2>
                <ul className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-2 text-center text-slate-700">
                  {[
                    { Icon: SiMongodb, color: "text-green-500" },
                    { Icon: SiExpress, color: "text-white" },
                    { Icon: FaReact, color: "text-sky-600" },
                    { Icon: FaNode, color: "text-green-700" },
                    {
                      Icon: IoLogoJavascript,
                      color: "bg-yellow-600 text-black rounded-sm",
                    },
                    { Icon: BiLogoTailwindCss, color: "text-cyan-500" },
                    { Icon: IoLogoFirebase, color: "text-amber-500" },
                    { Icon: SiMysql, color: "text-sky-800" },
                    { Icon: FaGitAlt, color: "text-orange-500" },
                    { Icon: FaGithub, color: "text-white" },
                    { Icon: FaPython, color: "text-blue-500" },
                  ].map(({ Icon, color }, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={controls}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="rounded-xl border border-solid border-slate-700 px-6 py-8 shadow-lg hover:border-cyan-500 cursor-pointer"
                    >
                      <Icon className={`mx-auto h-16 w-16 ${color}`} />
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
