import React from 'react';
import { HERO_CONTENT } from '../constants/index.js';
import profilePic from '../assets/Profile.jpeg';
import { motion } from 'framer-motion';

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.5 } // Delays each child
  },
};

const nameVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const roleVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
};

const paragraphVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 1 } },
};

const imageVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1.5, delay: 1.5 } },
};

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-12 text-white">
      {/* Content Container */}
      <div className="flex flex-col lg:flex-row items-center lg:items-center">
        
        {/* Left Section (Text Content) */}
        <motion.div 
          className="w-full lg:w-1/2 px-8 lg:px-14"
          initial="hidden"
          animate="visible"
          variants={textContainerVariants}
        >
          <motion.h1 
            className="text-yellow-300 pb-6 text-6xl font-thin tracking-tight lg:text-8xl"
            variants={nameVariants}
          >
            Atharva Walzade
          </motion.h1>

          <motion.span 
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-gray-300 text-4xl tracking-tight"
            variants={roleVariants}
          >
            FrontEnd Designer
          </motion.span>

          <motion.p 
            className="text-gray-300 my-4 max-w-xl py-4 font-light tracking-tighter text-justify"
            variants={paragraphVariants}
          >
            {HERO_CONTENT}
          </motion.p>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div className="w-[680px] h-[420px] overflow-hidden rounded-md border border-gray-600 shadow-2xl">
            <img
              src={profilePic}
              alt="Atharva Walzade"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
