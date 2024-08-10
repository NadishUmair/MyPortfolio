
import React from 'react'
import ProjectsData from './projectdata'
import Head from 'next/head';
const metaData = {
  title: "Nadish Umair Portfolio",
  description: "Nadish Umair Full Stack Developer Portfolio Projects",
  keywords: "nadish umair,projects, portfolio, web development, react, nextjs",
  author: "Nadish Umair",
 
};
const Projects = () => {
  return (
    <>
    <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta name="author" content={metaData.author} />
        <meta property="og:title" content={metaData.title} />
        
      </Head>
   
    <div className="p-4 mt-4z">
      <h2 className="text-2xl font-bold mb-4 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ProjectsData.map((item, index) => (
          <div key={index} className="relative group mb-6 shadow-lg rounded-lg overflow-hidden">
            <a href={item.projectLive} target="_blank" rel="noopener noreferrer">
              <div className="w-full h-60 md:h-72"> {/* Set a fixed height for small screens */}
                <img src={item.projectImg} className="w-full h-full object-contain" alt={item.projectName} /> {/* Use object-contain */}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[#61D2B4] tracking-wider text-[2rem] font-semibold">{item.projectName}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Projects;