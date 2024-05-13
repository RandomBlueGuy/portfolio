import React from 'react';

const XPcard = () => {
  return (
    <figure className='border-2 text-vBlue border-vBlue rounded-[10px]  w-[400px] overflow-hidden transition-all duration-300 hover:bg-vBlue/30 hover:scale-[102.5%] hover:shadow-[0_10px_20px_5px_rgba(0,0,0,0.5)] hover:translate-y-[-5px]'>
      <div className='relative w-full h-[300px] bg-gradient-to-br flex justify-center items-center'>
        <span className='text-7xl font-title text-vWhite/20'>[ IMG ]</span>
        <h3 className='absolute bottom-0 text-selected mb-[10px]'>[ INSERT COOL PROJECT TITLE ]</h3>
      </div>
      <div className='p-[20px] flex flex-col gap-[15px]'>
        <button className='relative box-border group transition-all duration-300 border-2 border-selected rounded-[5px] hover:border-0 text-vWhite font-bold  h-[40px] px-[12px]'>
          <div className='w-[0%] group-hover:w-[100%]  transition-all duration-500 h-full absolute top-0 left-0 bg-selected rounded-[5px]'></div>
          <span className='absolute inset-0 w-full h-full flex justify-center items-center'>
            View More
          </span>
        </button>
      </div>
    </figure>
  );
};

export default XPcard;
