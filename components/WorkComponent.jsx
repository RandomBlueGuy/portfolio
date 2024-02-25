import React from 'react';
import XPcard from './XPcard';
import XPfile from './XPfile';
import TitleText from './TitleText';

const WorkComponent = () => {
  const projectsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div
      id='work'
      className='w-full h-fit flex flex-shrink-0 flex-col justify-center items-start  gap-[60px]'>
      <div className='w-full'>
        <TitleText num={'03.'} nTitle={'Work'} />
        <p className='my-[50px] font-tag text-xl'>
          // Check some of the work I have done over the last few years
        </p>
        <div className='w-full flex flex-wrap box-content justify-around hover:items-start pl-[2rem]'>
          {projectsArr.map((project, index) => (
            <XPfile key={index} index={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
