import Link from 'next/link';
import Image from 'next/image';
import github from '@/public/github.svg';
import linkedin from '@/public/linkedin.svg';
import mail from '@/public/mail.svg';

const MicroContact = () => {
  return (
    <div className='flex flex-col items-center justify-center  gap-[12px] w-fit fixed bottom-[30px] left-[30px] font-title opacity-60 hover:opacity-100 transition-all duration-300 '>
      <Link href={'https://github.com/RandomBlueGuy'}>
        <Image
          src={github}
          alt='github icon'
          className='translate-x-[10%] w-[20px] hover:scale-125 transition-all duration-300 aspect-square rounded-full'
        />
      </Link>
      <Link href={"https://www.linkedin.com/in/andres-camilo-velez/"}>
      <Image
        src={linkedin}
        alt='linkedin icon'
        className='translate-x-[10%] w-[20px] hover:scale-125 transition-all duration-300 aspect-square rounded-full'
      />      </Link>

            <Link href={'mailto:randombluemail@gmail.com'}>
      <Image
        src={mail}
        alt='mail icon'
        className='translate-x-[10%] w-[20px] hover:scale-125 transition-all duration-300 aspect-square rounded-full'
      />      </Link>

      <Link
        href={'mailto:randombluemail@gmail.com'}
        className='text-selected leading-none rotate-180  transition-all duration-500 [writing-mode:vertical-rl]'>
        randombluemail@gmail.com
      </Link>
      <figure className='bg-[#346596] h-[40px] w-[1.5px]' />
    </div>
  );
};

export default MicroContact;
