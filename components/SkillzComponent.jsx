import Image from 'next/image';
import cssIcon from '@/public/css.svg';
import gitIcon from '@/public/git.svg';
import htmlIcon from '@/public/html.svg';
import javaScriptIcon from '@/public/javaScript.svg';
import mongoDBIcon from '@/public/mongoDB.svg';
import nextJSIcon from '@/public/nextJS.svg';
import nodeJSIcon from '@/public/nodeJS.svg';
import postgresSqlIcon from '@/public/postgresSql.svg';
import reactIcon from '@/public/react.svg';
import shopifyIcon from '@/public/shopify.svg';
import tailwindIcon from '@/public/tailwind.svg';
import openBracket from '@/public/openBracket.svg';

import cIcon from '@/public/cIcon.svg';
import cSharpIcon from '@/public/cSharpIcon.svg';
import gameMakerIcon from '@/public/gameMakerIcon.svg';
import qtIcon from '@/public/qtIcon.svg';
import reduxIcon from '@/public/reduxIcon.svg';
import typescriptIcon from '@/public/typescriptIcon.svg';

const SkillzComponent = () => {
  const mainTools = [
    { name: 'HTML', img: htmlIcon },
    { name: 'CSS3', img: cssIcon },
    { name: 'Tailwind', img: tailwindIcon },
    { name: 'JavaScript', img: javaScriptIcon },
    { name: 'TypeScript', img: typescriptIcon },
    { name: 'ReactJS', img: reactIcon },
    { name: 'NextJS', img: nextJSIcon },
    { name: 'nodeJS', img: nodeJSIcon },
    { name: 'Git', img: gitIcon },
    { name: 'Shopify', img: shopifyIcon },
    { name: 'MongoDB', img: mongoDBIcon },
    { name: 'PostGreSQL', img: postgresSqlIcon },
    { name: 'Redux', img: reduxIcon },
  ];

  const secondaryTools = [
    { name: 'C++', img: cIcon },
    { name: 'C#', img: cSharpIcon },
    { name: 'GameMaker', img: gameMakerIcon },
    { name: 'QT', img: qtIcon },
  ];

  return (
    <div
      id='skills'
      className='relative w-full h-fit flex flex-shrink-0 flex-col justify-center items-center py-[200px]'>
      <div className='w-full  flex flex-col'>
        <h2 className='relative font-tag font-bold text-7xl text-vWhite mb-[50px]'>
          <span className='-z-10 box-content  leading-none text-10xl text-transparent font-outline-2 font-title font-bold'>
            02.
          </span>
          <span className='z-0 absolute bottom-0 left-0 translate-x-[40%]'>Skills / Tools</span>
        </h2>
        <p className='my-[50px] font-tag text-xl'>
          // These are some of the programs/languages/tools I have picked along the way
        </p>
        <div className='my-[60px] w-full flex items-center justify-center gap-[80px]'>
          <Image src={openBracket} alt='openBracket' className='' />

          <div className='flex w-full gap-[40px] gap-y-[20px] h-fit justify-around flex-wrap '>
            {mainTools.map((item, index) => (
              <div
                key={index}
                className='group flex flex-col w-[80px] gap-[5px] items-center opacity-60 hover:scale-105 hover:opacity-100 transition-all duration-300'>
                <Image
                  src={item.img}
                  alt={`${item.name}`}
                  className='object-contain h-[80px] w-auto'
                />
                <p className='text-vWhite font-title opacity-0 translate-y-[-60%] group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300'>{`${item.name}`}</p>
              </div>
            ))}
          </div>
          <Image src={openBracket} alt='closeBracket' className='rotate-180 ' />
        </div>

        <p className='my-[50px] font-tag text-xl'>
          // And these are some other ones I've used for personal projects [ Game Development,
          Modding ]{' '}
        </p>

        <div className='my-[60px] w-full flex items-center gap-[80px] justify-center'>
          <Image src={openBracket} alt='openBracket' className=' h-[200px]' />
          <div className='flex w-fit gap-[40px] h-[60%] justify-around flex-wrap'>
            {secondaryTools.map((item, index) => (
              <div
                key={index}
                className='group flex flex-col h-[80px] gap-[10px] items-center opacity-60 hover:scale-105 hover:opacity-100 transition-all duration-300'>
                <Image
                  src={item.img}
                  alt={`${item.name}`}
                  className='object-contain h-[60px] w-auto '
                />
                <p className='text-vWhite font-title opacity-0 translate-y-[-60%] group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300'>{`${item.name}`}</p>
              </div>
            ))}
          </div>
          <Image src={openBracket} alt='closeBracket' className='rotate-180 h-[200px]' />
        </div>
      </div>
    </div>
  );
};

export default SkillzComponent;
