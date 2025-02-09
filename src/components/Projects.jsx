import React from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className="my-20 border-b border-neutral-800 text-center text-amber-50">
      <h2 className="mb-16 text-4xl font-bold text-white">Projects</h2>

      <div className="space-y-12">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="flex flex-wrap items-center justify-center gap-8 border-b border-gray-700 pb-8"
          >
            {/* Project Image */}
            <div className="w-full max-w-sm lg:w-1/4">
              <img 
                src={project.image} 
                width={180} 
                height={180} 
                alt={project.title} 
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Project Details */}
            <div className="w-full max-w-2xl lg:w-3/4 text-left">
              <h6 className="mb-2 text-2xl font-semibold text-white">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="rounded-lg border border-gray-500 bg-transparent px-3 py-1 text-sm text-white shadow-sm transition-all duration-300 ease-in-out hover:text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
