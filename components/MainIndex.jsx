import React from 'react';
import Link from 'next/link';
import MenuElement from './MenuElement';
import SkillsComponent from './SkillsComponent';

const MainIndex = () => {
  return (
    <>
      <section className='relative z-10 w-[20%] min-h-full bg-gray-800/20 px-[30px] py-[30px]'>
        <nav className='flex flex-col min-h-full   relative'>
          <span className=' text-xs'>{`<html>`}</span>
          <span className=' text-xs pl-5'>{`<body>`}</span>
          <MenuElement mlink={'#RandomBlueFolio_'} title={'RandomBlueFolio_'} hType={'h1'} />
          <MenuElement mlink={'#ABOUT'} title={'ABOUT'} hType={'h2'} />
          <MenuElement mlink={'#SKILLS'} title={'SKILLS'} hType={'h3'} />

          <div className='flex flex-col hover:py-[30px] origin-left hover:scale-125 transition-all duration-200'>
            <span className=' text-xs pl-10 leading-none group-hover:text-vWhite'>{`<div>`}</span>
            <div className='pl-6'>
              <MenuElement mlink={'#WORK'} title={'WORK'} hType={'h4'} />
            </div>

            <span className=' text-xs pl-16'>{`<ul>`}</span>
            <Link
              href={'#'}
              className='text-vGray text-xs pl-20 hover:pl-24 transition-all duration-200 group hover:text-vWhite'>
              {`<li> `}{' '}
              <span className='text-vTitle font-title group-hover:text-selected'>PROJECT #1</span>{' '}
              {` </li>`}
            </Link>
            <Link
              href={'#'}
              className='text-vGray text-xs pl-20 hover:pl-24 transition-all duration-200 group hover:text-vWhite'>
              {`<li> `} <span className='text-vTitle font-title'>PROJECT #2</span> {` </li>`}
            </Link>
            <Link
              href={'#'}
              className='text-vGray text-xs pl-20 hover:pl-24 transition-all duration-200 group hover:text-vWhite'>
              {`<li> `} <span className='text-vTitle font-title'>PROJECT #3</span> {` </li>`}
            </Link>
            <Link
              href={'#'}
              className='text-vGray text-xs pl-20 hover:pl-24 transition-all duration-200 group hover:text-vWhite'>
              {`<li> `} <span className='text-vTitle font-title'>PROJECT #4</span> {` </li>`}
            </Link>
            <Link
              href={'#'}
              className='text-vGray text-xs pl-20 hover:pl-24 transition-all duration-200 group hover:text-vWhite'>
              {`<li> `} <span className='text-vTitle font-title'>PROJECT #5</span> {` </li>`}
            </Link>
            <span className=' text-xs pl-16'>{`</ul>`}</span>
            <span className=' text-xs pl-10 leading-none group-hover:text-vWhite'>{`</div>`}</span>
          </div>

          <MenuElement mlink={'#CONTACT'} title={'CONTACT'} hType={'h5'} />

          <span className=' text-xs pl-5'>{`</body>`}</span>
          <span className=' text-xs'>{`</html>`}</span>
        </nav>
      </section>

      <section className='relative z-10 w-[80%] min-h-full px-[30px] py-[30px] bg-gray-800/30 '>
        <div className='flex flex-col items-center gap-[12px] w-fit absolute bottom-0 right-0 font-title translate-x-[50%]'>
          <div className='w-[20px] aspect-square border-[2px] border-white rounded-full' />
          <div className='w-[20px] aspect-square border-[2px] border-white rounded-full' />
          <div className='w-[20px] aspect-square border-[2px] border-white rounded-full' />
          <Link
            href={'mailto:randombluemail@gmail.com'}
            className='text-vWhite hover:text-selected translate-x-[10%] [writingMode:vertical-rl]'>
            randombluemail@gmail.com
          </Link>
          <figure className='bg-white h-[100px] w-[1.5px]' />
        </div>

        <SkillsComponent />
      </section>
    </>
  );
};

export default MainIndex;
