import Link from 'next/link';

const MicroContact = () => {
  return (
    <div className='flex  items-center gap-[12px] w-fit absolute bottom-0 left-0 font-title'>
      <figure className='bg-[#346596] w-[40px] h-[1.5px]' />
      <div className='w-[20px] hover:scale-125 transition-all duration-300 aspect-square border-[2px] border-[#346596] rounded-full' />
      <div className='w-[20px] hover:scale-125 transition-all duration-300 aspect-square border-[2px] border-[#346596] rounded-full' />
      <div className='w-[20px] hover:scale-125 transition-all duration-300 aspect-square border-[2px] border-[#346596] rounded-full' />
      <Link
        href={'mailto:randombluemail@gmail.com'}
        className='text-[#346596] transition-all duration-500'>
        randombluemail@gmail.com
      </Link>
    </div>
  );
};

export default MicroContact;
