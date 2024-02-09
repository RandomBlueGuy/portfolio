'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import SkillsComponent from './SkillsComponent';
import IntroComponent from './IntroComponent';
import AboutComponent from './AboutComponent';
import SkillzComponent from './SkillzComponent';
import ContactComponent from './ContactComponent';
import WorkComponent from './WorkComponent';

const MainCTN = () => {
  const [scrollDirection, setScrollDirection] = useState(true);

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
    <div className='w-full relative flex flex-col gap-[500px] justify-start items-center'>
      {/* <div className='w-fit h-full flex flex-col justify-start items-center bg-[linear-gradient(90deg,#040e17_0%,rgba(5,36,64,1)33%,rgba(5,36,64,1)66%,#040e17_100%)]'> */}

      <IntroComponent />
      <AboutComponent />
      <SkillzComponent />

      <WorkComponent />
      <ContactComponent />

      <Link
        href={scrollDirection ? '#about' : '#home'}
        className={`[writing-mode:vertical-lr] font-title animate-pulse fixed bottom-[50px] right-[50px] text-vWhite transition-all duration-300 ${!scrollDirection ? "rotate-180" : "rotate-0"}`}>
        {scrollDirection ? "scroll down":"scroll up"} ⟶
      </Link>
    </div>
  );
};

export default MainCTN;

{
  /* </div> */
}
