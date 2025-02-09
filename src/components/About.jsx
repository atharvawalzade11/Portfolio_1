import React from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-12">
      {/* Section Title */}
      <h2 className="my-30 text-center text-4xl font-semibold text-amber-50">
        About <span className="text-gray-400">Me</span>
      </h2>

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-[550px] h-[350px] overflow-hidden rounded-sm border border-gray-600 shadow-lg">
            <img
              className="w-full h-full object-cover"
              src={aboutImg}
              alt="About Me"
            />
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="w-full lg:w-1/2 px-8 lg:px-14 mt-8 lg:mt-0">
          <p className="text-gray-300 my-2 max-w-xl py-6 font-light tracking-tighter text-justify">
            {ABOUT_TEXT}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
