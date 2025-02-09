import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // ✅ Import LeetCode icon

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-8">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-10" />
      </div>

      {/* Social Icons */}
      <div className="flex items-center space-x-6 text-white text-2xl">
        <a
          href="https://www.linkedin.com/in/atharva-walzade-90276028b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-gray-300 cursor-pointer" />
        </a>
        <a
          href="https://leetcode.com/u/atharvawalzade11/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode className="hover:text-gray-300 cursor-pointer" />
        </a>
        <a
          href="https://github.com/atharvawalzade11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-gray-300 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/atharvawalzade11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-gray-300 cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
