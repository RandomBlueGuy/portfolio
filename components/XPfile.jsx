'use client';
import { useState, useEffect } from 'react';

const XPfile = () => {
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {}, [viewMore]);

  console.log('🔷 / XPfile / viewMore =>', viewMore);

  return (
    <>
      <figure className='border-b-2 text-vBlue flex items-center justify-between w-full px-[20px] py-[10px] border-b-vBlue overflow-hidden transition-all duration-300 hover:bg-vBlue/30'>
        <h3 className='text-selected'>[ INSERT COOL PROJECT TITLE ]</h3>
        <button
          onClick={() => {
            setViewMore(!viewMore);
          }}
          className='relative box-border group transition-all duration-300 border-2 border-selected rounded-[5px] hover:border-0 text-vWhite font-bold font-tag w-[120px] h-[40px] px-[12px]'>
          <div
            className='-z-0 w-[0%] group-hover:w-[100%] transition-all duration-500 h-full absolute top-0 left-0 bg-selected rounded-[5px]'
            style={{ pointerEvents: 'none' }}
          />
          <span className='absolute inset-0 z-10 w-full h-full flex justify-center items-center'>
            View More
          </span>
        </button>
      </figure>
      <div
        className={`w-full bg-black/30 p-[20px] flex gap-[2rem] overflow-hidden transition-all duration-300 ${
          !viewMore ? 'hidden' : 'block'
        }`}>
        <div className='relative aspect-square w-auto h-[300px] bg-gradient-to-br flex justify-center items-center'>
          <span className='text-7xl font-title text-vWhite/20'>[ IMG ]</span>
        </div>
        <div className='w-full flex flex-col justify-between'>
          <div>
            <h4 className='text-selected mb-[20px] text-2xl'>[ Description ]</h4>
            <p className='text-base'>
              Lorem ipsum dolor sit amet, has quaestio posidonium constituam ut. Solet graece no
              has. Est oratio animal invidunt te, laudem scaevola id vix. Graece putant salutatus
              mea at, ad pro mazim qualisque disputationi.
              <br />
              <br />
              Nominavi mandamus pri in, pri dolorem apeirian forensibus ne. Latine suscipiantur eu
              sed, eu viris putant scaevola has. Feugiat hendrerit pro ut. Duo duis disputando
              appellantur an. Mei cu impedit lucilius, at causae nusquam copiosae vim. Melius
              commune quo in, ea nam aperiam nostrum volutpat.
            </p>
          </div>
          <div className='w-full flex gap-[20px] my-[30px]'>
            <span className='border-selected/50 border-2 rounded-full text-xs py-[4px] px-[10px] font-title hover:bg-selected/40 transition-all duration-300'>
              NextJs
            </span>
            <span className='border-selected/50 border-2 rounded-full text-xs py-[4px] px-[10px] font-title hover:bg-selected/40 transition-all duration-300'>
              Tailwind
            </span>
            <span className='border-selected/50 border-2 rounded-full text-xs py-[4px] px-[10px] font-title hover:bg-selected/40 transition-all duration-300'>
              NodeJS
            </span>
          </div>
          <div className='flex gap-[2rem] self-end'>
            <button className='relative box-border group transition-all duration-300 border-2 border-selected rounded-[5px] hover:border-0 text-vWhite font-bold font-tag w-[120px] h-[40px] px-[12px]'>
              <div
                className='-z-0 w-[0%] group-hover:w-[100%] transition-all duration-500 h-full absolute top-0 left-0 bg-selected rounded-[5px]'
                style={{ pointerEvents: 'none' }}
              />
              <span className='absolute inset-0 z-10 w-full h-full flex justify-center items-center'>
                View Code
              </span>
            </button>
            <button className='relative box-border group transition-all duration-300 border-2 border-selected rounded-[5px] hover:border-0 text-vWhite font-bold font-tag w-[120px] h-[40px] px-[12px]'>
              <div
                className='-z-0 w-[0%] group-hover:w-[100%] transition-all duration-500 h-full absolute top-0 left-0 bg-selected rounded-[5px]'
                style={{ pointerEvents: 'none' }}
              />
              <span className='absolute inset-0 z-10 w-full h-full flex justify-center items-center'>
                Visit Project
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default XPfile;
