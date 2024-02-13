import React from 'react';
import XPcard from './XPcard';

const WorkComponent = () => {
  return (
    <div
      id='work'
      className='snap-center w-full h-fit flex flex-shrink-0 flex-col justify-center items-start  gap-[60px]'>
      <div className='w-full '>
        <h2 className='relative font-tag font-bold text-7xl text-vWhite mb-[50px]'>
          <span className='-z-10 box-content  leading-none text-10xl text-transparent font-outline-2 font-title font-bold'>
            03.
          </span>
          <span className='z-0 absolute bottom-0 left-0 translate-x-[40%]'>Work/Experience</span>
        </h2>
        <p className='my-[50px] font-tag text-xl'>
          // Check some of the work I have done over the last few years
        </p>
        <div className='w-full flex flex-wrap gap-[2rem] box-content justify-around hover:items-start'>
          <XPcard />
          <XPcard />
          <XPcard />
          <XPcard />
          <XPcard />
          <XPcard />
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
