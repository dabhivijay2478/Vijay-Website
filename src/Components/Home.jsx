import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation"; // Import TypeAnimation from react-type-animation
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

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
            <FaGithub className="w-6 h-6" />
            <span>Visit my Github</span>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/vijaydabhi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 rounded-lg p-3 flex items-center gap-2 text-white hover:bg-indigo-700"
            whileHover={{ scale: 1.05 }}
          >
            <FaLinkedinIn className="w-6 h-6" />
            <span>Follow me on Linkedin</span>
          </motion.a>
          <motion.a
            href="https://twitter.com/vijaydabhi28"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 rounded-lg p-3 flex items-center gap-2 text-white hover:bg-indigo-700"
            whileHover={{ scale: 1.05 }}
          >
            <FaTwitter className="w-6 h-6" />
            <span>Follow me on Twitter</span>
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}
