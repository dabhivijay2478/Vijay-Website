import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation"; // Import TypeAnimation from react-type-animation
import logo from "../assets/logo1.JPG";

export default function Home() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5, type: "tween" },
    },
  };

  const typingVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.5, type: "tween" },
    },
  };

  return (
    <>
      <motion.div
        className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 bg-black"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1
          className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-6"
          whileHover={{ scale: 1.05 }}
        >
          Hey there,{" "}
          <span className="text-indigo-400">
            <AnimatePresence>
              {showText && (
                <motion.span
                  variants={nameVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  I'm{" "}
                  <motion.span
                    variants={typingVariants}
                    className="inline-block"
                  >
                    <TypeAnimation
                      sequence={[" Vijay Dabhi", " MERN Stack Developer"]}
                      speed={300}
                      repeat={Infinity}
                    />
                  </motion.span>
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </h1>
        <p
          className="text-gray-300 mb-8 font-sans text-lg"
          whileHover={{ scale: 1.05 }}
        >
          👋 Hi! I'm passionate about developing with the{" "}
          <span className="text-cyan-600">MERN stack</span> (MongoDB,
          Express.js, React.js, Node.js), and enjoy crafting robust and
          efficient applications. With experience in Linux environments, I bring
          a wealth of knowledge to my projects. I specialize in creating
          intuitive user interfaces using React.js and React Native, and my
          backend skills include Node.js, Express.js, MongoDB, and Firebase.
          Let's connect and build something amazing together!
        </p>
        <div className="flex flex-wrap justify-start gap-4">
          <motion.a
            href="https://github.com/dabhivijay2478"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 rounded-lg p-3 flex items-center gap-2 text-white hover:bg-indigo-700"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
              alt="Github"
              className="w-6 h-6"
            />
            <span>Visit my Github</span>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/vijaydabhi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 rounded-lg p-3 flex items-center gap-2 text-white hover:bg-indigo-700"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
            <span>Follow me on Linkedin</span>
          </motion.a>
          <motion.a
            href="https://twitter.com/vijaydabhi28"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 rounded-lg p-3 flex items-center gap-2 text-white hover:bg-indigo-700"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
              alt="Twitter"
              className="w-6 h-6"
            />
            <span>Follow me on Twitter</span>
          </motion.a>
        </div>
        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style={{
            backgroundImage:
              "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div>
      </motion.div>
    </>
  );
}
