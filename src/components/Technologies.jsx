import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faCss3Alt, faJs, faJava } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons"; // SQL uses database icon
import { motion } from "framer-motion";

const icons = [
  { icon: faReact, color: "text-blue-400" },
  { icon: faHtml5, color: "text-orange-500" },
  { icon: faCss3Alt, color: "text-blue-500" },
  { icon: faJs, color: "text-yellow-300" },
  { icon: faJava, color: "text-red-500" },
  { icon: faDatabase, color: "text-green-400" },
];

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 font-semibold text-center text-4xl text-amber-50">
        Technologies
      </h2>

      {/* Tech Icons Container */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-6"
        initial={{ x: -100, opacity: 0 }} // Move all from left
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
        }}
      >
        {icons.map((tech, index) => (
          <motion.div
            key={index}
            className="w-24 h-24 flex items-center justify-center rounded-2xl border-4 border-gray-600 bg-neutral-800 shadow-lg"
            animate={{ y: [0, -10, 0] }} // Bouncing effect
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.3, // Each icon bounces at different times
            }}
          >
            <FontAwesomeIcon icon={tech.icon} className={`${tech.color} text-6xl`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;
