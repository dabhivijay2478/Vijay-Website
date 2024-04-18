import React from "react";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <>
      <motion.div
        className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-white">
          Blog
        </h2>

        <div className="h-screen flex flex-col items-center justify-center text-center">
          <div className="text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold"
            >
              Coming Soon
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-lg"
            >
              We're working on something awesome!
            </motion.p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
