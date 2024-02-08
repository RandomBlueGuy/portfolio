import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className='absolute top-0 w-full h-[40px] bg-black/20 flex justify-end items-center font-bold font-tag text-[#346596]'>
      <figure className='w-full h-full border-b-[#346596] border-b-2' />

      <div className='flex justify-end items-center w-[40%] h-full text-right'>
        <Link
          href={'#About'}
          className='flex flex-1 items-center justify-end h-full hover:border-b-[#346596] hover:border-b-2'>
          01. About
        </Link>
        <Link
          href={'#About'}
          className='flex flex-1 items-center justify-end h-full hover:border-b-[#346596] hover:border-b-2'>
          02. Skills
        </Link>
        <Link
          href={'#About'}
          className='flex flex-1 items-center justify-end h-full hover:border-b-[#346596] hover:border-b-2'>
          03. Work
        </Link>
        <Link
          href={'#About'}
          className='flex flex-1 items-center justify-end h-full hover:border-b-[#346596] hover:border-b-2'>
          04. Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
