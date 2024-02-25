'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import IntroComponent from './IntroComponent';
import AboutComponent from './AboutComponent';
import SkillzComponent from './SkillzComponent';
import ContactComponent from './ContactComponent';
import WorkComponent from './WorkComponent';

const MainCTN = () => {
  const [scrollDirection, setScrollDirection] = useState(true);
  const [selection, setSelection] = useState(1);
  const [currentWidth, setCurrentWidth] = useState(55);

  useEffect(() => {
    const newWidth = 55 + selection * 8 + 0.5;
    setCurrentWidth(newWidth);
  }, [selection, currentWidth]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledDown = window.scrollY > 200;
      setScrollDirection(!scrolledDown);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=' w-full relative flex flex-col justify-start items-center'>
      <nav
        className={`w-full h-[60px] fixed z-50 top-0 transition-all duration-300 ${
          !scrollDirection ? 'backdrop-blur-[12px] bg-[#041e3a]/70' : ''
        }`}>
        <div className='w-full h-full  flex justify-end items-center font-bold font-title'>
          <figure
            className='transition-all duration-300 flex justify-center items-center absolute bottom-0 left-0 h-[2px] bg-selected'
            style={{ width: `${currentWidth}%` }}
          />
          <div className='flex justify-end items-center w-[40%] h-full text-right'>
            <Link
              href={'#intro'}
              onClick={() => setSelection(1)}
              className={`flex flex-1 items-end pb-[10px] justify-end h-full ${
                selection === 1 ? 'text-selected' : 'text-vTitle'
              }`}>
              00. Intro
            </Link>

            <Link
              href={'#about'}
              onClick={() => setSelection(2)}
              className={`flex flex-1 items-end pb-[10px] justify-end h-full ${
                selection === 2 ? 'text-selected' : 'text-vTitle'
              }`}>
              01. About
            </Link>

            <Link
              href={'#skills'}
              onClick={() => setSelection(3)}
              className={`flex flex-1 items-end pb-[10px] justify-end h-full ${
                selection === 3 ? 'text-selected' : 'text-vTitle'
              }`}>
              02. Skills
            </Link>
            <Link
              href={'#work'}
              onClick={() => setSelection(4)}
              className={`flex flex-1 items-end pb-[10px] justify-end h-full ${
                selection === 4 ? 'text-selected' : 'text-vTitle'
              }`}>
              03. Work
            </Link>
            <Link
              href={'#contact'}
              onClick={() => setSelection(5)}
              className={`flex flex-1 items-end pb-[10px] justify-end h-full ${
                selection === 5 ? 'text-selected' : 'text-vTitle'
              }`}>
              04. Contact
            </Link>
          </div>
          <div className='w-[5%]'></div>
        </div>
      </nav>
      <IntroComponent />
      <AboutComponent />
      <SkillzComponent />

      <WorkComponent />
      <ContactComponent />

      <Link
        href={scrollDirection ? '#about' : '#intro'}
        className={`[writing-mode:vertical-lr] font-title animate-pulse fixed bottom-[50px] right-[50px] text-vWhite transition-all duration-300 ${
          !scrollDirection ? 'rotate-180' : 'rotate-0'
        }`}>
        {scrollDirection ? 'scroll down' : 'scroll up'} ⟶
      </Link>
    </div>
  );
};

export default MainCTN;

{
  /* </div> */
}
