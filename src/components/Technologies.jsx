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
      <div className="flex flex-wrap items-center justify-center gap-6">
        {icons.map((tech, index) => (
          <motion.div
            key={index}
            className="w-24 h-24 flex items-center justify-center rounded-2xl border-4 border-gray-600 bg-neutral-800 shadow-lg"
            animate={{
              y: [0, -10, 0], // Moves up and down
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.2, // Stagger effect
            }}
          >
            <FontAwesomeIcon icon={tech.icon} className={`${tech.color} text-6xl`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;


//after getting all db knowledge or only if sql use this and remove commet from index.html :
// import React from "react";
// import "devicon/devicon.min.css"; // Import Devicon styles

// function Technologies() {
//     return (
//         <div className="border-b border-neutral-800 pb-24">
//             <h2 className="my-20 font-semibold text-center text-4xl text-amber-50">
//                 Technologies
//             </h2>

//             {/* Tech Icons Container */}
//             <div className="flex flex-wrap items-center justify-center gap-6">
//                 {/* React */}
//                 <div className="w-24 h-24 flex items-center justify-center rounded-2xl border-4 border-gray-600 bg-neutral-800 shadow-lg">
//                     <i className="devicon-react-original text-blue-400 text-6xl"></i>
//                 </div>

//                 {/* HTML */}
//                 <div className="w-24 h-24 flex items-center justify-center rounded-2xl border-4 border-gray-600 bg-neutral-800 shadow-lg">
//                     <i className="devicon-html5-plain text-orange-500 text-6xl"></i>
//                 </div>

//                 {/* CSS */}
//                 <div className="w-24 h-24 flex items-center justify-center rounded-2xl border-4 border-gray-600 bg-neutral-800 shadow-lg">
//                     <i className="devicon-css3-plain text-blue-500 text-6xl"></i>
//                 </div>

//                 {/* JavaScript */}
//                 <div className="w-24 h-24 flex items-center justify-center rounded-2xl border-4 border-gray-600 bg-neutral-800 shadow-lg">
//                     <i className="devicon-javascript-plain text-yellow-300 text-6xl"></i>
//                 </div>

//                 {/* Java */}
//                 <div className="w-24 h-24 flex items-center justify-center rounded-2xl border-4 border-gray-600 bg-neutral-800 shadow-lg">
//                     <i className="devicon-java-plain text-red-500 text-6xl"></i>
//                 </div>

//                 {/* SQL */}
//                 <div className="w-24 h-24 flex items-center justify-center rounded-2xl border-4 border-gray-600 bg-neutral-800 shadow-lg">
//                     <i className="devicon-mysql-plain text-white text-6xl"></i>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Technologies;
