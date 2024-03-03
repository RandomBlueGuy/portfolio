import React from 'react';
import TitleText from './TitleText';

const ContactComponent = () => {
  return (
    <div
      id='about'
      className='relative py-[130px] w-full h-fit flex flex-shrink-0 flex-col justify-center items-start gap-[60px]'>
      <div className='absolute  right-0 flex flex-col justify-center items-center h-[70%] w-auto aspect-square '>
        <figure className='absolute inset-0 mix-blend-screen  bg-[radial-gradient(rgba(0,100,255,0.4)_0%,rgba(0,100,255,0.1))] h-full opacity-70 rounded-full blur-[90px] aspect-square' />
        <div className='absolute w-[400px] animate-[spin_60000ms_linear_infinite]  aspect-square border-4 border-selected border-dashed rounded-full' />
        <div className='absolute w-[200px] animate-[spin_60000ms_linear_infinite] mix-blend-overlay aspect-square border-4 border-selected border-dashed rounded-full' />
        <span className='text-5xl'>
          AVATAR BRUJOMÀGICO
          <br />
          <br />
          https://sunsquarez.github.io/
          <br />
          <br />
          https://www.warner.codes/
        </span>
      </div>
      <div className='z-10 w-[600px]'>
        <TitleText num={'01.'} nTitle={'About Me'} />
        <p className='pl-[3rem]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque
          nec nam. Nec feugiat nisl pretium fusce id velit ut. Netus et malesuada fames ac turpis
          egestas integer. Phasellus vestibulum lorem sed risus ultricies.
          <br />
          <br />
          Convallis convallis tellus id interdum velit laoreet id donec ultrices. Elit at imperdiet
          dui accumsan sit amet. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Morbi
          tristique senectus et netus et malesuada. Cursus mattis molestie a iaculis at erat
          pellentesque adipiscing.
        </p>
      </div>
    </div>
  );
};

export default ContactComponent;
