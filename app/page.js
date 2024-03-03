import Link from 'next/link';
import Image from 'next/image';
import Vortex from '@/components/Vortex';
import IntroComponent from '@/components/IntroComponent';
import MainIndex from '@/components/MainIndex';
import MicroContact from '@/components/MicroContact';
import MainCTN from '@/components/MainCTN';

function page() {
  return (
    <main className='w-full relative overflow-hidden bg-gradient-to-br from-[#040e17] via-[#041d38] to-[#041e3a] px-[15%]'>
      <div className='fixed m-auto inset-0 mix-blend-soft-light opacity-60 bg-url w-full h-full' />
      {/* <div className='absolute m-auto inset-0 mix-blend-overlay bg-url w-full h-full opacity-80' /> */}
      <MainCTN />
      {/* <MicroContact /> */}
      {/* <IntroComponent />
        <IntroComponent /> */}
      <MicroContact />
    </main>
  );
}

export default page;

{
  /* <div className=' h-screen w-screen '>
<section className='snap-start'>
  <IntroComponent />
</section>
<section className='snap-start'>
  <IntroComponent />
</section>
</div> */
}

