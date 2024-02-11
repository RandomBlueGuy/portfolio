import React from 'react';

const XPcard = () => {
  return (
    <figure className='border-2 text-vBlue border-vBlue rounded-[10px]  w-[400px] overflow-hidden transition-all duration-300 hover:bg-vBlue/30 hover:scale-[105%] hover:translate-y-[-5px]'>
      <div className='w-full h-[300px] bg-gradient-to-br  flex justify-center items-center'>
         <span className="text-7xl font-title text-vWhite/20">[ IMG ]</span>
      </div>
      <div className='p-[20px] flex flex-col gap-[15px]'>
        <h3 className='text-selected w-[300px] mb-[10px]'>[ INSERT COOL PROJECT TITLE ]</h3>
        <p className=''>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <button className='relative box-content group hover:scale-105 transition-all duration-300 border-2 border-selected rounded-[5px] text-vWhite font-bold font-tag h-[40px] px-[12px]'>
          <div className='w-[0%] group-hover:w-[100%] transition-all duration-500 h-full absolute top-0 left-0 bg-selected'></div>
          <div className='absolute inset-0 w-full h-full flex justify-center items-center'>View More</div>
        </button>
      </div>
    </figure>
  );
};

export default XPcard;
