'use client';
import React, { useRef, useEffect, useState } from 'react';

function Vortex() {
  const pupilRef = useRef(null);
  const initialPosition = { x: 0, y: 0 };
  const [currentGradient, setCurrentGradient] = useState(
    'bg-[radial-gradient(50%_50%_at_50%_50%,#3c3c3c_0%,#1b1b1b_90%)]'
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      const pupilContainer = pupilRef.current.parentNode;
      const containerRect = pupilContainer.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left + 135;
      const mouseY = e.clientY - containerRect.top + 135;
      const normalizedDistanceX = (mouseX - initialPosition.x) / containerRect.width;
      const normalizedDistanceY = (mouseY - initialPosition.y) / containerRect.height;
      const limitedDistanceX = normalizedDistanceX * 25 - 25;
      const limitedDistanceY = normalizedDistanceY * 50 - 50;

      pupilRef.current.style.transform = `translate(${limitedDistanceX}px, ${limitedDistanceY}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <section className='w-full h-full absolute inset-0 '>
        <div
          className='w-[200px] hover:w-[240px] translate-x-[-50%] translate-y-[-50%] transition-all duration-200 rounded-full aspect-square flex justify-center items-center absolute top-[200px] left-[200px] border-solid border-white border-[3px] cursor-pointer'
          onMouseEnter={() =>
            setCurrentGradient('bg-[radial-gradient(50%_50%_at_50%_50%,#7c429f_0%,#c5a76c_90%)]')
          }>
          <div className='relative rounded-full w-[200px] aspect-square bg-gradient-to-br from-[#7c429f] to-[#c5a76c] group flex justify-center items-center'>
            <div className='absolute m-auto inset-0 mix-blend-overlay bg-url w-full h-full aspect-square rounded-full opacity-80' />
            <h2 className="text-4xl text-center text-black">About</h2>
          </div>
        </div>
        <div
          className='w-[200px] hover:w-[240px] translate-x-[50%] translate-y-[-50%] transition-all duration-200 rounded-full aspect-square flex justify-center items-center absolute top-[200px] right-[200px] border-solid border-white border-[3px] cursor-pointer'
          onMouseEnter={() =>
            setCurrentGradient('bg-[radial-gradient(50%_50%_at_50%_50%,#9f9e42_0%,#966cc5_90%)]')
          }>
          <div className='relative rounded-full w-[200px] aspect-square bg-gradient-to-bl from-[#9f9e42] to-[#966cc5] group flex justify-center items-center'>
            <div className='absolute m-auto inset-0 mix-blend-overlay bg-url w-full h-full aspect-square rounded-full opacity-80' />
            <h2 className="text-4xl text-center text-black">Skills</h2>

          </div>
        </div>
        <div
          className='w-[200px] hover:w-[240px] translate-x-[-50%] translate-y-[50%] transition-all duration-200 rounded-full aspect-square flex justify-center items-center absolute bottom-[200px] left-[200px] border-solid border-white border-[3px] cursor-pointer'
          onMouseEnter={() =>
            setCurrentGradient('bg-[radial-gradient(50%_50%_at_50%_50%,#9f4286_0%,#c5706c_90%)]')
          }>
          <div className='relative rounded-full w-[200px] aspect-square bg-gradient-to-tr from-[#9f4286] to-[#c5706c] group flex justify-center items-center'>
            <div className='absolute m-auto inset-0 mix-blend-overlay bg-url w-full h-full aspect-square rounded-full opacity-80' />
            <h2 className="text-4xl text-center text-black">Work</h2>

          </div>
        </div>
        <div
          className='w-[200px] hover:w-[240px] translate-x-[50%] translate-y-[50%] transition-all duration-200 rounded-full aspect-square flex justify-center items-center absolute bottom-[200px] right-[200px] border-solid border-white border-[3px] cursor-pointer'
          onMouseEnter={() =>
            setCurrentGradient('bg-[radial-gradient(50%_50%_at_50%_50%,#4e9f42_0%,#6cb3c5_90%)]')
          }>
          <div className='relative rounded-full w-[200px] aspect-square bg-gradient-to-tl from-[#4e9f42] to-[#6cb3c5] flex justify-center items-center'>
            <div className='absolute m-auto inset-0 mix-blend-overlay bg-url w-full h-full aspect-square rounded-full opacity-80' />
            <h2 className="text-4xl text-center text-black">Contact</h2>
          </div>
        </div>
      </section>

      <section className='flex justify-center items-center absolute m-auto inset-0 bg-[#dadada] w-[30vw] min-w-[300px] aspect-square rounded-full shadow-[inset_0px_35px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden'>
        <div className='relative flex justify-center items-center w-[60%] aspect-square h-auto'>
          <div
            id='pupil'
            ref={pupilRef}
            className={`absolute ${currentGradient} from-[#3c3c3c] to-[#4d0a47] w-full h-full aspect-square rounded-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] transition-all duration-300 ease-out flex items-center justify-center`}
            style={{ transition: 'background 0.5s ease-in-out' }}>
            <div className='absolute m-auto inset-0 mix-blend-overlay bg-url w-full h-full aspect-square rounded-full opacity-80' />
            <h1 className='z-10 text-center text-white text-5xl self-center '>
              WELCOME <br />
              STRANGER
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Vortex;
