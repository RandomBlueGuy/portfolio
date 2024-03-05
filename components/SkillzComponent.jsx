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
import TitleText from './TitleText';
import cIcon from '@/public/cIcon.svg';
import cSharpIcon from '@/public/cSharpIcon.svg';
import gameMakerIcon from '@/public/gameMakerIcon.svg';
import qtIcon from '@/public/qtIcon.svg';
import reduxIcon from '@/public/reduxIcon.svg';
import typescriptIcon from '@/public/typescriptIcon.svg';

const SkillzComponent = () => {
  const mainTools = [
    { name: 'HTML', img: htmlIcon },
    { name: 'CSS', img: cssIcon },
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
        <TitleText num={'02.'} nTitle={'Skills'} />

        <p className='my-[50px] font-tag text-xl'>
        {`//`} From coding languages to handy tools, take a peek at some of the stuff I've learned as a
          web developer. This lineup showcases my journey of curiosity and growth That will only
          keep growing in the future.
        </p>
        <div className='my-[60px] w-full flex items-center justify-center gap-[50px]'>
          <Image src={openBracket} alt='openBracket' className='mix-blend-screen' />

          <div className='flex w-full gap-[40px] gap-y-[60px] h-fit justify-around flex-wrap '>
            {mainTools.map((item, index) => (
              <div
                key={index}
                className='group flex flex-col w-[80px] gap-[5px] items-center opacity-60 hover:scale-105 hover:opacity-100 transition-all duration-300'>
                <Image
                  src={item.img}
                  alt={`${item.name}`}
                  quality={100}
                  sizes='5vw'
                  className='object-contain h-[80px] w-auto'
                />
                <p className='absolute bottom-0 text-vWhite font-title opacity-0 translate-y-[0%] group-hover:translate-y-[120%] group-hover:opacity-100 transition-all duration-300'>{`${item.name}`}</p>
              </div>
            ))}
          </div>
          <Image src={openBracket} alt='closeBracket' className='rotate-180 mix-blend-screen' />
        </div>

        <p className='my-[50px] font-tag text-xl'>
          // And these are some other ones I've used for personal projects [ Game Development,
          Modding ]{' '}
        </p>

        <div className='my-[60px] w-full flex items-center justify-center'>
          <Image src={openBracket} alt='openBracket' className='mix-blend-screen h-[200px]' />
          <div className='flex w-fit gap-[40px] h-[60%] justify-around flex-wrap'>
            {secondaryTools.map((item, index) => (
              <div
                key={index}
                className='group flex flex-col h-[60px] gap-[10px] items-center opacity-60 hover:scale-105 hover:opacity-100 transition-all duration-300'>
                <Image
                  src={item.img}
                  alt={`${item.name}`}
                  quality={100}
                  className='object-contain h-[60px] w-auto '
                />
                <p className='absolute bottom-0 text-vWhite font-title opacity-0 translate-y-[0%] group-hover:translate-y-[120%] group-hover:opacity-100 transition-all duration-300'>{`${item.name}`}</p>
              </div>
            ))}
          </div>
          <Image
            src={openBracket}
            alt='closeBracket'
            className='mix-blend-screen rotate-180 h-[200px]'
          />
        </div>
      </div>
    </div>
  );
};

export default SkillzComponent;
