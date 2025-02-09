import React from 'react';
import { HERO_CONTENT } from '../constants/index.js';
import profilePic from '../assets/Profile.jpeg';

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-12 text-white">
      {/* Content Container */}
      <div className="flex flex-col lg:flex-row items-center lg:items-center">
        
        {/* Left Section (Text Content) */}
        <div className="w-full lg:w-1/2 px-8 lg:px-14">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-yellow-300 pb-6 text-6xl font-thin tracking-tight lg:text-8xl">
              Atharva Walzade
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-gray-300 text-4xl tracking-tight">
              FrontEnd Designer
            </span>
            <p className="text-gray-300 my-4 max-w-xl py-4 font-light tracking-tighter text-justify">
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-[680px] h-[420px] overflow-hidden rounded-md border border-gray-600 shadow-2xl">
            <img
              src={profilePic}
              alt="Atharva Walzade"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
