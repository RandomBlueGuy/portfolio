'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import plusSign from '@/public/plus.svg';

const XPfile = ({ index, project }) => {
  const [viewMore, setViewMore] = useState(false);
  return (
    <div className='w-full  overflow-hidden relative transition-all duration-300 '>
      <figure
        onClick={() => {
          setViewMore(!viewMore);
        }}
        className='group cursor-pointer z-10 relative border-b-2 text-vBlue flex items-center justify-between w-full px-[20px] py-[5px] border-b-vBlue/20 overflow-hidden transition-all duration-300 '>
        <div
          className={`-z-0 w-[0%] group-hover:w-[100%] left-0 transition-all ease-[cubic-bezier(0.5,1,0.5,1)] h-full absolute top-0 ${
            index % 2 === 0 ? ' duration-1000' : 'duration-[1000ms]'
          } bg-vBlue/30`}
          style={{ pointerEvents: 'none' }}
        />
        <h3 className='text-selected'>[ INSERT COOL PROJECT TITLE ]</h3>
        <button className='relative box-border transition-all duration-300 hover:border-0 text-vWhite font-bold font-tag w-auto h-[40px] aspect-square px-[12px]'>
          <span
            className={`${
              !viewMore ? 'rotate-0' : ' rotate-[135deg]'
            } transition-all duration-300  absolute inset-0 z-10 w-full h-full flex justify-center items-center text-vWhite`}>
            <Image src={plusSign} alt='' className='h-[60%] w-auto object-contain' />
          </span>
        </button>
      </figure>
      <div
        className={` w-full bg-black/30 p-[20px] flex gap-[2rem] overflow-hidden transition-all duration-300 ${
          !viewMore ? 'absolute' : 'relative'
        }`}>
        <figure className='relative rounded-xl border-2 border-selected/20 aspect-square w-auto h-[300px] bg-gradient-to-br flex justify-center items-center'>
          <span className='text-7xl font-title text-vWhite/20'>[ IMG ]</span>
        </figure>
        <div className='w-full flex flex-col justify-between pt-[0.5rem]'>
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
    </div>
  );
};

export default XPfile;
