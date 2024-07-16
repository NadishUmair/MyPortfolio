import React from 'react';

export default function HeroMain() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Assets/NadishUmairResume.pdf';
    link.download = 'NadishUmair.pdf';
    link.click();
  };
  return (
    <div className='overflow-hidden flex flex-col justify-center items-center w-full md:h-[80vh] bg-transparent absolute top-[40%] md:top-[20%] z-10'>
      <div className='text-white text-center w-[90%] md:w-[70%]'>
        <h1 className='text-5xl font-bold'>
          <span className='text-[#61D2B4]'>Nadish </span>
          <span>Umair</span>
        </h1>
        <p className='leading-6 mt-6 font-light'>
          A creative thinker with a passion for solving complex challenges through innovative solutions.
          Proactive in staying updated with the latest industry trends and emerging technologies to incorporate
          cutting-edge features into projects.
        </p>
        <div>
          <button onClick={handleDownload} className='border rounded-md text-[#61D2B4] mt-6 py-2 px-6 tracking-wide text-xl font-bold hover:text-white hover:border-[#61D2B4] ease-in-out'>
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}
