import React from 'react';

const TitleText = ({num, nTitle}) => {
  return (
    <h2 className='mix-blend-screen relative font-tag font-bold text-7xl text-vWhite mb-[50px]'>
      <span className='-z-10 box-content  leading-none text-10xl text-transparent font-outline-2 font-title font-bold'>
        {num}
      </span>
      <span className='z-0 absolute bottom-0 left-0 translate-x-[130px]'>{nTitle}</span>
    </h2>
  );
};

export default TitleText;
