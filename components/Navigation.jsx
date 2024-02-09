'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const [selection, setSelection] = useState(1);
  const [currentWidth, setCurrentWidth] = useState(55);
  useEffect(() => {
    const newWidth = 55 + selection * 8;
    setCurrentWidth(newWidth);
  }, [selection, currentWidth]);

  return (
    <nav className='fixed z-50 top-0 w-full h-[60px]  flex justify-end items-center font-bold font-tag text-[#346596] backdrop-blur-sm'>
      <figure
        className='transition-all duration-300 absolute bottom-0 left-0 h-[2px] border-b-[#346596] border-b-2'
        style={{ width: `${currentWidth}%` }}
      />
      <div className='flex justify-end items-center w-[40%] h-full text-right'>
        <Link
          href={'#home'}
          onClick={() => setSelection(1)}
          className='flex flex-1 items-end pb-[10px] justify-end h-full'>
          00. Home
        </Link>

        <Link
          href={'#about'}
          onClick={() => setSelection(2)}
          className='flex flex-1 items-end pb-[10px] justify-end h-full'>
          01. About
        </Link>

        <Link
          href={'#skills'}
          onClick={() => setSelection(3)}
          className='flex flex-1 items-end pb-[10px] justify-end h-full'>
          02. Skills
        </Link>
        <Link
          href={'#work'}
          onClick={() => setSelection(4)}
          className='flex flex-1 items-end pb-[10px] justify-end h-full'>
          03. Work
        </Link>
        <Link
          href={'#contact'}
          onClick={() => setSelection(5)}
          className='flex flex-1 items-end pb-[10px] justify-end h-full'>
          04. Contact
        </Link>
      </div>
      <div className='w-[5%]'></div>
    </nav>
  );
};

export default Navigation;
