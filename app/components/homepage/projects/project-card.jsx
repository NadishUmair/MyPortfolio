// 

'use client';
import Link from 'next/link';
import * as React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-900">
      
      {/* Image Container */}
      <div className="w-full h-64 md:h-72 lg:h-80 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="max-h-full max-w-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Overlay for Project Name + Button */}
      <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-sm rounded-xl px-4 py-3 flex justify-between items-center">
        <h3 className="text-white text-lg md:text-xl font-semibold">{project.name}</h3>
        <Link href={project.url} target="_blank">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium text-sm md:text-base transition-all duration-300 hover:scale-105 hover:brightness-110">
            Demo
          </button>
        </Link>
      </div>

      {/* Optional subtle hover effect: soft glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}

export default ProjectCard;