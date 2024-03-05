import React from 'react';
import Image from 'next/image';
import TitleText from './TitleText';
import merengues from '@/public/merengues.svg';

const ContactComponent = () => {
  return (
    <div
      id='about'
      className='relative w-full h-fit flex flex-shrink-0 flex-col justify-center items-start gap-[60px] '>
      <div className='group mr-[5%] absolute right-0 bottom-0 flex flex-col justify-center items-center h-[80%] w-auto aspect-square '>
        <figure className='absolute inset-0 mix-blend-screen bg-[radial-gradient(rgba(0,100,255,0.4)_0%,rgba(0,100,255,0.1))] h-full opacity-70 rounded-full blur-[90px] aspect-square' />
        <div className='h-[390px] z-10 aspect-square w-auto overflow-hidden absolute rounded-full flex justify-center items-start'>
          <Image
            src={merengues}
            alt="Little Ol' Me"
            title="Little Ol' Me"
            quality={100}
            sizes='2000px'
            className='mx-auto z-10 object-contain h-[390px] rotate-[10deg] transition-all duration-[900ms] group-hover:rotate-[5deg] group-hover:h-[900px] ease-in-out shadow-[] '
          />
        </div>
        <figure className='absolute w-0 group-hover:w-[150px] animate-[spin_60000ms_linear_infinite] opacity-0 group-hover:opacity-10 transition-all duration-500 delay-[000ms]  aspect-square border-4 border-selected border-dashed rounded-full' />
        <figure className='absolute w-0 group-hover:w-[200px] animate-spinner opacity-0 group-hover:opacity-20 transition-all duration-500 delay-[100ms]  aspect-square border-4 border-selected border-dashed rounded-full' />
        <figure className='absolute w-[250px] animate-[spin_60000ms_linear_infinite] opacity-40 transition-all duration-500 delay-[300ms]  aspect-square border-4 border-selected border-dashed rounded-full' />
        <figure className='absolute w-0 group-hover:w-[300px] animate-spinner opacity-0 group-hover:opacity-60 transition-all duration-500 delay-[300ms]  aspect-square border-4 border-selected border-dashed rounded-full' />
        <figure className='absolute w-0 group-hover:w-[350px] animate-[spin_60000ms_linear_infinite] opacity-0 group-hover:opacity-80 transition-all duration-500 delay-[400ms]  aspect-square border-4 border-selected border-dashed rounded-full' />
        <figure className='absolute  w-[400px] animate-spinner opacity-60 group-hover:opacity-80 transition-all duration-500 delay-[500ms]  aspect-square border-4 border-selected border-dashed rounded-full' />
      </div>
      <div className='z-10 w-[600px]'>
        <TitleText num={'01.'} nTitle={'About Me'} />
        <p className=''>
          FullStack Developer and Professional in Audiovisual Communication, skilled in design and
          problem solving, assertive communication, color & composition and a great passion for
          learning.
          <br />
          <br />
          Since I can remember, I have always wanted a creative career, for that purpose, I
          dedicated myself to acquire all the necessary skills to boost my creativity as I combine
          them with my new found interest for technology and design. As I advanced my studies I
          found new skills and a great interest in problem solving and creative design through
          coding as well as the almost limitless amount of options and possible applications that
          new tech has to offer. This new prospect and way of life made me realize how much I want
          to improve and hone my skills to reach new heights in web development.
        </p>
      </div>
    </div>
  );
};

export default ContactComponent;
