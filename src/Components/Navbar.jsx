import React, { useState } from "react";
import { motion } from "framer-motion";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Blog from "./Blog";
import Contactus from "./Contactus";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navListVariants = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <>
      <div className="bg-black">
        <nav className="relative flex items-center justify-between h-16 sm:h-20 md:h-24 lg:h-28 px-4 md:px-8">
          <div className="flex items-center flex-1">
            <a href="#home" aria-label="Home">
              <h2 className="text-cyan-500 text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold">
                Vijay Dabhi
              </h2>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-10  justify-center">
            <motion.div
              className="hidden md:flex md:space-x-10 justify-center"
              initial="hidden"
              animate="visible"
              variants={navListVariants}
            >
              <motion.div variants={navItemVariants}>
                <a
                  href="#about"
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  About
                </a>
              </motion.div>
              <motion.div variants={navItemVariants}>
                <a
                  href="#about"
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Skill
                </a>
              </motion.div>
              <motion.div variants={navItemVariants}>
                <a
                  href="#experience"
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Experience
                </a>
              </motion.div>
              <motion.div variants={navItemVariants}>
                <a
                  href="#projects"
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Project
                </a>
              </motion.div>
              <motion.div variants={navItemVariants}>
                <a
                  href="#blog"
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Blog
                </a>
              </motion.div>
              <motion.div variants={navItemVariants}>
                <a
                  href="#contact"
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Contact
                </a>
              </motion.div>
            </motion.div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              aria-label="Main menu"
              aria-haspopup="true"
              role="button"
              id="menu_btn"
              tabIndex={0}
              className="btn inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              onClick={toggleMobileMenu}
            >
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <motion.div
          className={`md:hidden ml-5 mr-5 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          initial="hidden"
          animate={isMobileMenuOpen ? "visible" : "hidden"}
          id="mobile_menu"
          tabIndex={0}
        >
          <motion.div variants={navListVariants}>
            <motion.div variants={navItemVariants}>
              <a
                href="#about"
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out block py-3"
              >
                About
              </a>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <a
                href="#about"
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out block py-3"
              >
                Skill
              </a>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <a
                href="#experience"
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out block py-3"
              >
                Experience
              </a>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <a
                href="#projects"
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out block py-3"
              >
                Project
              </a>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <a
                href="#blog"
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out block py-3"
              >
                Blog
              </a>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <a
                href="#contact"
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out block py-3"
              >
                Contact
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="bg-black">
        <main>
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>

          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="blog">
            <Blog />
          </div>
          <div id="contact">
            <Contactus />
          </div>
        </main>
        <div className="badge badge-primary badge-lg rounded-full h-10 w-10">
          {" "}
          <i class="fa-solid fa-arrow-up"></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
