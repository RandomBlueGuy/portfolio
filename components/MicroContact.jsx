import Link from 'next/link';

const MicroContact = () => {
  return (
    <div className='flex flex-col items-center justify-center  gap-[12px] w-fit fixed bottom-[30px] left-[30px] font-title opacity-60 hover:opacity-100 transition-all duration-300 '>
      <div className='w-[20px] hover:scale-125 transition-all duration-300 aspect-square border-[2px] border-[#346596] rounded-full' />
      <div className='w-[20px] hover:scale-125 transition-all duration-300 aspect-square border-[2px] border-[#346596] rounded-full' />
      <div className='w-[20px] hover:scale-125 transition-all duration-300 aspect-square border-[2px] border-[#346596] rounded-full' />
      <Link
        href={'mailto:randombluemail@gmail.com'}
        className='text-[#346596] leading-none rotate-180  transition-all duration-500 [writing-mode:vertical-rl]'>
        randombluemail@gmail.com
      </Link>
      <figure className='bg-[#346596] h-[40px] w-[1.5px]' />
    </div>
  );
};

export default MicroContact;
