import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import Skills from "./Skills";
import { useInView } from "react-intersection-observer";

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
            <Skills />
          </div>
        </section>
      </div>
    </>
  );
}
