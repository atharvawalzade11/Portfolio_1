import React from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.5 } // Stagger child animations
  },
};

const headingVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const paragraphVariants = {
  hidden: { x: 100, opacity: 0 }, // Moves from right to left
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
};

const imageVariants = {
  hidden: { x: -100, opacity: 0 }, // Moves from left to right
  visible: { x: 0, opacity: 1, transition: { duration: 1.5, delay: 1 } },
};

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-12">
      {/* Section Title */}
      <motion.h2 
        className="my-30 text-center text-4xl font-semibold text-amber-50"
        initial="hidden"
        animate="visible"
        variants={headingVariants}
      >
        About <span className="text-gray-400">Me</span>
      </motion.h2>

      {/* Content Container */}
      <motion.div 
        className="flex flex-col lg:flex-row items-center lg:items-start"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Section - Image (moves left to right) */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          variants={imageVariants}
        >
          <div className="w-[550px] h-[350px] overflow-hidden rounded-sm border border-gray-600 shadow-lg">
            <img
              className="w-full h-full object-cover"
              src={aboutImg}
              alt="About Me"
            />
          </div>
        </motion.div>

        {/* Right Section - Text (moves right to left) */}
        <motion.div 
          className="w-full lg:w-1/2 px-8 lg:px-14 mt-8 lg:mt-0"
          variants={paragraphVariants}
        >
          <p className="text-gray-300 my-2 max-w-xl py-6 font-light tracking-tighter text-justify">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
