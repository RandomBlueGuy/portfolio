import React from 'react';

const SkillsComponent = () => {
  return (
    <section className='w-full '>
      <h2 className='italic font-title text-vWhite text-8xl mb-[60px] [text-shadow:5px_5px_0px_#0456ae] to-[#0456ae] text-right pr-[5%]'>{`<SKILLS />`}</h2>
      <p className='text-vWhite text-xl italic text-main text-center '>... If only I had those.</p>
      <div className='leading-none mt-[120px] flex w-full items-center justify-between px-[10%]'>
        <div className='leading-none font-title text-vWhite text-10xl [text-shadow:5px_5px_0px_#0456ae] text-center'>{`{`}</div>
        <div className='aspect-square text-vWhite w-[100px] flex justify-center items-center h-[100px] border-[2px] border-vWhite rounded-full text-xl '>
          skill #1
        </div>
        <div className='aspect-square text-vWhite w-[100px] flex justify-center items-center h-[100px] border-[2px] border-vWhite rounded-full text-xl '>
          skill #2
        </div>
        <div className='aspect-square text-vWhite w-[100px] flex justify-center items-center h-[100px] border-[2px] border-vWhite rounded-full text-xl '>
          skill #3
        </div>
        <div className='aspect-square text-vWhite w-[100px] flex justify-center items-center h-[100px] border-[2px] border-vWhite rounded-full text-xl '>
          skill #4
        </div>
        <div className=' font-title text-vWhite text-10xl [text-shadow:5px_5px_0px_#0456ae] text-center'>{`}`}</div>
      </div>
    </section>
  );
};

export default SkillsComponent;
