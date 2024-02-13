import React from 'react';

const ContactComponent = () => {
  return (
    <div
      id='about'
      className=' py-[130px]  w-full bg-black/30 h-fit flex flex-shrink-0 flex-col justify-center items-start gap-[60px]'>
      <div className='w-[500px] '>
        <h2 className='relative font-tag font-bold text-7xl text-vWhite mb-[50px]'>
          <span className='-z-10 box-content  leading-none text-10xl text-transparent font-outline-2 font-title font-bold'>
            01.
          </span>
          <span className='z-0 absolute bottom-0 left-0 translate-x-[40%]'>About Me</span>
        </h2>

        <p className=''>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque
          nec nam. Nec feugiat nisl pretium fusce id velit ut. Netus et malesuada fames ac turpis
          egestas integer. Phasellus vestibulum lorem sed risus ultricies. Convallis convallis
          tellus id interdum velit laoreet id donec ultrices. Elit at imperdiet dui accumsan sit
          amet. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Morbi tristique
          senectus et netus et malesuada. Cursus mattis molestie a iaculis at erat pellentesque
          adipiscing.
        </p>
      </div>
    </div>
  );
};

export default ContactComponent;
