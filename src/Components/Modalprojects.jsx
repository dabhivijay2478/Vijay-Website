import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Modalprojects({ project, setSelectedProject }) {
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-box relative w-11/12 max-w-5xl text-slate-00 bg-white rounded shadow"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 p-2 text-xl text-gray-600 hover:text-gray-800 z-10"
            >
              X
            </button>
            <div className="flex items-center">
              <div>
                <Player
                  src={project['Project-Logo']}
                  className="player"
                  loop
                  autoplay
                  style={{ height: '150px', width: '100px' }}
                />
              </div>
              <div className="ml-5">
                <h3 className="font-bold text-lg">Project Name: <span className="text-teal-600">{project['Project-Name']}</span></h3>
                <p className="font-bold text-lg">Project Details: <span className="text-teal-600">{project['Project-Details']}</span></p>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="font-bold text-lg">Technologies:</h3>
              <ul>
                {project['Project-Technology'].map((technology, index) => (
                  <li key={index} className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-blue-600 mr-2"></span>
                    <span className="text-emerald-500">{technology}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5">
              <h3 className="font-bold text-lg">Project Database: <span className="text-teal-600">{project['Project-Database']}</span></h3>
              <h3 className="font-bold text-lg">Project GitHub Link: <a href={project['Project-GitHubLink']} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View on GitHub</a></h3>
              <h3 className="font-bold text-lg">Project Live Link: <a href={project['Project-Live-Link']} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View on Live</a></h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
