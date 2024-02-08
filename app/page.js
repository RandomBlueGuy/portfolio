import Link from 'next/link';
import Image from 'next/image';
import Vortex from '@/components/Vortex';
import Navigation from '@/components/Navigation';
import IntroComponent from '@/components/IntroComponent';
// import MainIndex from '@/components/MainIndex';
import MicroContact from '@/components/MicroContact';

function page() {
  return (
    <main className='overflow-x-scroll w-full min-h-screen relative flex justify-start  bg-gradient-to-r from-[#040e17] to-[#021223] '>
      {/* <div className='fixed z-0 m-auto inset-0 mix-blend-overlay bg-url w-full h-full aspect-square' /> */}
      {/* <MainIndex /> */}
      {/* <Navigation /> */}
      <div className='flex-shrink-0'>
        <IntroComponent />
      </div>
      <div className='flex-shrink-0'>
        <IntroComponent />
      </div>
      {/* <MicroContact /> */}
    </main>
  );
}

export default page;

