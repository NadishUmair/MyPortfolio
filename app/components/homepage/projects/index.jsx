// import { projectsData } from '@/utils/data/projects-data';
// import ProjectCard from './project-card';

// const Projects = () => {

//   return (
//     <div id='projects' className="relative z-50  my-12 lg:my-24">
//       <div className="sticky top-10">
//         <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
//         <div className="flex items-center justify-start relative">
//           <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
//             PROJECTS
//           </span>
//           <span className="w-full h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>

//       <div className="pt-24">
//         <div className="flex flex-col gap-6">
//           {projectsData.map((project, index) => (
//             <div
//               id={`sticky-card-${1}`}
//               key={project.id}
//               className="sticky-card w-full mx-auto max-w-2xl sticky"
//             >
//               <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
//                 <ProjectCard project={project} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Dynamically import Swiper for client-side only
const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

const Projects = () => {
  // Group projects into sets of 3 for each slide
  const groupedProjects = [];
  for (let i = 0; i < projectsData.length; i += 2) {
    groupedProjects.push(projectsData.slice(i, i + 2));
  }

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24 ">
      {/* Header */}
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px]  bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Swiper */}
      <div className="pt-16">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1} // 1 big slide containing 3 projects
        >
          {groupedProjects.map((group, idx) => (
            <SwiperSlide key={idx}>
             <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center">
                {group.map((project) => (
                  <div key={project.id} className="flex-1 mt-6">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;