import React from 'react';
import { EDUCATION } from '../constants'; // Importing EDUCATION data

const Education = () => {
  // Sort the education array in the desired order: Degree → Diploma → School
  const sortedEducation = [
    ...EDUCATION.filter(item => item.title === "Degree"),
    ...EDUCATION.filter(item => item.title === "Diploma"),
    ...EDUCATION.filter(item => item.title === "School"),
  ];

  return (
    <div className="my-20 border-b border-neutral-800 text-center text-amber-50">
      <h2 className="mb-16 text-4xl font-bold text-white">Education</h2>

      <div className="space-y-12">
        {sortedEducation.map((education, index) => (
          <div key={index} className="flex flex-wrap items-center justify-center gap-8 border-b border-gray-700 pb-8">
            {/* Left Section - Image with white background */}
            <div className="w-full max-w-sm lg:w-1/4 bg-white p-4 rounded-xl shadow-lg">
              <img 
                src={education.image} // Using dynamic image from EDUCATION array
                alt={education.institute_name}
                className="rounded-xl shadow-lg w-full h-auto object-contain"  // Adjust image size and prevent overflow
              />
            </div>

            {/* Right Section - Text */}
            <div className="w-full max-w-2xl lg:w-3/4 text-left">
              <h6 className="mb-2 text-2xl font-semibold text-white">{education.title}</h6>
              <p className="mb-4 text-neutral-400">{education.institute_name}</p>
              <p className="text-neutral-300 my-2">{education.duration}</p>

              {/* Major or Achievements */}
              {education.major && (
                <p className="text-neutral-300 my-2 font-light tracking-tighter">
                  Major: {education.major}
                </p>
              )}

              {education.achievements && (
                <ul className="text-neutral-300 my-2 font-light tracking-tighter">
                  <strong>Achievements:</strong>
                  {education.achievements.map((achievement, idx) => (
                    <li key={idx}>- {achievement}</li>
                  ))}
                </ul>
              )}

              {/* Education Link */}
              <a
                href={education.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-300"
              >
                Visit Website
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
